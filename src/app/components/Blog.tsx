import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Health Benefits of Almonds You Should Know',
      excerpt:
        'Discover the amazing health benefits of incorporating almonds into your daily diet...',
      image:
        'https://images.unsplash.com/photo-1594900689460-fdad3599342c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWxtb25kcyUyMG51dHN8ZW58MXx8fHwxNzY2NTY2NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Dr. Sarah Mitchell',
      date: 'December 20, 2024',
      category: 'Health Tips'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Storing Dry Fruits',
      excerpt:
        'Learn the best practices for storing dry fruits to maintain freshness and flavor...',
      image:
        'https://images.unsplash.com/photo-1584542979166-bd34924d7b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnklMjBmcnVpdHMlMjB3b29kZW4lMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NjU2NjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Emily Parker',
      date: 'December 18, 2024',
      category: 'Storage Tips'
    },
    {
      id: 3,
      title: 'Cashews: Nature\'s Superfood',
      excerpt:
        'Explore why cashews are considered one of nature\'s most nutritious superfoods...',
      image:
        'https://images.unsplash.com/photo-1649103990366-ec254eb38c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzJTIwb3JnYW5pY3xlbnwxfHx8fDE3NjY1NjY1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Dr. James Wilson',
      date: 'December 15, 2024',
      category: 'Nutrition'
    },
    {
      id: 4,
      title: 'Delicious Recipes Using Dates',
      excerpt:
        'Try these amazing recipes that showcase the natural sweetness of dates...',
      image:
        'https://images.unsplash.com/photo-1717276850243-80657c246333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRlcyUyMGZydWl0cyUyMHByZW1pdW18ZW58MXx8fHwxNzY2NTY2NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Chef Maria Garcia',
      date: 'December 12, 2024',
      category: 'Recipes'
    },
    {
      id: 5,
      title: 'Walnuts for Brain Health',
      excerpt:
        'Scientific research shows how walnuts can boost cognitive function...',
      image:
        'https://images.unsplash.com/photo-1724829260119-3db605c50a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXRzJTIwd29vZGVuJTIwYm93bHxlbnwxfHx8fDE3NjY1NjY1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Dr. Sarah Mitchell',
      date: 'December 10, 2024',
      category: 'Health Tips'
    },
    {
      id: 6,
      title: 'Organic vs. Conventional: What\'s the Difference?',
      excerpt:
        'Understanding the benefits of choosing organic dry fruits for your family...',
      image:
        'https://images.unsplash.com/photo-1618453731654-3eb0816cd121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjY1NjY1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Emily Parker',
      date: 'December 8, 2024',
      category: 'Education'
    }
  ];

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-[#fdfbf7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl sm:text-5xl text-[#2d1f1a] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Health & Nutrition Blog
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Expert insights, recipes, and tips for a healthier lifestyle
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-1 bg-[#6b4423]/10 text-[#6b4423] rounded-full text-sm mb-4 w-fit">
                {blogPosts[0].category}
              </span>
              <h2
                className="text-3xl text-[#2d1f1a] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {blogPosts[0].title}
              </h2>
              <p className="text-foreground/70 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-foreground/60 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[#6b4423] hover:gap-3 transition-all">
                Read More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block px-3 py-1 bg-[#6b4423]/10 text-[#6b4423] rounded-full text-xs mb-3 w-fit">
                    {post.category}
                  </span>
                  <h3
                    className="text-xl text-[#2d1f1a] mb-3 group-hover:text-[#6b4423] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-[#6b4423] hover:gap-3 transition-all text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
