import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { auth } from '@/lib/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const ready = ref(false);
  const error = ref(null);
  const loading = ref(false);

  const isAuthenticated = computed(() => !!user.value);

  let readyResolve;
  const readyPromise = new Promise((resolve) => {
    readyResolve = resolve;
  });

  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser;
    if (!ready.value) {
      ready.value = true;
      readyResolve();
    }
  });

  function waitForReady() {
    return readyPromise;
  }

  async function signIn(email, password) {
    error.value = null;
    loading.value = true;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  async function signOut() {
    await firebaseSignOut(auth);
  }

  return { user, ready, error, loading, isAuthenticated, waitForReady, signIn, signOut };
});
