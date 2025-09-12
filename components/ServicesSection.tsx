"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: <Image src="/house.png" alt="Household Waste" width={20} height={20} />,
      title: "Household Waste Pickup",
      description: "Reliable door-to-door waste collection.",
      color: "bg-[#1D5C7B]",
    },
    {
      icon: <Image src="/home-hashtag.png" alt="Commercial Cleaning" width={20} height={20} />,
      title: "Commercial Cleaning",
      description: "Deep cleaning for compounds, estates, and event venues.",
      color: "bg-[#1AAF5F]",
    },
    {
      icon: <Image src="/pickup.png" alt="Business Waste" width={20} height={20} />,
      title: "Business Waste Pickup",
      description: "Offices, hotels, restaurants, and more.",
      color: "bg-[#F1592A]",
    },
  ]

  return (
    <section ref={ref} className="w-full py-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Reliable <span className="text-muted-foreground">Services</span> for Every Need
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className={`border-0 shadow-lg hover:shadow-xl ${service.color} transition-shadow`}>
                <CardHeader className="text-center pb-4 space-y-2">
                  <motion.div 
                    className={`w-10 h-10 bg-white rounded-md flex items-center justify-center`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-extralight text-start text-white">
                    {service.title}
                  </CardTitle>
                  <motion.span 
                    className="text-gray-300 text-start font-extralight text-[0.9rem]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    {service.description}
                  </motion.span>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}