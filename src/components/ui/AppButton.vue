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
  icon: {
    type: String,
    default: null,
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator(value) {
      return ['top', 'bottom', 'left', 'right'].includes(value);
    },
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
});

const isVertical = computed(() =>
  ['top', 'bottom'].includes(props.iconPosition)
);

const isAfter = computed(() =>
  ['right', 'bottom'].includes(props.iconPosition)
);

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
  small: { face: 'px-2.5 py-1.5 text-sm', icon: 'size-4' },
  normal: { face: 'px-3 py-1.75 text-base', icon: 'size-6' },
  large: { face: 'px-6 py-2 text-xl', icon: 'size-8' },
};

const currentVariant = computed(
  () => variants[props.variant] ?? variants.primary
);

const currentSize = computed(() => sizes[props.size] ?? sizes.normal);
const currentIconSize = computed(() => currentSize.value.icon);
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
        currentSize.face,
        'ease-smooth relative flex w-full items-center justify-center -translate-y-1.5 transform rounded-sm border shadow-(--inset-highlight) transition-transform duration-500 will-change-transform group-hover:-translate-y-2 group-hover:duration-200 group-active:-translate-y-0.5 group-active:duration-75',
      ]"
    >
      <img
        v-if="icon && iconOnly"
        :src="icon"
        alt=""
        :class="currentIconSize"
      />
      <span
        v-else-if="icon"
        class="flex items-center justify-center gap-2"
        :class="isVertical ? 'flex-col' : 'flex-row'"
      >
        <img
          :src="icon"
          alt=""
          :class="[currentIconSize, { 'order-1': isAfter }]"
        />
        <span><slot /></span>
      </span>
      <slot v-else />
    </span>
  </button>
</template>

<style scoped></style>
