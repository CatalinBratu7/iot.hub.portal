import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Default from "@/layouts/Default.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: { layout: Default },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
