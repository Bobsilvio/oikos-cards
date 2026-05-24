#!/usr/bin/env node
/**
 * generate-thumbnails.mjs — Fase 8.6
 *
 * Per ogni card con `preview.png` produce `preview-thumb.png` 200×125
 * (~15 KB) pensato per la lista Store. Il manifest generato da
 * generate-manifest.mjs espone sia `preview` che `thumbnail` se presenti.
 *
 * Uso:
 *   node tools/generate-thumbnails.mjs
 *   node tools/generate-thumbnails.mjs --force   # rigenera tutto
 *
 * Richiede `sharp` come devDependency. Se non installata, log esplicativo
 * e exit 0 — non blocca il build.
 */
import { readdirSync, existsSync, statSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const FORCE = process.argv.includes('--force')

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.warn('⚠  `sharp` non installato. `npm i -D sharp` per abilitare le thumbnail.')
  process.exit(0)
}

function cardDirs() {
  const dir = join(ROOT, 'cards')
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter(name => !name.startsWith('_') && !name.startsWith('.'))
    .map(name => join(dir, name))
    .filter(p => { try { return statSync(p).isDirectory() } catch { return false } })
}

let generated = 0
let skipped = 0

for (const d of cardDirs()) {
  const src = join(d, 'preview.png')
  const dst = join(d, 'preview-thumb.png')
  if (!existsSync(src)) { skipped++; continue }
  if (existsSync(dst) && !FORCE) {
    const s = statSync(src).mtimeMs
    const t = statSync(dst).mtimeMs
    if (t >= s) { skipped++; continue }
  }
  try {
    await sharp(src).resize(200, 125, { fit: 'cover' }).png({ quality: 80 }).toFile(dst)
    generated++
    console.log(`✓ ${d.replace(ROOT + '/', '')}/preview-thumb.png`)
  } catch (e) {
    console.warn(`⚠  ${d}: ${e.message}`)
  }
}

console.log(`${generated} thumbnail generate, ${skipped} skippate`)
