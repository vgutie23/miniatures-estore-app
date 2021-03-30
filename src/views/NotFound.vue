<!--Vanessa Gutierrez 03/30/2021-->
<template>
  <section class="flex items-center h-full p-16 bg-gray-200">
    <div
      class="container flex flex-col items-center justify-center px-5 mx-auto my-6"
    >
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-8xl text-indigo-800">
          <span class="sr-only">Error </span>404
        </h2>
        <p class="text-2xl font-semibold md:text-3xl mb-14 text-red-700">
          Error: This page could not be found.
        </p>
        <router-link
          to="/"
          class="px-6 py-2 font-semibold rounded bg-indigo-800 text-sm text-gray-200"
          >Back to homepage</router-link
        >
      </div>
    </div>
  </section>
</template>
