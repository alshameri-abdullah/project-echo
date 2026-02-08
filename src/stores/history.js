import { defineStore } from 'pinia';
import { computed, onUnmounted, ref, watch } from 'vue';
import { db } from '@/lib/firebase';
import { timeAgo } from '@/utils/time';
import { getLocalId } from '@/utils/local-id';
import { useCharacterStore } from '@/stores/character';
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  limit,
} from 'firebase/firestore';

export const useHistoryStore = defineStore('history', () => {
  const totals = ref([0, 0, 0]);
  const interactions = ref([]);

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

  const characterStore = useCharacterStore();
  const localId = getLocalId();

  let unsubStats = null;
  let unsubInteractions = null;

  function cleanup() {
    if (unsubStats) unsubStats();
    if (unsubInteractions) unsubInteractions();
    unsubStats = null;
    unsubInteractions = null;
  }

  watch(
    () => characterStore.activeCharacter,
    (character) => {
      cleanup();

      if (!character) return;

      const charId = character.id;

      // Listen to characters/{charId}/stats/totals
      unsubStats = onSnapshot(
        doc(db, 'characters', charId, 'stats', 'totals'),
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            totals.value = [data.kind ?? 0, data.neutral ?? 0, data.mean ?? 0];
          } else {
            totals.value = [0, 0, 0];
          }
        },
      );

      // Listen to characters/{charId}/interactions
      const interactionsQuery = query(
        collection(db, 'characters', charId, 'interactions'),
        orderBy('createdAt', 'desc'),
        limit(20),
      );

      unsubInteractions = onSnapshot(interactionsQuery, (snapshot) => {
        interactions.value = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            ...data,
            time: data.createdAt ? timeAgo(data.createdAt) : '',
            isOwn: data.uid === localId,
          };
        });
      });
    },
    { immediate: true },
  );

  onUnmounted(() => {
    cleanup();
  });

  return { totals, interactions, total, percentages };
});
