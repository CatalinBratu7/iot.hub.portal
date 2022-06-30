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
