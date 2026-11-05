
import { Routes, Route, Navigate } from "react-router-dom";

import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import AboutPage from "./pages/adminpages/AboutPage";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";

import ProductForm from "./pages/adminpages/ProductForm";
import ProductEdit from "./pages/adminpages/ProductEdit";

export default function App() {
  return (
    <Routes>

      {/* Halaman utama langsung menuju Admin Dashboard */}
      <Route
        path="/"
        element={<Navigate to="/admin/dashboard" replace />}
      />

      {/* Halaman toko / pembeli */}
      <Route path="/shop" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

      {/* Halaman Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="add-product" element={<ProductForm />} />
        <Route path="edit-product/:id" element={<ProductEdit />} />
      </Route>

    </Routes>
  );
}
