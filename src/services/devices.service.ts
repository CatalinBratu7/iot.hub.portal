import axios from "axios";

async function getDevices() {
  return axios.get(`${import.meta.env.VITE_MOCK_API_KEY}/devices`);
}

async function getDevice(id: string) {
  return axios.get(`${import.meta.env.VITE_MOCK_API_KEY}/devices/${id}`);
}

export default {
  getDevices,
  getDevice,
};
