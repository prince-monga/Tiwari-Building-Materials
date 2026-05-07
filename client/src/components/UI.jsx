import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  )
}

export function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">
      <span className="w-6 h-0.5 bg-[#F97316]" />{children}
    </span>
  )
}

export function SectionHeading({ children, light = false, center = false }) {
  return (
    <h2 className={`text-3xl sm:text-4xl font-black leading-tight ${light ? 'text-white' : 'text-[#1F1F1F]'} ${center ? 'text-center' : ''}`}>
      {children}
    </h2>
  )
}
