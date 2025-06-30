import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-900 rounded-2xl shadow-xl border border-amber-400/10 overflow-hidden flex flex-col hover:scale-[1.03] hover:shadow-amber-400/20 transition-all duration-300">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-amber-300 mb-2">
          <CalendarIcon className="w-4 h-4" /> {post.date}
          <ClockIcon className="w-4 h-4 ml-3" /> {post.readTime}
        </div>
        <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
        <p className="text-gray-300 mb-4 flex-1">{post.excerpt}</p>
        <button
          className="mt-auto px-4 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-500 transition-all duration-200"
          onClick={() => navigate(`/blog/${post.id}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
