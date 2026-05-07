import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919694577828?text=Hello%2C%20I%20am%20interested%20in%20your%20building%20materials."
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-8 md:right-6 z-50 bg-green-500 text-white rounded-full shadow-2xl shadow-green-500/40 flex items-center gap-2 px-4 py-3.5 hover:bg-green-600 transition-all hover:-translate-y-1"
      initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }}
      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp">
      <MessageCircle size={22} />
      <span className="hidden sm:block text-sm font-bold">WhatsApp</span>
    </motion.a>
  )
}
