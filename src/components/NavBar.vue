<!--Vanessa Gutierrez 04/23/2021-->
<template>
  <AlertError v-if="isError" />
  <div class="navbar mb-1 bg-indigo-900 shadow-sm text-neutral-content">
    <div class="flex-1">
      <span class="sm:text-sm md:text-sm lg:text-sm xl:text-lg font-bold">
        Marvelous Minis
      </span>
    </div>

    <div class="flex ml-auto">
      <div class="flex py-3 ml-auto items-stretch flex-shrink-0">
        <router-link
          to="/"
          class="btn btn-ghost hover:bg-indigo-700 btn-xs rounded-btn"
        >
          Home
        </router-link>
        <router-link
          to="/miniitems"
          class="btn btn-ghost hover:bg-indigo-700 btn-xs rounded-btn"
        >
          Mini Items
        </router-link>
        <div v-if="!isAuthenticated">
          <router-link
            to="/login"
            class="btn btn-ghost hover:bg-indigo-700 btn-xs rounded-btn"
          >
            Login
          </router-link>
          <router-link
            to="/register"
            class="btn btn-ghost hover:bg-indigo-700 btn-xs rounded-btn"
          >
            Register
          </router-link>
        </div>
        <div v-else>
          <router-link
            to="/account"
            class="btn btn-ghost hover:bg-indigo-700 btn-xs rounded-btn"
          >
            My Account
          </router-link>
          <router-link
            to="/cart"
            class="btn btn-ghost hover:bg-indigo-700 btn-xs rounded-btn"
          >
            Cart
          </router-link>
          <button
            class="btn bg-pink-500 hover:bg-indigo-600 btn-xs rounded-btn"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { isAuthenticated, signOut } from '../helpers/useAuth'
import { isError } from '../helpers/useError'

const router = useRouter()
const logout = async () => {
  await signOut()
  router.push('/')
}
</script>
