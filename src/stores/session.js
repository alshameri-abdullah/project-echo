import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { db } from '@/lib/firebase';
import { getLocalId } from '@/utils/local-id';
import { useCharacterStore } from '@/stores/character';
import {
  collection,
  doc,
  getDoc,
  increment,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

export const useSessionStore = defineStore('session', () => {
  const sessionId = ref(null);
  let _sessionDocRef = null;
  const characterStore = useCharacterStore();

  watch(
    () => characterStore.activeCharacter,
    async (character) => {
      if (!character) return;

      const charId = character.id;

      // Generate doc reference immediately — ID is available before the write
      _sessionDocRef = doc(collection(db, 'characters', charId, 'sessions'));
      sessionId.value = _sessionDocRef.id;

      // Snapshot the current stats so we know what the user saw on arrival
      const statsSnap = await getDoc(
        doc(db, 'characters', charId, 'stats', 'totals'),
      );
      const stats = statsSnap.exists() ? statsSnap.data() : {};

      await setDoc(_sessionDocRef, {
        uid: getLocalId(),
        startedAt: serverTimestamp(),
        lastActiveAt: serverTimestamp(),
        totalInteractions: 0,
        character: character.gender,
        statSnapshot: {
          kind: stats.kind ?? 0,
          neutral: stats.neutral ?? 0,
          mean: stats.mean ?? 0,
        },
      });
    },
    { immediate: true },
  );

  function touchLastActive() {
    if (_sessionDocRef) {
      setDoc(
        _sessionDocRef,
        { lastActiveAt: serverTimestamp(), totalInteractions: increment(1) },
        { merge: true },
      );
    }
  }

  return { sessionId, touchLastActive };
});
