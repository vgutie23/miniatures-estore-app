<!--Vanessa Gutierrez 05/08/2021-->
<template>
  <div>
    <p class="text-center text-xs text-violet-50 mb-3">
      {{ product.name }}
    </p>
    <p>
      <img :src="product.image" class="h-60 w-70 mx-auto" />
    </p>
    <p class="text-center text-xs text-violet-100 mt-3">
      {{ currencyFormat(product.price) }}
    </p>
    <router-link to="/login" v-if="!isAuthenticated">
      <button
        class="bg-pink-600 px-7 focus:outline-none hover:bg-pink-800 rounded-md text-center mt-2 ml-auto mr-auto flex text-violet-50 text-xs"
      >
        Sign in to Add to Cart
      </button>
    </router-link>
    <div v-else>
      <button
        @click="addToCart(product)"
        class="bg-fuchsia-800 px-7 focus:outline-none hover:bg-pink-600 rounded-md text-center mt-2 ml-auto mr-auto flex text-violet-50 text-xs"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { isAuthenticated, database, user } from '../helpers/useAuth'
import { defineEmit } from 'vue'
import { currencyFormat } from '../helpers/useAuth'

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

const { products, cart } = database()
const emit = defineEmit(['added'])

const addToCart = product => {
  cart(product, user)
  emit('added')
}
</script>
