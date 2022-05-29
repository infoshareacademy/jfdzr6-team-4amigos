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
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState("guest");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);

        getDoc(userRef).then((docData) => {
          const data = docData.data();
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
      <Routes>
        <Route index element={role === "guest" ? <Landing /> : <Profiles />} />

        <Route
          element={
            <ProtectedRoute isAllowed={role === "guest"} redirectPath="/" />
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route
          element={
            <ProtectedRoute isAllowed={role === "user"} redirectPath="/" />
          }
        >
          <Route path="profiles" element={<Profiles />} />
          <Route path="profiles/:docId" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
