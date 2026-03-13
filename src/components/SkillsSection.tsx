const productSkills = [
  'Product Strategy', 'Roadmapping', 'User Persona Development',
  'Product Analytics', 'GTM Strategy',
];

const toolSkills = [
  'SQL', 'Figma', 'Tableau', 'Postman', 'Low-code platforms',
];

const businessSkills = [
  'Stakeholder Management', 'Growth Strategy', 'Operations Management',
  'Sales Enablement',
];

const skillGroups = [
  { title: 'Product', skills: productSkills },
  { title: 'Tools', skills: toolSkills },
  { title: 'Business', skills: businessSkills },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Toolkit</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, gi) => (
            <div key={group.title} className={`animate-on-scroll stagger-${gi + 1}`}>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary inline-block" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className={`animate-on-scroll stagger-${(i % 8) + 1} px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
