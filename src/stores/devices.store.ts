import { defineStore } from "pinia";
import DevicesService from "../services/devices.service";
import { randomNumber } from "../helpers";
import type { Device, Devices, DeviceSensors, DeviceBattery } from "../types";

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
        charge: randomNumber(),
      })),
  },
  actions: {
    async getDevices() {
      const response = await DevicesService.getDevices();
      this.devices = response.data;
    },
    async getDevice(id: string) {
      const response = await DevicesService.getDevice(id);
      this.device = response.data;

      await Promise.all([
        this.getDeviceBatteryData(id),
        this.getDeviceSensorsData(id),
      ]);
    },
    async getDeviceBatteryData(id: string) {
      const response = await DevicesService.getDeviceBatteryData(id);
      this.deviceBattery = response.data;
    },
    async getDeviceSensorsData(id: string) {
      const response = await DevicesService.getDeviceSensorsData(id);
      this.deviceSensors = response.data;
    },
  },
});
