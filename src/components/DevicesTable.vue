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
            <div class="w-full rounded border relative">
              <div
                class="bg-green text-xs font-bold flex items-center justify-center py-3 px-2"
                :style="`width: ${device.charge}%`"
              >
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  {{ `${device.charge}%` }}
                </div>
              </div>
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
import { useDevicesStore } from "../stores/devices.store";

const headers = ["Name", "Charge", "Version", "Status"];
const columns = ["name", "charge", "firmware_version", "active"];

const devicesStore = useDevicesStore();
devicesStore.getDevices();
</script>
