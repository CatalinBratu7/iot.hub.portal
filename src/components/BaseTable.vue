<template>
  <div class="sm:rounded-lg overflow-x-auto">
    <table class="border-collapse w-full text-sm font-medium text-left">
      <thead class="text-black bg-white">
        <slot name="header" />
      </thead>
      <tbody>
        <slot name="body" />
      </tbody>
    </table>
  </div>
</template>
