"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 0: no direction, 1: right, -1: left

  const testimonials = [
    {
      name: "Aisha, Maiduguri",
      text: "Lumina Green 360 has made our estate waste management stress-free. They are punctual and professional.",
      avatar: "/aishaa.png",
    },
    {
      name: "Mohammed, GRA",
      text: "Excellent service! Their team is reliable and the pricing is very reasonable for the quality they provide.",
      avatar: "/aishaa.png",
    },
    {
      name: "Fatima, Bulumkutu",
      text: "I love how they handle recycling. It's great to see a company that cares about the environment.",
      avatar: "/aishaa.png",
    },
  ]

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Animation variants
  const textVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  }

  return (
    <section className="w-full sm:py-20 ">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl lg:text-5xl sm:leading-15 font-bold text-foreground mb-2">
            Trusted by <span className="text-muted-foreground">Homes</span> &{" "}
            <span className="text-muted-foreground">Businesses</span> in Maiduguri
          </h2>
        </motion.div>

        <div className="mx-auto relative">
          <Card className="border-0 shadow-none">
            <CardContent className="lg:p-15 text-start border-0 min-h-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg text-muted-foreground lg:mb-6 leading-10">"{testimonials[currentIndex].text}"</p>
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].name} 
                        width={40} 
                        height={40} 
                        className="rounded-full"
                      />
                    </motion.div>
                    <span className="font-medium text-foreground">{testimonials[currentIndex].name}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
            
            <div className="flex items-center justify-end gap-4 absolute bottom-0 bg-[#F9FAFB] pl-2 pt-2 right-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevTestimonial} 
                  className="rounded-md border-0 bg-white w-12 h-12"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextTestimonial} 
                  className="rounded-md border-0 bg-white w-12 h-12"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}