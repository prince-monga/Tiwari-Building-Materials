import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from './UI'
import { stats } from '../data'

const ABOUT_IMG = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=85&auto=format&fit=crop'

export default function AboutSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={ABOUT_IMG} alt="Construction materials supply Alwar" className="w-full h-72 sm:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 shadow-xl">
                  <img src="/tiwari-logo.png" alt="Tiwari" style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }} />
                  <div>
                    <div className="font-black text-[#1F1F1F] text-sm">Mahesh Chand Tiwari</div>
                    <div className="text-[#F97316] text-xs font-semibold">Founder & Director · Est. 2001</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}
              className="absolute -top-4 -right-4 bg-[#F97316] text-white rounded-2xl p-4 shadow-xl shadow-orange-500/30 text-center hidden sm:block">
              <div className="font-black text-3xl">23+</div>
              <div className="text-xs font-semibold opacity-90">Years</div>
            </motion.div>
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn>
              <SectionLabel>About Us</SectionLabel>
              <SectionHeading>Alwar's Most Trusted Building Material Supplier</SectionHeading>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                Tiwari Building Materials has been supplying quality construction materials in Alwar for more than <strong className="text-[#1F1F1F]">23 years</strong>. Founded by <strong className="text-[#1F1F1F]">Mahesh Chand Tiwari</strong>, we've built our reputation on reliability, quality, and honest service.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                Trusted by hundreds of builders, contractors, and homeowners across Alwar and Rajasthan — we ensure your projects never face material shortages.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ul className="mt-6 space-y-3">
                {['Established in 2001', '23+ Years Experience', 'Reliable Supply Chain', 'Trusted by 1000+ Contractors'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="text-[#F97316] shrink-0" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="grid grid-cols-2 gap-3 mt-7">
                {stats.map(s => (
                  <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center hover:border-[#F97316] transition-colors">
                    <div className="text-2xl font-black text-[#F97316]">{s.value}{s.suffix}</div>
                    <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link to="/about" className="inline-flex items-center gap-2 mt-7 bg-[#1F1F1F] text-white text-sm font-bold px-7 py-3.5 rounded-xl hover:bg-[#F97316] transition-all duration-300 group">
                Our Full Story <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
