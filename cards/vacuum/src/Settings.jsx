import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Trash2 } from 'lucide-react'
import { EntityField, useT } from '@oikos/sdk'
import { getVacuumConfig, saveVacuumConfig } from './vacuumStore'

// Group definitions use translation keys instead of hardcoded strings
const GROUP_KEYS = [
  {
    titleKey: 'main',
    fields: [
      { key: 'name',              mono: false, entity: false },
      { key: 'vacuumEntity'      },
      { key: 'cameraEntity'      },
      { key: 'batteryEntity'     },
      { key: 'stateEntity'       },
      { key: 'statusEntity'      },
      { key: 'chargingEntity'    },
      { key: 'currentRoomEntity' },
      { key: 'errorEntity'       },
    ],
  },
  {
    titleKey: 'session',
    fields: [
      { key: 'cleaningTimeEntity'     },
      { key: 'cleanedAreaEntity'      },
      { key: 'cleaningProgressEntity' },
    ],
  },
  {
    titleKey: 'consumables',
    fields: [
      { key: 'mainBrushEntity'       },
      { key: 'mainBrushDaysEntity'   },
      { key: 'sideBrushEntity'       },
      { key: 'sideBrushDaysEntity'   },
      { key: 'filterEntity'          },
      { key: 'filterDaysEntity'      },
      { key: 'sensorDirtyEntity'     },
      { key: 'sensorDirtyDaysEntity' },
    ],
  },
  {
    titleKey: 'modes',
    fields: [
      { key: 'suctionLevelEntity'  },
      { key: 'cleaningModeEntity'  },
      { key: 'waterTempEntity'     },
      { key: 'dryingTimeEntity'    },
      { key: 'mopFreqEntity'       },
      { key: 'cleaningRouteEntity' },
    ],
  },
  {
    titleKey: 'station',
    fields: [
      { key: 'autoEmptyEntity'      },
      { key: 'selfWashEntity'       },
      { key: 'drainageEntity'       },
      { key: 'dustBagEntity'        },
      { key: 'mopPadEntity'         },
      { key: 'detergentEntity'      },
      { key: 'dirtyWaterEntity'     },
      { key: 'hotWaterEntity'       },
      { key: 'lowWaterEntity'       },
      { key: 'dustCollectionEntity' },
    ],
  },
  {
    titleKey: 'switches',
    fields: [
      { key: 'dndEntity'             },
      { key: 'carpetBoostEntity'     },
      { key: 'selfCleanSwitchEntity' },
      { key: 'autoDryingEntity'      },
      { key: 'obstacleEntity'        },
      { key: 'resumeEntity'          },
    ],
  },
  {
    titleKey: 'totalStats',
    fields: [
      { key: 'totalAreaEntity'  },
      { key: 'countEntity'      },
      { key: 'totalTimeEntity'  },
      { key: 'firstCleanEntity' },
    ],
  },
]

function SaveButton({ saved, onClick, saveLabel, savedLabel }) {
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
      {saved ? savedLabel : saveLabel}
    </button>
  )
}

function RoomsEditor({ rooms, onChange, dark, idLabel, nameLabel, idPlaceholder, namePlaceholder, addLabel, hintText }) {
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
        <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.4px' }}>{idLabel}</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.4px' }}>{nameLabel}</span>
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
                type="number" value={room.id} placeholder={idPlaceholder}
                onChange={e => update(i, 'id', e.target.value)}
                style={inputStyle(true)}
                onFocus={e => e.target.style.borderColor = 'var(--amber-border)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-medium)'}
              />
              <input
                value={room.name} placeholder={namePlaceholder}
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
        <Plus size={13}/> {addLabel}
      </button>

      <p style={{ fontSize: 10, color: 'var(--text-muted)', lineHeight: 1.5, marginTop: 2 }}>
        {hintText}
      </p>
    </div>
  )
}

export default function VacuumSettings({ dark }) {
  const [cfg, setCfg] = useState(getVacuumConfig)
  const [saved, setSaved] = useState(false)
  const { t } = useT('card-vacuum')

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
      {GROUP_KEYS.map(({ titleKey, fields }) => (
        <div key={titleKey}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '.6px', color: 'var(--text-muted)', marginBottom: 8 }}>
            {t(`settings.groups.${titleKey}`)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {fields.map(({ key, mono = true, entity = true }) => (
              <div key={key}>
                {entity ? (
                  <EntityField label={t(`settings.fields.${key}`)} field={key} config={cfg} setConfig={entitySetConfig}/>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)',
                      textTransform: 'uppercase', letterSpacing: '.4px' }}>{t(`settings.fields.${key}`)}</label>
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
          {t('settings.groups.rooms')}
        </div>
        <RoomsEditor
          rooms={cfg.rooms || []}
          onChange={rooms => { setCfg(c => ({ ...c, rooms })); setSaved(false) }}
          dark={dark}
          idLabel={t('settings.roomIdLabel')}
          nameLabel={t('settings.roomNameLabel')}
          idPlaceholder={t('settings.roomIdPlaceholder')}
          namePlaceholder={t('settings.roomNamePlaceholder')}
          addLabel={t('settings.addRoom')}
          hintText={t('settings.roomsHint')}
        />
      </div>

      <SaveButton onClick={handleSave} saved={saved} saveLabel={t('settings.saveButton')} savedLabel={t('settings.savedButton')}/>
    </div>
  )
}
