
import { useQuery } from "@tanstack/react-query";
import { useProducts } from "../utils/ProductContext";

export default function LowStockAlert() {
  const { getLowStockProducts } = useProducts();

  const {
    data: lowStockProducts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["low-stock-products"],
    queryFn: getLowStockProducts,
  });

  if (isLoading) return <p>Memeriksa stok produk...</p>;

  if (isError) return <p>Gagal mengambil data stok produk.</p>;

  if (lowStockProducts.length === 0) return null;

  return (
    <div className="bg-pink-50 border border-pink-200 border-l-4 border-l-pink-500 rounded-lg p-4 mb-5">

      <div className="flex items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-2">
          <span className="text-lg">📦</span>

          <h2 className="text-base font-bold text-pink-800">
            Peringatan Stok Produk
          </h2>
        </div>

        <span className="bg-pink-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
          {lowStockProducts.length} produk
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-3">
        Produk dengan stok 5 atau kurang.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {lowStockProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between gap-2 bg-white border border-pink-100 rounded-md px-3 py-2 hover:border-pink-300 transition"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {product.name}
              </p>

              <p className="text-xs text-gray-500 truncate">
                {product.category?.name}
              </p>
            </div>

            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
                product.stock === 0
                  ? "bg-red-100 text-red-700"
                  : "bg-pink-100 text-pink-700"
              }`}
            >
              {product.stock === 0
                ? "Habis"
                : `Stok: ${product.stock}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
