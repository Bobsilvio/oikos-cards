import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Trash2 } from 'lucide-react'
import { EntityField } from '@oikos/sdk'
import { getVacuumConfig, saveVacuumConfig } from './vacuumStore'

const GROUPS = [
  {
    title: 'Principale',
    fields: [
      { key: 'name',              label: 'Nome',                     mono: false, entity: false },
      { key: 'vacuumEntity',      label: 'Entità vacuum (comandi)'               },
      { key: 'cameraEntity',      label: 'Camera mappa (opzionale)'              },
      { key: 'batteryEntity',     label: 'Batteria'                              },
      { key: 'stateEntity',       label: 'Stato dettagliato'                     },
      { key: 'statusEntity',      label: 'Status'                                },
      { key: 'chargingEntity',    label: 'Stato ricarica'                        },
      { key: 'currentRoomEntity', label: 'Stanza corrente'                       },
      { key: 'errorEntity',       label: 'Errore'                                },
    ],
  },
  {
    title: 'Sessione corrente',
    fields: [
      { key: 'cleaningTimeEntity',     label: 'Tempo pulizia' },
      { key: 'cleanedAreaEntity',      label: 'Area pulita'   },
      { key: 'cleaningProgressEntity', label: 'Progresso (%)'  },
    ],
  },
  {
    title: 'Consumabili',
    fields: [
      { key: 'mainBrushEntity',       label: 'Sp. principale (%)' },
      { key: 'mainBrushDaysEntity',   label: 'Sp. principale (gg)' },
      { key: 'sideBrushEntity',       label: 'Sp. laterale (%)'   },
      { key: 'sideBrushDaysEntity',   label: 'Sp. laterale (gg)'  },
      { key: 'filterEntity',          label: 'Filtro (%)'         },
      { key: 'filterDaysEntity',      label: 'Filtro (gg)'        },
      { key: 'sensorDirtyEntity',     label: 'Sensori (%)'        },
      { key: 'sensorDirtyDaysEntity', label: 'Sensori (gg)'       },
    ],
  },
  {
    title: 'Modalità operative',
    fields: [
      { key: 'suctionLevelEntity',  label: 'Aspirazione'  },
      { key: 'cleaningModeEntity',  label: 'Modalità'     },
      { key: 'waterTempEntity',     label: 'Temperatura'  },
      { key: 'dryingTimeEntity',    label: 'Asciugatura'  },
      { key: 'mopFreqEntity',       label: 'Freq. mop'    },
      { key: 'cleaningRouteEntity', label: 'Percorso'     },
    ],
  },
  {
    title: 'Stato stazione',
    fields: [
      { key: 'autoEmptyEntity',      label: 'Vuotatura auto'    },
      { key: 'selfWashEntity',       label: 'Lavaggio base'     },
      { key: 'drainageEntity',       label: 'Scarico'           },
      { key: 'dustBagEntity',        label: 'Sacchetto'         },
      { key: 'mopPadEntity',         label: 'Mop pad'           },
      { key: 'detergentEntity',      label: 'Detergente'        },
      { key: 'dirtyWaterEntity',     label: 'Acqua sporca'      },
      { key: 'hotWaterEntity',       label: 'Acqua calda'       },
      { key: 'lowWaterEntity',       label: 'Livello acqua'     },
      { key: 'dustCollectionEntity', label: 'Raccolta polvere'  },
    ],
  },
  {
    title: 'Switch rapidi',
    fields: [
      { key: 'dndEntity',             label: 'Non disturbare' },
      { key: 'carpetBoostEntity',     label: 'Boost tappeto'  },
      { key: 'selfCleanSwitchEntity', label: 'Auto-pulizia'   },
      { key: 'autoDryingEntity',      label: 'Auto-asciuga'   },
      { key: 'obstacleEntity',        label: 'Evita ostacoli' },
      { key: 'resumeEntity',          label: 'Riprendi auto'  },
    ],
  },
  {
    title: 'Statistiche totali',
    fields: [
      { key: 'totalAreaEntity',  label: 'Area totale'   },
      { key: 'countEntity',      label: 'N° pulizie'    },
      { key: 'totalTimeEntity',  label: 'Minuti totali' },
      { key: 'firstCleanEntity', label: 'Prima pulizia' },
    ],
  },
]

function SaveButton({ saved, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '7px 14px', borderRadius: 8, alignSelf: 'flex-start',
        fontSize: 12, fontWeight: 700, cursor: 'pointer',
        border: `1px solid ${saved ? 'var(--green-border)' : 'var(--amber-border)'}`,
        background: saved ? 'var(--green-light)' : 'var(--amber-light)',
        color: saved ? 'var(--green)' : 'var(--amber)',
        transition: 'all .2s',
      }}
    >
      {saved ? '✓ Salvato — ricarica per applicare' : 'Salva entità'}
    </button>
  )
}

