import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
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
import { auth, db, storage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { firebaseErrors } from "../utils/firebaseErrors";

export const COLLECTIONS_NAMES = {
  CHATS: "chats",
  USERS: "users",
};

export const profilesCollection = collection(db, COLLECTIONS_NAMES.USERS);
export const getProfileDocRef = (docId) => {
  return doc(db, COLLECTIONS_NAMES.PROFILES, docId);
};
export const defaultQueryConstraint = orderBy("name", "desc");

export const getProfiles = (querySnapshot) => {
  const profiles = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  ///Pobieranie chatu użytkownika
  // profiles[0].chatHistory.forEach(document=>{

  //   const docRef = doc(db,COLLECTIONS_NAMES.CHATS, document.id)
  //   getDoc(docRef).then(snapshot=>{
  //     console.log(snapshot.data());
  //   })
  // });
  return profiles;
};

export const queryProfiles = (filter, cb) => {
  const q = filter
    ? query(profilesCollection, where("userId", "==", filter))
    : query(profilesCollection, defaultQueryConstraint);

  getDocs(q).then(cb);
};

export const registerUser = async (email, password, userData) => {
  let downloadUrl = null;
  try {
    const jwt = await createUserWithEmailAndPassword(auth, email, password);

    if (userData.profilePicture) {
      const storageRef = ref(
        storage,
        `avatars/${userData.profilePicture.name}-${uuidv4()}`
      );
      const snapshot = await uploadBytes(storageRef, userData.profilePicture);
      downloadUrl = await getDownloadURL(snapshot.ref);
    }
    const userRef = doc(db, COLLECTIONS_NAMES.USERS, jwt.user.uid);
    await setDoc(userRef, { ...userData, profilePicture: downloadUrl });
    await signOut(auth);
  } catch (error) {
    return firebaseErrors[error.code];
  }
};

export const loginUser = (email, password, cb) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(cb)
    .catch((e) => {
      console.log(e.code);
      alert(e.code);
    });
};

let actionCodeSettings = {
  url: "http://localhost:3000/login",
};

export const resetPassword = (email, cb) => {
  sendPasswordResetEmail(auth, email, actionCodeSettings).then(cb);
};

export const updateUser = async (data, docId) => {
  const docRef = doc(db, "users", docId);
  await updateDoc(docRef, data);
};

export const registerDbListener = (cb, filter) => {
  // onSnapshot(query(profilesCollection, defaultQueryConstraint), cb);
  onSnapshot(
    query(profilesCollection, where("sports", "array-contains-any", filter)),
    cb
  );
};
