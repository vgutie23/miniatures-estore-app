<!--Vanessa Gutierrez 04/23/2021-->
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
    <div class="p-6 text-center mx-auto container">
      <div class="float-left w-1/2">
        <img
          class="rounded-lg p-2 shadow-xl opacity-95 ml-auto mr-auto mt-1"
          src="/src/assets/pexels-nataliya-vaitkevich-6214386.jpg"
          alt="Mini Online Shopping Cart"
          width="250"
          height="250"
        />
      </div>
      <div class="float-right w-1/2 mt-10 sm:break-normal ml-auto mr-auto">
        <p class="font-serif text-fuchsia-900">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          ducimus eaque eligendi eum dolore cum unde blanditiis nisi voluptatum
          facilis expedita, quia consectetur, dignissimos nemo magnam et quaerat
          natus accusamus.
        </p>
        <router-link to="/miniitems">
          <button
            class="btn bg-fuchsia-800 bg-opacity-90 hover:bg-pink-600 border-none btn-sm rounded-btn mt-4"
          >
            View Products
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { user } from '../helpers/useAuth'
</script>
