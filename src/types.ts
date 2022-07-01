export type ObjectValue = {
  value: string | number;
};

export type Widgets = {
  active_devices: ObjectValue;
  energy: ObjectValue;
  health: ObjectValue;
};

export type Device = {
  id: string;
  name: string;
  serial_number: string;
  firmware_version: string;
  image: string;
  active: boolean;
};

export type Devices = Array<Device>;

export type SensorValue = {
  created_at: string;
  value: number;
};

export type DeviceBattery = {
  charges: Array<SensorValue>;
  current_level: string | number;
  health: number;
};

export type Sensor = {
  id: string;
  title: string;
  sensor_type: string;
  levels: Array<SensorValue>;
};

export type DeviceSensors = Array<Sensor>;
