import Container from './Container'
import SectionHeader from './SectionHeader'
import { GALLERY } from '../data/site'

export default function GallerySection() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Gallery"
        title="Vibes yang cozy"
        desc="Suasana toko, menu andalan, dan spot favorit pelanggan."
        anchorId="gallery"
      />

      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((g) => (
            <div
              key={g.title}
              className="card overflow-hidden group"
            >
              {/* Image */}
              {g.image ? (
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
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

              {/* Text */}
              <div className="p-4">
                <div className="font-extrabold">{g.title}</div>
                <div className="text-sm muted mt-1">{g.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
