import { Instagram, MapPin, Phone } from 'lucide-react'
import Container from './Container'
import { BRAND, waLink, defaultWaMessage } from '../data/site'

export default function Footer() {
  const wa = waLink(defaultWaMessage())

  return (
    <footer
      className="border-t"
      style={{ borderColor: 'var(--coffee-200)', background: 'var(--coffee-100)' }}
    >
      <Container>
        <div className="py-10 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="font-extrabold text-lg">{BRAND.name}</div>
            <p className="muted mt-2 text-sm leading-relaxed">
              {BRAND.tagline}. Order cepat via WhatsApp, atau mampir langsung ke toko.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <div className="font-bold">Kontak</div>

            {/* ✅ jangan space-y biar bisa lebih rapih (wrap saat sempit) */}
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-80 transition"
              >
                <Phone className="h-4 w-4 shrink-0" style={{ color: 'var(--coffee-600)' }} />
                <span>WhatsApp</span>
              </a>

              <a
                href="#lokasi"
                className="inline-flex items-center gap-2 hover:opacity-80 transition"
              >
                <MapPin className="h-4 w-4 shrink-0" style={{ color: 'var(--coffee-600)' }} />
                <span>Lokasi</span>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 hover:opacity-80 transition"
              >
                <Instagram className="h-4 w-4 shrink-0" style={{ color: 'var(--coffee-600)' }} />
                <span>Instagram (opsional)</span>
              </a>
            </div>
          </div>

          {/* Jam Operasional */}
          <div className="card p-5">
            <div className="font-extrabold">Jam Operasional</div>
            <div className="mt-2 text-sm muted">Setiap hari: {BRAND.hours}</div>

            <div className="mt-4">
              {/* ✅ FIX UTAMA: pakai btn + btn-primary */}
              <a className="btn btn-primary w-full" href={wa} target="_blank" rel="noreferrer">
                <Phone className="h-4 w-4 shrink-0" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pb-8 text-xs muted">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
