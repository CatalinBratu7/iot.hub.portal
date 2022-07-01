<template>
  <div
    class="p-2 rounded"
    :class="{ 'bg-red': !props.active, 'bg-green': props.active }"
  />
</template>

<script setup lang="ts">
type Props = {
  active: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  active: () => false,
});
</script>
