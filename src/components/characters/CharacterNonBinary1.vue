<script setup>
import { computed } from 'vue';
import { useToolsStore } from '@/stores/tools';
import { storeToRefs } from 'pinia';

const { reaction } = storeToRefs(useToolsStore());

const stateClass = computed(() => reaction.value ?? 'idle');
</script>

<template>
  <div class="character-wrapper flex items-center justify-center">
    <svg
      :class="['character', stateClass]"
      viewBox="0 0 146.73 534.61"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Right arm (behind body) -->
      <g class="arm arm-right">
        <path d="M42.5,184.17c-3.93-2.33-7.86-4.65-11.8-6.95C7.45,221.1,3.99,238.22,4.32,288.02c-1.05,1.71-2.03,3.47-1.85,5.58.43,5.06,3.74,8.93,9.04,8.93s8.63-3.87,9.03-8.93c.19-2.39-.99-4.32-2.32-6.15-1.33-46.5.89-62.91,24.27-103.27Z" fill="#ec9982"/>
      </g>

      <!-- Left arm (behind body) -->
      <g class="arm arm-left">
        <path d="M122.88,285.28c.45-58.37-.69-60.38-26.37-108.84-3.95,2.29-7.88,4.62-11.8,6.95,25.04,42.98,25.89,48.14,24.29,102.98-1.06,1.49-1.7,3.31-1.7,5.28,0,5.02,4.07,9.1,9.1,9.1s9.1-4.07,9.1-9.1c0-2.48-1-4.73-2.61-6.37Z" fill="#ec9982"/>
      </g>

      <!-- Body (shirt) -->
      <path d="M96.52,175.27s-3.26-19.58-32.39-19.58-34.19,19.58-34.19,19.58v80.45h66.58v-80.45Z" fill="#a373d5"/>

      <!-- Belt -->
      <rect x="28.47" y="254.69" width="69.52" height="11.63" fill="#2b1949"/>

      <!-- Right leg -->
      <g class="leg leg-right">
        <rect x="35.41" y="517.9" width="15.29" height="8.97" fill="#ec9982"/>
        <path d="M35.41,525.99s-5.98.06-8.84,1.74c-2.14,1.26-2.79,2.56-3.8,4.07-.8,1.19.07,2.8,1.51,2.8l27-.13-.23-8.48h-15.65Z" fill="#7844c0"/>
        <path d="M28.83,265.66s-4.18,3.74-6.11,8.68c-1.94,4.94-2.6,12.94-2.76,15.18-.16,2.24.6,67.42,2.32,99.15,1.72,31.73,4.72,118.19,4.72,118.19l32.9-1.32s4.05-84.92,4.94-104.04-1.1-88.48-1.1-88.48c0,0,.23-1.55,1.1-1.55v-45.81H28.83Z" fill="#fde7d3"/>
        <polygon points="25.63 506.08 26.13 519.11 61.96 517.56 61.96 504.53 25.63 506.08" fill="#e2c8b3"/>
      </g>

      <!-- Left leg -->
      <g class="leg leg-left">
        <rect x="86.21" y="517.9" width="15.29" height="8.97" fill="#ec9982"/>
        <path d="M101.15,525.99s5.98.06,8.84,1.74c2.14,1.26,2.79,2.56,3.8,4.07.8,1.19-.07,2.8-1.51,2.8l-27-.13.23-8.48h15.65Z" fill="#7844c0"/>
        <path d="M107.25,286.7c-.58-2.92-2.1-8.56-4.74-13.87s-5.74-7.18-5.74-7.18h-31.94v45.81c.87,0,1.13,1.52,1.13,1.52,0,0,1.52,67.82,3.29,86.19,1.77,18.37,9,107.62,9,107.62l32.71.6s.1-74.22.29-113.31c.19-39.1-3.42-104.45-4-107.37Z" fill="#fde7d3"/>
        <polygon points="77.84 506.33 77.84 519.11 111.76 519.11 111.76 507.11 77.84 506.33" fill="#e2c8b3"/>
      </g>

      <!-- Head group -->
      <g class="head-group">
        <path d="M117.94,85.92c-.11,0-.22.01-.34.02-2.93-26.16-25.11-46.5-52.05-46.5S15.47,60.67,13.34,87.65c-.65-.11-1.31-.18-1.99-.18C5.09,87.47,0,92.55,0,98.82s5.08,11.35,11.35,11.35c1.7,0,3.3-.38,4.75-1.05,6.42,18.33,22.73,32,42.54,34.61v15.7s2.51,3.51,6.17,3.51,6.17-3.51,6.17-3.51v-15.51c20.77-2.14,37.92-16.42,44.28-35.63.85.21,1.74.33,2.66.33,6.27,0,11.35-5.08,11.35-11.35s-5.08-11.35-11.35-11.35Z" fill="#f5a487"/>
        <path d="M75.04,143.35c-1.33.24-2.68.44-4.05.58v15.51s-2.5,3.51-6.17,3.51-6.17-3.51-6.17-3.51v-15.7c-19.81-2.61-36.13-16.28-42.55-34.61-1.44.66-3.05,1.05-4.74,1.05-6.27,0-11.36-5.09-11.36-11.36s5.09-11.35,11.36-11.35c.68,0,1.34.07,1.98.18,2.06-26.1,23.23-46.83,49.53-48.15-18.25,10.49-30.3,28.6-30.3,49.17,0,24.86,17.6,46.11,42.47,54.68Z" fill="#ec9982"/>
        <circle cx="10.02" cy="109.88" r="2.9" fill="#ffd836"/>
        <circle cx="119.96" cy="109.88" r="2.9" fill="#ffd836"/>
        <ellipse class="eye eye-right" cx="54.84" cy="93.3" rx="3.16" ry="3.16" fill="#000"/>
        <ellipse class="eye eye-left" cx="79.75" cy="93.3" rx="3.16" ry="3.16" fill="#000"/>
        <ellipse class="cheek cheek-right" cx="40" cy="113" rx="8" ry="5" fill="#ffcaca" opacity="0"/>
        <ellipse class="cheek cheek-left" cx="95" cy="113" rx="8" ry="5" fill="#ffcaca" opacity="0"/>
        <path d="M89.04,77.75c-11,0-20.03,8.55-20.82,19.36h-3.06c-.8-10.8-9.82-19.36-20.82-19.36s-20.9,9.38-20.9,20.9,9.38,20.9,20.9,20.9c10.82,0,19.74-8.26,20.8-18.8h3.12c1.06,10.54,9.98,18.8,20.8,18.8,11.53,0,20.9-9.38,20.9-20.9s-9.38-20.9-20.9-20.9ZM44.33,115.55c-9.32,0-16.9-7.58-16.9-16.9s7.58-16.9,16.9-16.9,16.9,7.58,16.9,16.9-7.58,16.9-16.9,16.9ZM89.04,115.55c-9.32,0-16.9-7.58-16.9-16.9s7.58-16.9,16.9-16.9,16.9,7.58,16.9,16.9-7.58,16.9-16.9,16.9Z" fill="#ffd836"/>
        <path class="mouth" d="M73.88,118.95c-1.13,3.36-4.36,5.53-7.74,5.29-3.02-.22-5.67-2.31-6.65-5.29" fill="none" stroke="#c47860" stroke-miterlimit="10"/>
        <path d="M3.38,45.3c-.44-4.4-.73-11.1,1.16-15.35,1.55-3.48,4.79-5.02,6.71-5.55,2.22-.62,5.64.56,8.86,4.16-2.52-9.73,5.73-19.18,14.82-23.47,28.04-13.24,61.45,4.12,91.95-.85,1.91-.31,3.53,1.35,3.18,3.25-.78,4.17-2.85,8.09-5.91,11.03,5.21.16,10.42.32,15.63.48,1.03.03,2.17.11,2.88.85.7.73.74,1.85.69,2.85-.41,7.33-4.25,14.4-10.17,18.73l11.78.35c1.5.04,2.31,1.76,1.41,2.96-5.46,7.3-11.44,14.21-17.86,20.68-6.66,6.71-15.03,13.36-24.43,12.4-8.25-.84-14.96-7.41-23.14-8.75-8.9-1.46-17.52,3.47-26.47,4.52-12,1.41-24.05-2.57-30.05-13.07-4.85,8.25-8.65,18.84-11.06,27.13-7.77-23-8.43-27.01-9.97-42.36Z" fill="#2b1949"/>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.character-wrapper {
  pointer-events: none;
  user-select: none;
}

