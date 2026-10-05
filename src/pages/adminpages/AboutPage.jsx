//nama komponen
export default function AboutPage() {
  return (
    <div className="space-y-6">

      {/* Header About */}
      <div className="bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl p-8 md:p-10 text-white shadow-lg">
        <p className="text-pink-100 text-sm font-medium mb-2">
          SELAMAT DATANG DI
        </p>

        <h1 className="text-4xl md:text-5xl font-bold">
          YukShopPink
        </h1>

        <p className="mt-4 text-pink-100 max-w-2xl leading-relaxed">
          Belanja lebih mudah, praktis, dan nyaman dengan berbagai pilihan
          produk yang sesuai dengan kebutuhan Anda.
        </p>
      </div>

      {/* Tentang MyShop */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Tentang YukShopPink
        </h2>

        <p className="text-gray-600 mt-4 leading-relaxed">
          YukShopPink adalah aplikasi ecommerce yang menyediakan berbagai pilihan
          produk untuk kebutuhan sehari-hari. Pengguna dapat mencari produk,
          melihat detail produk, menambahkan produk ke keranjang, dan melakukan
          proses checkout dengan mudah.
        </p>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Kami ingin memberikan pengalaman belanja online yang sederhana,
          nyaman, dan mudah digunakan melalui tampilan yang responsive.
        </p>
      </div>

      {/* Informasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Produk */}
        <div className="bg-pink-50 rounded-2xl p-6 md:p-8 border border-pink-100">
          <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-5">
            <span className="text-white text-xl font-bold">01</span>
          </div>

          <h2 className="text-xl font-bold text-gray-800">
            Produk Kami
          </h2>

          <p className="text-gray-600 mt-3 leading-relaxed">
            YukShopPink menyediakan berbagai kategori produk seperti elektronik,
            fashion, dan kecantikan yang dapat dipilih sesuai kebutuhan.
          </p>
        </div>

        {/* Teknologi */}
        <div className="bg-rose-50 rounded-2xl p-6 md:p-8 border border-rose-100">
          <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center mb-5">
            <span className="text-white text-xl font-bold">02</span>
          </div>

          <h2 className="text-xl font-bold text-gray-800">
            Teknologi
          </h2>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Aplikasi ini dikembangkan menggunakan React, React Router,
            Tailwind CSS, dan JavaScript.
          </p>
        </div>

      </div>

      {/* Penutup */}
      <div className="bg-pink-400 rounded-2xl p-6 md:p-8 text-center text-white">
        <h2 className="text-2xl font-bold">
          Belanja Lebih Mudah dengan YukShopPink
        </h2>

        <p className="text-pink-100 mt-2">
          Temukan produk yang Anda butuhkan dengan mudah dan nyaman.
        </p>
      </div>

    </div>
  );
}