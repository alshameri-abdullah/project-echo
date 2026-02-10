<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const { t } = useI18n();
const route = useRoute();
const locale = computed(() => route.params.locale || 'en');
</script>

<template>
  <footer class="py-2 text-center text-xs tracking-wide text-black/30">
    {{ t('footer.madeBy') }}
    <a
      href="https://www.instagram.com/its.shamiry/"
      target="_blank"
      rel="noopener"
      class="underline hover:text-black/50"
      >Ace</a
    >
    {{ t('footer.asParFor') }}
    <a
      href="https://www.uca.ac.uk/"
      target="_blank"
      rel="noopener"
      class="underline hover:text-black/50"
      >UCA</a
    >
    &bull;
    <RouterLink :to="`/${locale}/about`" class="underline hover:text-black/50"
      >{{ t('footer.knowMore') }}</RouterLink
    >
  </footer>
</template>
