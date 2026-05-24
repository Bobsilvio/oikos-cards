const LS_KEY = 'oikos-card-cfg-vacuum'

export const VACUUM_DEFAULTS = {
  name: 'Dreame Vacuum',
  vacuumEntity:          'vacuum.ambrogio_2',
  cameraEntity:          'camera.ambrogio_map',
  batteryEntity:         'sensor.ambrogio_battery_level',
  stateEntity:           'sensor.ambrogio_state',
  statusEntity:          'sensor.ambrogio_status',
  chargingEntity:        'sensor.ambrogio_charging_status',
  currentRoomEntity:     'sensor.ambrogio_current_room',
  errorEntity:           'sensor.ambrogio_error',
  cleaningTimeEntity:    'sensor.ambrogio_cleaning_time',
  cleanedAreaEntity:     'sensor.ambrogio_cleaned_area',
  cleaningProgressEntity:'sensor.ambrogio_cleaning_progress',
  mainBrushEntity:       'sensor.ambrogio_main_brush_left',
  mainBrushDaysEntity:   'sensor.ambrogio_main_brush_time_left',
  sideBrushEntity:       'sensor.ambrogio_side_brush_left',
  sideBrushDaysEntity:   'sensor.ambrogio_side_brush_time_left',
  filterEntity:          'sensor.ambrogio_filter_left',
  filterDaysEntity:      'sensor.ambrogio_filter_time_left',
  sensorDirtyEntity:     'sensor.ambrogio_sensor_dirty_left',
  sensorDirtyDaysEntity: 'sensor.ambrogio_sensor_dirty_time_left',
  suctionLevelEntity:    'select.ambrogio_suction_level',
  cleaningModeEntity:    'select.ambrogio_cleaning_mode',
  waterTempEntity:       'select.ambrogio_water_temperature',
  dryingTimeEntity:      'select.ambrogio_drying_time',
  mopFreqEntity:         'select.ambrogio_mop_extend_frequency',
  cleaningRouteEntity:   'select.ambrogio_cleaning_route',
  autoEmptyEntity:       'sensor.ambrogio_auto_empty_status',
  selfWashEntity:        'sensor.ambrogio_self_wash_base_status',
  dustBagEntity:         'sensor.ambrogio_dust_bag_status',
  mopPadEntity:          'sensor.ambrogio_mop_pad',
  detergentEntity:       'sensor.ambrogio_detergent_status',
  dirtyWaterEntity:      'sensor.ambrogio_dirty_water_tank_status',
  hotWaterEntity:        'sensor.ambrogio_hot_water_status',
  lowWaterEntity:        'sensor.ambrogio_low_water_warning',
  dustCollectionEntity:  'sensor.ambrogio_dust_collection',
  drainageEntity:        'sensor.ambrogio_drainage_status',
  dndEntity:             'switch.ambrogio_dnd',
  carpetBoostEntity:     'switch.ambrogio_carpet_boost',
  selfCleanSwitchEntity: 'switch.ambrogio_self_clean',
  autoDryingEntity:      'switch.ambrogio_auto_drying',
  obstacleEntity:        'switch.ambrogio_obstacle_avoidance',
  resumeEntity:          'switch.ambrogio_resume_cleaning',
  totalAreaEntity:       'sensor.ambrogio_total_cleaned_area',
  countEntity:           'sensor.ambrogio_cleaning_count',
  totalTimeEntity:       'sensor.ambrogio_total_cleaning_time',
  firstCleanEntity:      'sensor.ambrogio_first_cleaning_date',
  rooms: [
    { id: 9, name: 'Camera da Letto' },
    { id: 1, name: 'Bagno Grande'    },
    { id: 2, name: 'Cameretta piccola'},
    { id: 3, name: 'Cameretta Grande' },
    { id: 6, name: 'Bagno Piccolo'   },
    { id: 5, name: 'Corridoio'       },
    { id: 7, name: 'Cucina'          },
    { id: 8, name: 'Salone'          },
  ],
}

export function getVacuumConfig() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) return { ...VACUUM_DEFAULTS, ...JSON.parse(raw) }
  } catch {}
  return { ...VACUUM_DEFAULTS }
}

export function saveVacuumConfig(cfg) {
  localStorage.setItem(LS_KEY, JSON.stringify(cfg))
}
