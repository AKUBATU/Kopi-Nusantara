import { MapPin, Menu as MenuIcon, Phone } from 'lucide-react'
import { useMemo, useState } from 'react'
import Container from './Container'
import { BRAND, waLink, defaultWaMessage } from '../data/site'

const links = [
  { href: "#promo", label: "Promo" },
  { href: "#best", label: "Best Seller" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#lokasi", label: "Lokasi" },
]

export default function StickyHeader() {
  const [open, setOpen] = useState(false)
  const wa = useMemo(() => waLink(defaultWaMessage()), [])

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-2xl border grid place-items-center"
              style={{ borderColor: "var(--coffee-300)", background: "var(--coffee-100)" }}
            >
              <span className="font-black" style={{ color: "var(--coffee-700)" }}>KN</span>
            </div>

            <div className="leading-tight">
              <div className="font-extrabold tracking-tight">{BRAND.name}</div>
              <div className="text-xs muted flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>{BRAND.landmark}</span>
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:opacity-80 transition">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a className="btn btn-ghost btn-sm" href={wa} target="_blank" rel="noreferrer">
              <Phone className="h-4 w-4 shrink-0" />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          <button
            className="md:hidden btn btn-ghost btn-sm"
            onClick={() => setOpen(v => !v)}
            aria-label="Buka menu"
          >
            <MenuIcon className="h-5 w-5 shrink-0" />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>

        {open ? (
          <div className="md:hidden pb-4">
            <div className="card p-3 flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 rounded-xl hover:bg-[var(--coffee-100)]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}

              <a className="btn btn-primary mt-2" href={wa} target="_blank" rel="noreferrer">
                <Phone className="h-4 w-4 shrink-0" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  )
}
