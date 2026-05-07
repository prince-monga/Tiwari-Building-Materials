import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { FadeIn, SectionLabel, SectionHeading } from './UI'
import { testimonials } from '../data'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="section-pad bg-[#111] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F97316]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <div className="flex justify-center"><SectionLabel>Testimonials</SectionLabel></div>
          <SectionHeading light center>What Our Clients Say</SectionHeading>
        </FadeIn>
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div key={current}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12">
              <Quote className="text-[#F97316]/30 mx-auto mb-6" size={44} />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => <Star key={i} className="text-[#F97316] fill-[#F97316]" size={18} />)}
              </div>
              <p className="text-gray-300 text-base sm:text-xl leading-relaxed italic mb-8">"{testimonials[current].text}"</p>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-black text-sm">{testimonials[current].name.charAt(0)}</span>
              </div>
              <div className="text-white font-bold">{testimonials[current].name}</div>
              <div className="text-[#F97316] text-sm mt-1">{testimonials[current].role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#F97316] hover:text-[#F97316] transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'bg-[#F97316] w-6 h-2' : 'bg-gray-700 w-2 h-2'}`} />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#F97316] hover:text-[#F97316] transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
