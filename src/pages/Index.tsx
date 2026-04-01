import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LogosSection from '@/components/LogosSection';
import CountersSection from '@/components/CountersSection';
import FeaturesSection from '@/components/FeaturesSection';
import SoftwareImageSection from '@/components/SoftwareImageSection';
import PitzonSection from '@/components/PitzonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BonosSection from '@/components/BonosSection';
import StepsSection from '@/components/StepsSection';
import OptionsSection from '@/components/OptionsSection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <LogosSection />
      <CountersSection />
      <FeaturesSection />
      <SoftwareImageSection />
      <PitzonSection />
      <TestimonialsSection />
      <BonosSection onOpenModal={openModal} />
      <StepsSection onOpenModal={openModal} />
      <OptionsSection />
      <FaqSection />
      <FinalCtaSection onOpenModal={openModal} />
      <Footer />
      <DemoModal open={modalOpen} onClose={closeModal} />
    </>
  );
};

export default Index;
