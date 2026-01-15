import { MapPinned, MessageCircle, PackageCheck } from 'lucide-react'
import Container from './Container'
import SectionHeader from './SectionHeader'

const steps = [
  { icon: MessageCircle, title: "Chat WhatsApp", desc: "Klik tombol order, lalu kirim daftar menu + jumlah + opsi pickup/delivery." },
  { icon: MapPinned, title: "Konfirmasi alamat", desc: "Untuk delivery, kirim patokan alamat. Untuk pickup, cukup sebut jam ambil." },
  { icon: PackageCheck, title: "Ambil / Terima", desc: "Pesanan disiapkan rapi. Tinggal ambil atau tunggu driver sampai." },
]

export default function HowToOrderSection() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Cara Order" title="3 langkah, selesai" desc="Alur simple supaya kamu nggak buang waktu." />

      <Container>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.title} className="card p-5">
              <div
                className="h-10 w-10 rounded-2xl grid place-items-center"
                style={{
                  background: 'var(--coffee-100)',
                  border: '1px solid var(--coffee-300)',
                }}
              >
                <s.icon className="h-5 w-5" style={{ color: 'var(--coffee-600)' }} />
              </div>

              <div className="mt-4 font-extrabold">{s.title}</div>
              <p className="muted mt-2 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
