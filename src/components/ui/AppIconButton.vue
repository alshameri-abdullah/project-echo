<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'kind', 'neutral', 'mean', 'danger'].includes(value);
    },
  },
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      return ['small', 'normal', 'large', 'xlarge'].includes(value);
    },
  },
  icon: {
    type: String,
    required: true,
  },
});

const variants = {
  primary: {
    shadow: 'bg-black/20',
    edge: 'bg-primary-600 border-primary-900',
    face: 'text-primary-950 bg-primary-500 border-primary-800',
  },
  kind: {
    shadow: 'bg-black/20',
    edge: 'bg-green-200 border-surface-700',
    face: 'text-surface-700 bg-green-100 border-surface-600',
  },
  neutral: {
    shadow: 'bg-black/20',
    edge: 'bg-stone-300 border-surface-700',
    face: 'text-surface-700 bg-stone-200 border-surface-600',
  },
  mean: {
    shadow: 'bg-black/20',
    edge: 'bg-red-200 border-surface-700',
    face: 'text-surface-700 bg-red-100 border-surface-600',
  },
  danger: {
    shadow: 'bg-black/20',
    edge: 'bg-red-600 border-red-900',
    face: 'text-red-950 bg-red-500 border-red-800',
  },
};

const sizes = {
  small: { face: 'p-1.5', icon: 'size-4' },
  normal: { face: 'p-2', icon: 'size-6' },
  large: { face: 'p-3', icon: 'size-8' },
  xlarge: { face: 'p-4', icon: 'size-12' },
};

const currentVariant = computed(
  () => variants[props.variant] ?? variants.primary
);

const currentSize = computed(() => sizes[props.size] ?? sizes.normal);

const clickSound = new Audio('/sounds/click.mp3');
const playClick = () => clickSound.cloneNode().play();
</script>

<template>
  <button
    class="group relative overflow-visible rounded-full transition-all duration-300"
    @click="playClick"
  >
    <span
      :class="[
        currentVariant.shadow,
        'ease-smooth absolute inset-0 translate-y-1.5 transform rounded-full transition-transform duration-500 will-change-transform group-hover:translate-y-2 group-hover:duration-200 group-active:translate-y-0.5 group-active:duration-75',
      ]"
    ></span>
    <span
      :class="[currentVariant.edge, 'absolute inset-0 rounded-full border']"
    ></span>
    <span
      :class="[
        currentVariant.face,
        currentSize.face,
        'ease-smooth relative flex -translate-y-1.5 transform items-center justify-center rounded-full border shadow-(--inset-highlight) transition-transform duration-500 will-change-transform group-hover:-translate-y-2 group-hover:duration-200 group-active:-translate-y-0.5 group-active:duration-75',
      ]"
    >
      <img :src="icon" alt="" :class="currentSize.icon" />
    </span>
  </button>
</template>

<style scoped></style>
