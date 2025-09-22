"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutUsView() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Halimo Yusuf Bawah",
      role: "CEO",
      description: "In"
    },
    {
      name: "Hussaini Abdullahi",
      role: "Chief of Operations",
      description: "In"
    }
  ];

  const coreValues = [
    "Sustainability",
    "Integrity", 
    "Innovation",
    "Affordability"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Waste into a Greener Future
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're redefining waste management by recycling plastics into eco-friendly building materials for a sustainable Nigeria.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide innovative, affordable, and reliable waste management solutions while recycling plastics into eco-friendly building materials.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become Nigeria's leading waste-for-reliance company, creating a cleaner, healthier, and more sustainable environment.
            </p>
          </motion.div>
        </div>

        <hr className="my-16 border-border" />

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value}
                className="bg-card rounded-lg p-6 text-center shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-semibold text-foreground">{value}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-card rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
              >
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Mission */}
        <motion.div
          className="bg-primary rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Passionate about sustainability?</h2>
          <h3 className="text-xl lg:text-2xl font-semibold mb-6">Join our mission</h3>
          <p className="mb-6 leading-relaxed">
            From waste pickup riders to recycling innovators, we're always looking for passionate people to join our mission of turning waste into opportunity. Be part of a team creating impact, jobs, and a greener Nigeria.
          </p>
          <Button variant="secondary" size="lg" className="rounded-full">
            Join Our Team
          </Button>
        </motion.div>
      </div>
    </div>
  );
}