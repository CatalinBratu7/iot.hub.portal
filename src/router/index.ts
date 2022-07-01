import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import AuthorizedLayout from "@/layouts/AuthorizedLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/DashboardView.vue"),
    meta: { layout: AuthorizedLayout },
  },
  {
    path: "/device/:id",
    name: "device",
    component: () => import("@/views/DeviceView.vue"),
    meta: { layout: AuthorizedLayout },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
