import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function MainLayout() {
  const [category, setCategory] = useState("Semua Kategori");
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navbar */}
      <Navbar />

      {/* Search & Filter */}
      <header className="bg-pink-50 p-4 flex flex-col md:flex-row gap-2 justify-between items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari produk..."
          className="w-full md:w-1/3 px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300">
          <option>Semua Kategori</option>
          <option>Elektronik</option>
          <option>Fashion</option>
          <option>Kecantikan</option>
        </select>
      </header>

      {/* Main Section */}
      <main className="flex-1 p-6">
        <Outlet context={{ category, search}} />
      </main>

      {/* Footer */}
      <footer className="bg-pink-300 text-pink-700 text-center p-4">
        <p>© 2025 E-Commerce Simple App | Version 1.0</p>
      </footer>
    </div>
  );
}