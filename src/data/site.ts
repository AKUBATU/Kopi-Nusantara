export const BRAND = {
  name: "Kopi Nusantara",
  tagline: "Kopi Susu Favorit di Menteng",
  phone: "6281234567890",
  address: "Jl. Menteng Raya No. 45, Jakarta Pusat",
  landmark: "Dekat Tugu Tani",
  hours: "08:00 - 22:00",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666!2d106.827!3d-6.195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnNDIuMCJTIDEwNsKwNDknMzcuMiJF!"
} as const

export const PROMOS = [
  { title: "Diskon 20% Jam 8–10", desc: "Berlaku Senin–Jumat. Tunjukkan promo ini saat pesan via WA." },
  { title: "Beli 2 Gratis 1 Cookies", desc: "Untuk menu kopi susu ukuran regular." },
  { title: "Member Stamp", desc: "Beli 8 gelas gratis 1 gelas (semua varian regular)." },
] as const

export const BEST_SELLER = [
  {
    name: "Kopi Susu Gula Aren",
    price: "Rp 24.000",
    note: "Creamy, manis pas, aftertaste kopi kuat.",
    image: "/src/assets/menu/kopi-susu-gula-aren.jpg",
  },
  {
    name: "Americano Nusantara",
    price: "Rp 20.000",
    note: "Double shot, clean & bold.",
    image: "/src/assets/menu/americano.jpg",
  },
  {
    name: "Matcha Latte",
    price: "Rp 26.000",
    note: "Matcha wangi, tidak pahit.",
    image: "/src/assets/menu/matcha-latte.jpg",
  },
] as const


export const MENU = [
  {
    category: "Kopi Susu",
    items: [
      {
        name: "Kopi Susu Original",
        price: "Rp 22.000",
        image: "/src/assets/menu/kopi-susu-original.jpg",
        meta: "Reguler • Es/Panas",
        desc: "Rasa seimbang, milky, cocok buat daily coffee."
      },
      {
        name: "Kopi Susu Gula Aren",
        price: "Rp 24.000",
        image: "/src/assets/menu/kopi-susu-gula-aren.jpg",
        meta: "Reguler • Es/Panas",
        desc: "Manis aren pas, aroma kopi tetap terasa."
      },
      {
        name: "Caramel Latte",
        price: "Rp 26.000",
        image: "/src/assets/menu/caramel-latte.jpg",
        meta: "Reguler • Es/Panas",
        desc: "Caramel lembut, creamy, crowd favorite."
      }
    ],
  },
  {
    category: "Kopi Hitam",
    items: [
      {
        name: "Americano",
        price: "Rp 20.000",
        image: "/src/assets/menu/americano.jpg",
        meta: "Reguler • Es/Panas",
        desc: "Clean, bold, dan ringan."
      },
      {
        name: "Long Black",
        price: "Rp 20.000",
        image: "/src/assets/menu/long-black.jpg",
        meta: "Reguler • Es/Panas",
        desc: "Lebih strong dari americano, tapi tetap clean."
      },
      {
        name: "Espresso",
        price: "Rp 18.000",
        image: "/src/assets/menu/espresso.jpg",
        meta: "Single/Double Shot",
        desc: "Strong shot untuk boost energi."
      }
    ],
  },
  {
    category: "Non Kopi",
    items: [
      {
        name: "Matcha Latte",
        price: "Rp 26.000",
        image: "/src/assets/menu/matcha-latte.jpg",
        meta: "Reguler • Es/Panas",
        desc: "Matcha wangi, creamy, nggak pahit."
      },
      {
        name: "Chocolate",
        price: "Rp 25.000",
        image: "/src/assets/menu/chocolate.jpg",
        meta: "Reguler • Es/Panas",
        desc: "Coklat legit dan smooth."
      },
      {
        name: "Lychee Tea",
        price: "Rp 22.000",
        image: "/src/assets/menu/lychee-tea.jpg",
        meta: "Es",
        desc: "Segar, fruity, cocok siang hari."
      }
    ],
  },
  {
    category: "Snack",
    items: [
      {
        name: "Croissant Butter",
        price: "Rp 18.000",
        image: "/src/assets/menu/croissant-butter.jpg",
        meta: "Fresh baked",
        desc: "Flaky & buttery, best pair untuk kopi."
      },
      {
        name: "Cookies",
        price: "Rp 12.000",
        image: "/src/assets/menu/cookies.jpg",
        meta: "2 pcs",
        desc: "Manis pas, cocok buat cemilan."
      },
      {
        name: "Banana Bread",
        price: "Rp 16.000",
        image: "/src/assets/menu/banana-bread.jpg",
        meta: "Slice",
        desc: "Moist, wangi pisang, favorit banyak orang."
      }
    ],
  }
] as const

export const TESTIMONIALS = [
  { name: "Raka", text: "Kopi susunya creamy dan nggak eneg. Tempatnya juga nyaman buat nugas." },
  { name: "Nadya", text: "Pesan via WA cepat banget responnya. Pickup tinggal ambil, beres." },
  { name: "Dimas", text: "Americano-nya mantap. Rasa kopinya kebaca, nggak asam." },
] as const

export const GALLERY = [
  {
    title: "Bar Coffee",
    subtitle: "Brew & vibes",
    image: "/src/public/gallery/bar-coffee.jpg",
  },
  {
    title: "Signature Menu",
    subtitle: "Best seller",
    image: "src/public/gallery/signature-menu.jpg",
  },
  {
    title: "Cozy Corner",
    subtitle: "Work friendly",
    image: "src/public/gallery/cozy-corner.jpg",
  },
  {
    title: "Fresh Snacks",
    subtitle: "Daily baked",
    image: "src/public/gallery/fresh-snacks.jpg",
  },
] as const


export function waLink(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${BRAND.phone}?text=${text}`
}

export function defaultWaMessage() {
  return `Halo ${BRAND.name}! Saya mau pesan:\n\n- Menu: ...\n- Jumlah: ...\n- Pickup/Delivery: ...\n- Catatan: ...\n\nTerima kasih!`
}
