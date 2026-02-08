<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

async function handleSignOut() {
  await authStore.signOut();
  router.push('/login');
}
</script>

<template>
  <div class="relative h-full">
    <Button
      icon="pi pi-sign-out"
      severity="secondary"
      text
      rounded
      class="absolute right-4 top-4"
      @click="handleSignOut"
    />
    <h1>Dashboard</h1>
  </div>
</template>

<style scoped></style>
