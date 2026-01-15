import { Clock, MapPin } from 'lucide-react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import { BRAND } from '../data/site'

export default function LocationSection() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Lokasi"
        title="Mampir ke toko atau order delivery"
        desc="Klik peta untuk buka arah di Google Maps."
        anchorId="lokasi"
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="card p-5">
            <div className="font-extrabold tracking-tight text-xl">{BRAND.name}</div>

            <div className="mt-3 flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5" style={{ color: 'var(--coffee-600)' }} />
              <div>
                <div>{BRAND.address}</div>
                <div className="text-xs muted mt-1">{BRAND.landmark}</div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" style={{ color: 'var(--coffee-600)' }} />
              <span>Buka: {BRAND.hours}</span>
            </div>

            <div
              className="mt-5 rounded-2xl overflow-hidden border"
              style={{ borderColor: 'var(--coffee-200)' }}
            >
              <iframe
                src={BRAND.mapsEmbedUrl}
                width="100%"
                height="280"
                style={{ border: 0, background: '#fff' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>

            <p className="muted text-sm mt-4">
              Tips: untuk pickup, tulis estimasi jam ambil supaya pesanan siap tepat waktu.
            </p>
          </div>

          <div className="card p-5">
            <div className="font-extrabold">FAQ singkat</div>

            <div className="mt-4 space-y-3 text-sm">
              {[
                { q: "Bisa pesan tanpa datang?", a: "Bisa. Order via WhatsApp, pilih delivery atau pickup." },
                { q: "Pembayaran apa saja?", a: "Cash, transfer, atau e-wallet (sesuaikan di deskripsi WA)." },
                { q: "Ada indoor seating?", a: "Ada. Nyaman untuk kerja/nugas (WiFi opsional)." },
              ].map((x) => (
                <div
                  key={x.q}
                  className="rounded-2xl border p-4"
                  style={{ background: '#fff', borderColor: 'var(--coffee-200)' }}
                >
                  <div className="font-bold">{x.q}</div>
                  <div className="muted mt-1">{x.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
