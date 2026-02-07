<script setup>
import AppIconButton from '@/components/ui/AppIconButton.vue';
import { useToolsStore } from '@/stores/tools';
import { storeToRefs } from 'pinia';

const { tools } = storeToRefs(useToolsStore());
</script>

<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col items-center">
      <div class="flex gap-4">
        <AppIconButton
          v-for="tool in tools"
          :key="tool.id"
          variant="secondary"
          size="xlarge"
          :icon="tool.icon"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
