<script setup>
import AppButton from '@/components/ui/AppButton.vue';
import { useToolsStore } from '@/stores/tools';
import { storeToRefs } from 'pinia';

const { tools } = storeToRefs(useToolsStore());
</script>

<template>
  <div class="section w-full">
    <div class="section-content border-t">
      <h2 class="section-label">Toolbox</h2>
      <div class="flex">
        <AppButton
          v-for="tool in tools"
          :key="tool.id"
          variant="secondary"
          size="large"
          :icon="tool.icon"
          iconOnly
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
