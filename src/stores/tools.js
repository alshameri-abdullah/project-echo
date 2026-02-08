import { defineStore } from 'pinia';
import { onUnmounted, ref } from 'vue';
import { db } from '@/lib/firebase';
import { getLocalId } from '@/utils/local-id';
import { useCharacterStore } from '@/stores/character';
import {
  addDoc,
  collection,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

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
  const reaction = ref(null);
  let reactionTimeout = null;

  const toolsQuery = query(collection(db, 'tools'), orderBy('order'));

  const unsubTools = onSnapshot(toolsQuery, (snapshot) => {
    tools.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      icon: icons[doc.data().name],
    }));
  });

  function triggerReaction(tool) {
    const characterStore = useCharacterStore();
    const character = characterStore.activeCharacter;
    if (!character) return;

    if (reactionTimeout) clearTimeout(reactionTimeout);
    reaction.value = tool.type;
    reactionTimeout = setTimeout(() => {
      reaction.value = null;
      reactionTimeout = null;
    }, 2000);

    const charId = character.id;

    addDoc(collection(db, 'characters', charId, 'interactions'), {
      tool: tool.label,
      type: tool.type,
      uid: getLocalId(),
      createdAt: serverTimestamp(),
    });

    setDoc(
      doc(db, 'characters', charId, 'stats', 'totals'),
      { [tool.type]: increment(1) },
      { merge: true },
    );
  }

  onUnmounted(() => {
    unsubTools();
    if (reactionTimeout) clearTimeout(reactionTimeout);
  });

  return { tools, reaction, triggerReaction };
});
