"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { Footer } from "@/components/Footer";

export function Landing() {
  return (
    <div className="min-h-screen bg-[#ffe5ec]">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <BenefitsSection />
        <DeliverySection />
        <ContactsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
