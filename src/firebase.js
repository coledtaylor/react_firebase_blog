import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDyx6kxYpOcltskwdk8J7vbb6FTlY3Kkvs",
  authDomain: "fox-blog-38a12.firebaseapp.com",
  projectId: "fox-blog-38a12",
  storageBucket: "fox-blog-38a12.appspot.com",
  messagingSenderId: "134756566582",
  appId: "1:134756566582:web:1f7af921acba50da433a97",
  measurementId: "G-ML23SJT603"
})

export const auth = app.auth()
export default app