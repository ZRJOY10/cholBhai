const BlogCategoryFilter = ({ categories, activeCategory, setActiveCategory, className = '' }) => (
  <div className={`flex flex-wrap justify-center gap-2 mb-10 ${className}`}>
    {categories.map((category) => (
      <button
        key={category}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border-2 
          bg-[rgb(var(--color-bg-rgb))] border-[rgb(var(--color-border-rgb))] text-[rgb(var(--color-primary-rgb))] 
          hover:border-[rgb(var(--color-primary-rgb))]
          ${activeCategory === category ? 'border-[rgb(var(--color-primary-rgb))] bg-[rgb(var(--color-primary-rgb))] text-[rgb(var(--color-text-dark-rgb))]' : ''}`}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default BlogCategoryFilter;
