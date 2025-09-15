"use client";

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/* Text Content */}
          <div className="sm:space-y-5 space-y-2">
            <motion.h1 
              className="text-xl lg:text-5xl font-semi-bold text-foreground text-center lg:text-start lg:leading-20 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Turning Waste into a <motion.span 
                className="text-primary"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >Cleaner Future</motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-neutral-800 text-justify  leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Affordable and reliable waste pickup and cleaning services in Maiduguri. Together, let's build a sustainable city.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center lg:justify-start"
            >
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
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <motion.div 
              className="w-full rounded-2xl flex items-center justify-end"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Image 
                src="/van.png" 
                alt="Lumina Green 360 Van" 
                width={400} 
                height={300}
                className="w-full max-w-md lg:max-w-lg mx-auto"
              />
            </motion.div>
            
            {/* Optional floating elements for more visual interest */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0D8E4B]/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}