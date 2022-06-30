<template>
  <BaseCard>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-1 m-auto">
        <slot name="icon" />
      </div>
      <div class="col-span-2 font-bold text-black">
        <div class="text-lg">{{ props.header }}</div>
        <div class="text-3xl">{{ props.status }}</div>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";

const props = defineProps<{
  header: string;
  status: string | number | undefined;
}>();
</script>
