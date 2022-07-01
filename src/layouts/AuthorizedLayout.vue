<template>
  <TheHeader />
  <div class="p-4">
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
</script>
