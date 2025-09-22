"use client"

import { useState } from "react";
import { FAQSection } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { GettingStarted } from "@/components/GettingStarted"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PricingSection } from "@/components/PricingSection"
import { ServicesSection } from "@/components/ServicesSection"
import { Testimonials } from "@/components/Testimonials"
import dynamic from "next/dynamic";
import AboutUsView from "@/components/AboutUs";
import ContactUsView from "@/components/ContactUs";
import PrivacyPolicyView from "@/components/Privacy";

// Dynamic imports for page views


export default function Home() {
  const [currentView, setCurrentView] = useState<{
    type: 'section' | 'page';
    name: string;
  } | null>(null);

  const handleSectionSelect = (section: string) => {
    setCurrentView({ type: 'section', name: section });
    
    // Scroll to section after a small delay to allow state update
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handlePageSelect = (page: string) => {
    setCurrentView({ type: 'page', name: page });
  };

  const renderView = () => {
    if (currentView?.type === 'page') {
      switch(currentView.name) {
        case "about":
          return <AboutUsView />;
        case "contact":
          return <ContactUsView />;
        case "privacy":
          return <PrivacyPolicyView />;
     
        default:
          return renderMainContent();
      }
    }
    
    return renderMainContent();
  };

  const renderMainContent = () => (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <GettingStarted />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faqs">
        <FAQSection />
      </div>
    </>
  );

  return (
    <div className="min-h-screen">
      <Header 
        onSectionSelect={handleSectionSelect}
        onPageSelect={handlePageSelect}
      />
      <main className="w-[95%] mx-auto">
        {renderView()}
      </main>
      <Footer 
        onSectionSelect={handleSectionSelect}
        onPageSelect={handlePageSelect}
      />
    </div>
  )
}