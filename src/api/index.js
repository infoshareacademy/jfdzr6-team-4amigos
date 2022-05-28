import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const COLLECTIONS_NAMES = {
  PROFILES: "profiles",
};

export const profilesCollection = collection(db, COLLECTIONS_NAMES.PROFILES);
export const getProfileDocRef = (docId) => doc(db, COLLECTIONS_NAMES.PROFILES, docId);
export const defaultQueryConstraint = orderBy("name","desc")

export const getProfiles = (querySnapshot) => {
  const profiles = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return profiles;
};

export const queryProfiles = (filter, cb) =>{
  const q = filter 
  ? query(profilesCollection, where("userId", "==", filter))
  : query(profilesCollection, defaultQueryConstraint)

  getDocs(q).then(cb)
}

export const registerDbListener = (cb) => {
  onSnapshot(query(profilesCollection, defaultQueryConstraint), cb);
};
