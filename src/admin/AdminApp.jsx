import { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export default function AdminApp() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem("cl_admin_auth") === "1"
  );

  const handleLogin = () => setAuthed(true);

  const handleLogout = () => {
    sessionStorage.removeItem("cl_admin_auth");
    setAuthed(false);
  };

  if (!authed) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
}
