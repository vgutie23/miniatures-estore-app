<!--Vanessa Gutierrez 04/22/2021-->
<template>
  <div
    class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 mb-6 container mx-auto"
  >
    <Product
      v-for="(product, i) in products"
      :key="i"
      :product="product"
      class="p-6 rounded-md shadow-md bg-indigo-800 bg-opacity-90"
    />
  </div>
</template>

<script setup>
import { database } from '../helpers/useAuth'
const { products } = database()
</script>
