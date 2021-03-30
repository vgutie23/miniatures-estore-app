<!--Vanessa Gutierrez 03/30/2021-->
<template>
  <div
    class="container flex items-center justify-center text-center max-w-2xl mx-auto rounded bg-indigo-900 text-white mt-11 mb-4"
  >
    <form
      @submit.prevent
      class="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-100"
    >
      <h1 v-if="form == 'login'" class="text-4xl font-bold mb-1">Sign In</h1>
      <h1 v-else class="text-4xl font-bold mb-1">Register</h1>
      <label
        v-if="form == 'register'"
        for="name"
        class="self-start mt-3 text-xs font-semibold text-amber-400 text-content-200 tracking-wide"
        >Name:</label
      >
      <input
        v-if="form == 'register'"
        id="name"
        type="text"
        placeholder="Full Name"
        class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-70 bg-gray-100 text-coolGray-900"
        v-model="name"
      />
      <p class="capitalize text-sm text-red-700 text-left">{{ nameError }}</p>
      <label
        for="email"
        class="self-start mt-3 text-xs font-semibold text-amber-400 text-content-200 tracking-wide"
        >Email:</label
      >
      <input
        id="email"
        type="text"
        placeholder="abc123@example.com"
        class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-70 bg-gray-100 text-coolGray-900"
        v-model="email"
      />
      <p class="capitalize text-sm text-red-700 text-left">{{ emailError }}</p>
      <label
        for="password"
        class="self-start mt-3 text-xs font-semibold text-amber-400 text-content-200 tracking-wide"
        >Password:</label
      >
      <input
        id="password"
        type="password"
        placeholder="********"
        class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-70 bg-gray-100 text-coolGray-900"
        v-model="password"
      />
      <p class="capitalize text-sm text-red-700 text-left">
        {{ passwordError }}
      </p>
      <label
        v-if="form == 'register'"
        for="passwordConfirmation"
        class="self-start mt-3 text-xs font-semibold text-amber-400 text-content-200 tracking-wide"
        >Confirm Password:</label
      >
      <input
        v-if="form == 'register'"
        id="passwordConfirmation"
        type="password"
        placeholder="********"
        class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-90 bg-gray-100 text-coolGray-900"
        v-model="passwordConfirmation"
      />
      <p class="capitalize text-sm text-red-700 text-left">
        {{ passwordConfirmationError }}
      </p>
      <button
        v-if="form == 'login'"
        @click="login"
        class="btn bg-red-500 hover:bg-indigo-600 mt-6"
      >
        Login
      </button>
      <button
        v-else
        @click="signup"
        class="btn bg-pink-500 hover:bg-indigo-600 mt-6"
      >
        Register
      </button>
      <button @click="google" class="btn bg-amber-500 hover:bg-indigo-600 mt-5">
        <img
          class="w-6"
          src="../assets/googleicon.svg"
          alt="Google Logo
          Image"
        />
      </button>
      <div
        class="flex justify-center mt-4 space-x-2 text-sm text-gray-200 hover:text-amber-500 hover:underline"
      >
        <router-link v-if="form == 'login'" to="/register"
          >Don't have an account? Register</router-link
        >
        <router-link v-else to="/login"
          >Already have an account? Sign In</router-link
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useField } from 'vee-validate'
import * as yup from 'yup'

import { signIn, signUp, googlePopUp, auth } from '../helpers/useAuth'
import { isError, msg } from '../helpers/useError'

const router = useRouter()
const login = async () => {
  try {
    if (emailMeta.valid && passwordMeta.valid) {
      await signIn(email.value, password.value)
      isError.value = false
      router.push('/')
    } else {
      isError.value = true
      msg.value = 'Error: Invalid Input Values'
    }
  } catch (error) {
    isError.value = true
    msg.value = 'Authentication Error'
    console.log(error)
  }
}

const signup = async () => {
  try {
    if (
      nameMeta.valid &&
      emailMeta.valid &&
      passwordMeta.valid &&
      passwordConfirmationMeta.valid
    ) {
      await signUp(email.value, password.value)
      const user = auth().currentUser
      await user.updateProfile({ displayName: name.value })
      isError.value = false
      router.push('/')
    } else {
      isError.value = true
      msg.value = 'Error: Invalid Input Values'
    }
  } catch (error) {
    isError.value = true
    msg.value = 'Authentication Error'
    console.log(error)
  }
}

const google = async () => {
  try {
    await googlePopUp()
    isError.value = false
    router.push('/')
  } catch (error) {
    isError.value = true
    msg.value = 'Authentication Error'
    console.log(error)
  }
}

const { value: email, errorMessage: emailError, meta: emailMeta } = useField(
  'email',
  yup.string().required().email(),
)

const {
  value: password,
  errorMessage: passwordError,
  meta: passwordMeta,
} = useField('password', yup.string().required().min(8))

const passwordConfirmationFn = () => {
  if (password.value === passwordConfirmation.value) {
    return true
  }
  return 'Passwords Do Not Match.'
}

const {
  value: passwordConfirmation,
  errorMessage: passwordConfirmationError,
  meta: passwordConfirmationMeta,
} = useField('passwordConfirmation', passwordConfirmationFn)

const { value: name, errorMessage: nameError, meta: nameMeta } = useField(
  'name',
  yup.string().required(),
)

defineProps({
  form: {
    type: String,
    default: 'login',
  },
})
</script>
