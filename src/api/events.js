import { db } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firebaseErrors } from "../utils/firebaseErrors";

const EVENTS_COLLECTION = "events";

const collectionRef = collection(db, EVENTS_COLLECTION);

const getEventDocRef = (docId) => {
  return doc(db, EVENTS_COLLECTION, docId);
};

export const updateEvent = async (idEvent, data) => {
  const docRef = getEventDocRef(idEvent);
  try {
    await updateDoc(docRef, data);
  } catch (error) {
    return firebaseErrors[error.code];
  }
};

export const deleteEvent = async (idEvent) => {
  const docRef = getEventDocRef(idEvent);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    return firebaseErrors[error.code];
  }
};

export const addEvent = async (data) => {
  try {
    // const ref = await addDoc(collectionRef, data);
    console.log("Dodano event", data);
    await addDoc(collectionRef, data);
  } catch (error) {
    console.dir(error);
    return firebaseErrors[error.code];
  }
};

export const displayEvents = (category, cb) => {
  onSnapshot(query(collectionRef, where("category", "in", category)), cb);
};

export const getEvent = (idEvent,cb) =>{
  const docRef = getEventDocRef(idEvent)
  onSnapshot(docRef, cb)
}

export const registerListenerMyEvents = (uid,cb) =>{
  onSnapshot(query(collectionRef, where("members", "array-contains", uid)), cb)
}

export const getEvents = (querySnapshot) =>{
  return querySnapshot.docs.map( doc=> {
    return {id:doc.id, ...doc.data()}
  })
}
