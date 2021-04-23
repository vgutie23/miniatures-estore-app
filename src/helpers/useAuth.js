//Vanessa Gutierrez 04/22/2021
import { ref, onUnmounted } from 'vue'
import firebase from 'firebase/app'
import { useAuth } from '@vueuse/firebase'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from '../config/firebase'

firebase.initializeApp(firebaseConfig)

export const { auth, firestore } = firebase

const { GoogleAuthProvider } = auth
export const db = firestore()

export const { isAuthenticated, user } = useAuth()

export const signIn = (email, password) =>
  auth().signInWithEmailAndPassword(email, password)

export const signUp = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password)

export const googlePopUp = () =>
  auth().signInWithPopup(new GoogleAuthProvider())

export const signOut = () => auth().signOut()

export const database = () => {
  const products = ref([])

  const productsCollection = db.collection('products')
  const productQuery = productsCollection

  const listProducts = productQuery.onSnapshot(p => {
    products.value = p.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })

  onUnmounted(listProducts)

  return { products }
}
