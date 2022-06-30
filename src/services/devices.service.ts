import axios from "axios";

async function getDevices() {
  return axios.get(`${import.meta.env.VITE_MOCK_API_KEY}/devices`);
}

export default {
  getDevices,
};
