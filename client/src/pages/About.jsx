import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, Target, Eye, Heart, Users } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from '../components/UI'
import Team from '../components/Team'

const ABOUT_HERO = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=85&auto=format&fit=crop'
const STORY_IMG  = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&auto=format&fit=crop'

const timeline = [
  { year: '2001', title: 'Founded', desc: 'Mahesh Chand Tiwari establishes Tiwari Building Materials in Alwar with a vision to supply quality construction materials.' },
  { year: '2005', title: 'Growth Phase', desc: 'Expanded product range to include Rodhi and Concrete materials. Client base grows to 100+ contractors.' },
  { year: '2010', title: 'Bulk Supply', desc: 'Started bulk supply operations for large infrastructure projects across Alwar district.' },
  { year: '2015', title: 'Team Expansion', desc: 'Grew to a team of 20+ dedicated professionals. Established strong logistics network.' },
  { year: '2020', title: 'Digital Push', desc: 'Lakshya Tiwari joins to lead digital transformation and international sales development.' },
  { year: '2024', title: 'Today', desc: '23+ years strong. Serving 1000+ clients. Expanding to Rajasthan & Haryana markets.' },
]

const values = [
  { Icon: CheckCircle, title: 'Quality First', desc: 'Every material we supply meets IS standards. No compromise on quality.', color: 'bg-orange-500/10 text-orange-500' },
  { Icon: Heart, title: 'Integrity', desc: 'Transparent pricing, honest communication, and reliable commitments.', color: 'bg-red-500/10 text-red-500' },
  { Icon: Target, title: 'Reliability', desc: 'On-time delivery every time. Your project timeline is our priority.', color: 'bg-blue-500/10 text-blue-500' },
  { Icon: Users, title: 'Growth', desc: 'We grow with our clients. Long-term partnerships over one-time transactions.', color: 'bg-green-500/10 text-green-500' },
]

const mvv = [
  { Icon: Target, label: 'Our Mission', text: 'To supply the highest quality construction materials at fair prices, ensuring every builder in Alwar has access to materials that build safe, lasting structures.' },
  { Icon: Eye, label: 'Our Vision', text: 'To become the leading building materials supplier across Rajasthan and Haryana, known for quality, reliability, and innovation in the construction supply chain.' },
  { Icon: Heart, label: 'Our Values', text: 'Quality, Integrity, Reliability, and Growth. These four pillars have guided every decision at Tiwari Building Materials for over two decades.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Tiwari Building Materials | Alwar, Rajasthan</title>
        <meta name="description" content="Learn about Tiwari Building Materials - 23+ years of trusted construction material supply in Alwar, Rajasthan. Founded by Mahesh Chand Tiwari." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <img src={ABOUT_HERO} alt="About Tiwari Building Materials" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10 pt-24">
          <FadeIn>
            <SectionLabel>About Us</SectionLabel>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-2 leading-tight">
              23 Years of Building <span className="text-[#F97316]">Trust</span>
            </h1>
            <p className="text-gray-300 mt-3 max-w-xl text-sm sm:text-base">
              From a single supplier to Alwar's most trusted building materials company — this is our story.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story section */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel>Our Story</SectionLabel>
              <SectionHeading>Built on Hard Work & Honest Service</SectionHeading>
              <p className="mt-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                In 2001, <strong className="text-[#1F1F1F]">Mahesh Chand Tiwari</strong> started Tiwari Building Materials with a simple belief — that builders deserve quality materials at honest prices. Starting from Alwar's Shivaji Park, he built relationships one contractor at a time.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Today, 23 years later, we supply <strong className="text-[#1F1F1F]">Bajri, Rodhi, Bricks, and Concrete Materials</strong> to 1000+ clients across Alwar and Rajasthan. Our son Lakshya Tiwari (B.Tech) now leads our digital and international expansion.
              </p>
              <ul className="mt-6 space-y-3">
                {['Family-owned business since 2001', 'Serving 1000+ clients across Rajasthan', '20+ dedicated team members', 'IS-certified quality materials only'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="text-[#F97316] shrink-0" size={17} /> {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={STORY_IMG} alt="Construction site Alwar" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 shadow-xl">
                      <img src="/tiwari-logo.png" alt="Tiwari" style={{ height: '42px', width: 'auto', objectFit: 'contain', display: 'block' }} />
                    <div>
                      <div className="font-black text-[#1F1F1F] text-sm">Tiwari Building Materials</div>
                      <div className="text-[#F97316] text-xs font-semibold">Est. 2001 · Alwar, Rajasthan</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeIn>
              <div className="flex justify-center"><SectionLabel>Our Purpose</SectionLabel></div>
              <SectionHeading center>Mission, Vision & Values</SectionHeading>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mvv.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full">
                  <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center mb-5">
                    <item.Icon className="text-[#F97316]" size={22} />
                  </div>
                  <h3 className="text-[#1F1F1F] font-black text-lg mb-3">{item.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeIn>
              <div className="flex justify-center"><SectionLabel>Our Journey</SectionLabel></div>
              <SectionHeading center>23 Years of Milestones</SectionHeading>
            </FadeIn>
          </div>
          <div className="relative">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.08}>
                  <div className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:px-10 pl-12 md:pl-0">
                      <motion.div whileHover={{ borderColor: '#F97316' }}
                        className={`bg-white rounded-2xl border-2 border-gray-100 shadow-sm p-5 transition-colors ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                        <span className="text-[#F97316] font-black text-sm">{item.year}</span>
                        <h4 className="text-[#1F1F1F] font-black mt-1 mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </motion.div>
                    </div>
                    <div className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-[#F97316] border-2 border-white shadow-lg md:-translate-x-2 top-5" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeIn>
              <div className="flex justify-center"><SectionLabel>Core Values</SectionLabel></div>
              <SectionHeading light center>What We Stand For</SectionHeading>
            </FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <motion.div whileHover={{ borderColor: '#F97316', y: -4 }}
                  className="border border-gray-800 rounded-2xl p-6 text-center transition-all duration-300 bg-white/[0.02]">
                  <div className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mx-auto mb-4`}>
                    <v.Icon size={26} />
                  </div>
                  <h3 className="text-white font-black mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Team />
    </>
  )
}
