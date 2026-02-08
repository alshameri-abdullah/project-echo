<script setup>
import { shallowRef } from 'vue';

const modules = import.meta.glob('./characters/Character*.vue', { eager: true });
const characters = Object.values(modules).map((m) => m.default);

const ActiveCharacter = shallowRef(
  characters[Math.floor(Math.random() * characters.length)],
);
</script>

<template>
  <component :is="ActiveCharacter" v-if="ActiveCharacter" />
</template>
