<!--Vanessa Gutierrez 05/06/2021-->
<template>
  <div
    v-if="cartItems"
    v-for="(cartItem, i) in cartItems"
    :key="i"
    :cartItem="cartItem"
  />
</template>

<script setup>
import { getItems } from '../helpers/useAuth'

const cartItems = getItems()
</script>
