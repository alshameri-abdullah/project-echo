<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useHistoryStore } from '@/stores/history';
import { useCharacterStore } from '@/stores/character';
import { useInteractionColors } from '@/composables/useInteractionColors';

const { t, locale } = useI18n();
const { totals, total, percentages } = storeToRefs(useHistoryStore());
const { activeCharacter } = storeToRefs(useCharacterStore());
const { getColor } = useInteractionColors();

const charName = computed(() => activeCharacter.value?.[`name_${locale.value}`] ?? activeCharacter.value?.name);
const genderKey = computed(() => activeCharacter.value?.gender === 'male' ? 'male' : 'female');

const clickSound = new Audio('/sounds/click.mp3');
const playClick = () => clickSound.cloneNode().play();

const stats = [
  { type: 'kind', labelKey: 'stats.kind', index: 0 },
  { type: 'neutral', labelKey: 'stats.neutral', index: 1 },
  { type: 'mean', labelKey: 'stats.mean', index: 2 },
];

const barSegments = [
  { type: 'kind', index: 0 },
  { type: 'neutral', index: 1 },
  { type: 'mean', index: 2 },
];
</script>

<template>
  <div class="section">
    <div class="section-content border-b">
      <div class="border-b border-stone-300 pb-4">
        <div class="font-mono text-lg text-stone-500 lg:text-2xl">
          {{ t(`stats.thisIs_${genderKey}`) }}
          <span class="font-semibold text-black">
            {{ charName ?? t('stats.characterFallback') }} </span
          >. {{ t('stats.interactedWith') }}
          {{ charName ?? t('stats.personFallback') }}
          <span class="font-semibold text-black oldstyle-nums tabular-nums">
            {{ total }}
          </span>
          {{ t('stats.times') }}
        </div>
      </div>

      <div class="flex flex-col gap-6 font-mono text-base lg:text-xl">
        <div class="flex flex-col gap-2">
          <div v-for="stat in stats" :key="stat.type">
            <span
              class="text-lg font-bold oldstyle-nums lg:text-2xl"
              :class="getColor(stat.type).text"
            >
              {{ totals[stat.index] ?? 0 }}
            </span>
            {{ t('stats.timesPeopleWere') }}
            <span class="font-bold" :class="getColor(stat.type).text">{{
              t(stat.labelKey)
            }}</span>
          </div>
        </div>

        <div class="flex h-4">
          <span
            v-for="seg in barSegments"
            :key="seg.type"
            class="group relative h-full cursor-pointer"
            @click="playClick"
            :class="getColor(seg.type).barBg"
            :style="{ width: `${percentages[seg.index]}%` }"
          >
            <span
              class="ease-smooth absolute inset-0 translate-y-1.5 transform bg-black/20 transition-transform duration-500 will-change-transform group-hover:translate-y-2 group-hover:duration-200 group-active:translate-y-0.5 group-active:duration-75"
            />
            <span
              class="absolute inset-0 border border-stone-900"
              :class="getColor(seg.type).barEdge"
            />
            <span
              class="ease-smooth relative block h-full w-full -translate-y-1.5 transform border border-stone-800 shadow-(--inset-highlight) transition-transform duration-500 will-change-transform group-hover:-translate-y-2 group-hover:duration-200 group-active:-translate-y-0.5 group-active:duration-75"
              :class="getColor(seg.type).barFace"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
