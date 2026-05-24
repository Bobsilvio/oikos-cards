#!/usr/bin/env node
/**
 * generate-manifest.mjs — Fase 8.7
 *
 * Scansiona cards/<id>/manifest.json e rigenera il manifest.json principale
 * del repo, in modo che autore e dashboard siano sempre allineati.
 *
 *   node tools/generate-manifest.mjs
 *
 * Da eseguire in CI / pre-commit hook così il manifest aggregato non resta
 * disallineato rispetto alle card singole.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

function fsKey(id) {
  return String(id).replace(/\//g, '__')
}

function readJson(path) {
  try { return JSON.parse(readFileSync(path, 'utf8')) } catch { return null }
}

function collectCards() {
  const cardsDir = join(ROOT, 'cards')
  if (!existsSync(cardsDir)) return []
  const entries = readdirSync(cardsDir).filter(name => {
    if (name.startsWith('_') || name.startsWith('.')) return false  // skip template/hidden
    try { return statSync(join(cardsDir, name)).isDirectory() } catch { return false }
  })

  const out = []
  for (const name of entries) {
    const dir = join(cardsDir, name)
    const mf = readJson(join(dir, 'manifest.json'))
    if (!mf?.id) {
      console.warn(`⚠  cards/${name}: manifest.json mancante o senza id, skip`)
      continue
    }
    const key = fsKey(mf.id)
    const distJs   = join(dir, 'dist', `${key}.js`)
    const distSet  = join(dir, 'dist', `${key}.settings.js`)
    const preview  = join(dir, 'preview.png')
    const thumb    = join(dir, 'preview-thumb.png')

    // Scansiona preview aggiuntive: preview-2.{png,gif}, preview-3.{png,gif}, …
    // Si ferma al primo "buco" nella numerazione.
    const previews = []
    if (existsSync(preview)) previews.push(`cards/${name}/preview.png`)
    for (let i = 2; i < 20; i++) {
      const png = join(dir, `preview-${i}.png`)
      const gif = join(dir, `preview-${i}.gif`)
      if (existsSync(png)) previews.push(`cards/${name}/preview-${i}.png`)
      else if (existsSync(gif)) previews.push(`cards/${name}/preview-${i}.gif`)
      else break
    }

    if (!existsSync(distJs)) {
      console.warn(`⚠  ${mf.id}: dist/${key}.js non trovato (hai buildato?)`)
    }

    out.push({
      id:          mf.id,
      name:        mf.name        ?? mf.id,
      version:     mf.version     ?? '0.0.0',
      author:      mf.author      ?? null,
      description: mf.description ?? '',
      sdkVersion:  mf.sdkVersion  ?? null,
      hasSettings: existsSync(distSet),
      path:        `cards/${name}`,
      entry:       `cards/${name}/dist/${key}.js`,
      settings:    existsSync(distSet) ? `cards/${name}/dist/${key}.settings.js` : null,
      manifest:    `cards/${name}/manifest.json`,
      preview:     existsSync(preview) ? `cards/${name}/preview.png` : null,
      previews:    previews.length > 0 ? previews : null,
      thumbnail:   existsSync(thumb)   ? `cards/${name}/preview-thumb.png` : null,
      tags:        mf.tags ?? [],
      package:     mf.package ?? null,
      tier:        mf.tier ?? 'free',
    })
  }
  return out.sort((a, b) => a.id.localeCompare(b.id))
}

function main() {
  const rootMfPath = join(ROOT, 'manifest.json')
  const existing = readJson(rootMfPath) ?? {}
  const cards = collectCards()

  const manifest = {
    repo:       existing.repo ?? 'oikos-cards',
    version:    existing.version ?? '0.1.0',
    sdkVersion: existing.sdkVersion ?? '1.0.0',
    updated:    new Date().toISOString().slice(0, 10),
    cards,
  }
  writeFileSync(rootMfPath, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`✓ manifest.json aggiornato: ${cards.length} card`)
}

main()
