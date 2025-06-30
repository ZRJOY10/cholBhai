const BlogCategoryFilter = ({ categories, activeCategory, setActiveCategory, className = '' }) => (
  <div className={`flex flex-wrap justify-center gap-2 mb-10 ${className}`}>
    {categories.map((category) => (
      <button
        key={category}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border-2 bg-amber-100 border-amber-400/30 text-amber-400 bg-neutral-900/80 hover:border-amber-400  ${activeCategory === category ? 'border-amber-400 bg-amber-300 text-black' : ''}`}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default BlogCategoryFilter;
