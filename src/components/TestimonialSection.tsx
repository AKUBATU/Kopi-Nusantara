import { Quote } from 'lucide-react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import { TESTIMONIALS } from '../data/site'

export default function TestimonialSection() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Testimoni"
        title="Kata mereka yang sudah coba"
        desc="Testimoni dummy. Kamu bisa ganti isi di data/site.ts."
      />

      <Container>
        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="card p-5">
              <Quote className="h-5 w-5" style={{ color: 'var(--coffee-600)' }} />
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--coffee-900)' }}>
                {t.text}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-2xl grid place-items-center font-black"
                  style={{
                    background: 'var(--coffee-100)',
                    border: '1px solid var(--coffee-300)',
                    color: 'var(--coffee-700)',
                  }}
                >
                  {t.name.slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs muted">Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
