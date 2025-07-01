import { useState } from 'react';
import BlogCard from '../../components/blog/BlogCard.js';
import BlogCategoryFilter from '../../components/blog/BlogCategoryFilter';
import blogData from '../../data/blogPost.ts';
const BlogListPage = () => {
    const {categories,blogPosts} = blogData
  const [activeCategory, setActiveCategory] = useState('Safety');
  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter(b => b.category === activeCategory);
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center">Blog & Safety Tips</h1>
        <BlogCategoryFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListPage;
