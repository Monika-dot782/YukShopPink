import { useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
// Koleksi produk dengan field: id, name, slug, price, stock, category, 
// category_name, rating, img
import { products } from "../../utils/data";
export default function Dashboard() {
  const { category, search } = useOutletContext();
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-pink-600">Dashboard Produk</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
xl:grid-cols-4">
        {products
        .filter(
  (item) =>
    (
      category === "Semua Kategori" ||
      (category === "Elektronik" &&
        item.category_name === "Electronics") ||
      item.category_name === category
    ) &&
    item.name.toLowerCase().includes(search.toLowerCase())
)
        
        .map ((item) => (
          //p adalah props untuk mengirim data produk ke komponen ProductCard
          <ProductCard  key={item.id} p={item} />
        ))}
      </div>
    </div>
  );
}