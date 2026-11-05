import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { confirmDeleteToast } from "../../components/confirmDeleteToast";
import ProductSearchBar from "../../components/productSearchBar";
import { useProducts } from "../../utils/ProductContext";
import toast from "react-hot-toast";
import LowStockAlert from "../../components/LowStockAlert";

//nama komponen
export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const { deleteProduct, getProducts, getCategories } = useProducts();

    const { data: productData, isLoading: productsLoading, isError: productsError } = useQuery({
    queryKey: ["products", page, keyword, category],
    queryFn: () =>
      getProducts({
        page,
        limit: 10,
        category_id: category,
        keyword,
      }),
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (productsLoading) return <p>Loading...</p>;
  if (productsError) return <p>Error loading products.</p>;

  const products = productData?.data || [];
  const currentPage = productData?.meta?.current_page || 1;
  const lastPage = productData?.meta?.last_page || 1;

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus produk ini?"
    );
    if (!confirmDelete) return;

    try {
      await deleteProduct.mutateAsync(id);
    } catch (error) {
      toast.error("Terjadi kesalahan saat menghapus produk.");
    }
  };

  const handleSearch = ({ keyword, category }) => {
    setKeyword(keyword);
    setCategory(category);
    setPage(1);

  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Manajemen Produk</h1>

      <LowStockAlert/>

      <ProductSearchBar
      onSearch={handleSearch}
      categories={categories}
      />
      <div className="flex justify-end mb-5">
          <a
           href="/admin/add-product"
           className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition duration-200"
          >
             <span className="text-lg">+</span>
             Tambah Produk
          </a>
      </div>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-pink-100 text-pink-800 text-left">
            <th className="p-2 border">#</th>
            <th>Image</th>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Harga</th>
            <th className="p-2 border">Stok</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p, index) => (
            <tr key={p.id}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border"><img src={p.img_url} alt={p.name} className="w-16 h-16 object-cover" />
              </td>
              <td className="p-2 border">
                {p.name} <br />
                <small className="text-gray-500">#{p.category?.name}</small></td>
              <td className="p-2 border">Rp. {p.price}</td>
              <td className="p-2 border">{p.stock}</td>
              <td className="p-2 border space-x-2">
                <Link to={`/admin/edit-product/${p.id}`} className="text-blue-600 hover:underline">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="cursor-pointer text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-pink-100 text-pink-600 hover:bg-pink-200 rounded-lg font-medium transition disabled:opacity-50"
        >
          Sebelumnya
        </button>

        <span>
          Halaman {currentPage} dari {lastPage}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={currentPage === lastPage}
          className="px-4 py-2 bg-pink-100 text-pink-600 hover:bg-pink-200 rounded-lg font-medium transition disabled:opacity-50"
        >
          Berikutnya
        </button>
      </div>
    </div>
  );
}