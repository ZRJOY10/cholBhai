import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCategoryFilter from '../../components/blog/BlogCategoryFilter';

import blogData from '../../data/blogPost.ts';

const BlogListPage = () => {
    const {categories,blogPosts} = blogData
  const [activeCategory, setActiveCategory] = useState('Safety');
  const navigate = useNavigate();
  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter(b => b.category === activeCategory);
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center">Blog & Safety Tips</h1>
        <BlogCategoryFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((post) => (
            <div key={post.id} className="bg-neutral-900 rounded-2xl shadow-xl border border-amber-400/10 overflow-hidden flex flex-col hover:scale-[1.03] hover:shadow-amber-400/20 transition-all duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-amber-300 mb-2">
                  <CalendarIcon className="w-4 h-4" /> {post.date}
                  <ClockIcon className="w-4 h-4 ml-3" /> {post.readTime}
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-gray-300 mb-4 flex-1">{post.content.slice(0, 120)}...</p>
                <button
                  className="mt-auto px-4 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-500 transition-all duration-200"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListPage;
