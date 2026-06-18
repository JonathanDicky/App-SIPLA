import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

// User
import Aspirasi from "./pages/user/aspirasi";
import Pengaduan from "./pages/user/pengaduan";
import Permohonan from "./pages/user/permohonan";

// Admin
import Dashboard from "./pages/admin/dashboard";
import AdminAspirasi from "./pages/admin/aspirasi";
import AdminPermohonan from "./pages/admin/permohonan";
import Kelurahan from "./pages/admin/kelurahan";
import Masyarakat from "./pages/admin/masyarakat";
import Petugas from "./pages/admin/petugas";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User */}
      <Route path="/user/aspirasi" element={<Aspirasi />} />
      <Route path="/user/pengaduan" element={<Pengaduan />} />
      <Route path="/user/permohonan" element={<Permohonan />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/aspirasi" element={<AdminAspirasi />} />
      <Route path="/admin/permohonan" element={<AdminPermohonan />} />
      <Route path="/admin/kelurahan" element={<Kelurahan />} />
      <Route path="/admin/masyarakat" element={<Masyarakat />} />
      <Route path="/admin/petugas" element={<Petugas />} />
    </Routes>
  );
}

export default App;