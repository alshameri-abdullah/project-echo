import { defineStore } from 'pinia';
import { onUnmounted, ref } from 'vue';
import { db } from '@/lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

import healIcon from '@/assets/icons/tools/heal.svg';
import hugIcon from '@/assets/icons/tools/hug.svg';
import roseIcon from '@/assets/icons/tools/rose.svg';

const icons = { heal: healIcon, hug: hugIcon, rose: roseIcon };

export const useToolsStore = defineStore('tools', () => {
  const tools = ref([]);

  const unsubTools = onSnapshot(collection(db, 'tools'), (snapshot) => {
    tools.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      icon: icons[doc.data().name],
    }));
  });

  onUnmounted(() => {
    unsubTools();
  });

  return { tools };
});
