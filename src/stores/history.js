import { defineStore } from 'pinia';
import { computed, onUnmounted, ref } from 'vue';
import { db } from '@/lib/firebase';
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

  // Listen to stats/totals document
  const unsubStats = onSnapshot(doc(db, 'stats', 'totals'), (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.data();
      totals.value = [data.kind ?? 0, data.normal ?? 0, data.mean ?? 0];
    }
  });

  // Listen to recent interactions, ordered by newest first
  const interactionsQuery = query(
    collection(db, 'interactions'),
    orderBy('createdAt', 'desc'),
    limit(20),
  );

  const unsubInteractions = onSnapshot(interactionsQuery, (snapshot) => {
    interactions.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  onUnmounted(() => {
    unsubStats();
    unsubInteractions();
  });

  return { totals, interactions, total, percentages };
});
