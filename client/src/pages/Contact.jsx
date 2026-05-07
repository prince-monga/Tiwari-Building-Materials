import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Clock, Send, Loader, Mail } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from '../components/UI'

const CONTACT_HERO = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid 10-digit phone required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({}); setLoading(true)
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/inquiry.php`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
    } catch (_) {}
    setLoading(false); setSent(true)
    setForm({ name: '', phone: '', email: '', product: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const contacts = [
    { Icon: Phone, label: 'Mahesh Chand Tiwari', value: '+91 96945 77828', href: 'tel:9694577828', bg: 'bg-[#F97316]' },
    { Icon: Phone, label: 'Sales Office', value: '+91 93522 06493', href: 'tel:9352206493', bg: 'bg-[#F97316]' },
    { Icon: Phone, label: "Lakshya Tiwari (Int'l Sales)", value: '+91 85294 30889', href: 'tel:8529430889', bg: 'bg-[#F97316]' },
    { Icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us instantly', href: 'https://wa.me/919694577828', bg: 'bg-green-500' },
    { Icon: MapPin, label: 'Address', value: '6KA107, Shivaji Park, Alwar, Rajasthan', href: 'https://maps.google.com/?q=Shivaji+Park+Alwar', bg: 'bg-[#1F1F1F]' },
    { Icon: Clock, label: 'Business Hours', value: 'Mon–Sat: 8AM–7PM · Sun: 9AM–2PM', href: null, bg: 'bg-[#1F1F1F]' },
  ]

  return (
    <>
      <Helmet>
        <title>Contact Us | Tiwari Building Materials | Alwar, Rajasthan</title>
        <meta name="description" content="Contact Tiwari Building Materials in Alwar, Rajasthan. Call +91 96945 77828 or WhatsApp for building material inquiries." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <img src={CONTACT_HERO} alt="Contact Tiwari Building Materials" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10 pt-24">
          <FadeIn>
            <SectionLabel>Contact Us</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-2">
              Let's <span className="text-[#F97316]">Talk Business</span>
            </h1>
            <p className="text-gray-300 mt-3 text-sm sm:text-base">We respond within 2 hours. Call, WhatsApp, or fill the form below.</p>
          </FadeIn>
        </div>
      </section>

      {/* Quick action bar */}
      <div className="bg-[#F97316] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <a href="tel:9694577828" className="flex items-center gap-2 text-white font-bold text-sm hover:opacity-80 transition-opacity">
            <Phone size={16} /> +91 96945 77828
          </a>
          <span className="text-orange-300 hidden sm:block">|</span>
          <a href="tel:9352206493" className="flex items-center gap-2 text-white font-bold text-sm hover:opacity-80 transition-opacity">
            <Phone size={16} /> +91 93522 06493
          </a>
          <span className="text-orange-300 hidden sm:block">|</span>
          <a href="https://wa.me/919694577828" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-bold text-sm hover:opacity-80 transition-opacity">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact info */}
            <FadeIn>
              <h2 className="text-2xl font-black text-[#1F1F1F] mb-7">Contact Information</h2>
              <div className="space-y-4">
                {contacts.map((c, i) => (
                  <motion.div key={i} whileHover={{ x: 4 }}
                    className={`flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 ${c.href ? 'cursor-pointer hover:border-[#F97316] transition-colors' : ''}`}
                    onClick={() => c.href && window.open(c.href, c.href.startsWith('http') ? '_blank' : '_self')}>
                    <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                      <c.Icon className="text-white" size={17} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">{c.label}</div>
                      <div className="text-[#1F1F1F] font-bold text-sm mt-0.5">{c.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-52">
                <iframe
                  title="Tiwari Building Materials Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0!2d76.6!3d27.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMzJzM2LjAiTiA3NsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.15}>
              <div className="bg-gray-50 rounded-3xl border border-gray-100 p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center">
                    <Mail className="text-white" size={18} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[#1F1F1F]">Send an Inquiry</h2>
                    <p className="text-gray-400 text-xs">We'll reply within 2 hours</p>
                  </div>
                </div>

                {sent && (
                  <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl flex items-center gap-2 mb-5">
                    <span>✓</span> Thank you! We'll contact you within 2 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Full Name *</label>
                      <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className={`w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F97316] bg-white transition-colors ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                        placeholder="Your full name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Phone *</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={`w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F97316] bg-white transition-colors ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                        placeholder="10-digit mobile" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Email (Optional)</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F97316] bg-white transition-colors"
                      placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Material Required</label>
                    <select value={form.product} onChange={e => setForm({ ...form, product: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F97316] bg-white transition-colors">
                      <option value="">Select material</option>
                      <option>Bajri (बजरी)</option>
                      <option>Rodhi (रोडी)</option>
                      <option>Bricks (ईंट)</option>
                      <option>Concrete Materials</option>
                      <option>Multiple Materials</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Message *</label>
                    <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className={`w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F97316] bg-white resize-none transition-colors ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                      placeholder="Describe your requirements, quantity, delivery location..." />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#F97316] text-white font-black py-4 rounded-xl hover:bg-orange-500 transition-all shadow-lg shadow-orange-500/30 disabled:opacity-60">
                    {loading ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
                    {loading ? 'Sending...' : 'Send Inquiry'}
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="tel:9694577828" className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:border-[#F97316] hover:text-[#F97316] transition-all text-sm">
                      <Phone size={14} /> Call Now
                    </a>
                    <a href="https://wa.me/919694577828" target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-all text-sm">
                      <MessageCircle size={15} /> WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
