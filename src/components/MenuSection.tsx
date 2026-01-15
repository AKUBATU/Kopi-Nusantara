import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { MENU } from '../data/site'
import Container from './Container'
import SectionHeader from './SectionHeader'

type Category = (typeof MENU)[number]['category']
type MenuItem = (typeof MENU)[number]['items'][number]
type ActiveCategory = Category | 'All'

export default function MenuSection() {
  const [active, setActive] = useState<ActiveCategory>('All')
  const [q, setQ] = useState('')

  // ✅ categories = array biasa
  const categories = useMemo<ActiveCategory[]>(() => {
    const list = MENU.map((m) => m.category)
    const unique = Array.from(new Set(list)) as Category[]
    return ['All', ...unique]
  }, [])

  const items = useMemo(() => {
    // ✅ jangan flatMap (sering bikin overload error kalau MENU "as const")
    const allItems: MenuItem[] = MENU.reduce<MenuItem[]>((acc, m) => {
      acc.push(...(m.items as unknown as MenuItem[]))
      return acc
    }, [])

    const list: MenuItem[] =
      active === 'All'
        ? allItems
        : ((MENU.find((m) => m.category === active)?.items ?? []) as unknown as MenuItem[])

    const query = q.trim().toLowerCase()
    if (!query) return list

    return list.filter((i) => i.name.toLowerCase().includes(query))
  }, [active, q])

  return (
    <section className="section">
      <SectionHeader
        eyebrow="Menu"
        title="Pilih kategori, cari menu, langsung order"
        desc="Semua harga contoh. Kamu bisa ganti di file data/site.ts."
        anchorId="menu"
      />

      <Container>
        <div className="card p-4 md:p-5">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const isActive = active === c
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className="px-3 py-2 rounded-xl text-sm font-semibold border transition"
                    style={{
                      background: isActive ? 'var(--coffee-100)' : '#fff',
                      borderColor: isActive ? 'var(--coffee-400)' : 'var(--coffee-200)',
                      color: isActive ? 'var(--coffee-900)' : 'var(--coffee-700)',
                    }}
                  >
                    {c}
                  </button>
                )
              })}
            </div>

            {/* Search */}
            <div className="md:ml-auto w-full md:w-80">
              <div
                className="flex items-center gap-2 rounded-xl px-3 py-2 border"
                style={{ background: '#fff', borderColor: 'var(--coffee-200)' }}
              >
                <Search className="h-4 w-4 shrink-0" style={{ color: 'var(--coffee-600)' }} />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  className="w-full bg-transparent outline-none text-sm"
                  placeholder="Cari menu…"
                  aria-label="Cari menu"
                  style={{ color: 'var(--coffee-900)' }}
                />
              </div>
              <div className="mt-1 text-xs muted">Contoh: “aren”, “matcha”, “croissant”</div>
            </div>
          </div>

          {/* Grid Items */}
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((i) => (
              <div
                key={i.name}
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: 'var(--coffee-200)', background: '#fff' }}
              >
                {/* Image */}
                {i.image ? (
                  <img
                    src={i.image}
                    alt={i.name}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                ) : (
                  <div
                    className="h-40 w-full flex items-center justify-center text-sm"
                    style={{ background: 'var(--coffee-100)', color: 'var(--coffee-700)' }}
                  >
                    No image
                  </div>
                )}

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold leading-snug">{i.name}</div>
                      <div className="mt-1 text-xs muted">{i.meta ?? 'Reguler • Es/Panas'}</div>
                    </div>

                    <div className="font-extrabold whitespace-nowrap" style={{ color: 'var(--coffee-700)' }}>
                      {i.price}
                    </div>
                  </div>

                  {i.desc ? (
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--coffee-600)' }}>
                      {i.desc}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}

            {items.length === 0 ? (
              <div className="sm:col-span-2 lg:col-span-3 text-sm muted py-6 text-center">
                Tidak ada menu yang cocok dengan pencarian.
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
