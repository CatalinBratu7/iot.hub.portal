<template>
  <div
    class="p-2 rounded"
    :class="{ 'bg-red': !props.active, 'bg-green': props.active }"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  active: boolean;
}>();
</script>
