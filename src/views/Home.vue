<!--Vanessa Gutierrez 03/30/2021-->
<template>
  <div class="mt-6">
    <h1 class="text-2xl font-bold pt-5 text-center">Home Page</h1>
    <p class="text-center mt-3">Hello {{ user?.displayName || '' }}</p>
  </div>
</template>

<script setup>
import { user } from '../helpers/useAuth'
</script>
