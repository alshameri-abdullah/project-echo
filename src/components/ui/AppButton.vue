<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary', 'danger'].includes(value);
    },
  },
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      return ['small', 'normal', 'large'].includes(value);
    },
  },
});

const variants = {
  primary: {
    shadow: 'bg-black/20',
    edge: 'bg-primary-600 border-primary-900',
    face: 'text-primary-950 bg-primary-500 border-primary-800',
  },
  secondary: {
    shadow: 'bg-black/20',
    edge: 'bg-primary-300 border-surface-700',
    face: 'text-surface-700 bg-primary-200 border-surface-600',
  },
  danger: {
    shadow: 'bg-black/20',
    edge: 'bg-red-600 border-red-900',
    face: 'text-red-950 bg-red-500 border-red-800',
  },
};

const sizes = {
  small: 'px-2.5 py-1.5 text-sm',
  normal: 'px-3 py-1.75 text-base',
  large: 'px-6 py-2 text-xl',
};

const currentVariant = computed(
  () => variants[props.variant] ?? variants.primary
);

const currentSize = computed(() => sizes[props.size] ?? sizes.normal);
</script>

<template>
  <button
    class="group relative overflow-visible rounded-sm font-mono tracking-widest uppercase transition-all duration-300"
  >
    <span
      :class="[
        currentVariant.shadow,
        'ease-smooth absolute inset-0 translate-y-1.5 transform rounded-sm transition-transform duration-500 will-change-transform group-hover:translate-y-2 group-hover:duration-200 group-active:translate-y-0.5 group-active:duration-75',
      ]"
    ></span>
    <span
      :class="[currentVariant.edge, 'absolute inset-0 rounded-sm border']"
    ></span>
    <span
      :class="[
        currentVariant.face,
        currentSize,
        'ease-smooth relative block w-full -translate-y-1.5 transform rounded-sm border shadow-(--inset-highlight) transition-transform duration-500 will-change-transform group-hover:-translate-y-2 group-hover:duration-200 group-active:-translate-y-0.5 group-active:duration-75',
      ]"
    >
      <slot />
    </span>
  </button>
</template>

<style scoped></style>
