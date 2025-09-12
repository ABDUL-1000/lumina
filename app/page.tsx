import { GalleryFooter } from "@/components/Footer"
import { ToolsGrid } from "@/components/GridTools"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ToolsGrid />
      </main>
      <GalleryFooter />
    </div>
  )
}
