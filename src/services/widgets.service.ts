import axios from "axios";

async function getWidgets() {
  return axios.get(`${import.meta.env.VITE_MOCK_API_KEY}/widgets`);
}

export default {
  getWidgets,
};
