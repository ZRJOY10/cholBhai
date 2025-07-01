import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[rgb(var(--color-bg-rgb))] rounded-2xl shadow-xl border border-[rgba(var(--color-primary-rgb),0.1)] overflow-hidden flex flex-col hover:scale-[1.03] hover:shadow-[0_0_0_4px_rgba(var(--color-primary-rgb),0.2)] transition-all duration-300">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-[rgb(var(--color-primary-light-rgb))] mb-2">
          <CalendarIcon className="w-4 h-4" /> {post.date}
          <ClockIcon className="w-4 h-4 ml-3" /> {post.readTime}
        </div>
        <h2 className="text-xl font-bold text-[rgb(var(--color-text-light-rgb))] mb-2">{post.title}</h2>
        <p className="text-[rgb(var(--color-text-muted-rgb))] mb-4 flex-1">{post.excerpt}</p>
        <button
          className="mt-auto px-4 py-2 rounded-full bg-[rgb(var(--color-primary-rgb))] text-[rgb(var(--color-text-dark-rgb))] font-semibold hover:bg-[rgb(var(--color-primary-dark-rgb))] transition-all duration-200"
          onClick={() => navigate(`/blog/${post.id}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
