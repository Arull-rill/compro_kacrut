import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import { band } from '../data/band.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const { email, whatsapp, whatsappText, instagramHandle } = band.contact

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // fallback untuk browser lama
      const t = document.createElement('textarea')
      t.value = email
      document.body.appendChild(t)
      t.select()
      document.execCommand('copy')
      t.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const waUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappText)}`

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          number="07"
          label="Contact"
          title={
            <>
              Ngobrol, <em className="text-gold">yuk.</em>
            </>
          }
        />

        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-lg leading-relaxed text-ivory/80">
              Terbuka buat kolaborasi, liputan, tawaran manggung, atau sekadar nyapa. Kami bales secepat yang kami bisa.
            </p>
            {band.bookingOpen && (
              <p className="mt-8 inline-flex items-center gap-3 border border-gold-dark px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-gold" />
                Terbuka untuk tawaran manggung
              </p>
            )}
          </Reveal>

          <Reveal delay={150} className="md:col-span-7">
            <ul className="border-t border-line">
              {/* Email + tombol salin */}
              <li className="flex flex-wrap items-center justify-between gap-4 border-b border-line py-6">
                <div>
                  <p className="label mb-2">Email</p>
                  <a href={`mailto:${email}`} className="font-display text-3xl transition hover:text-gold md:text-4xl">
                    {email}
                  </a>
                </div>
                <button type="button" onClick={copyEmail} className="btn-ghost !px-5 !py-3" aria-live="polite">
                  <span className="h-4 w-4">
                    <Icon name={copied ? 'check' : 'copy'} strokeWidth={2} />
                  </span>
                  {copied ? 'Tersalin' : 'Salin'}
                </button>
              </li>

              <li className="border-b border-line">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-6 transition hover:text-gold"
                >
                  <div>
                    <p className="label mb-2">WhatsApp</p>
                    <span className="font-display text-3xl md:text-4xl">Chat langsung</span>
                  </div>
                  <span className="h-8 w-8 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <Icon name="arrow" />
                  </span>
                </a>
              </li>

              {band.social.instagram && (
                <li className="border-b border-line">
                  <a
                    href={band.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-6 transition hover:text-gold"
                  >
                    <div>
                      <p className="label mb-2">Instagram</p>
                      <span className="font-display text-3xl md:text-4xl">{instagramHandle}</span>
                    </div>
                    <span className="h-8 w-8 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <Icon name="arrow" />
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
