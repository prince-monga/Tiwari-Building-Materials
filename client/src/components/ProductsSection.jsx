import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { FadeIn, SectionLabel, SectionHeading } from './UI'
import { products } from '../data'

export default function ProductsSection() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <div className="flex justify-center"><SectionLabel>Our Products</SectionLabel></div>
            <SectionHeading center>Quality Materials for Every Project</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              From foundation to finish — premium construction materials tested for quality and delivered on time across Alwar & Rajasthan.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.07}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col group hover:shadow-xl hover:shadow-black/8 transition-shadow duration-300">
                {/* Real image from data */}
                <div className="relative overflow-hidden h-44">
                  <img src={p.image} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-[#F97316] text-white text-xs font-bold px-2.5 py-1 rounded-full">{p.category}</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-black text-[#1F1F1F] text-lg">{p.name}</h3>
                    <span className="text-gray-400 text-xs">{p.hindi}</span>
                  </div>
                  <p className="text-[#F97316] text-xs font-bold mb-3">{p.tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">{p.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.benefits.slice(0, 3).map(b => (
                      <li key={b} className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/products"
                    className="flex items-center justify-center gap-2 bg-[#1F1F1F] text-white text-sm font-bold py-3 rounded-xl hover:bg-[#F97316] transition-all duration-300 group/btn">
                    Enquire Now <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link to="/products"
              className="inline-flex items-center gap-2 border-2 border-[#1F1F1F] text-[#1F1F1F] font-bold px-8 py-3.5 rounded-xl hover:bg-[#1F1F1F] hover:text-white transition-all duration-300">
              View All Products →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
