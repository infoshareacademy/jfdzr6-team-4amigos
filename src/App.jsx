import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./routes/profile/Profile";
import Profiles from "./routes/profiles/Profiles";
import Landing from "./routes/landing/Landing";
import ProtectedRoute from "./routes/auth/ProtectedRoute";
import Login from "./routes/auth/Login";
import Register from "./routes/auth/register/Register";
import ForgotPassword from "./routes/auth/ForgotPassword";
import { Nav } from "./components/nav/Nav";
import Messages from "./routes/messages/Messages";
import Events from "./routes/events/Events";
import { AuthContext } from "./context/Auth";
import EventDetail from "./routes/events/details/EventDetail";
import MyEvents from "./routes/events/myEvents/MyEvents";
import UserPanel from "./routes/userPanel/UserPanel";
import { useContext } from "react";
import { Footer } from "./components/footer/Footer";
import AddEvent from "./routes/events/AddEvent";

function App() {
  const { role } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Nav />
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
          <Route path="userpanel" element={<UserPanel />} />
          <Route path="profiles/:docId" element={<Profile />} />
          <Route path="events" element={<Events />} />
          <Route path="events/add-events" element={<AddEvent />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="events/my-events" element={<MyEvents />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
