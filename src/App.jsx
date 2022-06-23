import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./routes/profile/Profile";
import Profiles from "./routes/profiles/Profiles";
import Landing from "./routes/landing/Landing";
import ProtectedRoute from "./routes/auth/ProtectedRoute";
import { useState, useEffect } from "react";
import Login from "./routes/auth/Login";
import Register from "./routes/auth/Register";
import ForgotPassword from "./routes/auth/ForgotPassword";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "./api/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { Nav } from "./components/nav/Nav";
import UserPanel from "./routes/userPanel/UserPanel";
import Messages from "./routes/messages/Messages";
import Filters from "./components/filters/Filters";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState("guest");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        onSnapshot(userRef, (userSnapshot) => {
          const data = userSnapshot.data();
          if (!data) {
            return;
          }
          setUser(user);
          setUserData(data);
          data.isAdmin ? setRole("admin") : setRole("user");
        });
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
    <BrowserRouter>
      <Nav role={role} />
      <Routes>
        <Route
          index
          element={
            role === "guest" ? (
              <Landing />
            ) : (
              <Profiles uid={user.uid} sports={userData.sports} />
            )
          }
        />
        <Route
          element={
            <ProtectedRoute isAllowed={role === "guest"} redirectPath="/" />
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="filters" element={<Filters />} />
        </Route>

        <Route
          element={
            <ProtectedRoute isAllowed={role === "user"} redirectPath="/" />
          }
        >
          <Route path="userpanel" element={<UserPanel uid={user?.uid} />} />
          <Route path="profiles" element={<Profiles />} />
          <Route
            path="profiles/:docId"
            element={<Profile uid={user?.uid} userData={userData} />}
          />
          <Route
            path="messages"
            element={<Messages uid={user?.uid} userData={userData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
