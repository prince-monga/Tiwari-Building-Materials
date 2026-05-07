import { Link } from 'react-router-dom'
import { Phone, MapPin, MessageCircle, Mail, Share2, Camera, Play, ChevronRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/tiwari-logo.png" alt="Tiwari Building Materials" style={{ height: '72px', width: 'auto', objectFit: 'contain', display: 'block', marginBottom: '16px' }} />
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs mb-5">
              Building Strong Foundations since 2001. Alwar's most trusted supplier of quality construction materials.
            </p>
            <div className="space-y-3 text-sm">
              <a href="https://maps.google.com/?q=Shivaji+Park+Alwar+Rajasthan" target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group">
                <MapPin className="text-[#F97316] mt-0.5 shrink-0" size={15} />
                <span>6KA107, Shivaji Park, Alwar, Rajasthan</span>
              </a>
              <a href="tel:9694577828" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="text-[#F97316] shrink-0" size={14} />
                +91 96945 77828
              </a>
              <a href="tel:9352206493" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="text-[#F97316] shrink-0" size={14} />
                +91 93522 06493
              </a>
              <a href="https://wa.me/919694577828" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-400 transition-colors">
                <MessageCircle className="text-green-500 shrink-0" size={15} />
                WhatsApp Us
              </a>
            </div>
            <div className="flex gap-3 mt-6">
              {[{ Icon: Share2, href: '#' }, { Icon: Camera, href: '#' }, { Icon: Play, href: '#' }].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#F97316] transition-colors group">
                  <Icon size={15} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/blog', 'Blog'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-2 hover:text-[#F97316] transition-colors group">
                    <ChevronRight size={12} className="text-gray-700 group-hover:text-[#F97316] transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">Our Products</h4>
            <ul className="space-y-3 text-sm">
              {[['Bajri', 'बजरी'], ['Rodhi', 'रोडी'], ['Bricks', 'ईंट'], ['Concrete Materials', 'कंक्रीट'], ['Sand & Aggregates', 'रेत']].map(([en, hi]) => (
                <li key={en}>
                  <Link to="/products" className="flex items-center gap-2 hover:text-[#F97316] transition-colors group">
                    <ChevronRight size={12} className="text-gray-700 group-hover:text-[#F97316] transition-colors" />
                    {en} <span className="text-gray-600 text-xs">({hi})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">Get In Touch</h4>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">Need materials for your project? We respond within 2 hours.</p>
            <Link to="/contact" className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold py-3.5 rounded-xl hover:bg-orange-500 transition-all text-sm shadow-lg shadow-orange-500/20 mb-3">
              <Mail size={16} /> Send Inquiry
            </Link>
            <a href="tel:9694577828" className="flex items-center justify-center gap-2 border border-gray-700 text-gray-300 font-semibold py-3 rounded-xl hover:border-[#F97316] hover:text-[#F97316] transition-all text-sm">
              <Phone size={14} /> +91 96945 77828
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Tiwari Building Materials. All rights reserved.</p>
          <p>6KA107, Shivaji Park, Alwar, Rajasthan, India</p>
        </div>
      </div>
    </footer>
  )
}
