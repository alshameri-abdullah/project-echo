<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '@/stores/character';
import CharacterMale1 from './characters/CharacterMale1.vue';
import CharacterFemale1 from './characters/CharacterFemale1.vue';
import CharacterNonBinary1 from './characters/CharacterNonBinary1.vue';

const characterMap = {
  male: CharacterMale1,
  female: CharacterFemale1,
  'non-binary': CharacterNonBinary1,
};

const characterStore = useCharacterStore();
const { activeCharacter } = storeToRefs(characterStore);

const ActiveComponent = computed(() => {
  if (!activeCharacter.value) return null;
  return characterMap[activeCharacter.value.gender] ?? CharacterFemale1;
});
</script>

<template>
  <component :is="ActiveComponent" v-if="ActiveComponent" class="h-full" />
</template>
