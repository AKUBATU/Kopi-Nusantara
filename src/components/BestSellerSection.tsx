import { Flame } from 'lucide-react'
import { BEST_SELLER } from '../data/site'
import Container from './Container'
import SectionHeader from './SectionHeader'

export default function BestSellerSection() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Best Seller"
        title="Pilihan aman kalau kamu baru pertama kali"
        desc="Tiga menu paling sering diorder. Rasa konsisten, cocok untuk semua mood."
        anchorId="best"
      />

      <Container>
        <div className="grid md:grid-cols-3 gap-4">
          {BEST_SELLER.map((it) => (
            <div
              key={it.name}
              className="card overflow-hidden"
            >
              {/* IMAGE */}
              {it.image ? (
                <img
                  src={it.image}
                  alt={it.name}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
              ) : (
                <div
                  className="h-40 flex items-center justify-center text-sm"
                  style={{
                    background: 'var(--coffee-100)',
                    color: 'var(--coffee-700)',
                  }}
                >
                  No image
                </div>
              )}

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="font-extrabold tracking-tight">
                    {it.name}
                  </div>
                  <div
                    className="font-extrabold whitespace-nowrap"
                    style={{ color: 'var(--coffee-700)' }}
                  >
                    {it.price}
                  </div>
                </div>

                <p className="muted mt-2 text-sm leading-relaxed">
                  {it.note}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs">
                  <Flame
                    className="h-4 w-4"
                    style={{ color: 'var(--coffee-500)' }}
                  />
                  <span style={{ color: 'var(--coffee-600)' }}>
                    Popular pick
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
