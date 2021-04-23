<!--Vanessa Gutierrez 04/22/2021-->
<template>
  <div>
    <p class="text-center text-xs text-gray-300 mb-3">
      {{ product.name }}
    </p>
    <p>
      <img :src="product.image" class="h-60 w-70 mx-auto" />
    </p>
    <p class="text-center text-xs text-pink-300 font-light mt-3">
      {{ product.price }}
    </p>
    <router-link to="/login" v-if="!isAuthenticated">
      <button
        class="bg-pink-600 px-7 focus:outline-none hover:bg-fuchsia-900 rounded-md text-center mt-2 ml-auto mr-auto flex text-gray-200 text-xs"
      >
        Sign in to Add to Cart
      </button>
    </router-link>
    <button
      v-else
      class="bg-fuchsia-700 px-7 focus:outline-none hover:bg-violet-500 rounded-md text-center mt-2 ml-auto mr-auto flex text-gray-200 text-xs"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { isAuthenticated } from '../helpers/useAuth'

const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      image: '',
      name: '',
      price: 0,
      quantity: 0,
    }),
  },
})
</script>
