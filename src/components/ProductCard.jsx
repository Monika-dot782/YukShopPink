//import link router dom
import { Link } from "react-router-dom";
//import useCart dari CartContext
import { useCart } from "../utils/CartContext";
//props p(product object dengan field: id, name, slug, price, stock, category,
//category_name, rating, img) dari dashboard
export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  return (
  <div className="border rounded-lg p-4 shadow hover:shadow-lg">
    <img
      src={p.img}
      alt={p.name}
      className="w-full h-40 object-cover rounded-lg mb-4"
    />

    <h2 className="font-semibold text-lg">{p.name}</h2>

    <p className="text-pink-600 font-semibold mt-2">
      Rp {p.price.toLocaleString()}
    </p>

    <p className="text-yellow-500 mt-1">
      {"★".repeat(p.rating)}
      {"☆".repeat(5 - p.rating)}
    </p>

    <p className="text-gray-600 text-sm mt-1">
      Stok: {p.stock}
    </p>

    <Link
      to={`/product/${p.slug}`}
      state={p}
      className="text-pink-600 hover:underline mt-3 block"
    >
      Lihat Detail
    </Link>

    <button
      onClick={() => addToCart(p)}
      className="mt-3 w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
    >
      Add to Cart
    </button>
  </div>
);
}