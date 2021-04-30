//Vanessa Gutierrez 04/29/2021
import { ref, onUnmounted } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from '../config/firebase'
import { useAuth } from '@vueuse/firebase'

firebase.initializeApp(firebaseConfig)

export const { auth, firestore } = firebase

export const { isAuthenticated, user } = useAuth()

const { GoogleAuthProvider } = auth
export const db = firestore()

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

  const unsubscribe = productQuery.onSnapshot(p => {
    products.value = p.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })

  onUnmounted(unsubscribe)

  const cart = (product, user) => {
    const { price, quantity, name, image } = product
    const { displayName, uid } = user.value
    const cartCollection = db.collection('cart')
    cartCollection.add({
      userName: displayName,
      userId: uid,
      productPrice: price,
      productQuantity: quantity,
      productName: name,
      productImage: image,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return { products, cart }
}

export const getItems = () => {
  const cartItems = ref([])

  const cartCollection = db.collection('cart')
  const cartQuery = cartCollection.where('userId', '==', user.value.uid)

  const unsubscribe = cartQuery.onSnapshot(c => {
    cartItems.value = c.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })

  onUnmounted(unsubscribe)

  return cartItems
}

export const currencyFormat = value => {
  const formatNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)

  return formatNumber
}
