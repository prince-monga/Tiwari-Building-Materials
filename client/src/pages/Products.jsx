import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FadeIn, SectionLabel, SectionHeading } from '../components/UI'
import { products } from '../data'

const categories = ['All', 'Aggregates', 'Masonry', 'Concrete']

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [inquiry, setInquiry] = useState({ name: '', phone: '', product: '', message: '' })
  const [sent, setSent] = useState(false)

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/inquiry.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiry),
      })
    } catch (_) {}
    setSent(true)
    setInquiry({ name: '', phone: '', product: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <Helmet>
        <title>Products | Bajri, Rodhi, Bricks & Concrete | Tiwari Building Materials</title>
        <meta name="description" content="Quality Bajri, Rodhi, Bricks and Concrete materials in Alwar, Rajasthan. Bulk supply available. Contact Tiwari Building Materials." />
      </Helmet>

      <div className="bg-[#1F1F1F] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionLabel>Our Products</SectionLabel>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-4xl md:text-5xl font-black text-white mt-2">
              Quality Materials for <span className="text-[#F97316]">Every Build</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-xl">
              Sourced from certified suppliers, tested for quality, delivered on time across Alwar and Rajasthan.
            </p>
          </FadeIn>
        </div>
      </div>

      <section className="section-pad bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Category Filter */}
          <FadeIn>
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#F97316] text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-[#F97316] hover:text-[#F97316]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-[#1F1F1F] p-10 flex items-center justify-center">
                    <span className="text-7xl">{p.icon}</span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h2 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[#1F1F1F] font-black text-2xl">{p.name}</h2>
                      <span className="text-gray-400">{p.hindi}</span>
                    </div>
                    <p className="text-[#F97316] text-sm font-semibold mb-4">{p.tagline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.description}</p>

                    <div className="grid grid-cols-2 gap-6 mb-5">
                      <div>
                        <h4 className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider mb-2">Benefits</h4>
                        <ul className="space-y-1.5">
                          {p.benefits.map(b => (
                            <li key={b} className="text-xs text-gray-600 flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#F97316] shrink-0" />{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider mb-2">Use Cases</h4>
                        <ul className="space-y-1.5">
                          {p.uses.map(u => (
                            <li key={u} className="text-xs text-gray-600 flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />{u}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => setInquiry(prev => ({ ...prev, product: p.name }))}
                      className="w-full bg-[#F97316] text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors text-sm"
                    >
                      Request Price Quote
                    </button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-pad bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <SectionLabel>Get a Quote</SectionLabel>
              <SectionHeading>Request Pricing</SectionHeading>
              <p className="text-gray-500 text-sm mt-3">Fill in your requirements and we'll get back to you within 2 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#F9FAFB] rounded-xl border border-gray-100 p-8 space-y-5">
              {sent && (
                <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded">
                  ✓ Inquiry received! We'll contact you shortly.
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                  <input type="text" required value={inquiry.name} onChange={e => setInquiry({ ...inquiry, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] bg-white" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                  <input type="tel" required value={inquiry.phone} onChange={e => setInquiry({ ...inquiry, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] bg-white" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Product</label>
                <select value={inquiry.product} onChange={e => setInquiry({ ...inquiry, product: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] bg-white">
                  <option value="">Select a product</option>
                  {products.map(p => <option key={p.id} value={p.name}>{p.name} ({p.hindi})</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Requirements</label>
                <textarea rows={3} value={inquiry.message} onChange={e => setInquiry({ ...inquiry, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] bg-white resize-none"
                  placeholder="Quantity, delivery location, timeline..." />
              </div>
              <button type="submit" className="w-full bg-[#F97316] text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
