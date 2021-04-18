<!--Vanessa Gutierrez 04/18/2021-->
<template>
  <div
    class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 mb-6 container mx-auto"
  >
    <div
      class="p-8 rounded-md shadow-md bg-indigo-800 bg-opacity-90"
      :key="i"
      v-for="(product, i) in products"
      :product="product"
    >
      <p class="text-center text-xs text-orange-500 mb-1">
        {{ product.name }}
      </p>
      <p class="text-center text-xs text-amber-500 font-light mb-3">
        {{ product.price }}
      </p>
      <p>
        <img :src="product.image" class="h-60 w-70 mx-auto" />
      </p>
    </div>
  </div>
</template>

<script>
import { db } from '../config/firebase'

export default {
  data() {
    return {
      products: [],
    }
  },

  firestore() {
    return {
      products: db.collection('products'),
    }
  },

  methods: {
    readProducts() {
      db.collection('products')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            this.products.push(doc.data())
          })
        })
    },
  },

  created() {
    this.readProducts()
  },
}
</script>
