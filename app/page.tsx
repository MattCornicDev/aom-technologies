import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

import HomeSection from "@/app/(sections)/home/HomeSection";
import AboutSection from "@/app/(sections)/about/AboutSection";
import FeatureSection from "@/app/(sections)/features/FeatureSection";
import TestimonialsSection from "@/app/(sections)/testimonials/TestimonialsSection";
import WorkflowSection from "@/app/(sections)/workflow/WorkflowSection";
import ClientSection from "@/app/(sections)/clients/ClientSection";
import BlogSection from "@/app/(sections)/blog/BlogSection";
import ContactSection from "@/app/(sections)/contact/ContactSection";
import Footer from "@/app/(sections)/footer/Footer";
import HeroSection from "@/app/(sections)/hero/HeroSection";

export default function Page() {
  return (
    <>
      <Preloader />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <TestimonialsSection />
      <WorkflowSection />
      <ClientSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
}
