import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MobileCTABar() {
  return (
    <div className="mob-bar bg-[#0f0f0f] border-t border-gray-800 shadow-2xl">
      <a
        href="tel:9694577828"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 text-white hover:bg-[#1F1F1F] transition-colors"
      >
        <FaPhone size={16} />
        <span className="text-[10px] font-bold">Call Now</span>
      </a>
      <Link
        to="/material-rates"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 bg-[#F97316] text-white hover:bg-orange-500 transition-colors"
      >
        <TrendingUp size={16} />
        <span className="text-[10px] font-bold">Get Rates</span>
      </Link>
      <a
        href="https://wa.me/919694577828?text=Hello%2C%20I%20need%20building%20materials."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 bg-green-500 text-white hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp size={18} />
        <span className="text-[10px] font-bold">WhatsApp</span>
      </a>
    </div>
  )
}
