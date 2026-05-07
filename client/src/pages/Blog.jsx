import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FadeIn, SectionLabel, SectionHeading } from '../components/UI'
import { blogPosts } from '../data'

const categories = ['All', 'Material Guide', 'Market Trends', 'Construction Tips']

export default function Blog() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = blogPosts.filter(post => {
    const matchCat = activeCategory === 'All' || post.category === activeCategory
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <Helmet>
        <title>Blog | Construction Tips & Material Guides | Tiwari Building Materials</title>
        <meta name="description" content="Expert construction tips, material guides, and Rajasthan market insights from Tiwari Building Materials." />
      </Helmet>

      <div className="bg-[#1F1F1F] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionLabel>Blog & Insights</SectionLabel>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-4xl md:text-5xl font-black text-white mt-2">
              Construction <span className="text-[#F97316]">Knowledge Hub</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-xl">
              Expert guides, material tips, and market insights to help you build better.
            </p>
          </FadeIn>
        </div>
      </div>

      <section className="section-pad bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Search & Filter */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] bg-white"
              />
              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                      activeCategory === cat ? 'bg-[#F97316] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#F97316]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">No articles found.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <FadeIn key={post.id} delay={i * 0.1}>
                  <Link to={`/blog/${post.slug}`} className="group block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-[#1F1F1F] h-40 flex items-center justify-center">
                      <span style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[#F97316] font-black text-4xl opacity-30">TBM</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-orange-50 text-[#F97316] text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                        <span className="text-gray-400 text-xs">{post.readTime}</span>
                      </div>
                      <h2 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[#1F1F1F] font-black text-base leading-snug mb-3 group-hover:text-[#F97316] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="mt-4 text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
