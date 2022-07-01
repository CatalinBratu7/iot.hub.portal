import { defineStore } from "pinia";
import DevicesService from "../services/devices.service.js";
import type { Device, Devices, DeviceSensors } from "../types.js";
import { DeviceBattery } from "../types.js";

export const useDevicesStore = defineStore("devices", {
  state: () => ({
    devices: <Devices>[],
    device: <Device>{},
    deviceBattery: <DeviceBattery>{},
    deviceSensors: <DeviceSensors>[],
  }),
  getters: {
    formattedDevices: (state) =>
      state.devices.map((device) => ({
        ...device,
        charge: randomBatteryPercentage(),
      })),
  },
  actions: {
    async getDevices() {
      DevicesService.getDevices().then((response) => {
        this.devices = response.data;
      });
    },
    async getDevice(id: string) {
      DevicesService.getDevice(id).then((response) => {
        this.device = response.data;
        DevicesService.getDeviceBatteryData(id).then((response) => {
          this.deviceBattery = response.data;
        });
        DevicesService.getDeviceSensorsData(id).then((response) => {
          this.deviceSensors = response.data;
        });
      });
    },
  },
});

const randomBatteryPercentage = () => {
  return Math.floor(Math.random() * 100);
};
