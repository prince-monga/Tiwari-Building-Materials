import { useState } from 'react'
import { MapPin, Phone, MessageCircle, Clock, Send, Loader } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from './UI'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/inquiry.php`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
    } catch (_) {}
    setLoading(false); setSent(true)
    setForm({ name: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const info = [
    { Icon: MapPin, label: 'Address', value: '6KA107, Shivaji Park, Alwar, Rajasthan', href: 'https://maps.google.com/?q=Shivaji+Park+Alwar', bg: 'bg-[#F97316]' },
    { Icon: Phone, label: 'Phone', value: '+91 96945 77828', href: 'tel:9694577828', bg: 'bg-[#F97316]' },
    { Icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us instantly', href: 'https://wa.me/919694577828', bg: 'bg-green-500' },
    { Icon: Clock, label: 'Hours', value: 'Mon–Sat: 8AM–7PM · Sun: 9AM–2PM', href: null, bg: 'bg-[#1F1F1F]' },
  ]

  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <div className="flex justify-center"><SectionLabel>Contact Us</SectionLabel></div>
            <SectionHeading center>Get in Touch Today</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">Reach out for pricing, bulk orders, or any material requirements. We respond within 2 hours.</p>
          </FadeIn>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <div className="space-y-4">
              {info.map((item, i) => (
                <div key={i}
                  className={`flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm ${item.href ? 'hover:border-[#F97316] cursor-pointer transition-colors' : ''}`}
                  onClick={() => item.href && window.open(item.href, item.href.startsWith('http') ? '_blank' : '_self')}>
                  <div className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <item.Icon className="text-white" size={17} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">{item.label}</div>
                    <div className="text-[#1F1F1F] font-semibold text-sm mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href="tel:9694577828" className="flex items-center justify-center gap-2 bg-[#1F1F1F] text-white font-bold py-3.5 rounded-xl hover:bg-[#F97316] transition-all text-sm">
                  <Phone size={14} /> Call Now
                </a>
                <a href="https://wa.me/919694577828" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3.5 rounded-xl hover:bg-green-600 transition-all text-sm">
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 sm:p-8 space-y-5">
              <h3 className="text-[#1F1F1F] font-black text-xl">Send an Inquiry</h3>
              {sent && <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl flex items-center gap-2"><span>✓</span> Thank you! We'll contact you shortly.</div>}
              {[{ label: 'Your Name *', key: 'name', type: 'text', placeholder: 'Enter your full name' },
                { label: 'Phone Number *', key: 'phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' }].map(f => (
                <div key={f.key}>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">{f.label}</label>
                  <input type={f.type} required value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F97316] transition-colors bg-gray-50"
                    placeholder={f.placeholder} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Message / Requirement</label>
                <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F97316] transition-colors bg-gray-50 resize-none"
                  placeholder="Tell us about your material requirements..." />
              </div>
              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 disabled:opacity-60">
                {loading ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
                {loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
