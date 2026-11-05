
export default function ProductSearchBar({ onSearch, categories = [] }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    onSearch({
      keyword: formData.get("keyword"),
      category: formData.get("category"),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        name="keyword"
        placeholder="Cari produk..."
        className="border p-2 rounded"
      />

      <select
        name="category"
        className="border p-2 rounded"
      >
        <option value="">Semua Kategori</option>

        {categories.map((category) => (
          <option key={category.category_id} value={category.category_id}>
            {category.category}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-pink-500 text-white p-2 rounded"
      >
        Cari
      </button>
    </form>
  );
}
