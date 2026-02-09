<script setup>
import { computed, ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import AppIconButton from '@/components/ui/AppIconButton.vue';
import { useToolsStore } from '@/stores/tools';
import { storeToRefs } from 'pinia';

const toolsStore = useToolsStore();
const { tools } = storeToRefs(toolsStore);
const isDesktop = useMediaQuery('(min-width: 1024px)');

const activeLabel = ref(null);
let labelTimeout = null;

function showLabel(toolId) {
  if (labelTimeout) clearTimeout(labelTimeout);
  activeLabel.value = toolId;
  labelTimeout = setTimeout(() => {
    activeLabel.value = null;
    labelTimeout = null;
  }, 1500);
}

const groupOrder = ['kind', 'neutral', 'mean'];

const groupedTools = computed(() =>
  groupOrder
    .map((type) => tools.value.filter((t) => t.type === type))
    .filter((group) => group.length > 0)
);

console.log(groupedTools.value);
</script>

<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center gap-4 lg:flex-row">
        <template v-for="(group, gi) in groupedTools" :key="gi">
          <div v-if="gi > 0" class="hidden h-8 w-px bg-stone-400 lg:block" />
          <div class="flex flex-wrap justify-center gap-4">
            <div
              v-for="tool in group"
              :key="tool.id"
              class="group/tool relative flex shrink-0 flex-col items-center"
            >
              <AppIconButton
                :variant="tool.type"
                :size="isDesktop ? 'xlarge' : 'large'"
                :icon="tool.icon"
                @click="toolsStore.triggerReaction(tool); showLabel(tool.id)"
              />
              <span
                :class="[
                  'pointer-events-none absolute top-full z-10 mt-2 rounded-sm bg-black/70 px-2 py-1 font-mono text-xs tracking-wider whitespace-nowrap text-white transition-opacity duration-200',
                  activeLabel === tool.id ? 'opacity-100' : 'opacity-0 group-hover/tool:opacity-100',
                ]"
              >
                {{ tool.label }}
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
