<template>
  <DeviceSensorCard
    header="Humidity"
    :level="humidityLevel"
    icon="humidity.svg"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDevicesStore } from "../stores/devices.store";
import { mostRecentRead } from "../helpers";

import DeviceSensorCard from "./DeviceSensorCard.vue";

const devicesStore = useDevicesStore();

const humiditySensor = computed(() =>
  devicesStore.deviceSensors.find((sensor) => sensor.sensor_type === "humidity")
);

const humidityLevel = computed(() => {
  if (!humiditySensor.value?.levels) {
    return "0%";
  }
  return `${mostRecentRead(humiditySensor.value?.levels).value}%`;
});
</script>
