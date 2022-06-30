<template>
  <BaseCard>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-1 m-auto">
        <img class="h-16 w-16" src="@/assets/icons/stats.svg" />
      </div>
      <div class="col-span-2 font-bold text-black">
        <div class="text-xl">Active Devices</div>
        <div class="text-4xl">32</div>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";
</script>
