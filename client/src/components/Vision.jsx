import { motion } from 'framer-motion'
import { Globe, Trophy, Layers, Monitor } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from './UI'

const visions = [
  { Icon: Globe, title: 'Expand Network', desc: 'Build a distribution network covering all of Rajasthan and Haryana.', color: 'bg-blue-500/15 text-blue-500' },
  { Icon: Trophy, title: 'Top Regional Supplier', desc: 'Become the #1 building materials supplier in Rajasthan & Haryana.', color: 'bg-yellow-500/15 text-yellow-500' },
  { Icon: Layers, title: 'Wider Product Range', desc: 'Add cement, steel, and prefab materials to our catalog.', color: 'bg-orange-500/15 text-orange-500' },
  { Icon: Monitor, title: 'Digital Transformation', desc: 'Online ordering, real-time tracking, and digital invoicing for all clients.', color: 'bg-purple-500/15 text-purple-500' },
]

export default function Vision() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <div className="flex justify-center"><SectionLabel>Future Vision</SectionLabel></div>
            <SectionHeading center>Where We're Headed</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">Our 23-year foundation is just the beginning. Here's our roadmap for the next decade.</p>
          </FadeIn>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visions.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6, borderColor: '#F97316' }}
                className="border-2 border-gray-100 rounded-2xl p-6 transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                  <v.Icon size={22} />
                </div>
                <h3 className="text-[#1F1F1F] font-black text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
