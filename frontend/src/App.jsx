import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

// User
import Aspirasi from "./pages/user/Aspirasi";
import Pengaduan from "./pages/user/Pengaduan";
import Permohonan from "./pages/user/Permohonan";

// Admin
import Dashboard from "./pages/admin/Dashboard";
import AdminAspirasi from "./pages/admin/Aspirasi";
import AdminPermohonan from "./pages/admin/Permohonan";
import Kelurahan from "./pages/admin/Kelurahan";
import Masyarakat from "./pages/admin/Masyarakat";
import Petugas from "./pages/admin/Petugas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/user/aspirasi" element={<Aspirasi />} />
      <Route path="/user/pengaduan" element={<Pengaduan />} />
      <Route path="/user/permohonan" element={<Permohonan />} />

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