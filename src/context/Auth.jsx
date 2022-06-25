import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react'
import { auth, db } from '../api/firebase';

const defaultValue = {
    name: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    city: "",
    chatHistory: {},
    sports: []
}
export const AuthContext = createContext(defaultValue)
const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [role, setRole] = useState("guest");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userRef = doc(db, "users", user.uid);
                onSnapshot(userRef, userSnapshot => {
                    const data = userSnapshot.data();
                    if (!data) {
                        return;
                    }
                    setUser(user);
                    setUserData({ id: userSnapshot.id, ...data });
                    data.isAdmin ? setRole("admin") : setRole("user");
                })
            } else {
                setRole("guest");
                setUser(null);
                setUserData(null);
            }
        });
    }, []);

    if (!role) {
        return <p>Trwa ładowanie strony...</p>;
    }
    return (
        <AuthContext.Provider value={{ userData, user, role }}>{children}</AuthContext.Provider>
    )
}

export default Auth