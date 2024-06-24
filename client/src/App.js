import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/Main";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AdminPanel from "./components/Pages/AdminPanel";
import UserPanel from "./components/Pages/UserPanel";

function App() {
  const user = localStorage.getItem("userData");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/admin-panel" exact element={<AdminPanel />} />
      <Route path="/user-panel" exact element={<UserPanel />} />
    </Routes>
  );
}

export default App;
