import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogdata from '../data/blogPost.ts';
import BlogCard from './blog/BlogCard';
import BlogCategoryFilter from './blog/BlogCategoryFilter';

const { categories, blogPosts } = blogdata;

const PAGE_SIZE = 3;

const BlogSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);
  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter(b => b.category === activeCategory);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);


  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <section id="blog" className="section-padding bg-gradient-to-br from-[rgb(var(--color-bg-dark-rgb))] via-[rgb(var(--color-bg-muted-rgb))] to-[rgb(var(--color-bg-light-rgb))]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-light-rgb))] mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-muted-rgb))] max-w-2xl mx-auto mb-8">
            Stay updated with the latest tips, guides, and news from the world of ride-sharing
          </p>
          <BlogCategoryFilter categories={categories} activeCategory={activeCategory} setActiveCategory={handleCategoryChange} />
        </div>
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginated.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${page === 1 ? 'bg-[rgb(var(--color-bg-muted-rgb))] text-[rgb(var(--color-text-muted-rgb))] cursor-not-allowed' : 'bg-[rgb(var(--color-primary-rgb))] text-[rgb(var(--color-text-dark-rgb))] hover:bg-[rgb(var(--color-primary-dark-rgb))]'}`}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx + 1)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${page === idx + 1 ? 'bg-[rgb(var(--color-primary-rgb))] text-[rgb(var(--color-text-dark-rgb))]' : 'bg-[rgb(var(--color-bg-muted-rgb))] text-[rgb(var(--color-primary-light-rgb))] hover:bg-[rgb(var(--color-primary-rgb))] hover:text-[rgb(var(--color-text-dark-rgb))]'}`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${page === totalPages ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-[rgb(var(--color-primary-rgb))] text-black hover:bg-[rgb(var(--color-primary-dark-rgb))]'}`}
            >
              Next
            </button>
          </div>
        )}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 rounded-full bg-[rgb(var(--color-primary-rgb))] hover:bg-[rgb(var(--color-primary-dark-rgb))] text-[rgb(var(--color-text-dark-rgb))] font-semibold shadow-lg transition-all duration-200 text-lg"
          >
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
