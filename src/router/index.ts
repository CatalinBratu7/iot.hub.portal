import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import AuthorizedLayout from "@/layouts/AuthorizedLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: { layout: AuthorizedLayout },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
