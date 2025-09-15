"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Header() {
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

  return (
    <>
      <header className="sm:w-[90%] w-full mx-auto border rounded-full  sticky top-0 z-50 border-border bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Company Logo" width={40} height={40} className="w-10 h-10"/>
             
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</a>
            </nav>
          </div>

          {/* Right side - CTA Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Book a Pickup Button */}
           <Button className="rounded-full bg-gradient-to-r to-[#0B5A33] from-[#0D8E4B]">
                Book a Pickup 
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
                  <span className="text-lg font-bold text-gray-900">YourCompany</span>
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
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </nav>

              {/* Mobile CTA Button */}
              <div className="border-t pt-4">
                <Button className="rounded-full bg-gradient-to-r to-[#0B5A33] from-[#0D8E4B]">
                Book a Pickup 
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