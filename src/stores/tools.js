import { defineStore } from 'pinia';
import { onUnmounted, ref } from 'vue';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import kissIcon from '@/assets/icons/tools/kiss.svg';
import hugIcon from '@/assets/icons/tools/hug.svg';
import healIcon from '@/assets/icons/tools/heal.svg';
import roseIcon from '@/assets/icons/tools/rose.svg';
import waveIcon from '@/assets/icons/tools/wave.svg';
import waterIcon from '@/assets/icons/tools/water.svg';
import eyesIcon from '@/assets/icons/tools/eyes.svg';
import insultIcon from '@/assets/icons/tools/insult.svg';
import punchIcon from '@/assets/icons/tools/punch.svg';
import boltIcon from '@/assets/icons/tools/bolt.svg';
import stabIcon from '@/assets/icons/tools/stab.svg';

const icons = {
  kiss: kissIcon,
  hug: hugIcon,
  heal: healIcon,
  rose: roseIcon,
  wave: waveIcon,
  water: waterIcon,
  eyes: eyesIcon,
  insult: insultIcon,
  punch: punchIcon,
  bolt: boltIcon,
  stab: stabIcon,
};

export const useToolsStore = defineStore('tools', () => {
  const tools = ref([]);

  const toolsQuery = query(collection(db, 'tools'), orderBy('order'));

  const unsubTools = onSnapshot(toolsQuery, (snapshot) => {
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
