import { defineStore } from 'pinia';
import { ref } from 'vue';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const useCharacterStore = defineStore('character', () => {
  const activeCharacter = ref(null);
  const ready = ref(false);

  async function init() {
    const snapshot = await getDocs(collection(db, 'characters'));
    const characters = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (characters.length) {
      activeCharacter.value =
        characters[Math.floor(Math.random() * characters.length)];
    }

    ready.value = true;
  }

  init();

  return { activeCharacter, ready };
});