function RoomsEditor({ rooms, onChange, dark }) {
  const update = (index, field, value) => {
    const next = rooms.map((r, i) => i === index ? { ...r, [field]: field === 'id' ? parseInt(value) || 0 : value } : r)
    onChange(next)
  }
  const remove = (index) => onChange(rooms.filter((_, i) => i !== index))
  const add    = () => onChange([...rooms, { id: '', name: '' }])

  const inputStyle = (mono) => ({
    background: 'var(--bg-secondary, var(--bg-primary))',
    border: '1px solid var(--border-medium)', borderRadius: 7,
    padding: '6px 8px', fontSize: 12, color: 'var(--text-primary)',
    fontFamily: mono ? 'JetBrains Mono, Fira Code, monospace' : 'inherit',
    outline: 'none', width: '100%',
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr 28px', gap: 6 }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.4px' }}>ID HA</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.4px' }}>Nome</span>
        <span/>
      </div>

      <AnimatePresence initial={false}>
        {rooms.map((room, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: .18 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr 28px', gap: 6, alignItems: 'center' }}>
              <input
                type="number" value={room.id} placeholder="ID"
                onChange={e => update(i, 'id', e.target.value)}
                style={inputStyle(true)}
                onFocus={e => e.target.style.borderColor = 'var(--amber-border)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-medium)'}
              />
              <input
                value={room.name} placeholder="Nome stanza"
                onChange={e => update(i, 'name', e.target.value)}
                style={inputStyle(false)}
                onFocus={e => e.target.style.borderColor = 'var(--amber-border)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-medium)'}
              />
              <button
                onClick={() => remove(i)}
                style={{
                  width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'transparent', border: '1px solid transparent',
                  color: 'var(--text-muted)', cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--red)'; e.currentTarget.style.background = 'var(--red-light)'; e.currentTarget.style.borderColor = 'var(--red-border)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent' }}
              >
                <Trash2 size={13}/>
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <button onClick={add} style={{
        display: 'flex', alignItems: 'center', gap: 5,
        padding: '7px 12px', borderRadius: 8, alignSelf: 'flex-start',
        fontSize: 12, fontWeight: 600,
        border: '1px solid var(--border-medium)', background: 'transparent',
        color: 'var(--text-muted)', cursor: 'pointer',
      }}>
        <Plus size={13}/> Aggiungi stanza
      </button>

      <p style={{ fontSize: 10, color: 'var(--text-muted)', lineHeight: 1.5, marginTop: 2 }}>
        L'ID HA si trova nelle entità <code style={{ fontFamily: 'monospace' }}>select.*_room_N_name</code> dove N è il numero.
        Integrazione Tasshack: usa <code style={{ fontFamily: 'monospace' }}>vacuum.send_command</code> → <code style={{ fontFamily: 'monospace' }}>clean_segment</code>.
      </p>
    </div>
  )
}

export default function VacuumSettings({ dark }) {
  const [cfg, setCfg] = useState(getVacuumConfig)
  const [saved, setSaved] = useState(false)

  const set = (key, value) => { setCfg(c => ({ ...c, [key]: value })); setSaved(false) }
  const entitySetConfig = fn => { setCfg(fn); setSaved(false) }

  const handleSave = () => {
    saveVacuumConfig(cfg)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  const inputStyle = (mono) => ({
    background: 'var(--bg-secondary, var(--bg-primary))',
    border: '1px solid var(--border-medium)', borderRadius: 8,
    padding: '6px 10px', fontSize: 12, color: 'var(--text-primary)',
    fontFamily: mono ? 'JetBrains Mono, Fira Code, monospace' : 'inherit',
    outline: 'none', width: '100%',
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {GROUPS.map(({ title, fields }) => (
        <div key={title}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '.6px', color: 'var(--text-muted)', marginBottom: 8 }}>
            {title}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {fields.map(({ key, label, mono = true, entity = true }) => (
              <div key={key}>
                {entity ? (
                  <EntityField label={label} field={key} config={cfg} setConfig={entitySetConfig}/>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)',
                      textTransform: 'uppercase', letterSpacing: '.4px' }}>{label}</label>
                    <input
                      value={cfg[key] || ''}
                      onChange={e => { set(key, e.target.value); setSaved(false) }}
                      spellCheck={false}
                      style={inputStyle(mono)}
                      onFocus={e => e.target.style.borderColor = 'var(--amber-border)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-medium)'}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div>
        <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '.6px', color: 'var(--text-muted)', marginBottom: 8 }}>
          Stanze
        </div>
        <RoomsEditor
          rooms={cfg.rooms || []}
          onChange={rooms => { setCfg(c => ({ ...c, rooms })); setSaved(false) }}
          dark={dark}
        />
      </div>

      <SaveButton onClick={handleSave} saved={saved}/>
    </div>
  )
}
