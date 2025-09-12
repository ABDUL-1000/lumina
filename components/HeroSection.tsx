"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface HeroCard {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  buttonText: string
}

export function HeroSection() {
  // Card data array
  const cards: HeroCard[] = [
    {
      id: 1,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation AI",
      description: "Generate beautiful images with the latest WAN 2.2 powerful model. Create professional prompt differences and style realistic textures.",
      image: "/van.png",
      buttonText: "Try WAN 2.2"
    },
    {
      id: 2,
      title: "Open Source",
      subtitle: "FLUX.1 Krea AI",
      description: "We're happy to announce our new FLUX.1 Krea model that allows you to create beautiful images with the advanced aspect of generative art in Krea Image.",
      image: "/van2.png",
      buttonText: "Try FLUX.1"
    },
    {
      id: 3,
      title: "AI Upscaling",
      subtitle: "4K Enhancement AI",
      description: "Transform your low-resolution images into stunning 4K quality with our advanced AI upscaling technology.",
      image: "/calen.png",
      buttonText: "Try Upscaling"
    },
    {
      id: 4,
      title: "Style Transfer",
      subtitle: "Artistic Filters AI",
      description: "Apply artistic styles to your images with our neural style transfer technology.",
      image: "/dustbin.png",
      buttonText: "Try Style Transfer"
    }
  ]

  const [startIndex, setStartIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if screen is mobile on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])
  
  // Show one card on mobile, two on desktop
  const cardsToShow = isMobile ? 1 : 2
  let visibleCards = cards.slice(startIndex, startIndex + cardsToShow)
  
  // If we're at the end and not enough cards, adjust to show the correct number
  if (visibleCards.length < cardsToShow) {
    const remaining = cardsToShow - visibleCards.length
    visibleCards = [...visibleCards, ...cards.slice(0, remaining)]
  }

  const nextCards = () => {
    setStartIndex(prev => (prev + cardsToShow) % cards.length)
  }

  const prevCards = () => {
    setStartIndex(prev => (prev - cardsToShow + cards.length) % cards.length)
  }

  return (
    <section className="w-full py-4 md:py-8 px-4 relative">
      <div className="container mx-auto">
        <div className="relative">
          {/* Mobile navigation arrows - positioned on sides of the card */}
          {isMobile && (
            <>
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50"
                onClick={prevCards}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50"
                onClick={nextCards}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
          
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 hide-scrollbar">
            {visibleCards.map((card) => (
              <Card key={card.id} className="min-w-[85vw] md:min-w-0 md:w-[48%] h-[280px] md:h-[400px] relative overflow-hidden group cursor-pointer flex-shrink-0 md:flex-shrink">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-10" />
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 z-20 p-4 md:p-6 flex flex-col">
                  {/* Title in the middle */}
                  <div className="flex-1 flex items-center justify-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white text-center">{card.title}</h2>
                  </div>
                  
                  {/* Bottom section with subtitle and button */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
                    {/* Subtitle on bottom left */}
                    <div className="max-w-full md:max-w-[60%]">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">{card.subtitle}</h3>
                      <p className="text-xs md:text-sm text-white/90 line-clamp-2 md:line-clamp-none">
                        {card.description}
                      </p>
                    </div>
                    
                    {/* Button on bottom right */}
                    <Button className="bg-white text-black hover:bg-white/90 text-sm md:text-base">
                      {card.buttonText}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(cards.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index * cardsToShow)}
              className={`w-2 h-2 rounded-full ${index === Math.floor(startIndex / cardsToShow) ? "bg-foreground" : "bg-muted-foreground/30"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop navigation arrows */}
        <div className="flex justify-end gap-2 mt-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 hidden md:flex" 
            onClick={prevCards}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 hidden md:flex" 
            onClick={nextCards}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}