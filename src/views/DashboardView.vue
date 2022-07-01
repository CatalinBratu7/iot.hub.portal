<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div class="md:col-span-1">
      <StatusWidgets />
    </div>
    <div class="md:col-span-3">
      <DevicesTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import StatusWidgets from "@/components/StatusWidgets.vue";
import DevicesTable from "@/components/DevicesTable.vue";
</script>
