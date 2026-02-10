<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const locale = computed(() => route.params.locale || 'en');

async function handleSignOut() {
  await authStore.signOut();
  router.push(`/${locale.value}/login`);
}
</script>

<template>
  <div class="relative flex-1">
    <Button
      icon="pi pi-sign-out"
      severity="secondary"
      text
      rounded
      class="absolute end-4 top-4"
      @click="handleSignOut"
    />
    <h1>Dashboard</h1>
  </div>
</template>

<style scoped></style>
