<template>
  <div class="bg-blue-medium-dark px-4 py-2">
    <div class="flex justify-between container mx-auto">
      <HeaderLogo />
      <HeaderTabs />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLogo from "./components/HeaderLogo.vue";
import HeaderTabs from "./components/HeaderTabs.vue";
</script>
