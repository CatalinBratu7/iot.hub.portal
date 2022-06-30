<template>
  <div class="p-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="md:col-span-1">
          <div class="flex flex-col gap-8">
            <StatusCard class="bg-cyan" header="Active Devices" status="32">
              <template #icon>
                <img class="h-16 w-16" src="@/assets/icons/stats.svg" />
              </template>
            </StatusCard>
            <StatusCard
              class="bg-green-cyan"
              header="System Health"
              status="Ok"
            >
              <template #icon>
                <img class="h-16 w-16" src="@/assets/icons/health.svg" />
              </template>
            </StatusCard>
            <StatusCard
              class="bg-yellow"
              header="Energy Levels"
              status="204 Watts"
            >
              <template #icon>
                <img class="h-16 w-16" src="@/assets/icons/lightning.svg" />
              </template>
            </StatusCard>
          </div>
        </div>
        <div class="md:col-span-3">3/4</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import StatusCard from "@/components/StatusCard.vue";
</script>
