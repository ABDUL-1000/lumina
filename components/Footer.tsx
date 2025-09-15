"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Social media links
  const socialLinks = [
    {
      src: "/ig.png",
      alt: "Instagram",
      url: "https://www.instagram.com/lumina_green_360?igsh=MW1yZjBrb3Z3eXhvNA=="
    },
    {
      src: "/x.png",
      alt: "Twitter",
      url: "#" // Add your Twitter URL here
    },

  
    {
      src: "/whatsapp.png",
      alt: "WhatsApp",
      url: "http://wa.me/2347079100046"
    },
    {
      src: "/facebook.png", // Make sure you have a Facebook icon in your public folder
      alt: "Facebook",
      url: "https://www.facebook.com/share/1EKTAAPYA6/"
    }
  ];

  return (
    <footer ref={ref} className="w-full bg-white text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <Image 
                src="/Lumina_Logo_Update_1-removebg-preview 1.png" 
                alt="Lumina Green 360 Logo" 
                width={90} 
                height={70} 
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making clean energy affordable and accessible for every Nigerian home.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Services", "Pricing", "Testimonials", "FAQs", "Contact Us"].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              {["Household Pickup", "Commercial Cleaning", "Business Waste", "Recycling"].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <span className="text-muted-foreground">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map((legal, index) => (
                <motion.li
                  key={legal}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                >
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {legal}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media Icons and Copyright Section */}
        <motion.div 
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Copyright Text */}
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Copyright © 2024 Lumina. All rights reserved.
          </motion.p>
          
          {/* Social Media Icons */}
          <motion.div 
            className="flex space-x-4 mb-4 mt-4 md:mb-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.alt}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <Image 
                  src={social.src} 
                  width={20} 
                  height={20} 
                  alt={social.alt} 
                  className="w-5 h-5" 
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}