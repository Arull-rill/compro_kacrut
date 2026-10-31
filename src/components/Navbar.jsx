import { useState } from 'react'
import Icon from './Icons.jsx'
import { band } from '../data/band.js'
import useActiveSection from '../hooks/useActiveSection.js'
import useScrolled from '../hooks/useScrolled.js'

const items = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'about' },
  { id: 'music', label: 'Music', icon: 'music' },
  { id: 'members', label: 'Members', icon: 'members' },
  { id: 'story', label: 'Story', icon: 'story' },
  { id: 'gallery', label: 'Gallery', icon: 'gallery' },
  { id: 'contact', label: 'Contact', icon: 'contact' },
]
const watchIds = [...items.map((i) => i.id), 'follow']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(40)
  const active = useActiveSection(watchIds)
  const words = band.name.split(/\s+/)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || open ? 'border-gold-dark/40 bg-ink/90 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <div className={`flex items-stretch transition-all duration-500 ${scrolled ? 'h-16' : 'h-20 md:h-28'}`}>
        {/* Blok logo emas */}
        <a
          href="#home"
          aria-label={`${band.name} — ke atas`}
          className={`flex shrink-0 flex-col items-center justify-center gap-0.5 bg-gold px-2 text-ink transition-all duration-500 hover:bg-gold-light ${
            scrolled ? 'w-16 md:w-20' : 'w-20 md:w-28'
          }`}
        >
          {words.map((w) => (
            <span
              key={w}
              className={`font-display uppercase leading-none tracking-[0.12em] transition-all duration-500 ${
                scrolled ? 'text-sm' : 'text-base md:text-xl'
              }`}
            >
              {w}
            </span>
          ))}
        </a>

        {/* Menu desktop */}
        <nav aria-label="Menu utama" className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-4">
          {items.map((it) => {
            const isActive = active === it.id
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`group flex items-center px-3 transition ${scrolled ? 'flex-row gap-2' : 'flex-col gap-2'} ${
                  isActive ? 'text-gold' : 'text-ivory hover:text-gold'
                }`}
              >
                <span className={scrolled ? 'h-5 w-5' : 'h-7 w-7'}>
                  <Icon name={it.icon} />
                </span>
                <span className="relative font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
                  {it.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </span>
              </a>
            )
          })}
        </nav>

        {/* Kanan */}
        <div className="ml-auto flex items-center gap-3 pr-5 lg:ml-0 lg:pr-6">
          <a href="#follow" className="btn-ghost hidden !px-5 !py-2.5 !text-[11px] lg:inline-flex">
            Follow
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            className="h-11 w-11 p-2.5 text-ivory lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      <nav
        id="menu-mobile"
        aria-label="Menu mobile"
        className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? 'max-h-[34rem] border-t border-line' : 'max-h-0'}`}
      >
        <ul className="px-6 py-3">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 border-b border-line py-4 font-mono text-sm uppercase tracking-[0.2em] ${
                  active === it.id ? 'text-gold' : 'text-ivory'
                }`}
              >
                <span className="h-6 w-6">
                  <Icon name={it.icon} />
                </span>
                {it.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#follow" onClick={() => setOpen(false)} className="btn-gold mt-5 w-full">
              Follow kami
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
