import axios from "axios";

async function getDevices() {
  return axios.get("/mocks/devices.json");
}

async function getDevice(id: string) {
  console.log("Retrieving device: " + id);
  return axios.get("/mocks/device.json");
}

async function getDeviceBatteryData(id: string) {
  console.log("Retrieving device battery data: " + id);
  return axios.get("/mocks/device-battery.json");
}

async function getDeviceSensorsData(id: string) {
  console.log("Retrieving device sensors data: " + id);
  return axios.get("/mocks/device-sensors.json");
}

export default {
  getDevices,
  getDevice,
  getDeviceBatteryData,
  getDeviceSensorsData,
};
