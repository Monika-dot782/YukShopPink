import { useState } from "react";
import { useCart } from "../../utils/CartContext";

export default function Checkout() {
  const { cart, totalPrice } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleOrder = () => {
    if (!name || !phone || !address || !payment) {
      alert("Silahkan lengkapi data checkout terlebih dahulu.");
      return;
    }

    setOrderSuccess(true);
  };

  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
        <p className="text-gray-500 mt-1">
          Periksa pesanan dan lengkapi informasi pengiriman.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Informasi Pengiriman */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Informasi Pengiriman
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                No. Telepon
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Masukkan nomor telepon"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alamat Pengiriman
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows="4"
                placeholder="Masukkan alamat lengkap"
              ></textarea>
            </div>
          </div>

          <div className="border-t mt-6 pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Metode Pembayaran
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className="border rounded-lg p-4 cursor-pointer hover:border-pink-500">
                <input
                  type="radio"
                  name="payment"
                  value="Transfer Bank"
                  checked={payment === "Transfer Bank"}
                  onChange={(e) => setPayment(e.target.value)}
                  className="mr-2"
                />
                Transfer Bank
              </label>

              <label className="border rounded-lg p-4 cursor-pointer hover:border-pink-500">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={payment === "COD"}
                  onChange={(e) => setPayment(e.target.value)}
                  className="mr-2"
                />
                COD
              </label>

              <label className="border rounded-lg p-4 cursor-pointer hover:border-pink-500">
                <input
                  type="radio"
                  name="payment"
                  value="E-Wallet"
                  checked={payment === "E-Wallet"}
                  onChange={(e) => setPayment(e.target.value)}
                  className="mr-2"
                />
                E-Wallet
              </label>
            </div>
          </div>
        </div>

        {/* Ringkasan Pesanan */}
        <div className="bg-white border rounded-xl p-6 h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Ringkasan Pesanan
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">
              Tidak ada produk di keranjang.
            </p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4 border-b pb-4"
                  >
                    <div>
                      <p className="font-medium text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.qty} × Rp {item.price.toLocaleString()}
                      </p>
                    </div>

                    <p className="font-medium text-gray-800 whitespace-nowrap">
                      Rp {(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mt-5">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rp {totalPrice.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Pengiriman</span>
                  <span className="text-green-600">Gratis</span>
                </div>

                <div className="border-t pt-4 flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg text-pink-600">
                    Rp {totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleOrder}
                className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
              >
                Buat Pesanan
              </button>
            </>
          )}
        </div>
      </div>
      {orderSuccess && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 text-center shadow-xl">
      <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl">
        ✓
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-5">
        Pesanan Berhasil!
      </h2>

      <p className="text-gray-500 mt-2">
        Pesanan kamu berhasil dibuat.
      </p>

      <button
        onClick={() => setOrderSuccess(false)}
        className="mt-6 w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
      >
        Oke
      </button>
    </div>
  </div>
)}
    </div>
  );
}