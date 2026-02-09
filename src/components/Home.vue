<script setup>
import Character from '@/components/Character.vue';
import InteractionStats from '@/components/InteractionStats.vue';
import RecentInteractions from '@/components/RecentInteractions.vue';
import Toolbox from '@/components/Toolbox.vue';
</script>

<template>
  <div class="flex flex-1 flex-col lg:min-h-0 lg:flex-row">
    <!-- Wrapper: invisible on mobile (contents), sidebar on desktop -->
    <div
      class="contents lg:flex lg:flex-col lg:h-full lg:w-96 lg:overflow-y-auto lg:border-r lg:bg-brown-100 lg:border-surface-300 scrollbar-hidden"
    >
      <InteractionStats class="order-1 lg:order-none" />
      <RecentInteractions class="order-3 lg:order-none" />
    </div>

    <!-- Character + Toolbox -->
    <div class="order-2 lg:order-none flex flex-1 flex-col p-6 sm:p-12 lg:p-20 xl:p-32">
      <div
        class="flex h-[35vh] items-center justify-center py-4 lg:h-auto lg:flex-1"
      >
        <Character />
      </div>
      <Toolbox />
    </div>
  </div>
</template>
