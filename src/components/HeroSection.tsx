import { ArrowRight, Clock, MapPin, Phone, Sparkles } from 'lucide-react'
import Container from './Container'
import { BRAND, waLink, defaultWaMessage } from '../data/site'

// ✅ 1) import gambar (Vite paling aman begini)
import signatureImg from '../assets/menu/signature.jpg' // <- sesuaikan nama file

export default function HeroSection() {
  const wa = waLink(defaultWaMessage())

  return (
    <section className="relative overflow-hidden">
      {/* Light coffee background */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle at top, rgba(201,160,108,0.28), transparent 60%)," +
              "linear-gradient(#fdfbf8, #f7f1e8)"
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), " +
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        />
      </div>

      <Container>
        <div className="relative pt-12 md:pt-16 pb-10 md:pb-16 grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT */}
          <div>
            <div className="badge">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>Pickup & Delivery • Order via WA</span>
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {BRAND.tagline}
            </h1>

            <p className="muted mt-4 text-base leading-relaxed max-w-xl">
              Kopi enak, cepat, dan konsisten. Tinggal klik WhatsApp → pilih menu → ambil / kirim.
              Cocok buat ngopi santai, kerja, atau nugas.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">
                <Phone className="h-4 w-4 shrink-0" />
                <span>Pesan Sekarang</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>

              <a className="btn btn-ghost" href="#menu">
                <span>Lihat Menu</span>
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" style={{ color: "var(--coffee-500)" }} />
                <span>{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" style={{ color: "var(--coffee-500)" }} />
                <span>Buka: {BRAND.hours}</span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="md:justify-self-end">
            <div className="card p-5 md:p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold" style={{ color: "var(--coffee-700)" }}>
                  Hari ini
                </div>
                <div className="text-xs muted">Estimasi siap 10–15 menit</div>
              </div>

              {/* ✅ 2) GANTI placeholder gradient jadi gambar */}
              <div
                className="mt-4 rounded-2xl overflow-hidden border"
                style={{ borderColor: "var(--coffee-200)" }}
              >
                <img
                  src={signatureImg}
                  alt="Signature Kopi Susu Gula Aren"
                  className="h-48 md:h-56 w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // fallback kalau gambar hilang
                    e.currentTarget.style.display = 'none'
                    const parent = e.currentTarget.parentElement
                    if (parent) parent.setAttribute('data-fallback', '1')
                  }}
                />

                {/* ✅ fallback placeholder kalau gambar gagal */}
                <div
                  className="h-48 md:h-56"
                  style={{
                    display: 'none'
                  }}
                  data-fallback-box
                />
              </div>

              <div className="mt-4">
                <div className="font-extrabold tracking-tight">Signature: Kopi Susu Gula Aren</div>
                <p className="muted text-sm mt-1">
                  Creamy, manis pas, kopi tetap terasa. Favorit buat first order.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <a className="btn btn-primary flex-1" href={wa} target="_blank" rel="noreferrer">
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>Pesan via WhatsApp</span>
                  </a>

                  <a className="btn btn-ghost" href="#lokasi">
                    <span>Maps</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
