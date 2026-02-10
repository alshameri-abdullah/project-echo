<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const locale = computed(() => route.params.locale || 'en');

const email = ref('');
const password = ref('');

async function handleLogin() {
  await authStore.signIn(email.value, password.value);
  if (authStore.isAuthenticated) {
    router.push(`/${locale.value}/dashboard`);
  }
}
</script>

<template>
  <div class="flex flex-1 items-center justify-center">
    <form class="flex w-80 flex-col gap-4" @submit.prevent="handleLogin">
      <h1 class="text-center text-2xl font-bold">Sign In</h1>
      <InputText v-model="email" type="email" placeholder="Email" />
      <Password
        v-model="password"
        placeholder="Password"
        :feedback="false"
        toggleMask
        inputClass="w-full"
      />
      <small v-if="authStore.error" class="text-red-400">{{ authStore.error }}</small>
      <Button type="submit" label="Sign In" :loading="authStore.loading" />
    </form>
  </div>
</template>

<style scoped></style>
