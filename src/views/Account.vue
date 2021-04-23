<!--Vanessa Gutierrez 04/23/2021-->
<template>
  <div class="mt-12">
    <h1
      class="bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-800 font-extrabold tracking-wider text-4xl text-center text-transparent"
    >
      MY ACCOUNT
    </h1>
    <div
      class="container text-center mx-auto rounded-lg bg-indigo-900 bg-opacity-95 text-white mt-9 mb-9 max-w-lg p-20"
    >
      <div
        class="bg-clip-text bg-gradient-to-r from-pink-400 to-violet-200 font-extrabold tracking-wider text-xl text-center text-transparent mt-9 mb-9"
      >
        <p>Name: {{ user?.displayName }}</p>
        <p>Email Address: {{ user?.email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { user } from '../helpers/useAuth'
</script>
