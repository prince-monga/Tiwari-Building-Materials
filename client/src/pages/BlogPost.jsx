import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaArrowLeft, FaClock, FaTag } from 'react-icons/fa'
import { blogPosts } from '../data'
import { FadeIn } from '../components/UI'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-3xl font-black text-[#1F1F1F] mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-[#F97316] hover:underline">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  const related = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2)

  // Simple markdown-like renderer
  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-xl font-black text-[#1F1F1F] mt-8 mb-3">{line.slice(3)}</h2>
      if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-semibold text-[#1F1F1F] mt-4 mb-1">{line.slice(2, -2)}</p>
      if (line.startsWith('- ')) return <li key={i} className="text-gray-600 text-sm ml-4 mb-1">{line.slice(2)}</li>
      if (line.trim() === '') return <br key={i} />
      return <p key={i} className="text-gray-600 text-sm leading-relaxed mb-3">{line}</p>
    })
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Tiwari Building Materials Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="bg-[#1F1F1F] pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
              <FaArrowLeft size={12} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#F97316] text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                <FaTag size={10} /> {post.category}
              </span>
              <span className="text-gray-400 text-xs flex items-center gap-1">
                <FaClock size={10} /> {post.readTime}
              </span>
            </div>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-3xl md:text-4xl font-black text-white leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-400 text-sm mt-3">
              {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · Tiwari Building Materials
            </p>
          </FadeIn>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="prose-sm max-w-none">
              {renderContent(post.content)}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 p-6 bg-[#F9FAFB] rounded-xl border border-gray-100">
              <p className="text-sm font-semibold text-[#1F1F1F] mb-1">Need quality building materials in Alwar?</p>
              <p className="text-gray-500 text-sm mb-4">Contact Tiwari Building Materials for Bajri, Rodhi, Bricks and Concrete materials.</p>
              <div className="flex gap-3">
                <a href="tel:9694577828" className="bg-[#F97316] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-orange-600 transition-colors">
                  Call Now
                </a>
                <a href="https://wa.me/919694577828" className="border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded hover:border-[#F97316] transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>

          {related.length > 0 && (
            <FadeIn delay={0.3}>
              <div className="mt-12">
                <h3 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[#1F1F1F] font-black text-lg mb-6">Related Articles</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map(r => (
                    <Link key={r.id} to={`/blog/${r.slug}`} className="block bg-[#F9FAFB] rounded-xl border border-gray-100 p-5 hover:border-[#F97316] transition-colors">
                      <span className="text-[#F97316] text-xs font-semibold">{r.category}</span>
                      <h4 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[#1F1F1F] font-bold text-sm mt-1 leading-snug">{r.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  )
}
