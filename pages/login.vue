<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded shadow-md">
      <h1 class="mb-6 text-2xl font-bold text-center">Login</h1>
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input
              id="username"
              v-model="username"
              type="text"
              required
              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <span v-if="usernameError" class="text-sm text-red-600">{{ usernameError }}</span>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
              id="password"
              v-model="password"
              type="password"
              required
              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <span v-if="passwordError" class="text-sm text-red-600">{{ passwordError }}</span>
        </div>
        <button
            type="submit"
            :disabled="!valid"
            class="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {storeToRefs} from "pinia";
import {apiUser} from "~/stores/apiUser";

const {authenticated } = storeToRefs(apiUser())
const {Login} = apiUser();

definePageMeta({
  layout: 'customer',
});
const router = useRouter()

const username = ref('emilys');
const password = ref('emilyspass');

const usernameError = computed(() => {
  return !username.value ? 'Username is required' : '';
});

const passwordError = computed(() => {
  return !password.value ? 'Password is required' : '';
});

const valid = computed(() => {
  return username.value && password.value;
});



const submit = async () => {
  if (valid.value) {

    const data = {
      username: username.value,
      password: password.value,
      expiresInMins: 30
    }
    // const check = await Login(dat
   await Login(data)
    if (authenticated) {
      router.push('/');
    }
  }
};
</script>

<style scoped>
/* TailwindCSS styles are generally not needed to be scoped */
</style>
