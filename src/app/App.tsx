import StickyHeader from '../components/StickyHeader'
import HeroSection from '../components/HeroSection'
import PromoSection from '../components/PromoSection'
import BestSellerSection from '../components/BestSellerSection'
import MenuSection from '../components/MenuSection'
import HowToOrderSection from '../components/HowToOrderSection'
import GallerySection from '../components/GallerySection'
import TestimonialSection from '../components/TestimonialSection'
import LocationSection from '../components/LocationSection'
import Footer from '../components/Footer'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <main>
        <HeroSection />
        <PromoSection />
        <BestSellerSection />
        <MenuSection />
        <HowToOrderSection />
        <GallerySection />
        <TestimonialSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
