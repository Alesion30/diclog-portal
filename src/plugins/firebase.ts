import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
} from 'firebase/auth'
import {
  Firestore,
  getFirestore,
  QueryDocumentSnapshot,
} from 'firebase/firestore'

import type { FirebaseApp } from 'firebase/app'
import type { Auth } from 'firebase/auth'
import type { DocumentData, SnapshotOptions } from 'firebase/firestore'
import {
  FB_API_KEY,
  FB_APP_ID,
  FB_AUTH_DOMAIN,
  FB_MEASUREMENT_ID,
  FB_MESSAGING_SENDER_ID,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
} from '~/constants/env'

/** Firebase Config */
const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID,
}

/** Firebase App */
class Firebase {
  public constructor() {
    this.firebaseApp = initializeApp(firebaseConfig)
    this.firebaseAuth = getAuth()
    this.firestore = getFirestore(this.firebaseApp)
  }
  public firebaseApp: FirebaseApp
  public firebaseAuth: Auth
  public firestore: Firestore
}
const firebase = new Firebase()
export const firebaseApp = firebase.firebaseApp
export const firebaseAuth = firebase.firebaseAuth
export const firestore = firebase.firestore

////////////////////////////////////////////////////////////////
// Firebase Authentication
////////////////////////////////////////////////////////////////
const googleAuthProvider = new GoogleAuthProvider()
const appleAuthProvider = new OAuthProvider('apple.com')
appleAuthProvider.addScope('email')
appleAuthProvider.setCustomParameters({
  locale: 'ja',
})

/** Googleアカウントでログイン */
export const googleSignIn = () =>
  signInWithPopup(firebaseAuth, googleAuthProvider)

/** Appleアカウントでログイン */
export const appleSignIn = () =>
  signInWithPopup(firebaseAuth, appleAuthProvider)

/** ログアウト */
export const signOut = () => fbSignOut(firebaseAuth)

/** Firebase Firestore */
export * from 'firebase/firestore'
export type Converter<T> = {
  toFirestore(data: T): DocumentData
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): T
}
