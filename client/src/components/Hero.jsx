import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Phone, MapPin, CheckCircle, Star } from 'lucide-react'

const HERO_BG = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Construction site" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/78 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-[#F97316] to-transparent origin-top" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="text-[#F97316]" size={15} />
            <span className="text-white text-xs font-semibold tracking-wider">Alwar, Rajasthan · Since 2001</span>
            <div className="flex gap-0.5 ml-1">{[...Array(5)].map((_, i) => <Star key={i} className="text-[#F97316] fill-[#F97316]" size={10} />)}</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-7">
            <img src="/tiwari-logo.png" alt="Tiwari Building Materials" style={{ height: '90px', width: 'auto', objectFit: 'contain', display: 'block', maxWidth: '300px' }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5">
            Building <span className="text-[#F97316]">Strong</span><br />
            Foundations<br />
            <span className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold">for 23+ Years in Alwar</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Premium <strong className="text-white">Bajri · Rodhi · Bricks · Concrete</strong> delivered across Alwar & Rajasthan. Quality you can trust.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {['IS Standard Materials', 'Bulk Supply Available', 'Same Day Delivery'].map(t => (
              <span key={t} className="flex items-center gap-1.5 text-gray-300 text-sm">
                <CheckCircle className="text-[#F97316]" size={14} />{t}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link to="/products"
              className="group inline-flex items-center justify-center gap-2 bg-[#F97316] text-white font-black px-8 py-4 rounded-xl hover:bg-orange-500 transition-all shadow-2xl shadow-orange-500/40 hover:-translate-y-1 text-sm sm:text-base">
              View Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/919694577828?text=Hello%2C%20I%20need%20building%20materials." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-black px-8 py-4 rounded-xl hover:bg-green-400 transition-all shadow-xl shadow-green-500/30 hover:-translate-y-1 text-sm sm:text-base">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a href="tel:9694577828"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all text-sm sm:text-base">
              <Phone size={14} /> Call Now
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-8 pt-8 border-t border-white/15">
            {[{ v: '23+', t: 'Years Experience' }, { v: '1000+', t: 'Happy Clients' }, { v: '500+', t: 'Projects Done' }, { v: '4', t: 'Product Types' }].map(s => (
              <div key={s.t}>
                <div className="text-[#F97316] font-black text-2xl sm:text-3xl">{s.v}</div>
                <div className="text-gray-400 text-xs mt-0.5">{s.t}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <span className="text-gray-500 text-[9px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#F97316] to-transparent" />
      </motion.div>
    </section>
  )
}
