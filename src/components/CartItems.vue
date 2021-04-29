<!--Vanessa Gutierrez 04/29/2021-->
<template>
  <div>
    <div
      class="flex flex-col container items-center justify-center text-center mx-auto rounded-lg bg-indigo-900 bg-opacity-95 text-white mt-9 mb-9 max-w-xl p-4 space-y-2"
    >
      <MyCart
        v-for="(cartItem, i) in cartItems"
        :key="i"
        :cartItem="cartItem"
        class="p-3 w-full"
      />
      <div class="text-center ml-auto mr-auto">
        <h3 class="text-xl font-bold text-violet-50">
          Subtotal:
          <span class="font-bold text-violet-50">$0.00</span>
        </h3>
        <p class="text-xs text-coolGray-400">Before taxes and shipping</p>
      </div>
      <div class="flex justify-end space-x-3 pt-5">
        <router-link to="/miniitems">
          <button
            class="btn-sm px-2 p-1 border-none rounded-lg bg-fuchsia-800 hover:bg-fuchsia-900 text-violet-50 text-sm"
          >
            Continue Shopping
          </button>
        </router-link>
        <button
          class="btn-sm px-2 p-1 border-none rounded-lg bg-pink-500 hover:bg-pink-600 text-violet-50 text-sm"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getItems } from '../helpers/useAuth'
const cartItems = getItems()
</script>
