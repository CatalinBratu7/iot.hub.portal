<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div class="md:col-span-1">
      <StatusWidgets />
    </div>
    <div class="md:col-span-3">[Device Details]</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import StatusWidgets from "@/components/StatusWidgets.vue";

const route = useRoute();

console.log(route.params.id);
</script>
