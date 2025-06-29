import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'City Guides: Must-Visit Spots',
      excerpt: 'Exploring a new city or rediscovering the charm of your own can be an exciting adventure, especially when you have reliable transportation...',
      image: 'https://via.placeholder.com/400x250/E5E7EB/6B7280?text=City+Guide',
      date: 'Nov 10, 2024',
      readTime: '5 min read',
      author: 'Travel Team',
      category: 'Travel Guide',
      href: '#'
    },
    {
      id: 2,
      title: 'Choosing the Right Vehicle',
      excerpt: 'When it comes to transportation, choosing the right vehicle is more than just a practical decision—it can enhance your entire journey...',
      image: 'https://via.placeholder.com/400x250/E5E7EB/6B7280?text=Vehicle+Choice',
      date: 'Nov 11, 2024',
      readTime: '4 min read',
      author: 'OvoRide Team',
      category: 'Tips & Tricks',
      href: '#'
    },
    {
      id: 3,
      title: 'Top Tips for Safe Rides in Your City',
      excerpt: 'In a fast-paced world where ride-sharing has become an integral part of urban commuting, ensuring safety should always be a top priority...',
      image: 'https://via.placeholder.com/400x250/E5E7EB/6B7280?text=Safe+Rides',
      date: 'Nov 09, 2024',
      readTime: '6 min read',
      author: 'Safety Team',
      category: 'Safety',
      href: '#'
    }
  ];

  const categories = ['All', 'Travel Guide', 'Tips & Tricks', 'Safety', 'News'];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with the latest tips, guides, and news from the world of ride-sharing
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="card overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                  <a href={post.href} className="hover:underline">
                    {post.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <a
                    href={post.href}
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium transition-colors duration-200"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
