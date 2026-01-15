import { BadgePercent } from 'lucide-react'
import { PROMOS } from '../data/site'
import Container from './Container'
import SectionHeader from './SectionHeader'

export default function PromoSection() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Promo"
        title="Promo yang bikin order pertama makin gampang"
        desc="Pilih promo, lalu kirim pesan via WhatsApp. Praktis untuk pickup atau delivery."
        anchorId="promo"
      />

      <Container>
        <div className="grid md:grid-cols-3 gap-4">
          {PROMOS.map((p) => (
            <div key={p.title} className="card p-5">
              <div className="flex items-start gap-3">
                <div
                  className="h-10 w-10 rounded-2xl grid place-items-center"
                  style={{
                    background: 'var(--coffee-100)',
                    border: '1px solid var(--coffee-300)',
                  }}
                >
                  <BadgePercent className="h-5 w-5" style={{ color: 'var(--coffee-600)' }} />
                </div>

                <div>
                  <div className="font-extrabold">{p.title}</div>
                  <p className="muted mt-2 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
