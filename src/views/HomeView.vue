<template>
  <div class="p-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <div class="flex flex-col gap-8">
            <StatusCard
              class="bg-cyan"
              header="Active Devices"
              :status="widgetsStore.widgets?.active_devices?.value || '0'"
            >
              <template #icon>
                <img class="h-16 w-16" src="@/assets/icons/stats.svg" />
              </template>
            </StatusCard>
            <StatusCard
              class="bg-green"
              header="System Health"
              :status="widgetsStore.widgets?.health?.value || 'loading'"
            >
              <template #icon>
                <img class="h-16 w-16" src="@/assets/icons/health.svg" />
              </template>
            </StatusCard>
            <StatusCard
              class="bg-yellow"
              header="Energy Levels"
              :status="`${widgetsStore.widgets?.energy?.value || '0'} Watts`"
            >
              <template #icon>
                <img class="h-16 w-16" src="@/assets/icons/lightning.svg" />
              </template>
            </StatusCard>
          </div>
        </div>
        <div class="md:col-span-3">
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
            <div class="sm:rounded-lg overflow-x-auto">
              <table
                class="border-collapse w-full text-sm font-medium text-left"
              >
                <thead class="text-black bg-white">
                  <tr>
                    <th scope="col" class="border border-blue-dark px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="border border-blue-dark px-6 py-3">
                      Charge
                    </th>
                    <th scope="col" class="border border-blue-dark px-6 py-3">
                      Version
                    </th>
                    <th scope="col" class="border border-blue-dark px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-grey">
                    <td class="border border-blue-dark px-6 py-4">Device x1</td>
                    <td class="border border-blue-dark px-6 py-4">10%</td>
                    <td class="border border-blue-dark px-6 py-4">1.0.1</td>
                    <td class="border border-blue-dark px-6 py-4">Online</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import StatusCard from "@/components/StatusCard.vue";
import BaseCard from "@/components/BaseCard.vue";
import { useWidgetsStore } from "../stores/widgets.store.js";

const widgetsStore = useWidgetsStore();
widgetsStore.getWidgets();
</script>
