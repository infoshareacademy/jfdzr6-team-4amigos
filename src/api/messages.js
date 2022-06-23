import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const COLLECTIONS_NAMES = {
  CHATS: "chats",
  USERS: "users",
};
const profilesCollection = collection(db, COLLECTIONS_NAMES.USERS);

export const getChattingUsers = (usersId, cb) => {
  onSnapshot(query(profilesCollection, where("id", "in", usersId)), cb);
};
