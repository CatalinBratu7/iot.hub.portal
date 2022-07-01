<template>
  <BaseCard class="bg-grey text-sm">
    <div class="flex flex-col gap-4">
      <div class="flex justify-between">
        <div class="font-medium text-3xl">Battery</div>
        <div class="flex gap-2 justify-between items-center align-bottom">
          <div class="font-medium">{{ `${batteryLevel}%` }}</div>
          <BatteryIcon :charge="batteryLevel" />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-2">
          <div>Version</div>
          <div>{{ devicesStore.device?.firmware_version || "0.0.0" }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div>Time Remaining</div>
          <div>{{ randomRemainingTime() }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div>Health</div>
          <div>{{ `${devicesStore.deviceBattery?.health || "0"}%` }}</div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { useDevicesStore } from "../stores/devices.store";

import BaseCard from "@/components/BaseCard.vue";
import BatteryIcon from "@/components/BatteryIcon.vue";
import { computed } from "vue";

const devicesStore = useDevicesStore();

const batteryLevel = computed(() =>
  Math.min(
    parseInt((devicesStore.deviceBattery?.current_level || 0) as string),
    100
  )
);

const randomRemainingTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  return `${hours} Hours, ${minutes} Minutes`;
};
</script>
