
<template>
  <div >
      <Header />
    <v-container>
      <slot />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: 'auth'
})
</script>


<style scoped></style>
