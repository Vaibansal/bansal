import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import ExperienceSection from '@/components/ExperienceSection';
import EASection from '@/components/EASection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <ExperienceSection />
      <EASection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
