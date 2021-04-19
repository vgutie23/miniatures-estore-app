<!--Vanessa Gutierrez 04/15/2021-->
<template>
  <div class="mt-12">
    <h1
      class="bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-800 font-extrabold tracking-wider text-4xl text-center text-transparent"
    >
      ♡ MARVELOUS MINIS ♡
    </h1>
    <p class="text-center font-serif mt-3 text-fuchsia-900">
      Welcome to our page,
      {{ user?.displayName || 'we are beyond excited to see you here!' }}
    </p>
    <div class="w-full mx-auto mt-5 p-8 text-center">
      <div class="float-left w-1/2 text-center">
        <img
          class="rounded-lg p-2 shadow-md opacity-95 mx-auto"
          src="/src/assets/pexels-olya-kobruseva-5417638.jpg"
          alt="Mini Online Shopping Cart"
          width="500"
          height="500"
        />
      </div>
      <div class="float-right w-1/2 mt-14 pr-36 text-center">
        <p
          class="font-serif sm:text-sm md:text-sm lg:text-base text-fuchsia-900"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          ducimus eaque eligendi eum dolore cum unde blanditiis nisi voluptatum
          facilis expedita, quia consectetur, dignissimos nemo magnam et quaerat
          natus accusamus.
        </p>
        <button
          class="btn bg-indigo-600 hover:bg-pink-500 btn-sm rounded-btn mt-10"
        >
          View Products
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { user } from '../helpers/useAuth'
</script>
