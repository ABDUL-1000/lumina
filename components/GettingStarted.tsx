"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function GettingStarted() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: <Image src="/calen.png" alt="Online Booking" width={300} height={300} />,
      title: "Book a Pickup or Cleanup",
      description: "Choose your service, set your time, and confirm your booking in minutes.",
    },
    {
      icon: <Image src="/van2.png" alt="Online Booking" width={300} height={300} />,
      title: "Our Team Shows Up",
      description: "Our professional team comes to your location right on time.",
    },
    {
      icon: <Image src="/dustbin.png" alt="Online Booking" width={300} height={300} />,
      title: "We Clean & Recycle",
      description: "Sorting & cleaning waste, collecting only plastic waste for recycling.",
    },
  ]

  return (
    <section ref={ref} className="w-full py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-start"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl lg:text-4xl leading-15 font-bold text-foreground mb-4 text-balance">
            Getting started with <span className="text-primary">Lumina Green 360</span> is{" "}
            <span className="text-muted-foreground">quick, easy</span>, and{" "}
            <span className="text-muted-foreground">stress-free</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: index === 0 ? -3 : index === 2 ? 3 : 0 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotate: index === 0 ? -3 : index === 2 ? 3 : 0 
              } : { 
                opacity: 0, 
                y: 50,
                rotate: index === 0 ? -3 : index === 2 ? 3 : 0 
              }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              className={`
                relative p-6 rounded-2xl bg-card text-card-foreground shadow-sm
                transition-all duration-300
                ${index === 1 ? 'z-10' : ''}
              `}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
              <motion.div 
                className="flex items-center justify-center mt-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              >
                {step.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}