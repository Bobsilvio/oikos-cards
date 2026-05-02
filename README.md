# oikos-cards

Catalogo **ufficiale** delle card community per la dashboard
[**Oikos SilvioSmart**](https://github.com/Bobsilvio/oikos-addon).

Questo repo contiene le card mantenute direttamente dal team Oikos. È
preconfigurato come sorgente nello Store della dashboard:

> **Store → Comunità → JAVA** → `https://github.com/Bobsilvio/oikos-cards`

Ogni release pubblica i bundle ESM pronti all'uso (CI in
`.github/workflows/publish.yml`).

---

## ✋ Vuoi creare una tua card?

**Non clonare questo repo.** Usa lo starter dedicato:

> 👉 **[github.com/Bobsilvio/oikos-card-starter](https://github.com/Bobsilvio/oikos-card-starter)**

Lo starter contiene:
- template `cards/my-card/` pronto da modificare
- 3 esempi commentati (hello world, sensor, light toggle)
- documentazione passo-passo (`docs/`)
- skill per agenti AI (`SKILL.md`)
- comando `npm run build:my` → ZIP installabile

---

## Struttura del repo (per chi mantiene il catalogo ufficiale)

```
cards/
  <card-id>/
    manifest.json   ← metadati della card
    src/Card.jsx    ← sorgente
    dist/           ← bundle prodotto da build-card.mjs
    preview.png     ← opzionale, anteprima nello Store (3:2, max 600×400)
manifest.json       ← aggregato (generato da generate-manifest.mjs)
tools/              ← vite plugin SDK, build, publish, manifest
```

## Comandi (catalogo ufficiale)

```bash
npm ci                              # installa deps (Vite, plugin React)
npm run build cards/<id>            # build singola card
npm run build:all                   # build tutte + manifest aggregato
npm run manifest                    # solo rigenerazione manifest aggregato
./tools/publish-cards.sh --tag v1.0 # build + manifest + tag git
```

## Aggiungere una card al catalogo ufficiale

> Per card **personali / community**, vai allo
> [starter](https://github.com/Bobsilvio/oikos-card-starter) — è pensato
> per quello.

Una card finisce in questo repo solo se è mantenuta dal team Oikos. La
procedura è:

1. Sviluppa la card nello starter (workflow consigliato)
2. Apri PR copiando `cards/<id>/` qui dentro
3. La CI buildera e pubblichera al prossimo tag `v*`

## Policy

- `id` card: `^[a-z0-9][a-z0-9_-]{0,63}$`, opzionalmente namespaced
  `owner/card`. Lo slash nel filesystem diventa `__`.
- `sdkVersion`: semver range, es. `^1.0.0`. Versioni incompatibili
  vengono rifiutate dal validator dello Store.
- `configVersion`: incrementare in breaking change di schema config, con
  `migrate(old, fromVersion)` nella card.
- Niente fetch verso host esterni non dichiarati, niente accesso a
  `auth.access_token`, niente CSS globale.

## Skill per agenti AI

Lo skill ufficiale è in `SKILL.md`. Puoi linkarlo a Claude / agenti per
abilitare l'assistenza alla creazione di card. Lo starter ne ha una
copia adattata al workflow standalone.

> **Nota:** `SKILL-HTML.md` e `SKILL-JSON.md` (in questo repo) coprono
> formati alternativi (HTML iframe, Smart Card JSON). Stanno qui per
> compatibilità storica — la versione mantenuta è nello
> [starter](https://github.com/Bobsilvio/oikos-card-starter/tree/main/docs).

## Licenza

MIT — vedi `LICENSE`.
