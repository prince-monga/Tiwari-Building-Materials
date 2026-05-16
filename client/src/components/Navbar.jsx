import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

const links = [
  { to: '/',               label: 'Home' },
  { to: '/about',          label: 'About' },
  { to: '/products',       label: 'Products' },
  { to: '/material-rates', label: 'Material Rates' },
  { to: '/brick-rates',    label: 'Brick Rates' },
  { to: '/contact',        label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111]/95 backdrop-blur-lg shadow-lg shadow-black/40'
            : 'bg-black/50 backdrop-blur-sm'
        }`}
        style={{ height: '64px' }}
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={close} className="shrink-0 flex items-center">
            <img
              src="/tiwari-logo.png"
              alt="Tiwari Building Materials"
              style={{
                height: '52px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.9))',
              }}
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <NavLink
                key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-150 ${
                    isActive ? 'text-[#F97316]' : 'text-gray-200 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="tel:9694577828"
              className="ml-2 flex items-center gap-1.5 bg-[#F97316] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors"
            >
              <Phone size={14} /> Call Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white border border-white/15 hover:bg-white/20 transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 md:hidden flex flex-col bg-[#0d0d0d]"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10" style={{ height: '64px' }}>
              <img
                src="/tiwari-logo.png"
                alt="Tiwari Building Materials"
                style={{
                  height: '48px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.7))',
                }}
              />
              <button
                onClick={close}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links — large & clear */}
            <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <NavLink
                    to={l.to} end={l.to === '/'} onClick={close}
                    className={({ isActive }) =>
                      `flex items-center justify-between w-full py-4 px-4 rounded-xl text-xl font-bold transition-all ${
                        isActive
                          ? 'text-[#F97316] bg-orange-500/10'
                          : 'text-white hover:text-[#F97316] hover:bg-white/5'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{l.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 pb-8 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href="tel:9694577828"
                className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-orange-500 transition-colors"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href="https://wa.me/919694577828"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3.5 rounded-xl text-sm hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
