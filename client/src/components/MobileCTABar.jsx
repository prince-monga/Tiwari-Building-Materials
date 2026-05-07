import { FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function MobileCTABar() {
  return (
    <div className="mob-bar bg-[#1F1F1F] border-t border-gray-800 shadow-2xl">
      <a
        href="tel:9694577828"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-sm hover:bg-[#2B2B2B] transition-colors"
      >
        <FaPhone size={14} /> Call Now
      </a>
      <a
        href="https://wa.me/919694577828?text=Hello%2C%20I%20need%20building%20materials."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp size={16} /> WhatsApp
      </a>
    </div>
  )
}
