import { Phone } from 'lucide-react'
import { defaultWaMessage, waLink } from '../data/site'

export default function FloatingWhatsAppButton() {
  const wa = waLink(defaultWaMessage())
  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 btn-primary"
      aria-label="Order via WhatsApp"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <Phone className="h-4 w-4" />
      <span className="hidden sm:inline">Order</span>
    </a>
  )
}
