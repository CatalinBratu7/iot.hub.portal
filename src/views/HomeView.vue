<template>
  <div class="p-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-1">
          <div class="flex flex-col gap-8">
            <StatusCard class="bg-cyan" />
            <StatusCard class="bg-cyan" />
            <StatusCard class="bg-cyan" />
          </div>
        </div>
        <div class="md:col-span-2">2/3</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import StatusCard from "@/components/StatusCard.vue";
</script>
