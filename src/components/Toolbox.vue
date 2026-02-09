<script setup>
import { useMediaQuery } from '@vueuse/core';
import AppIconButton from '@/components/ui/AppIconButton.vue';
import { useToolsStore } from '@/stores/tools';
import { storeToRefs } from 'pinia';

const toolsStore = useToolsStore();
const { tools } = storeToRefs(toolsStore);
const isDesktop = useMediaQuery('(min-width: 1024px)');
</script>

<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col items-center">
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="tool in tools"
          :key="tool.id"
          class="group/tool relative flex shrink-0 flex-col items-center"
        >
          <AppIconButton
            variant="secondary"
            :size="isDesktop ? 'xlarge' : 'large'"
            :icon="tool.icon"
            @click="toolsStore.triggerReaction(tool)"
          />
          <span
            class="absolute top-full mt-2 whitespace-nowrap font-mono tracking-wider text-stone-500 opacity-0 transition-opacity duration-200 group-hover/tool:opacity-100"
          >
            {{ tool.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
