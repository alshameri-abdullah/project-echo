<script setup>
import History from '@/components/History.vue';
import Toolbox from '@/components/Toolbox.vue';
</script>

<template>
  <div class="flex h-full">
    <History />
    <div class="flex flex-1 flex-col p-32">
      <div class="flex-1"></div>
      <Toolbox />
    </div>
  </div>
</template>

<style scoped></style>
