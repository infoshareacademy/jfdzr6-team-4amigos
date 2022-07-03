import { db } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { firebaseErrors } from "../utils/firebaseErrors";

const EVENTS_COLLECTION = "events";
const COMMENTS_COLLECTION = "comments"

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
    return await addDoc(collectionRef, data);
  } catch (error) {
    console.dir(error);
    return firebaseErrors[error.code];
  }
};

export const displayEvents = (category, cb) => {
  onSnapshot(query(collectionRef, where("category", "in", category), orderBy("startDate", "desc")), cb);
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

// Comments
const commentsRef = collection(db, COMMENTS_COLLECTION)
export const createCommentsHistory = (commentsData) => {
  try {
    const docRef = addDoc(commentsRef, { commentsHistory: [{...commentsData,createdAt: Timestamp.fromDate(new Date())}] })
    return docRef
  } catch (error) {
    return firebaseErrors[error.code]
  }
}

export const addComment = (commentId, commentData) => {
  const commentRef = doc(db, COMMENTS_COLLECTION, commentId)
  try {
    updateDoc(commentRef, commentData)
  } catch (error) {
    console.dir(error)
  }
}

export const registerCommentsListener = (commentsRef,cb) => {
  onSnapshot(commentsRef, cb)
}

export const getComments = (querySnapshot) =>{
  return querySnapshot.docs.map( doc=> {
    return {id:doc.id, ...doc.data()}
  })
}
