<script setup>
import { storeToRefs } from 'pinia';
import { useHistoryStore } from '@/stores/history';

const historyStore = useHistoryStore();
const { totals, interactions, total, percentages } =
  storeToRefs(historyStore);

const colors = {
  kind: { border: 'border-green-600', text: 'text-green-600' },
  mean: { border: 'border-red-500', text: 'text-red-600' },
  normal: { border: 'border-stone-500', text: 'text-stone-500' },
};

const getColor = (type) => colors[type] ?? colors.normal;
</script>

<template>
  <div
    class="section bg-brown-100 scrollbar-hidden flex h-full w-96 flex-col overflow-y-auto border-r"
    id="history"
  >
    <div class="section-content flex flex-col gap-6 border-b">
      <h2 class="section-label">Interaction History</h2>
      <div class="border-b border-stone-300 pb-4">
        <div class="font-mono text-4xl oldstyle-nums tabular-nums">
          {{ total }}
        </div>
        <div class="font-mono text-neutral-500">
          People have interacted with this person.
        </div>
      </div>

      <div class="flex flex-col gap-2 font-mono text-xl">
        <div>
          <span class="text-2xl font-bold oldstyle-nums" :class="getColor('kind').text">
            {{ totals[0] ?? 0 }}
          </span>
          people were <span class="font-bold" :class="getColor('kind').text">kind</span> to them
        </div>
        <div>
          <span class="text-2xl font-bold oldstyle-nums" :class="getColor('normal').text">
            {{ totals[1] ?? 0 }}
          </span>
          people <span class="font-bold" :class="getColor('normal').text">didn't care</span>
        </div>
        <div>
          <span class="text-2xl font-bold oldstyle-nums" :class="getColor('mean').text">
            {{ totals[2] ?? 0 }}
          </span>
          people were <span class="font-bold" :class="getColor('mean').text">mean</span> to them
        </div>
        <div class="flex h-4">
          <span
            class="h-full bg-green-600"
            :style="{ width: `${percentages[0]}%` }"
          />
          <span
            class="h-full bg-stone-300"
            :style="{ width: `${percentages[1]}%` }"
          />
          <span
            class="h-full bg-red-600"
            :style="{ width: `${percentages[2]}%` }"
          />
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
