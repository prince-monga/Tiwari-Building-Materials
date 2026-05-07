import { motion } from 'framer-motion'
import { TrendingUp, Building2, Home, MapPin } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from './UI'

const marketStats = [
  { Icon: TrendingUp, value: '8%', label: 'India Construction GDP', desc: "Construction contributes 8% to India's GDP and growing fast.", color: 'bg-green-500/15 text-green-400' },
  { Icon: Building2, value: '35%', label: 'Rajasthan Infra Surge', desc: 'Rajasthan infrastructure spending up 35% under state plans.', color: 'bg-blue-500/15 text-blue-400' },
  { Icon: Home, value: '2Cr+', label: 'Housing Units Needed', desc: 'India needs 2 crore+ affordable housing units by 2030.', color: 'bg-orange-500/15 text-orange-400' },
  { Icon: MapPin, value: '40%', label: 'Alwar Urban Growth', desc: 'Alwar district urbanization growing at 40% this decade.', color: 'bg-purple-500/15 text-purple-400' },
]

export default function MarketDemand() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <div className="flex justify-center"><SectionLabel>Market Opportunity</SectionLabel></div>
            <SectionHeading center>India's Construction Boom is Here</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">Rajasthan is at the center of India's infrastructure revolution. Demand for quality materials has never been higher.</p>
          </FadeIn>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {marketStats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <motion.div whileHover={{ y: -5 }} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                  <s.Icon size={22} />
                </div>
                <div className="text-3xl font-black text-[#F97316] mb-1">{s.value}</div>
                <div className="text-[#1F1F1F] font-bold text-sm mb-2">{s.label}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-r from-[#1F1F1F] to-[#2a2a2a] rounded-2xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-black text-xl sm:text-2xl mb-2">Be Part of Rajasthan's Growth Story</h3>
              <p className="text-gray-400 text-sm max-w-lg">Partner with Tiwari Building Materials for reliable supply as Alwar and Rajasthan continue to grow.</p>
            </div>
            <a href="tel:9694577828" className="shrink-0 bg-[#F97316] text-white font-black px-8 py-4 rounded-xl hover:bg-orange-500 transition-all shadow-xl shadow-orange-500/30 whitespace-nowrap">
              Call Us Today →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
