import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./config"
import { collection, getFirestore } from "firebase/firestore"



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);