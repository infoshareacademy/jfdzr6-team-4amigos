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
import Messages from "./routes/messages/Messages";
import Events from "./routes/events/Events";
import Auth from "./context/Auth";
import EventDetail from "./routes/events/details/EventDetail";
import MyEvents from "./routes/events/myEvents/MyEvents";
import UserPanel from "./routes/userPanel/UserPanel";

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
      <Auth>
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
          </Route>

          <Route
            element={
              <ProtectedRoute isAllowed={role === "user"} redirectPath="/" />
            }
          >
            <Route path="profiles" element={<Profiles />} />
            <Route path="userpanel" element={<UserPanel />} />
            <Route
              path="profiles/:docId"
              element={<Profile uid={user?.uid} userData={userData} />}
            />
            <Route path="events" element={<Events />} />
            <Route path="events/:id" element={<EventDetail />} />
            <Route path="events/my-events" element={<MyEvents />} />
            <Route
              path="messages"
              element={<Messages uid={user?.uid} userData={userData} />}
            />
          </Route>
        </Routes>
      </Auth>
    </BrowserRouter>
  );
}

export default App;
