<script setup>
import Character from '@/components/Character.vue';
import History from '@/components/History.vue';
import Toolbox from '@/components/Toolbox.vue';
</script>

<template>
  <div class="flex min-h-full flex-col lg:h-full lg:flex-row">
    <div class="flex flex-1 flex-col p-6 sm:p-12 lg:order-2 lg:p-20 xl:p-32">
      <div
        class="flex h-[35vh] items-center justify-center py-4 lg:h-auto lg:flex-1"
      >
        <Character />
      </div>
      <Toolbox />
    </div>
    <History />
  </div>
</template>

<style scoped></style>
