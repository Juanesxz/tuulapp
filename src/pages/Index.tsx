import { useState, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import CountersSection from "@/components/CountersSection";
import FeaturesSection from "@/components/FeaturesSection";
import PitzonSection from "@/components/PitzonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonosSection from "@/components/BonosSection";
import StepsSection from "@/components/StepsSection";
import OptionsSection from "@/components/OptionsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <main className="overflow-hidden">
      <HeroSection onOpenModal={openModal} />
      <LogosSection />
      <CountersSection />
      <FeaturesSection onOpenModal={openModal} />
      <PitzonSection />
      <TestimonialsSection />
      <BonosSection onOpenModal={openModal} />
      <StepsSection onOpenModal={openModal} />
      <OptionsSection />
      <FaqSection />
      <Footer />
      <DemoModal open={modalOpen} onClose={closeModal} />
    </main>
  );
};

export default Index;
