"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

interface HeaderProps {
  onSectionSelect?: (section: string) => void;
  onPageSelect?: (page: string) => void;
}

export function Header({ onSectionSelect, onPageSelect }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  const handleSectionClick = (section: string) => {
    if (onSectionSelect) {
      onSectionSelect(section);
    }
    setMobileMenuOpen(false);
  }

  const handlePageClick = (page: string) => {
    if (onPageSelect) {
      onPageSelect(page);
    }
    setMobileMenuOpen(false);
  }

  return (
    <>
      <header className="sm:w-[95%] w-full mx-auto border sm:rounded-full sticky top-0 z-50 border-border bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
        <div className="container mx-auto p-4 flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Company Logo" width={40} height={40} className="w-10 h-10"/>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              <button 
                onClick={() => handleSectionClick('home')} 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handlePageClick('about')} 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => handleSectionClick('services')} 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => handleSectionClick('pricing')} 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => handlePageClick('contact')} 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Right side - CTA Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Book a Pickup Button */}
            <Button className="rounded-full bg-gradient-to-r to-[#0B5A33] from-[#0D8E4B]">
               <Link href="http://wa.me/2347079100046">
                  Book a Pickup 
                  </Link>
              <motion.span 
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  repeatDelay: 2
                }}
              >
                <ChevronRight size={20}/>
              </motion.span>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-10 w-10 p-0 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 flex flex-col gap-6 h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-2">
                  <Image src="/logo.png" alt="Company Logo" width={32} height={32} className="w-8 h-8"/>
                  <span className="text-lg font-bold text-gray-900">Lumina Green 360</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-4 flex-1">
                <button 
                  onClick={() => handleSectionClick('home')} 
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => handlePageClick('about')} 
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors text-left"
                >
                  About Us
                </button>
                <button 
                  onClick={() => handleSectionClick('services')} 
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => handleSectionClick('pricing')} 
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors text-left"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => handlePageClick('contact')} 
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors text-left"
                >
                  Contact
                </button>
              </nav>

              {/* Mobile CTA Button */}
              <div className="border-t pt-4">
                <Button className="rounded-full bg-gradient-to-r to-[#0B5A33] from-[#0D8E4B] w-full">
                  <Link href="http://wa.me/2347079100046">
                  Book a Pickup 
                  </Link>
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      repeatDelay: 2
                    }}
                  >
                    <ChevronRight size={20}/>
                  </motion.span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}