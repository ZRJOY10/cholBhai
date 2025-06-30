import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useNavigate, useParams } from 'react-router-dom';
import blogData from '../../data/blogPost.ts';


const BlogSinglePage = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const blogPosts = blogData.blogPosts;
  const post = blogPosts.find((b) => b.id === Number(id));
  if (!post) return (
    <section className="py-20 min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Blog not found</h2>
        <button onClick={() => navigate('/blog')} className="px-6 py-2 rounded-full bg-amber-400 text-black font-semibold mt-4">Back to Blog</button>
      </div>
    </section>
  );
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container-custom max-w-3xl mx-auto">
        <button onClick={() => navigate('/blog')} className="mb-8 px-5 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-500 transition-all duration-200">← Back to Blog</button>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-2xl shadow-xl mb-8" />
        <div className="flex items-center gap-4 text-amber-300 mb-4">
          <CalendarIcon className="w-5 h-5" /> {post.date}
          <ClockIcon className="w-5 h-5 ml-3" /> {post.readTime}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{post.title}</h1>
        <div className="text-gray-200 text-lg whitespace-pre-line">{post.content}</div>
      </div>
    </section>
  );
};

export default BlogSinglePage;
