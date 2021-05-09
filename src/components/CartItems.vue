<!--Vanessa Gutierrez 05/09/2021-->
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
      <div v-if="cartItems >= [0]">
        <div class="text-center ml-auto mr-auto">
          <h3 class="text-lg font-bold text-violet-50">
            Subtotal:
            <span class="text-violet-50">{{
              currencyFormat(addSubtotal(cartItems))
            }}</span>
          </h3>
          <p class="text-xs text-coolGray-400 mb-1">Before taxes</p>
        </div>
        <div class="text-center ml-auto mr-auto">
          <h3 class="text-lg font-bold text-violet-50">
            Total:
            <span class="font-bold text-violet-50">{{
              currencyFormat(
                addSubtotal(cartItems) * 0.0825 + addSubtotal(cartItems),
              )
            }}</span>
          </h3>
          <p class="text-xs text-coolGray-400">After taxes (+8.25%)</p>
        </div>
        <div class="flex justify-end space-x-3 pt-3">
          <router-link to="/miniitems">
            <button
              class="btn-sm px-2 p-1 border-none rounded-lg bg-fuchsia-800 hover:bg-fuchsia-900 text-violet-50 text-sm"
            >
              Continue Shopping
            </button>
          </router-link>
          <button
            @click="showAlert"
            class="btn-sm px-2 p-1 border-none rounded-lg bg-pink-500 hover:bg-pink-600 text-violet-50 text-sm"
          >
            Checkout
          </button>
        </div>
      </div>
      <div
        v-else
        class="container text-center mx-auto rounded-lg text-white mt-9 mb-9 max-w-lg p-16"
      >
        <div
          class="font-extrabold tracking-wider text-xl text-center text-pink-300 mt-1 mb-1"
        >
          <p>No Items in Cart</p>
        </div>
        <router-link to="/miniitems">
          <button
            class="btn-sm px-2 p-1 border-none rounded-lg bg-fuchsia-800 hover:bg-pink-600 text-violet-100 text-xs"
          >
            Start Shopping
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  getItems,
  addSubtotal,
  currencyFormat,
  deleteAllCartItems,
} from '../helpers/useAuth'

const cartItems = getItems()

const showAlert = () => {
  alert('Thank you, your order has been placed!')
  deleteAllCartItems()
}
</script>
