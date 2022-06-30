import { defineStore } from "pinia";
import WidgetsService from "../services/widgets.service.js";
import type { Widgets } from "../types.js";

export const useWidgetsStore = defineStore("widgets", {
  state: () => ({
    widgets: <Widgets>{},
  }),
  actions: {
    async getWidgets() {
      WidgetsService.getWidgets().then((response) => {
        this.widgets = response.data;
      });
    },
  },
});
