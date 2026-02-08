<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '@/stores/character';
import CharacterMale1 from './characters/CharacterMale1.vue';
import CharacterFemale1 from './characters/CharacterFemale1.vue';

const characterStore = useCharacterStore();
const { activeCharacter } = storeToRefs(characterStore);

const ActiveComponent = computed(() => {
  if (!activeCharacter.value) return null;
  return activeCharacter.value.gender === 'male' ? CharacterMale1 : CharacterFemale1;
});
</script>

<template>
  <component :is="ActiveComponent" v-if="ActiveComponent" />
</template>
