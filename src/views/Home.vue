<!--Vanessa Gutierrez 04/15/2021-->
<template>
  <div class="mt-12">
    <h1
      class="bg-clip-text font-extrabold tracking-wider text-4xl text-gray-800 text-center"
    >
      Home Page
    </h1>
    <p class="text-center mt-3">Hello {{ user?.displayName || '' }}</p>
  </div>
  <Footer />
</template>

<script setup>
import { user } from '../helpers/useAuth'
</script>
