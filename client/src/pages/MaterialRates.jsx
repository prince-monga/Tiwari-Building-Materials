import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { TrendingUp, Truck, Package, Info, Phone, MessageCircle, RefreshCw } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from '../components/UI'
import { Link } from 'react-router-dom'

const HERO_BG = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop'

const banasRates = [
  { label: 'Katte se Truck', price: '₹1,650', unit: 'per truck', icon: '🚛', desc: 'Full truck load from katta' },
  { label: 'Per Feet Rate', price: '₹67', unit: 'per feet', icon: '📏', desc: 'Measured per running feet' },
  { label: 'Trally se 200 Feet', price: '₹13,500', unit: '200 feet', icon: '🚜', desc: 'Trally load of 200 feet' },
  { label: 'Trally Kate se', price: '₹1,850', unit: 'per trally', icon: '⚖️', desc: 'Trally from katta rate' },
]

const dustRoadi = [
  { label: 'Dust & Roadi Trally', price: '₹5,800', unit: 'per trally', icon: '🪨', desc: 'Mixed dust and roadi per trally load' },
]

const kateSeMaterial = [
  { label: 'Material per Tan', price: '₹800', unit: 'per tan', icon: '⚖️', desc: 'Rate per metric ton from katta' },
]

const notes = [
  { icon: '📦', text: '1 Tan = 1000 KG' },
  { icon: '📏', text: '1 Tan = 25 Feet' },
  { icon: '🚛', text: 'Delivery available across Alwar & Rajasthan' },
  { icon: '📞', text: 'Rates may vary — call to confirm latest prices' },
]

function RateCard({ item, index, accent = '#F97316' }) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] to-orange-400" />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-4xl">{item.icon}</div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-black text-[#F97316]">{item.price}</div>
              <div className="text-xs text-gray-400 font-medium mt-0.5">{item.unit}</div>
            </div>
          </div>
          <h3 className="text-[#1F1F1F] font-black text-base mb-1">{item.label}</h3>
          <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
        </div>
        <div className="px-6 pb-4">
          <a href="tel:9694577828"
            className="flex items-center justify-center gap-2 w-full bg-[#F97316]/10 text-[#F97316] font-bold py-2.5 rounded-xl hover:bg-[#F97316] hover:text-white transition-all text-xs">
            <Phone size={12} /> Confirm Rate
          </a>
        </div>
      </motion.div>
    </FadeIn>
  )
}

function Section({ title, subtitle, items, icon: Icon }) {
  return (
    <div className="mb-14">
      <FadeIn>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1F1F1F]">{title}</h2>
            {subtitle && <p className="text-gray-500 text-xs mt-0.5">{subtitle}</p>}
          </div>
        </div>
      </FadeIn>
      <div className={`grid gap-4 ${items.length === 1 ? 'max-w-sm' : items.length === 2 ? 'sm:grid-cols-2 max-w-2xl' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
        {items.map((item, i) => <RateCard key={item.label} item={item} index={i} />)}
      </div>
    </div>
  )
}

export default function MaterialRates() {
  return (
    <>
      <Helmet>
        <title>Material Rates | Bajri, Dust & Roadi Prices | Tiwari Building Materials Alwar</title>
        <meta name="description" content="Latest material rates for Bajri, Dust & Roadi, and Kate Se Material in Alwar, Rajasthan. Tiwari Building Materials - best prices guaranteed." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <img src={HERO_BG} alt="Material Rates" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10 pt-24">
          <FadeIn>
            <SectionLabel>Live Rates</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 leading-tight">
              Material <span className="text-[#F97316]">Rates</span>
            </h1>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">Bajri · Dust & Roadi · Kate Se Material — Updated Prices</p>
          </FadeIn>
        </div>
      </section>

      {/* Update notice bar */}
      <div className="bg-[#F97316] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white text-xs sm:text-sm font-semibold">
          <span className="flex items-center gap-1.5"><RefreshCw size={13} /> Rates updated regularly</span>
          <span className="hidden sm:block opacity-50">|</span>
          <a href="tel:9694577828" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone size={13} /> Call for latest: +91 96945 77828
          </a>
          <span className="hidden sm:block opacity-50">|</span>
          <a href="https://wa.me/919694577828?text=Please%20share%20latest%20material%20rates" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <MessageCircle size={13} /> WhatsApp for rates
          </a>
        </div>
      </div>

      {/* Main rates */}
      <section className="section-pad bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <Section title="Banas Rates" subtitle="River sand & gravel — multiple supply options" items={banasRates} icon={Truck} />
          <Section title="Dust & Roadi" subtitle="Crushed stone dust and road aggregate" items={dustRoadi} icon={Package} />
          <Section title="Kate Se Material" subtitle="Direct from katta — per ton pricing" items={kateSeMaterial} icon={TrendingUp} />

          {/* Important Notes */}
          <FadeIn>
            <div className="bg-[#1F1F1F] rounded-3xl p-6 sm:p-8 mt-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-[#F97316] rounded-xl flex items-center justify-center">
                  <Info size={16} className="text-white" />
                </div>
                <h3 className="text-white font-black text-lg">Important Notes</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {notes.map((n, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                    <span className="text-xl">{n.icon}</span>
                    <span className="text-gray-300 text-sm font-medium">{n.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.1}>
            <div className="mt-10 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 text-center">
              <h3 className="text-2xl font-black text-[#1F1F1F] mb-2">Need a Custom Quote?</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Bulk orders get special pricing. Contact us for project-specific rates and delivery schedules.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:9694577828"
                  className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-orange-500 transition-all shadow-lg shadow-orange-500/30 text-sm">
                  <Phone size={15} /> Call Now: 96945 77828
                </a>
                <a href="https://wa.me/919694577828?text=I%20need%20a%20bulk%20material%20quote" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-green-600 transition-all text-sm">
                  <MessageCircle size={15} /> WhatsApp Quote
                </a>
                <Link to="/brick-rates"
                  className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-bold px-8 py-3.5 rounded-xl hover:border-[#F97316] hover:text-[#F97316] transition-all text-sm">
                  View Brick Rates →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
