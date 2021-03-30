<!--Vanessa Gutierrez 03/30/2021-->
<template>
  <div
    class="alert bg-red-600 tracking-wider text-white text-sm rounded-none h-12"
  >
    <span class="flex-1 mr-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-4 h-5 mx-2 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        ></path>
      </svg>
      <label>{{ msg }}</label>
    </span>
  </div>
</template>

<script setup>
import { msg } from '../helpers/useError'
</script>
