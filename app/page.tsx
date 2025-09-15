import { FAQSection } from "@/components/FAQ"
import { Footer} from "@/components/Footer"
import { GettingStarted } from "@/components/GettingStarted"
import { ToolsGrid } from "@/components/GridTools"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PricingSection } from "@/components/PricingSection"
import { ServicesSection } from "@/components/ServicesSection"
import { Testimonials } from "@/components/Testimonials"


export default function Home() {
  return (
    <div className="min-h-screen  ">
      <Header />
      <main className="w-[95%] mx-auto">
        <HeroSection />
      <GettingStarted/>
      <ServicesSection/>
      <PricingSection/>
      <Testimonials/>
      <FAQSection/>
      <Footer/>
      </main>

    </div>
  )
}
