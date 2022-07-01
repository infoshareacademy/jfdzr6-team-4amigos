import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
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
  COMMENTS: "comments"
};

export const profilesCollection = collection(db, COLLECTIONS_NAMES.USERS);
export const chatsCollectionRef = collection(db, COLLECTIONS_NAMES.CHATS);
export const getProfileDocRef = (docId) =>
  doc(db, COLLECTIONS_NAMES.PROFILES, docId);
export const defaultQueryConstraint = orderBy("name", "desc");

export const getProfiles = (querySnapshot) => {
  const profiles = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
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
    await setDoc(userRef, {
      ...userData,
      id: jwt.user.uid,
      profilePicture: downloadUrl,
    });
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

export const registerDbListener = (cb, filter,userProvince) => {
  onSnapshot(
    query(
      profilesCollection,
      where("sports", "array-contains-any", filter),
      where("province", "==", userProvince),
      orderBy("createdAt", "desc")
    ),
    cb
  );
};

export const registerFilterProfiles = (
  cb,
  filter,
  ageLower,
  ageUpper,
  gender,
  userProvince
) => {
  // Dodać filtorwanie profili tylko ze zdjęciem
  let q = query(profilesCollection)
  if (gender !== "all") q = query(q, where("gender", "==", gender))
  q = query(q,where("sports", "array-contains-any", filter),where("province", "==", userProvince),where("age", ">=", ageLower), where("age", "<=", ageUpper))
  onSnapshot(q, cb);
};
// Chat
export const getChat = (chatId, cb) => {
  const docRef = doc(db, "chats", chatId);
  onSnapshot(docRef, cb);
};

export const addMessage = async (chatId, data) => {
  const docRef = doc(db, "chats", chatId);
  await updateDoc(docRef, data);
};
export const createChat = async (data) => {
  const docChatRef = await addDoc(chatsCollectionRef, data);
  return docChatRef;
};

export const getChatRefById = (docId) => {
  return doc(db, "chats", docId);
};

export const createChatBetweenUsers = async (
  profileId,
  uid,
  dataProfile,
  dataLoggedUser
) => {
  const docProfileRef = doc(db, "users", profileId);
  const docLoggedUser = doc(db, "users", uid);
  await updateDoc(docProfileRef, dataProfile);
  await updateDoc(docLoggedUser, dataLoggedUser);
};

// Profile
export const getProfile = (docId, cb) => {
  const userDocRef = doc(db, "users", docId);
  onSnapshot(userDocRef, cb);
};

export const getUserRef = (id) =>{
  return doc(db, COLLECTIONS_NAMES.USERS, id)
}
