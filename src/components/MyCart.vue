<!--Vanessa Gutierrez 05/06/2021-->
<template>
  <ul class="flex flex-col divide-y divide-pink-500">
    <li class="flex py-1">
      <div class="flex w-full space-x-4 sm:space-x-5">
        <img
          class="object-cover w-24 h-24 rounded-lg"
          :src="cartItem.productImage"
        />
        <div class="w-full pb-3">
          <div class="flex justify-between w-full pb-4 space-x-6">
            <div class="space-y-4">
              <h3
                class="text-lg font-bold leading-snug sm:pr-8 mt-4 text-left text-violet-50"
              >
                {{ cartItem.productName }}
              </h3>
            </div>
            <div class="text-right">
              <p class="text-lg font-semibold mt-4 text-violet-50">
                {{ currencyFormat(cartItem.productPrice) }}
              </p>
            </div>
          </div>
          <div class="text-right text-sm">
            <GetCartItems />
            <button
              @click="deleteCartItem(cartItem)"
              class="p-1 bg-pink-500 rounded-md hover:bg-pink-600 text-violet-50"
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'
import { currencyFormat, deleteCartItem } from '../helpers/useAuth'

const props = defineProps({
  cartItem: {
    type: Object,
    default: () => {
      return {
        userId: '',
        productPrice: 0,
        productQuantity: 0,
        productName: '',
        productImage: '',
      }
    },
  },
})
</script>
