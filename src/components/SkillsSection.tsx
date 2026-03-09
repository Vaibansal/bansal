const technicalSkills = [
  'SQL', 'Figma', 'Postman', 'Tableau', 'Mixpanel', 'JIRA',
  'Python', 'HTML/CSS', 'Google Analytics', 'Amplitude', 'Miro', 'Notion',
];

const productSkills = [
  'Product Strategy', 'GTM Planning', 'User Research', 'A/B Testing',
  'Stakeholder Management', 'Product Design', 'Data Analysis', 'Roadmap Planning',
  'Agile / Scrum', 'Cross-functional Leadership', 'Market Analysis', 'Revenue Growth',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Toolkit</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-on-scroll-left">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary inline-block" />
              Technical
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, i) => (
                <span
                  key={skill}
                  className={`animate-on-scroll stagger-${(i % 8) + 1} px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Product Skills */}
          <div className="animate-on-scroll-right">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary inline-block" />
              Product & Strategy
            </h3>
            <div className="flex flex-wrap gap-3">
              {productSkills.map((skill, i) => (
                <span
                  key={skill}
                  className={`animate-on-scroll stagger-${(i % 8) + 1} px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
