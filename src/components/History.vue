<script setup>
import { storeToRefs } from 'pinia';
import { useHistoryStore } from '@/stores/history';

const historyStore = useHistoryStore();
const { totals, interactions, total, percentages } = storeToRefs(historyStore);

const colors = {
  kind: {
    border: 'border-green-600',
    text: 'text-green-600',
    barBg: 'bg-green-600',
    barEdge: 'bg-green-600',
    barFace: 'bg-green-500',
  },
  mean: {
    border: 'border-red-500',
    text: 'text-red-600',
    barBg: 'bg-red-600',
    barEdge: 'bg-red-600',
    barFace: 'bg-red-500',
  },
  normal: {
    border: 'border-stone-500',
    text: 'text-stone-500',
    barBg: 'bg-stone-300',
    barEdge: 'bg-stone-400',
    barFace: 'bg-stone-300',
  },
};

const getColor = (type) => colors[type] ?? colors.normal;

const stats = [
  { type: 'kind', label: 'kind', prefix: 'people were', suffix: 'to them' },
  { type: 'normal', label: "didn't care", prefix: 'people', suffix: '' },
  { type: 'mean', label: 'mean', prefix: 'people were', suffix: 'to them' },
];

const barSegments = [
  { type: 'kind', index: 0 },
  { type: 'normal', index: 1 },
  { type: 'mean', index: 2 },
];
</script>

<template>
  <div
    class="section scrollbar-hidden flex h-full w-96 flex-col overflow-y-auto border-r"
    id="history"
  >
    <div class="section-content border-b">
      <h2 class="section-label">Interaction History</h2>
      <div class="border-b border-stone-300 pb-4">
        <div class="font-mono text-4xl oldstyle-nums tabular-nums">
          {{ total }}
        </div>
        <div class="font-mono text-neutral-500">
          People have interacted with this person.
        </div>
      </div>

      <div class="flex flex-col gap-6 font-mono text-xl">
        <div class="flex flex-col gap-2">
          <div v-for="(stat, index) in stats" :key="stat.type">
            <span
              class="text-2xl font-bold oldstyle-nums"
              :class="getColor(stat.type).text"
            >
              {{ totals[index] ?? 0 }}
            </span>
            {{ stat.prefix }}
            <span class="font-bold" :class="getColor(stat.type).text">{{
              stat.label
            }}</span>
            {{ stat.suffix }}
          </div>
        </div>

        <div class="flex h-4">
          <span
            v-for="seg in barSegments"
            :key="seg.type"
            class="group relative h-full"
            :class="getColor(seg.type).barBg"
            :style="{ width: `${percentages[seg.index]}%` }"
          >
            <span
              class="ease-smooth absolute inset-0 translate-y-1.5 transform bg-black/20 transition-transform duration-500 will-change-transform group-hover:translate-y-2 group-hover:duration-200 group-active:translate-y-0.5 group-active:duration-75"
            />
            <span
              class="absolute inset-0 border border-stone-900"
              :class="getColor(seg.type).barEdge"
            />
            <span
              class="ease-smooth relative block h-full w-full -translate-y-1.5 transform border border-stone-800 shadow-(--inset-highlight) transition-transform duration-500 will-change-transform group-hover:-translate-y-2 group-hover:duration-200 group-active:-translate-y-0.5 group-active:duration-75"
              :class="getColor(seg.type).barFace"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="section-content flex flex-col gap-6 border-b">
      <h2 class="section-label">Recent Interactions</h2>
      <div class="flex flex-col gap-4 font-mono">
        <div
          v-for="interaction in interactions"
          :key="interaction.id"
          class="border-l-2 ps-4"
          :class="getColor(interaction.type).border"
        >
          <div
            class="text-lg font-medium"
            :class="getColor(interaction.type).text"
          >
            {{ interaction.tool }}
          </div>
          <div class="text-stone-400">
            {{ interaction.time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
