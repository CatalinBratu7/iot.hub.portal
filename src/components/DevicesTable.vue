<template>
  <div class="flex flex-col gap-8">
    <BaseCard class="bg-grey">
      <div class="flex justify-between">
        <div class="font-medium text-3xl">Devices</div>
        <button
          class="bg-green rounded px-4 py-2 text-center inline-flex items-center hover:contrast-125"
        >
          <img class="h-5 w-5 mr-4" src="@/assets/icons/add.svg" />
          <span class="text-black">Create</span>
        </button>
      </div>
    </BaseCard>
    <BaseTable v-if="devicesStore.formattedDevices.length > 0">
      <template #header>
        <tr>
          <template
            v-for="(header, index) in headers"
            :key="`devices_th_${index}`"
          >
            <th class="border border-blue-dark px-6 py-3">
              {{ header }}
            </th>
          </template>
        </tr>
      </template>
      <template #body>
        <tr
          class="bg-grey hover:contrast-125 cursor-pointer"
          v-for="(device, index) in devicesStore.formattedDevices"
          :key="`devices_${index}`"
          @click="$router.push({ name: 'device', params: { id: device.id } })"
        >
          <td
            v-for="(column, index) in columns"
            :key="`devices_td_${index}`"
            class="border border-blue-dark px-6 py-4"
          >
            <template v-if="column === 'charge'">
              <div
                class="flex gap-2 md:gap-0 justify-between items-center text-center"
              >
                {{ `${device.charge}%` }}
                <BatteryIcon :charge="device.charge" />
              </div>
            </template>
            <template v-else-if="column === 'active'">
              <div
                class="flex gap-2 md:gap-0 justify-between items-center text-center"
              >
                {{ device.active ? "online" : "offline" }}
                <CheckIcon :active="device.active" />
              </div>
            </template>
            <template v-else>
              {{ getDevicePropertyByKey(device, column) }}
            </template>
          </td>
        </tr>
      </template>
    </BaseTable>
    <div v-else>Devices are still loading...</div>
  </div>
</template>
<script setup lang="ts">
import { useDevicesStore } from "../stores/devices.store";
import type { Device } from "../types";

import BaseCard from "@/components/BaseCard.vue";
import BaseTable from "@/components/BaseTable.vue";
import BatteryIcon from "@/components/BatteryIcon.vue";
import CheckIcon from "@/components/CheckIcon.vue";

const headers = ["Name", "Charge", "Version", "Status"];
const columns = ["name", "charge", "firmware_version", "active"];

const devicesStore = useDevicesStore();
devicesStore.getDevices();

const getDevicePropertyByKey = (device: Device, key: string) => {
  return device[key as keyof typeof device];
};
</script>
