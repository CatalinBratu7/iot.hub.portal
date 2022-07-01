<template>
  <BaseCard class="bg-grey font-bold relative">
    <div class="flex gap-4">
      <img class="h-16 w-16" :src="getSensorIcon(props.icon)" />
      <div class="flex flex-col justify-between">
        <div class="text-sm">{{ props.header }}</div>
        <div class="text-xl">
          {{ props.level }}
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";

const props = defineProps<{
  header: string;
  level: string;
  icon: string;
}>();

const getSensorIcon = (icon = "humidity.svg") => {
  return new URL(`../assets/icons/${icon}`, import.meta.url).href;
};
</script>
