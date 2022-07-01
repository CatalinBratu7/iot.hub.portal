<template>
  <DeviceSensorCard
    header="Temperature"
    :level="temperatureLevel"
    icon="temperature.svg"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDevicesStore } from "../stores/devices.store";
import { mostRecentRead } from "../helpers";

import DeviceSensorCard from "./DeviceSensorCard.vue";

const devicesStore = useDevicesStore();

const temperatureSensor = computed(() =>
  devicesStore.deviceSensors.find(
    (sensor) => sensor.sensor_type === "temperature"
  )
);

const temperatureLevel = computed(() => {
  if (!temperatureSensor.value?.levels) {
    return "0°C";
  }
  return `${mostRecentRead(temperatureSensor.value?.levels).value}°C`;
});
</script>
