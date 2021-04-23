<!--Vanessa Gutierrez 04/23/2021-->
<template>
  <div
    class="flex flex-col container items-center justify-center text-center mx-auto rounded-lg bg-indigo-900 bg-opacity-95 text-white mt-9 mb-9 max-w-xl p-4 space-y-2"
  >
    <ul class="flex flex-col divide-y divide-pink-500">
      <li class="flex py-4">
        <div class="flex w-full space-x-4 sm:space-x-5">
          <div class="w-full pb-3">
            <div class="flex justify-between w-full pb-4 space-x-6">
              <div class="space-y-4">
                <h3
                  class="text-lg font-bold leading-snug sm:pr-8 mt-4 text-left text-violet-50"
                >
                  First Item in Cart
                </h3>
              </div>
              <div class="text-right">
                <p class="text-lg font-semibold mt-4 text-violet-50">$0.00</p>
              </div>
            </div>
            <div class="text-right text-sm">
              <button
                class="p-1 bg-pink-500 rounded-md hover:bg-pink-600 text-violet-50"
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      </li>
      <li class="flex py-4">
        <div class="flex w-full space-x-4 sm:space-x-5">
          <div class="w-full pb-3">
            <div class="flex justify-between w-full pb-4 space-x-6">
              <div class="space-y-4">
                <h3
                  class="text-lg font-bold leading-snug sm:pr-8 mt-4 text-left text-violet-50"
                >
                  Second Item in Cart
                </h3>
              </div>
              <div class="text-right">
                <p class="text-lg font-semibold mt-4 text-violet-50">$0.00</p>
              </div>
            </div>
            <div class="text-right text-sm">
              <button
                class="p-1 bg-pink-500 rounded-md hover:bg-pink-600 text-violet-50"
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      </li>
      <li class="flex py-4">
        <div class="flex w-full space-x-4 sm:space-x-5">
          <div class="w-full pb-3">
            <div class="flex justify-between w-full pb-4 space-x-6">
              <div class="space-y-4">
                <h3
                  class="text-lg font-bold leading-snug sm:pr-8 mt-4 text-left text-violet-50"
                >
                  Third Item in Cart
                </h3>
              </div>
              <div class="text-right">
                <p class="text-lg font-semibold mt-4 text-violet-50">$0.00</p>
              </div>
            </div>
            <div class="text-right text-sm">
              <button
                class="p-1 bg-pink-500 rounded-md hover:bg-pink-600 text-violet-50"
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="text-center ml-auto mr-auto">
      <h3 class="text-xl font-bold text-violet-50">
        Total:
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
</template>
