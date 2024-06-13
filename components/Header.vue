

<template>
  <div class="bg-pink-950">
    <div class="py-4 flex justify-between w-[90%] mx-auto text-white px-10 opacity-80">
      <div>
        <h1 class="text-3xl font-bold">Header</h1>
      </div>
      <div class="mt-2">
        <ul class="flex gap-4">
          <li class="hover:opacity-10" @click="router.push('/')">Home</li>
          <li class="hover:opacity-10" @click="router.push('/about')">About</li>
          <li class="hover:opacity-10">Contact</li>
        </ul>
      </div>
      <div class="p-2 hover:opacity-30 bg-white text-black font-bold rounded-lg">
        <button class="flex items-center" @click="logout">
          <p><Icon name="icon-park-outline:power" class="text-black mr-2 text-[20px]"  /> </p>
         Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
import {storeToRefs} from "pinia";
import {apiUser} from "~/stores/apiUser";


const {authenticated } = storeToRefs(apiUser())

const {Logout} = apiUser()
const logout = () => {
  Logout();
  router.push('/login');
};
</script>

<style scoped></style>
