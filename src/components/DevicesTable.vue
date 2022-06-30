<template>
  <BaseTable>
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
        class="bg-grey"
        v-for="(device, index) in devicesStore.formattedDevices"
        :key="`devices_${index}`"
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
          <template v-else>
            {{ device[column] }}
          </template>
        </td>
      </tr>
    </template>
  </BaseTable>
</template>
<script setup lang="ts">
import BaseTable from "@/components/BaseTable.vue";
import BatteryIcon from "./BatteryIcon.vue";
import { useDevicesStore } from "../stores/devices.store";

const headers = ["Name", "Charge", "Version", "Status"];
const columns = ["name", "charge", "firmware_version", "active"];

const devicesStore = useDevicesStore();
devicesStore.getDevices();
</script>
