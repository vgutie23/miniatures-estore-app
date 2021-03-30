<!--Vanessa Gutierrez 03/30/2021-->
<template>
  <AlertError v-if="isError" />
  <div class="navbar mb-1 bg-indigo-900 shadow-sm text-neutral-content">
    <div class="flex-1">
      <span class="sm:text-lg md:text-lg lg:text-lg xl:text-xl font-bold">
        Marvelous Minis
      </span>
    </div>

    <div class="flex ml-auto">
      <div class="flex py-2 ml-auto items-stretch">
        <router-link
          to="/"
          class="btn btn-ghost hover:bg-indigo-700 btn-sm rounded-btn"
        >
          Home
        </router-link>
        <router-link
          to="/miniitems"
          class="btn btn-ghost hover:bg-indigo-700 btn-sm rounded-btn"
        >
          Mini Items
        </router-link>
        <div v-if="!isAuthenticated">
          <router-link
            to="/login"
            class="btn btn-ghost hover:bg-indigo-700 btn-sm rounded-btn"
          >
            Login
          </router-link>
          <router-link
            to="/register"
            class="btn btn-ghost hover:bg-indigo-700 btn-sm rounded-btn"
          >
            Register
          </router-link>
        </div>
        <div v-else>
          <router-link
            to="/account"
            class="btn btn-ghost hover:bg-indigo-700 btn-sm rounded-btn"
          >
            My Account
          </router-link>
          <router-link
            to="/cart"
            class="btn btn-ghost hover:bg-indigo-700 btn-sm rounded-btn"
          >
            Cart
          </router-link>
          <button
            class="btn bg-pink-500 hover:bg-indigo-600 btn-sm rounded-btn"
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
