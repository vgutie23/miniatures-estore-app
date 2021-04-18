//Vanessa Gutierrez 04/18/2021
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
import './index.css'
import VueFirestore from 'vue-firestore'

createApp(App).use(router, VueFirestore).mount('#app')
