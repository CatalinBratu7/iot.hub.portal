<template>
  <div class="flex">
    <div class="w-8 h-4 rounded border-2 p-px">
      <div class="bg-green h-full" :style="`width: ${props.charge}%`" />
    </div>
    <div class="bg-white pr-0.5 my-1"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  charge: number;
}>();
</script>
