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
      viewBox="0 0 156.32 509.14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Hair back -->
      <g class="hair-back">
        <path
          d="M142.75,85.55c3-12-2.44-25.23-6.08-36.44-.15-.24-.29-.49-.4-.76-1.57-.66-3.16-1.29-4.76-1.85-12.54-4.38-26.06-6.66-39.09-9.05-6.51-1.19-13.15-2.44-19.79-2.45-6.67,0-12.47,2.44-18.58,4.83-5.49,2.15-10.97,4.23-16.62,5.94-4.54,1.37-8.63,4.74-13.26,5.5C15.73,73.87,8.02,96.77.75,120.55c-2,7,0,15,6,19,4,2,10,2,13,5,3,5,0,12,1,18s7,7,11,10c30-1,61-1,91-4,7,0,14-5,18-12,5-10,1-21-7-29-5-7-8-15-5-23,4-7,11-11,14-19Z"
          fill="#273574"
        />
        <path
          d="M41.45,161.31c-1.83-2.58-3.96-5.04-4.9-8.06-1.12-3.62-.4-7.68-1.89-11.17-1.29-3.01-4.01-5.12-6.23-7.53-6.94-7.56-8.94-19.28-4.9-28.71,1.36-3.17,3.32-6.05,4.91-9.12,2.22-4.27,3.73-8.97,3.9-13.78.09-2.52-.21-5.05-.86-7.48-.32-1.21-.74-2.39-1.22-3.54-1.67-.78-3.3-1.62-4.97-2.4-2.39-1.12-4.21-2.5-6.36-3.96-.07.23-.17.46-.23.69C12.36,84.01,6.41,102.01.75,120.55c-2,7,0,15,6,19,4,2,10,2,13,5,3,5,0,12,1,18s7,7,11,10c2.92-.1,5.86-.18,8.8-.27-.07-.11-.15-.21-.22-.31.59.01,1.19.01,1.77.01.66,0,1.38-.03,1.86-.48.39-.36.53-.93.59-1.46.35-3.14-1.27-6.15-3.1-8.73Z"
          fill="#1b2753"
        />
      </g>

      <!-- Body (shirt + collar) -->
      <g>
        <path
          d="M111.41,149.81s-3.26-19.58-32.39-19.58-34.19,19.58-34.19,19.58v80.45h66.58v-80.45Z"
          fill="#ee602c"
        />
        <path
          d="M99.04,136.53c-.63-1.6-2.5-3.34-4.94-4.26-2.43-.92-4.55-1.35-7.02-1.5,0,0,.58,2.71-1.11,4.26-1.58,1.44-7.04,4.02-7.77,4.36-.55-.34-4.7-2.91-6.28-4.36-1.69-1.55-1.11-4.26-1.11-4.26-2.47.15-4.58.58-7.02,1.5-2.43.92-4.31,2.66-4.94,4.26-.63,1.6.34,4.06,1.16,5.52s3.34,4.16,3.34,4.16c0,0,1.45.77,3.53.77s3.58-1.16,3.58-1.16l7.73-6.34,8.92,6.82s1.89,1.02,3.97,1.02,3.46-1.11,3.46-1.11c0,0,2.85-2.4,3.68-3.85.82-1.45,1.45-4.23.82-5.83Z"
          fill="#fff"
        />
      </g>

      <!-- Right arm -->
      <g class="arm arm-right">
        <path d="M56.28,158.71c-3.93-2.33-7.86-4.65-11.8-6.95-23.24,43.88-26.7,60.99-26.37,110.79-1.05,1.71-2.03,3.47-1.85,5.58.43,5.06,3.74,8.93,9.04,8.93s8.63-3.87,9.03-8.93c.19-2.39-.99-4.32-2.32-6.15-1.33-46.5.89-62.91,24.27-103.27Z" fill="#ec9982"/>
        <path d="M45.98,147.32c4.51,2.54,9.06,4.99,13.54,7.57-11.58,20.86-23.42,40.69-26.46,64.78-5.16-.39-10.32-.72-15.46-1.25,3.35-26.25,15.76-48.3,28.38-71.1Z" fill="#ee602c"/>
      </g>

      <!-- Left arm -->
      <g class="arm arm-left">
        <path d="M139.32,261.75c.45-58.37-.69-60.38-26.37-108.84-3.95,2.29-7.88,4.62-11.8,6.95,25.04,42.98,25.89,48.14,24.29,102.98-1.06,1.49-1.7,3.31-1.7,5.28,0,5.02,4.07,9.1,9.1,9.1s9.1-4.07,9.1-9.1c0-2.48-1-4.73-2.61-6.37Z" fill="#ec9982"/>
        <path d="M110.95,148.3c-4.5,2.56-9.07,4.96-13.54,7.57,11.77,21.47,24.13,39.94,26.46,64.78,5.15-.4,10.32-.68,15.46-1.25-2.68-27.01-15.54-47.77-28.38-71.1Z" fill="#ee602c"/>
      </g>

      <!-- Right leg -->
      <g class="leg leg-right">
        <rect x="50.3" y="492.43" width="15.29" height="8.97" fill="#ec9982"/>
        <path d="M50.3,500.53s-5.98.06-8.84,1.74c-2.14,1.26-2.79,2.56-3.8,4.07-.8,1.19.07,2.8,1.51,2.8l27-.13-.23-8.48h-15.65Z" fill="#ee602c"/>
        <path d="M43.72,240.19s-4.18,3.74-6.11,8.68c-1.94,4.94-2.6,12.94-2.76,15.18-.16,2.24.6,67.42,2.32,99.15,1.72,31.73,7.72,118.19,7.72,118.19l26.9-1.32s-.23-89.11.66-108.23,6.18-84.29,6.18-84.29c0,0,.23-1.55,1.1-1.55v-45.81h-36Z" fill="#183041"/>
        <polygon points="40.52 480.61 41.02 493.64 76.85 492.09 76.85 479.06 40.52 480.61" fill="#1d364d"/>
      </g>

      <!-- Left leg -->
      <g class="leg leg-left">
        <rect x="101.1" y="492.43" width="15.29" height="8.97" fill="#ec9982"/>
        <path d="M116.04,500.53s5.98.06,8.84,1.74c2.14,1.26,2.79,2.56,3.8,4.07.8,1.19-.07,2.8-1.51,2.8l-27-.13.23-8.48h15.65Z" fill="#ee602c"/>
        <path d="M122.14,261.24c-.58-2.92-2.1-8.56-4.74-13.87s-5.74-7.18-5.74-7.18h-31.94v45.81c.87,0,1.13,1.52,1.13,1.52,0,0,7.71,65.82,9.48,84.19,1.77,18.37,5.81,109.61,5.81,109.61l26.71.6s3.1-74.22,3.29-113.31c.19-39.1-3.42-104.45-4-107.37Z" fill="#183041"/>
        <polygon points="92.73 480.87 92.73 493.64 126.65 493.64 126.65 481.64 92.73 480.87" fill="#1d364d"/>
      </g>

      <!-- Head group -->
      <g class="head-group">
        <path d="M132.83,60.45c-.11,0-.22.01-.34.02-2.93-26.16-25.11-46.5-52.05-46.5S30.36,35.21,28.23,62.19c-.65-.11-1.31-.18-1.99-.18-6.27,0-11.35,5.08-11.35,11.35s5.08,11.35,11.35,11.35c1.7,0,3.3-.38,4.75-1.05,6.42,18.33,22.73,32,42.54,34.61v15.7s2.51,3.51,6.17,3.51,6.17-3.51,6.17-3.51v-15.51c20.77-2.14,37.92-16.42,44.28-35.63.85.21,1.74.33,2.66.33,6.27,0,11.35-5.08,11.35-11.35s-5.08-11.35-11.35-11.35Z" fill="#f5a487"/>
        <path d="M89.93,117.89c-1.33.24-2.68.44-4.05.58v15.51s-2.5,3.51-6.17,3.51-6.17-3.51-6.17-3.51v-15.7c-19.81-2.61-36.13-16.28-42.55-34.61-1.44.66-3.05,1.05-4.74,1.05-6.27,0-11.36-5.09-11.36-11.36s5.09-11.35,11.36-11.35c.68,0,1.34.07,1.98.18,2.06-26.1,23.23-46.83,49.53-48.15-18.25,10.49-30.3,28.6-30.3,49.17,0,24.86,17.6,46.11,42.47,54.68Z" fill="#ec9982"/>
        <ellipse class="eye eye-right" cx="69.73" cy="67.83" rx="3.16" ry="3.16" fill="#000"/>
        <ellipse class="eye eye-left" cx="94.64" cy="67.83" rx="3.16" ry="3.16" fill="#000"/>
        <ellipse class="cheek cheek-right" cx="50" cy="90" rx="8" ry="5" fill="#ffcaca" opacity="0"/>
        <ellipse class="cheek cheek-left" cx="111" cy="90" rx="8" ry="5" fill="#ffcaca" opacity="0"/>
        <path d="M103.93,52.28c-11,0-20.03,8.55-20.82,19.36h-3.06c-.8-10.8-9.82-19.36-20.82-19.36s-20.9,9.38-20.9,20.9,9.38,20.9,20.9,20.9c10.82,0,19.74-8.26,20.8-18.8h3.12c1.06,10.54,9.98,18.8,20.8,18.8,11.53,0,20.9-9.38,20.9-20.9s-9.38-20.9-20.9-20.9ZM59.22,90.09c-9.32,0-16.9-7.58-16.9-16.9s7.58-16.9,16.9-16.9,16.9,7.58,16.9,16.9-7.58,16.9-16.9,16.9ZM103.93,90.09c-9.32,0-16.9-7.58-16.9-16.9s7.58-16.9,16.9-16.9,16.9,7.58,16.9,16.9-7.58,16.9-16.9,16.9Z" fill="#ee602c"/>
        <path class="mouth" d="M88.77,93.48c-1.13,3.36-4.36,5.53-7.74,5.29-3.02-.22-5.67-2.31-6.65-5.29" fill="none" stroke="#c47860" stroke-miterlimit="10"/>
        <path d="M156.32,47.41c-9.86-.44-40.57,3.14-40.57,3.14-13,1-26-2-39-7-10-4-18-12-21.59-21.65,0,0-3.14,12.56-13.46,27.66-10.33,15.1-21.43,12.25-21.43,12.25,5.49-15.2,11.29-30.24,17.48-45.27C41.75,7.54,50.75-2.46,61.75.54s22,4,33,6c2,1,5,2,7,3l9,6c10,9,19,22,33.27,23.94,5.4.55,10.39,2.42,12.3,7.93Z" fill="#273574"/>
      </g>

      <!-- Belt -->
      <rect x="43.36" y="229.22" width="69.52" height="11.63" fill="#000"/>
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
  transform-origin: 50px 150px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.arm-left {
  transform-origin: 110px 150px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.leg-right {
  transform-origin: 60px 240px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.leg-left {
  transform-origin: 110px 240px;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.head-group,
.hair-back {
  transform-origin: 78px 125px;
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
.character.kind .eye-right { ry: 1.5; cy: 69; }
.character.kind .eye-left { ry: 1.5; cy: 69; }
.character.kind .mouth {
  d: path('M88.77,91c-1.13,5.36-4.36,8.53-7.74,8.29-3.02-.22-5.67-4.31-6.65-8.29');
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
.character.neutral .head-group,
.character.neutral .hair-back {
  animation: head-tilt 0.8s ease-in-out 1;
}

.character.neutral .eye-right { ry: 1.5; }
.character.neutral .eye-left { ry: 1.5; }
.character.neutral .mouth {
  d: path('M88.77,94.5c-0.8,1.5-3.5,2.5-7.74,2.3-3.02-.15-4.8-1.0-6.65-2.3');
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
  d: path('M88.77,98.77c-1.13-3.36-4.36-5.53-7.74-5.29-3.02,.22-5.67,2.31-6.65,5.29');
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