.character {
  overflow: visible;
  height: 540px;
  max-height: 100%;
  width: auto;
  margin-bottom: 2rem;
}

.arm-right {
  transform-origin: 42px 177px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.arm-left {
  transform-origin: 97px 177px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.leg-right {
  transform-origin: 45px 266px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.leg-left {
  transform-origin: 95px 266px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.head-group {
  transform-origin: 65px 155px;
  transition: transform 0.3s ease;
}

.eye {
  transition: rx 0.3s ease, ry 0.3s ease, cy 0.3s ease;
}

.mouth {
  transition: d 0.3s ease;
}

.cheek {
  transition: opacity 0.3s ease;
}

/* ---- IDLE ---- */
.character.idle {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* ---- KIND ---- */
.character.kind {
  animation: bounce 0.5s ease-out 1;
}

.character.kind .arm-right { transform: rotate(-12deg); }
.character.kind .arm-left { transform: rotate(12deg); }
.character.kind .eye-right { ry: 1.5; cy: 95; }
.character.kind .eye-left { ry: 1.5; cy: 95; }
.character.kind .mouth {
  d: path('M73.88,116.95c-1.13,5.36-4.36,8.53-7.74,8.29-3.02-.22-5.67-4.31-6.65-8.29');
}
.character.kind .cheek { opacity: 0.6; }

@keyframes bounce {
  0% { transform: translateY(0); }
  30% { transform: translateY(-18px); }
  50% { transform: translateY(-5px); }
  70% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
}

/* ---- NEUTRAL ---- */
.character.neutral .head-group {
  animation: head-tilt 0.8s ease-in-out 1;
}

.character.neutral .eye-right { ry: 1.5; }
.character.neutral .eye-left { ry: 1.5; }
.character.neutral .mouth {
  d: path('M73.88,120c-0.8,1.5-3.5,2.5-7.74,2.3-3.02-.15-4.8-1.0-6.65-2.3');
}

@keyframes head-tilt {
  0% { transform: rotate(0deg); }
  30% { transform: rotate(5deg); }
  70% { transform: rotate(3deg); }
  100% { transform: rotate(0deg); }
}

/* ---- MEAN ---- */
.character.mean {
  animation: shake 0.5s ease-in-out 1;
}

.character.mean .arm-right { transform: rotate(3deg); }
.character.mean .arm-left { transform: rotate(-3deg); }
.character.mean .eye-right { ry: 5; rx: 4; }
.character.mean .eye-left { ry: 5; rx: 4; }
.character.mean .mouth {
  d: path('M73.88,124.24c-1.13-3.36-4.36-5.53-7.74-5.29-3.02,.22-5.67,2.31-6.65,5.29');
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  15% { transform: translateX(-8px); }
  30% { transform: translateX(7px); }
  45% { transform: translateX(-6px); }
  60% { transform: translateX(5px); }
  75% { transform: translateX(-3px); }
  90% { transform: translateX(2px); }
}
</style>
