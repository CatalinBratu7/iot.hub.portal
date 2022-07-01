<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div class="md:col-span-1">
      <StatusWidgets />
    </div>
    <div class="md:col-span-3">[Device Details]</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { onBeforeRouteLeave, useRoute } from "vue-router";
import { useDevicesStore } from "../stores/devices.store";

import StatusWidgets from "@/components/StatusWidgets.vue";

const route = useRoute();
const devicesStore = useDevicesStore();

onMounted(() => {
  devicesStore.getDevice(route.params.id as string);
});

onBeforeRouteLeave(() => {
  devicesStore.$patch({ device: {} });
});
</script>
