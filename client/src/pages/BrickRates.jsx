import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, RefreshCw, Star, CheckCircle, Info } from 'lucide-react'
import { FadeIn, SectionLabel } from '../components/UI'
import { Link } from 'react-router-dom'

const HERO_BG = 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=1600&q=80&auto=format&fit=crop'

const bricks = [
  {
    name: 'Bahror Bricks',
    hindi: 'बहरोड़ ईंट',
    price: '₹8,200',
    per: '/ 1000 bricks',
    badge: 'Premium',
    badgeColor: 'bg-[#F97316]',
    features: ['Highest strength grade', 'Uniform size & shape', 'Low water absorption', 'Best for load-bearing walls'],
    img: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=400&q=80&auto=format&fit=crop',
    popular: true,
  },
  {
    name: 'Mandawar Bricks',
    hindi: 'मंडावर ईंट',
    price: '₹7,200',
    per: '/ 1000 bricks',
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
    features: ['Good compressive strength', 'Consistent firing', 'Suitable for all construction', 'Widely used in Alwar'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop',
    popular: false,
  },
  {
    name: 'Narayanpur Bricks',
    hindi: 'नारायणपुर ईंट',
    price: '₹6,800',
    per: '/ 1000 bricks',
    badge: 'Value',
    badgeColor: 'bg-green-500',
    features: ['Cost-effective option', 'Good for boundary walls', 'Standard IS grade', 'Bulk supply available'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80&auto=format&fit=crop',
    popular: false,
  },
  {
    name: 'UP Bricks',
    hindi: 'यूपी ईंट',
    price: '₹7,000',
    per: '/ 1000 bricks',
    badge: 'Standard',
    badgeColor: 'bg-purple-500',
    features: ['Imported from UP', 'Smooth finish', 'Good for plastering', 'Consistent quality'],
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&q=80&auto=format&fit=crop',
    popular: false,
  },
]

const notes = [
  { icon: '🧱', text: 'Prices are per 1000 bricks' },
  { icon: '🚛', text: 'Delivery charges extra based on location' },
  { icon: '📦', text: 'Minimum order: 1000 bricks' },
  { icon: '💰', text: 'Bulk discounts available on 10,000+ bricks' },
  { icon: '📞', text: 'Rates subject to change — confirm before ordering' },
  { icon: '✅', text: 'All bricks are IS standard certified' },
]

export default function BrickRates() {
  return (
    <>
      <Helmet>
        <title>Brick Rates | Bahror, Mandawar, Narayanpur, UP Bricks | Tiwari Building Materials</title>
        <meta name="description" content="Latest brick rates in Alwar, Rajasthan. Bahror ₹8200, Mandawar ₹7200, Narayanpur ₹6800, UP Bricks ₹7000 per 1000 bricks. Tiwari Building Materials." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <img src={HERO_BG} alt="Brick Rates" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10 pt-24">
          <FadeIn>
            <SectionLabel>Brick Rates</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 leading-tight">
              Brick <span className="text-[#F97316]">Price List</span>
            </h1>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">Bahror · Mandawar · Narayanpur · UP Bricks — All Varieties</p>
          </FadeIn>
        </div>
      </section>

      {/* Update bar */}
      <div className="bg-[#F97316] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white text-xs sm:text-sm font-semibold">
          <span className="flex items-center gap-1.5"><RefreshCw size={13} /> Rates updated regularly</span>
          <span className="hidden sm:block opacity-50">|</span>
          <a href="tel:9694577828" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone size={13} /> +91 96945 77828
          </a>
          <span className="hidden sm:block opacity-50">|</span>
          <a href="https://wa.me/919694577828?text=Please%20share%20latest%20brick%20rates" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <MessageCircle size={13} /> WhatsApp for rates
          </a>
        </div>
      </div>

      {/* Brick cards */}
      <section className="section-pad bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <FadeIn>
            <div className="text-center mb-10">
              <div className="flex justify-center"><SectionLabel>All Varieties</SectionLabel></div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1F1F1F] mt-2">Choose Your Brick Type</h2>
              <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">All bricks are IS standard certified. Bulk supply available across Alwar & Rajasthan.</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {bricks.map((brick, i) => (
              <FadeIn key={brick.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border-2 ${brick.popular ? 'border-[#F97316] shadow-orange-100' : 'border-gray-100 hover:border-orange-200'}`}>

                  {brick.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-[#F97316] text-white text-[10px] font-black text-center py-1.5 uppercase tracking-widest flex items-center justify-center gap-1">
                      <Star size={10} fill="white" /> Best Quality
                    </div>
                  )}

                  {/* Image */}
                  <div className={`relative h-36 overflow-hidden ${brick.popular ? 'mt-7' : ''}`}>
                    <img src={brick.img} alt={brick.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className={`absolute top-3 right-3 ${brick.badgeColor} text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide`}>
                      {brick.badge}
                    </span>
                  </div>

                  <div className="p-5">
                    {/* Price */}
                    <div className="text-center mb-4 pb-4 border-b border-gray-100">
                      <div className="text-3xl font-black text-[#F97316]">{brick.price}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{brick.per}</div>
                    </div>

                    {/* Name */}
                    <h3 className="text-[#1F1F1F] font-black text-base mb-0.5">{brick.name}</h3>
                    <p className="text-gray-400 text-xs mb-4">{brick.hindi}</p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-5">
                      {brick.features.map(f => (
                        <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle size={12} className="text-[#F97316] mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a href={`https://wa.me/919694577828?text=I%20need%20${encodeURIComponent(brick.name)}%20-%20please%20share%20availability`}
                      target="_blank" rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl transition-all text-xs ${
                        brick.popular
                          ? 'bg-[#F97316] text-white hover:bg-orange-500 shadow-lg shadow-orange-500/30'
                          : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-[#F97316] hover:text-white hover:border-[#F97316]'
                      }`}>
                      <MessageCircle size={13} /> Order via WhatsApp
                    </a>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Comparison table */}
          <FadeIn>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-10">
              <div className="bg-[#1F1F1F] px-6 py-4">
                <h3 className="text-white font-black text-lg">Quick Price Comparison</h3>
                <p className="text-gray-400 text-xs mt-0.5">All prices per 1000 bricks</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Brick Type</th>
                      <th className="text-left px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Hindi Name</th>
                      <th className="text-right px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Rate / 1000</th>
                      <th className="text-center px-6 py-3 text-xs font-black text-gray-500 uppercase tracking-wider">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bricks.map((b, i) => (
                      <tr key={b.name} className={`border-b border-gray-50 hover:bg-orange-50/30 transition-colors ${b.popular ? 'bg-orange-50/20' : ''}`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-[#1F1F1F] text-sm">{b.name}</span>
                            {b.popular && <span className="text-[9px] bg-[#F97316] text-white px-1.5 py-0.5 rounded-full font-bold">TOP</span>}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm">{b.hindi}</td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-[#F97316] font-black text-lg">{b.price}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`${b.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>{b.badge}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Notes */}
          <FadeIn>
            <div className="bg-[#1F1F1F] rounded-3xl p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-[#F97316] rounded-xl flex items-center justify-center">
                  <Info size={16} className="text-white" />
                </div>
                <h3 className="text-white font-black text-lg">Important Notes</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
          <FadeIn>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 text-center">
              <h3 className="text-2xl font-black text-[#1F1F1F] mb-2">Ready to Order?</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Call or WhatsApp us for bulk pricing, delivery schedule, and availability confirmation.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:9694577828"
                  className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-orange-500 transition-all shadow-lg shadow-orange-500/30 text-sm">
                  <Phone size={15} /> Call: 96945 77828
                </a>
                <a href="https://wa.me/919694577828?text=I%20want%20to%20order%20bricks%20-%20please%20share%20availability"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-green-600 transition-all text-sm">
                  <MessageCircle size={15} /> WhatsApp Order
                </a>
                <Link to="/material-rates"
                  className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-bold px-8 py-3.5 rounded-xl hover:border-[#F97316] hover:text-[#F97316] transition-all text-sm">
                  View Material Rates →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
