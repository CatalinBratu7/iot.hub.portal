<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div class="md:col-span-1">
      <StatusWidgets />
    </div>
    <div class="md:col-span-3">
      <div class="flex flex-col gap-8">
        <DeviceCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { onBeforeRouteLeave, useRoute } from "vue-router";
import { useDevicesStore } from "../stores/devices.store";

import StatusWidgets from "@/components/StatusWidgets.vue";
import DeviceCard from "@/components/DeviceCard.vue";

const route = useRoute();
const devicesStore = useDevicesStore();

onMounted(() => {
  devicesStore.getDevice(route.params.id as string);
});

onBeforeRouteLeave(() => {
  devicesStore.$patch({ device: {}, deviceBattery: {}, deviceSensors: [] });
});
</script>
