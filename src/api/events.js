import { auth, db } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firebaseErrors } from "../utils/firebaseErrors";

const EVENTS_COLLECTION = "events";

const collectionRef = collection(db, EVENTS_COLLECTION);

export const addEvent = async (data) => {
  try {
    const ref = await addDoc(collectionRef, data);
  } catch (error) {
    return firebaseErrors[error.code];
  }
};

export const displayEvents = (category, cb) => {
  onSnapshot(query(collectionRef, where("category", "==", category)), cb);
};
