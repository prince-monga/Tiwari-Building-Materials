import { motion } from 'framer-motion'
import { Phone, UserCheck } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from './UI'

const TEAM_IMG_1 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=85&auto=format&fit=crop&crop=face'
const TEAM_IMG_2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85&auto=format&fit=crop&crop=face'

const team = [
  { name: 'Mahesh Chand Tiwari', role: 'Founder & Director', desc: '23+ years of expertise in construction materials supply. Built the company from ground up with a vision of quality and trust.', img: TEAM_IMG_1, phone: '9694577828', tag: 'Founder' },
  { name: 'Lakshya Tiwari', role: 'B.Tech | International Sales', desc: 'Leading digital transformation and international business development. Bringing modern practices to a trusted legacy business.', img: TEAM_IMG_2, phone: '8529430889', tag: 'Sales Head' },
]

export default function Team() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <div className="flex justify-center"><SectionLabel>Our Team</SectionLabel></div>
            <SectionHeading center>The People Behind the Brand</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">A dedicated team of 20+ professionals committed to delivering quality materials and exceptional service.</p>
          </FadeIn>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.12}>
              <motion.div whileHover={{ y: -6 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">{m.tag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-black text-lg leading-tight">{m.name}</div>
                    <div className="text-[#F97316] text-xs font-semibold mt-0.5">{m.role}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{m.desc}</p>
                  <a href={`tel:${m.phone}`} className="flex items-center gap-2 text-sm font-semibold text-[#1F1F1F] hover:text-[#F97316] transition-colors">
                    <Phone size={13} className="text-[#F97316]" /> +91 {m.phone}
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-[#1F1F1F] text-gray-300 text-sm px-7 py-4 rounded-2xl">
              <UserCheck className="text-[#F97316]" size={20} />
              <span><strong className="text-[#F97316] text-lg">20+</strong> Dedicated team members across operations, logistics & sales</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
