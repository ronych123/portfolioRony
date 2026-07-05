import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const navLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

const services = [
  "Website Development",
  "Web Application Development",
  "SaaS Development",
  "API Development",
  "Performance Optimization",
  "Technical Consulting",
];

const socialLinks = [
  { icon: (props) => <FontAwesomeIcon icon={faEnvelope} {...props} />, label: "Email", href: "mailto:roni_chammai@hotmail.com" },
  { icon: (props) => <FontAwesomeIcon icon={faLinkedinIn} {...props} />, label: "LinkedIn", href: "https://linkedin.com/in/ronyalchammai" },
  // { icon: Github, label: "GitHub", href: "https://github.com/ronyalchammai" },
];

export function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -72;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07101a] border-t border-white/5">
      {/* CTA banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-white/35 text-[13px] tracking-[0.15em] uppercase mb-3">
                Ready to start?
              </p>
              <h2
                className="text-white leading-tight"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                }}
              >
                Let's build something
                <span style={{ color: "#C8A45B", fontStyle: "italic" }}> remarkable.</span>
              </h2>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-4 bg-[#C8A45B] text-[#0D1B2A] text-[14px] font-semibold rounded-full hover:bg-[#d4b070] transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A45B]/20"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white hover:text-[#C8A45B] transition-colors duration-300 mb-5 block"
            >
              <span
                className="text-[17px] tracking-[0.1em] uppercase font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Rony<span className="text-[#C8A45B]">.</span>
              </span>
            </button>
            <p className="text-white/35 text-[13px] leading-relaxed mb-6 max-w-[200px]">
              Software developer building digital products that help businesses grow.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C8A45B] hover:border-[#C8A45B]/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/40 text-[11px] tracking-[0.18em] uppercase font-medium mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/45 hover:text-white text-[14px] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/40 text-[11px] tracking-[0.18em] uppercase font-medium mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/45 hover:text-white text-[13px] transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <h4 className="text-white/40 text-[11px] tracking-[0.18em] uppercase font-medium mb-5">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:roni_chammai@hotmail.com"
                className="flex items-center gap-2 text-white/45 hover:text-white text-[14px] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5 text-[#C8A45B]/60" />
                {/* roni_chammai@hotmail.com */}
                Email
              </a>
              <a
                href="https://linkedin.com/in/ronyalchammai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/45 hover:text-white text-[14px] transition-colors duration-200"
              >
                {/* <Linkedin className="w-3.5 h-3.5 text-[#C8A45B]/60" /> */}
                <FontAwesomeIcon icon={faLinkedinIn} className="w-3.5 h-3.5 text-[#C8A45B]/60" />
                LinkedIn
              </a>
              <div className="pt-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                <span className="text-emerald-400/70 text-[12px]">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[12px]">
            © {new Date().getFullYear()} Rony Al Chammai. All rights reserved.
          </p>
          <p className="text-white/20 text-[12px]">
            Designed & built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}