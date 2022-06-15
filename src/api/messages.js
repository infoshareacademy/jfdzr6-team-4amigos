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
import { auth, db, storage } from "./firebase";

export const COLLECTIONS_NAMES = {
  CHATS: "chats",
  USERS: "users",
};
const collectionRef = collection(db, COLLECTIONS_NAMES.CHATS);
const profilesCollection = collection(db, COLLECTIONS_NAMES.USERS);

export const getChattingUsers = (usersId, cb) => {
  onSnapshot(query(profilesCollection, where("id", "in", usersId)), cb);
};
