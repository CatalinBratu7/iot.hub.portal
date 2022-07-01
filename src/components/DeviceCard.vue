<template>
  <BaseCard class="bg-grey text-sm">
    <div class="flex flex-col sm:flex-row justify-between">
      <div class="flex flex-col justify-between flex-1 gap-4">
        <div class="font-medium text-3xl">
          {{ devicesStore.device?.name || "-" }}
        </div>
        <div class="grid grid-cols-2">
          <div>Status</div>
          <div class="flex gap-2 items-center">
            <div>{{ devicesStore.device?.active ? "online" : "offline" }}</div>
            <CheckIcon :active="devicesStore.device?.active" />
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div>Version</div>
          <div>{{ devicesStore.device?.firmware_version || "0.0.0" }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div>Serial</div>
          <div class="break-all">
            {{ devicesStore.device?.serial_number || "-" }}
          </div>
        </div>
      </div>
      <div class="flex flex-1 justify-center sm:justify-end">
        <img
          class="w-32 h-32"
          :src="getDeviceImage(devicesStore.device?.image)"
          alt="device"
        />
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { useDevicesStore } from "../stores/devices.store";

import BaseCard from "@/components/BaseCard.vue";
import CheckIcon from "@/components/CheckIcon.vue";

const devicesStore = useDevicesStore();

const getDeviceImage = (picture = "device-1.png") => {
  return new URL(`../assets/images/${picture}`, import.meta.url).href;
};
</script>
