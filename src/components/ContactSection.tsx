import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always open to discussing product management, new opportunities, or just having a great conversation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="mailto:vaibhaviitroorkee@gmail.com"
            className="animate-on-scroll stagger-1 bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
              <Mail size={20} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Email</p>
              <p className="text-sm font-medium text-foreground">vaibhaviitroorkee@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+919896350498"
            className="animate-on-scroll stagger-2 bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
              <Phone size={20} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
              <p className="text-sm font-medium text-foreground">+91 98963 50498</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/vaibhav-bansal-iitroorkee"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll stagger-3 bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
              <Linkedin size={20} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
              <p className="text-sm font-medium text-foreground">Vaibhav Bansal</p>
            </div>
          </a>

          <div className="animate-on-scroll stagger-4 bg-card border border-border rounded-xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
              <MapPin size={20} className="text-accent-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Location</p>
              <p className="text-sm font-medium text-foreground">Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vaibhav Bansal. Crafted with care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
