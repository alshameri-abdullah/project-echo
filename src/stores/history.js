import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useHistoryStore = defineStore('history', () => {
  const totals = ref([788, 72, 178]);

  const interactions = ref([
    { id: 1, tool: 'Shock', type: 'mean', time: '2s ago' },
    { id: 2, tool: 'Rose', type: 'kind', time: '4s ago' },
    { id: 3, tool: 'Push', type: 'normal', time: '7s ago' },
    { id: 4, tool: 'Knife', type: 'mean', time: '12s ago' },
    { id: 5, tool: 'Crown', type: 'kind', time: '15s ago' },
    { id: 6, tool: 'Shock', type: 'mean', time: '2s ago' },
    { id: 7, tool: 'Rose', type: 'kind', time: '4s ago' },
    { id: 8, tool: 'Push', type: 'normal', time: '7s ago' },
    { id: 9, tool: 'Knife', type: 'mean', time: '12s ago' },
    { id: 10, tool: 'Crown', type: 'kind', time: '15s ago' },
  ]);

  const total = computed(() =>
    totals.value.reduce((sum, n) => sum + (n ?? 0), 0),
  );

  const percentages = computed(() => {
    const t = total.value;
    if (!t) return totals.value.map(() => 0);
    return totals.value.map((n) =>
      Number((((n ?? 0) / t) * 100).toFixed(2)),
    );
  });

  return { totals, interactions, total, percentages };
});
