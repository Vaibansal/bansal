import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import ExperienceSection from '@/components/ExperienceSection';
import EASection from '@/components/EASection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import PullQuote from '@/components/PullQuote';

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="min-h-screen bg-paper">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      {/* Editorial pull quote 1 */}
      <PullQuote quote="I don't ship decks. I ship systems that run without me" attribution="VB" alt />
      <WhatIDoSection />
      <ExperienceSection />
      {/* Editorial pull quote 2 */}
      <PullQuote quote="Products earn revenue. Operations earn trust. I build both" attribution="VB" />
      <EASection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default Index;

