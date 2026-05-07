import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, ChevronRight } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-lg shadow-2xl shadow-black/40' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between" style={{ height: scrolled ? '64px' : '76px', transition: 'height 0.3s' }}>

        {/* LOGO */}
        <Link to="/" className="flex items-center z-50 shrink-0">
          <img
            src="/tiwari-logo.png"
            alt="Tiwari Building Materials"
            style={{ height: scrolled ? '64px' : '80px', width: 'auto', objectFit: 'contain', transition: 'height 0.3s', maxWidth: '260px', display: 'block' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors duration-200 ${isActive ? 'text-[#F97316]' : 'text-gray-300 hover:text-white'}`
              }>
              {l.label}
            </NavLink>
          ))}
          <a href="tel:9694577828" className="flex items-center gap-1.5 text-gray-300 text-sm font-semibold border border-gray-700 px-4 py-2 rounded-lg hover:border-[#F97316] hover:text-[#F97316] transition-all">
            <Phone size={13} /> 96945 77828
          </a>
          <Link to="/contact" className="bg-[#F97316] text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-orange-500 transition-all shadow-lg shadow-orange-500/30">
            Get Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-2 z-50" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.26 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#0f0f0f] z-40 md:hidden shadow-2xl flex flex-col border-l border-gray-800">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                <img src="/tiwari-logo.png" alt="Tiwari Building Materials" style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }} />
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white p-1"><X size={22} /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-3">
                {links.map(l => (
                  <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 text-base font-semibold border-b border-gray-800/60 transition-colors ${isActive ? 'text-[#F97316]' : 'text-gray-300 hover:text-white'}`
                    }>
                    {l.label} <ChevronRight size={16} className="text-gray-600" />
                  </NavLink>
                ))}
              </div>
              <div className="px-5 py-5 border-t border-gray-800 space-y-3">
                <a href="tel:9694577828" className="flex items-center justify-center gap-2 w-full border-2 border-gray-700 text-white font-bold py-3.5 rounded-xl hover:border-[#F97316] hover:text-[#F97316] transition-all text-sm">
                  <Phone size={15} /> +91 96945 77828
                </a>
                <a href="https://wa.me/919694577828" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-bold py-3.5 rounded-xl hover:bg-green-600 transition-all text-sm">
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
                <Link to="/contact" onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full bg-[#F97316] text-white font-bold py-3.5 rounded-xl hover:bg-orange-500 transition-all text-sm">
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
