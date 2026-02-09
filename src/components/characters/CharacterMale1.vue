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
      viewBox="0 0 129.29 535.96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Body (shirt) -->
      <path d="M96.52,176.63s-3.26-19.58-32.39-19.58-34.19,19.58-34.19,19.58v93.45h66.58v-93.45Z" fill="#a6ce77"/>

      <!-- Right arm -->
      <g class="arm arm-right">
        <path d="M41.39,185.53c-3.93-2.33-7.86-4.65-11.8-6.95C6.35,222.46,2.89,239.57,3.22,289.37c-1.05,1.71-2.03,3.47-1.85,5.58.43,5.06,3.74,8.93,9.04,8.93s8.63-3.87,9.03-8.93c.19-2.39-.99-4.32-2.32-6.15-1.33-46.5.89-62.91,24.27-103.27Z" fill="#ec9982"/>
        <path d="M30.47,175.12c4.65,2.33,9.26,3.68,13.83,6.17-21.4,44.12-24.95,51.6-26.54,103.75l-15.64.39c1.92-52.73,4.97-64.94,28.35-110.31Z" fill="#a6ce77"/>
      </g>

      <!-- Left arm -->
      <g class="arm arm-left">
        <path d="M124.43,288.57c.45-58.37-.69-60.38-26.37-108.84-3.95,2.29-7.88,4.62-11.8,6.95,25.04,42.98,25.89,48.14,24.29,102.98-1.06,1.49-1.7,3.31-1.7,5.28,0,5.02,4.07,9.1,9.1,9.1s9.1-4.07,9.1-9.1c0-2.48-1-4.73-2.61-6.37Z" fill="#ec9982"/>
        <path d="M95.79,175.21c-4.37,2.55-8.96,4.65-13.25,7.35,24.21,41.91,29.01,54.72,27.22,103.6l15.58.21c1.42-51.68-2.49-66.93-29.55-111.15Z" fill="#a6ce77"/>
      </g>

      <!-- Right leg -->
      <g class="leg leg-right">
        <rect x="35.41" y="519.25" width="15.29" height="8.97" fill="#ec9982"/>
        <path d="M35.41,527.35s-5.98.06-8.84,1.74c-2.14,1.26-2.79,2.56-3.8,4.07-.8,1.19.07,2.8,1.51,2.8l27-.13-.58-12.75h-15.29s0,4.27,0,4.27Z" fill="#2c293c"/>
        <path d="M29.94,270.01s-5.22,58.32-3.92,106.58c1.05,38.71,3.97,131.62,3.97,131.62l26.9-1.32s3.45-86.92,4.34-106.04,2.5-86.48,2.5-86.48c0,0,.23-1.55,1.1-1.55v-42.81H29.94Z" fill="#68755b"/>
        <polygon points="25.63 507.43 26.13 520.46 61.96 518.92 61.96 505.88 25.63 507.43" fill="#79846d"/>
      </g>

      <!-- Left leg -->
      <g class="leg leg-left">
        <rect x="86.21" y="519.25" width="15.29" height="8.97" fill="#ec9982"/>
        <path d="M101.65,527.35s5.98.06,8.84,1.74c2.14,1.26,2.79,2.56,3.8,4.07.8,1.19-.07,2.8-1.51,2.8l-27-.13.43-12.75h15.29l.15,4.27Z" fill="#2c293c"/>
        <path d="M96.52,270.01h-31.69v42.81c.87,0,1.13,1.52,1.13,1.52,0,0,6.15,65.43,7.92,83.8,1.77,18.37,7.37,110.01,7.37,110.01l26.71.6s-3.89-90.74-3.89-129.84c0-47.23-7.55-108.9-7.55-108.9Z" fill="#68755b"/>
        <polygon points="77.84 507.69 77.84 520.46 111.76 520.46 111.76 508.46 77.84 507.69" fill="#79846d"/>
      </g>

      <!-- Head group -->
      <g class="head-group">
        <path d="M117.94,87.27c-.11,0-.22.01-.34.02-2.93-26.16-25.11-46.5-52.05-46.5S15.47,62.03,13.34,89.01c-.65-.11-1.31-.18-1.99-.18C5.09,88.82,0,93.91,0,100.18s5.08,11.35,11.35,11.35c1.7,0,3.3-.38,4.75-1.05,6.42,18.33,22.73,32,42.54,34.61v15.7s2.51,3.51,6.17,3.51,6.17-3.51,6.17-3.51v-15.51c20.77-2.14,37.92-16.42,44.28-35.63.85.21,1.74.33,2.66.33,6.27,0,11.35-5.08,11.35-11.35s-5.08-11.35-11.35-11.35Z" fill="#f5a487"/>
        <path d="M75.04,144.71c-1.33.24-2.68.44-4.05.58v15.51s-2.5,3.51-6.17,3.51-6.17-3.51-6.17-3.51v-15.7c-19.81-2.61-36.13-16.28-42.55-34.61-1.44.66-3.05,1.05-4.74,1.05-6.27,0-11.36-5.09-11.36-11.36s5.09-11.35,11.36-11.35c.68,0,1.34.07,1.98.18,2.06-26.1,23.23-46.83,49.53-48.15-18.25,10.49-30.3,28.6-30.3,49.17,0,24.86,17.6,46.11,42.47,54.68Z" fill="#ec9982"/>
        <ellipse class="eye eye-right" cx="54.84" cy="94.65" rx="3.16" ry="3.16" fill="#000"/>
        <ellipse class="eye eye-left" cx="79.75" cy="94.65" rx="3.16" ry="3.16" fill="#000"/>
        <ellipse class="cheek cheek-right" cx="40" cy="115" rx="8" ry="5" fill="#ffcaca" opacity="0"/>
        <ellipse class="cheek cheek-left" cx="95" cy="115" rx="8" ry="5" fill="#ffcaca" opacity="0"/>
        <path d="M89.04,79.1c-11,0-20.03,8.55-20.82,19.36h-3.06c-.8-10.8-9.82-19.36-20.82-19.36s-20.9,9.38-20.9,20.9,9.38,20.9,20.9,20.9c10.82,0,19.74-8.26,20.8-18.8h3.12c1.06,10.54,9.98,18.8,20.8,18.8,11.53,0,20.9-9.38,20.9-20.9s-9.38-20.9-20.9-20.9ZM44.33,116.91c-9.32,0-16.9-7.58-16.9-16.9s7.58-16.9,16.9-16.9,16.9,7.58,16.9,16.9-7.58,16.9-16.9,16.9ZM89.04,116.91c-9.32,0-16.9-7.58-16.9-16.9s7.58-16.9,16.9-16.9,16.9,7.58,16.9,16.9-7.58,16.9-16.9,16.9Z" fill="#1f1e1c"/>
        <path class="mouth" d="M73.88,120.31c-1.13,3.36-4.36,5.53-7.74,5.29-3.02-.22-5.67-2.31-6.65-5.29" fill="none" stroke="#c47860" stroke-miterlimit="10"/>
        <path d="M114.23,31.48c-2.55-4.35-5.9-8.37-10.29-10.85-4.39-2.48-9.94-3.24-14.53-1.15-4.59,2.09-7.79,7.34-6.73,12.27C76.98,14.89,60.93,2.03,43.24.14c-2.31-.25-4.8-.28-6.75.97-2.28,1.46-3.24,4.31-3.63,6.99-1.12,7.61,1.73,13.01,4.48,19.61-10.83-4.23-24.37.22-29.63,11.09-4.75,9.81-.41,23.32,9.6,27.64.16.07.33.12.49.19-4.1,11.03-4.46,22.38-4.46,22.38,2.53-8.67,5.61-15.7,8.57-21.21,3.16.59,6.45.6,9.68.43,2.72-.14,5.49-.41,7.94-1.59,2.45-1.18,4.54-3.44,4.8-6.15-.34,3.97,2.28,7.77,5.73,9.76,3.45,1.99,7.58,2.44,11.56,2.35,4.32-.1,8.72-.83,12.46-2.99,3.74-2.15,6.74-5.91,7.17-10.2,1.17,6.67,6.32,12.38,12.71,14.62,5.73,2.01,12.25,1.29,17.61-1.55,2.15,4.3,4.28,9.29,6.19,15.03,0,0-.55-7.89-3.35-16.81,1.62-1.2,3.06-2.63,4.09-4.36,1.68-2.81,2.14-6.18,2.24-9.46.25-8.85-2.04-17.75-6.52-25.39Z" fill="#1d1e19"/>
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
  transform-origin: 35px 178px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.arm-left {
  transform-origin: 95px 178px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.leg-right {
  transform-origin: 45px 270px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.leg-left {
  transform-origin: 90px 270px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.head-group {
  transform-origin: 65px 150px;
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
.character.kind .eye-right { ry: 1.5; cy: 96; }
.character.kind .eye-left { ry: 1.5; cy: 96; }
.character.kind .mouth {
  d: path('M73.88,118c-1.13,5.36-4.36,8.53-7.74,8.29-3.02-.22-5.67-4.31-6.65-8.29');
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
  d: path('M73.88,121.5c-0.8,1.5-3.5,2.5-7.74,2.3-3.02-.15-4.8-1.0-6.65-2.3');
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
  d: path('M73.88,125.6c-1.13-3.36-4.36-5.53-7.74-5.29-3.02,.22-5.67,2.31-6.65,5.29');
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
