import { motion } from 'framer-motion'
import { Award, Truck, Headphones, Handshake, Clock, Package } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from './UI'

const whyUs = [
  { Icon: Award, title: 'Premium Quality', desc: 'All materials sourced from certified suppliers and tested for IS compliance.', color: 'bg-orange-500/15 text-orange-400' },
  { Icon: Truck, title: 'Timely Delivery', desc: 'Reliable logistics ensuring your materials arrive on schedule, every time.', color: 'bg-blue-500/15 text-blue-400' },
  { Icon: Headphones, title: 'Expert Support', desc: 'Technical guidance from experienced professionals for every project.', color: 'bg-purple-500/15 text-purple-400' },
  { Icon: Handshake, title: 'Trusted Pricing', desc: 'Transparent, competitive pricing with no hidden charges.', color: 'bg-green-500/15 text-green-400' },
  { Icon: Clock, title: '23+ Years Trust', desc: 'Serving Alwar since 2001 with an unmatched reputation for reliability.', color: 'bg-yellow-500/15 text-yellow-400' },
  { Icon: Package, title: 'Bulk Supply', desc: 'Capacity to handle large-scale orders for contractors and developers.', color: 'bg-red-500/15 text-red-400' },
]

export default function WhyUs() {
  return (
    <section className="section-pad bg-[#111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(circle, #F97316 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <div className="flex justify-center"><SectionLabel>Why Choose Us</SectionLabel></div>
            <SectionHeading light center>The Tiwari Difference</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">23 years of experience means we understand what contractors and builders truly need.</p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <motion.div whileHover={{ borderColor: '#F97316', y: -5 }}
                className="border border-gray-800 rounded-2xl p-5 sm:p-6 transition-all duration-300 h-full bg-white/[0.02]">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.Icon size={22} />
                </div>
                <h3 className="text-white font-black text-sm sm:text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
