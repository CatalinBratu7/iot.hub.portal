import axios from "axios";

async function getWidgets() {
  return axios.get("/mocks/widgets.json");
}

export default {
  getWidgets,
};
