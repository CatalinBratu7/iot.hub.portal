<template>
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
      class="bg-green capitalize"
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
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useWidgetsStore } from "../stores/widgets.store.js";

import StatusCard from "@/components/StatusCard.vue";

const widgetsStore = useWidgetsStore();

onMounted(() => {
  widgetsStore.getWidgets();
});
</script>
