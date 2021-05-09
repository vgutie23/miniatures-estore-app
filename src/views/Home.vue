<!--Vanessa Gutierrez 05/08/2021-->
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
      <div class="float-right w-1/2 mt-0 sm:break-normal ml-auto mr-auto">
        <p
          class="font-serif text-fuchsia-900 bg-pink-400 bg-opacity-30 rounded-md lg:bg-transparent lg:mt-6 lg:mr-28"
        >
          Marvelous Minis is a place for all! I am the sole owner of this
          business. I started this business with a love of miniature items! My
          goal when I started this business was to sell products that are
          accessible and affordable by all! I try to sell items that are tough
          to find for sale online. I usually update my website to include
          completely new products every 2 weeks, or sooner if an item sells out!
          I hope you all enjoy shopping here. If you have any questions or
          concerns, please email me at marvelousminis@example.com. Your
          happiness is my top priority! With that being said, thank you for
          choosing to support my business, I am thrilled to see you here and
          looking forward to keeping you as a happy customer!
        </p>
        <router-link to="/miniitems">
          <button
            class="btn bg-fuchsia-800 bg-opacity-90 hover:bg-pink-600 border-none btn-sm rounded-btn mt-4 lg:mr-28"
          >
            View Products
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <HomeFooter />
</template>

<script setup>
import { user } from '../helpers/useAuth'
</script>
