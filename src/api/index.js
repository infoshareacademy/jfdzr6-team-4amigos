import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db, storage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export const COLLECTIONS_NAMES = {
  PROFILES: "profiles",
  USERS: "users",
};

export const profilesCollection = collection(db, COLLECTIONS_NAMES.USERS);
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
  const storageRef = ref(
    storage,
    `avatars/${userData.profilePicture.name}-3`,
  )
  try {
    const jwt = await createUserWithEmailAndPassword(auth, email, password);
    const snapshot = await uploadBytes(storageRef, userData.profilePicture)
    const downloadUrl = await getDownloadURL(snapshot.ref)
    const userRef = doc(db, COLLECTIONS_NAMES.USERS, jwt.user.uid);
    await setDoc(userRef, {...userData, profilePicture: downloadUrl});
    await signOut(auth);
  } catch (error) {
    alert("Wystąpił error: ", error.code);
  }
};

export const loginUser = (email, password, cb) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(cb)
    .catch((e) => {
      console.log(e.code);
      alert(e.code);
    });
}

export const registerDbListener = (cb) => {
  onSnapshot(query(profilesCollection, defaultQueryConstraint), cb);
};
