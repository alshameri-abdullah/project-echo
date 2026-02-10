<script setup>
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useHistoryStore } from '@/stores/history';
import { useInteractionColors } from '@/composables/useInteractionColors';

const { t } = useI18n();
const { interactions } = storeToRefs(useHistoryStore());
const { getColor } = useInteractionColors();
</script>

<template>
  <div class="section">
    <div class="section-content border-b">
      <h2 class="section-label">{{ t('recentInteractions.title') }}</h2>
      <div class="flex flex-col gap-4 font-mono">
        <div
          v-for="interaction in interactions"
          :key="interaction.id"
          class="border-s-2 ps-4"
          :class="getColor(interaction.type).border"
        >
          <div
            class="text-base lg:text-lg font-medium"
            :class="getColor(interaction.type).text"
          >
            {{ t(`tools.${interaction.tool.toLowerCase()}`, interaction.tool) }}
          </div>
          <div class="text-stone-400">
            <span :class="interaction.isOwn ? 'text-stone-900' : ''">
              {{ interaction.isOwn ? t('recentInteractions.you') : t('recentInteractions.someoneElse') }}
            </span>
            <span class="mx-1">&middot;</span>
            {{ interaction.time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
