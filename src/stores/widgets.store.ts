import { defineStore } from "pinia";
import WidgetsService from "../services/widgets.service";
import type { Widgets } from "../types";

export const useWidgetsStore = defineStore("widgets", {
  state: () => ({
    widgets: <Widgets>{},
  }),
  actions: {
    async getWidgets() {
      const response = await WidgetsService.getWidgets();
      this.widgets = response.data;
    },
  },
});
