import { useState } from "react";
import { products } from "../../utils/data";
//nama komponen
export default function AdminDashboard() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Elektronik");
  const [addedProducts, setAddedProducts] = useState([]);
  const totalProducts = products.length;
  
  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
  );

  const totalCategories = new Set (
    products.map((product) => product.category_name)
  ).size;

    const handleAddProduct = (e) => {
    e.preventDefault();

    if (!productName || !price || !stock) {
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: Number(price),
      stock: Number(stock),
      category_name: category,
    };

    setAddedProducts([...addedProducts, newProduct]);

    setProductName("");
    setPrice("");
    setStock("");
  };

  return (
  <div>
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-pink-600">
        Dashboard
      </h1>
      <p className="text-gray-500 mt-1">
        Ringkasan informasi produk pada YukShopPink.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-pink-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">
              Total Produk
            </p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {totalProducts}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">
              Total Stok
            </p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {totalStock}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">
              Total Kategori
            </p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {totalCategories}
            </p>
          </div>
        </div>
      </div>

    </div>

    <div className="mt-8 bg-pink-50 rounded-xl shadow-sm border border-pink-100 p-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Ringkasan Toko
      </h2>

      <p className="text-gray-500 mt-2">
        YukShopPink memiliki {totalProducts} produk dari {totalCategories} kategori
        dengan total stok sebanyak {totalStock} barang.
      </p>
    </div>
    <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
  <h2 className="text-xl font-semibold text-gray-800">
    Tambah Produk
  </h2>

  <form onSubmit={handleAddProduct} className="mt-5 space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Nama Produk
      </label>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        placeholder="Masukkan nama produk"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Harga
      </label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        placeholder="Masukkan harga"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Stok
      </label>
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        placeholder="Masukkan jumlah stok"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Kategori
      </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
      >
        <option>Elektronik</option>
        <option>Fashion</option>
        <option>Kecantikan</option>
      </select>
    </div>

    <button
      type="submit"
      className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600"
    >
      Tambah Produk
    </button>
  </form>
</div>
{addedProducts.length > 0 && (
  <div className="mt-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Produk yang Ditambahkan
    </h2>

    <div className="space-y-3">
      {addedProducts.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 bg-pink-50"
        >
          <p className="font-semibold text-gray-800">
            {product.name}
          </p>
          <p className="text-gray-600">
            Rp {product.price.toLocaleString()}
          </p>
          <p className="text-gray-600">
            Stok: {product.stock}
          </p>
          <p className="text-gray-600">
            Kategori: {product.category_name}
          </p>
        </div>
      ))}
    </div>
  </div>
)}
</div>
);
}