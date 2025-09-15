"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pricingPlans = [
    {
      title: "Household Waste Pickup",
      description: "Gives you the most freedom. Perfect if you want to try the membership.",
      price: ["₦5,000", "₦10,500"],
      period: ["Per Pickup", "Biweekly"],
      note: ["₦4,500 – returning clients", "₦9,500 – returning clients"],
      features: ["Door-to-door pickup", "Waste & simple service"],
      cta: "Get Lumina 360",
      highlight: false,
      borderColor: "#1D5C7B",
    },
    {
      title: "Business Waste Pickup",
      description: "For companies of all sizes. We get you covered.",
      price: "₦5,000 - ₦10,000",
      note: "Returning clients get reduced rates",
      period: "Per Pickup",
      features: ["Flexible plans for offices, hotels, restaurants", "Tailored packages for large waste"],
      cta: "Get Lumina 360",
      highlight: true,
      borderColor: "#F1592A",
    },
    {
      title: "Cleaning Services",
      description: "Gives you the most freedom. Perfect if you want to try the membership.",
      price: "₦20,000",
      period: "hour",
      note: "Gives you the most freedom. Perfect if you want to try the membership.",
      features: ["Residential & commercial cleaning", "Deep cleaning for compounds & events"],
      cta: "Get Lumina 360",
      highlight: true,
      borderColor: "#1AAF5F",
    },
    {
      title: "Cleaning Services",
      description: "Gives you the most freedom. Perfect if you want to try the membership.",
      price: "₦5,000 - ₦10,000",
      note: "Returning clients get reduced rates",
      period: "Per Pickup",
      features: ["Flexible plans for offices, hotels, restaurants", "Tailored packages for large waste"],
      cta: "Get Lumina 360",
      highlight: true,
      borderColor: "#1AAF5F", 
    },
  ]

  return (
    <section ref={ref} className="w-full py-10">
      <div className="container mx-auto px-2">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10">
            Transparent & Affordable <span className="text-muted-foreground">Pricing</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - 40% width */}
          <div className="w-full lg:w-2/5 flex flex-col">
            {/* Top card - 70% height with blue border */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card 
                className="flex-grow mb-6 " 
                style={{ borderColor: pricingPlans[0].borderColor, borderWidth: '2px' }}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-card-foreground text-start">{pricingPlans[0].title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-start">{pricingPlans[0].description}</CardDescription>
                  <div className="bg-[#F9FAFB] flex flex-col items-start justify-start rounded-md p-2 space-y-4">
                    <p className="bg-white px-6 p-1 text-[0.09rem] rounded-full">price</p>
                    <div className="text-xl text-foreground">{pricingPlans[0].price[0]}/{pricingPlans[0].period[0]}</div>
                    {pricingPlans[0].note && <div className="text-neutral-600 text-[0.9rem]">{pricingPlans[0].note[0]}</div>}
                  </div>
                  <div className="bg-[#F9FAFB] flex flex-col items-start justify-start rounded-md p-2 space-y-4">
                    <p className="bg-white px-6 p-1 text-[0.09rem] rounded-full">price</p>
                    <div className="text-xl text-foreground">{pricingPlans[0].price[1]}/{pricingPlans[0].period[1]}</div>
                    {pricingPlans[0].note && <div className="text-neutral-600 text-[0.9rem]">{pricingPlans[0].note[1]}</div>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p>What's Included:</p>
                    {pricingPlans[0].features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + featureIndex * 0.1 }}
                      >
                        <Image src="/tick.png" width={20} height={20} alt="Check" className="w-4 h-4" style={{ color: pricingPlans[0].borderColor }} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Bottom card - 30% height with yellow border */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Card 
                className="flex" 
                style={{ borderColor: pricingPlans[1].borderColor, borderWidth: '2px' }}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-card-foreground text-start">{pricingPlans[2].title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-start mb-4">{pricingPlans[2].description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="rounded-full bg-gradient-to-r to-[#0B5A33] from-[#0D8E4B]">
                      Call Lumina 
                      <motion.span 
                        className="ml-2"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                      >
                        <Image src="/call.svg" alt="call.png" width={20} height={20}/>
                      </motion.span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right column - 60% width */}
          <div className="w-full lg:w-3/5 flex flex-col">
            {/* Top card - 50% height with orange border */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Card 
                className="flex-grow mb-6" 
                style={{ borderColor: pricingPlans[1].borderColor, borderWidth: '2px' }}
              >
                <CardHeader className="text-start">
                  <CardTitle className="text-xl text-card-foreground">{pricingPlans[1].title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{pricingPlans[1].description}</CardDescription>
                  <div className="bg-[#F9FAFB] flex flex-col items-start justify-start rounded-md p-2 space-y-4">
                    <p className="bg-white px-6 p-1 text-[0.09rem] rounded-full">price</p>
                    <div className="text-xl text-foreground">{pricingPlans[1].price}/{pricingPlans[1].period}</div>
                    {pricingPlans[1].note && <div className="text-neutral-600 text-[0.9rem]">{pricingPlans[1].note}</div>}
                  </div>
                </CardHeader>
                <CardContent className="">
                  <div className="space-y-2">
                    {pricingPlans[1].features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 + featureIndex * 0.1 }}
                      >
                        <Image src="/tick.png" width={20} height={20} alt="Check" className="w-4 h-4" style={{ color: pricingPlans[1].borderColor }} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Bottom card - 50% height with yellow border */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Card 
                className="flex-grow mb-6" 
                style={{ borderColor: pricingPlans[2].borderColor, borderWidth: '2px' }}
              >
                <CardHeader className="text-start">
                  <CardTitle className="text-xl text-card-foreground">{pricingPlans[2].title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{pricingPlans[2].description}</CardDescription>
                  <div className="bg-[#F9FAFB] flex flex-col items-start justify-start rounded-md p-2 space-y-4">
                    <p className="bg-white px-6 p-1 text-[0.09rem] rounded-full">price</p>
                    <div className="text-xl text-foreground">{pricingPlans[2].price}/{pricingPlans[2].period}</div>
                    {pricingPlans[2].note && <div className="text-neutral-600 text-[0.9rem]">{pricingPlans[2].note}</div>}
                  </div>
                </CardHeader>
                <CardContent className="">
                  <div className="space-y-2">
                    {pricingPlans[2].features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.6 + featureIndex * 0.1 }}
                      >
                        <Image src="/tick.png" width={20} height={20} alt="Check" className="w-4 h-4" style={{ color: pricingPlans[2].borderColor }} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}