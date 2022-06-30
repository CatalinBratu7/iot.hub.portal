import { defineStore } from "pinia";
import WidgetsService from "../services/widgets.service";
import type { Widgets } from "../types";

export const useWidgetsStore = defineStore("widgets", {
  state: () => ({
    widgets: <Widgets>{},
  }),
  actions: {
    async getWidgets() {
      WidgetsService.getWidgets().then((widgets) => {
        this.widgets = widgets.data;
      });
    },
  },
});
