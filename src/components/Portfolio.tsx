import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
    image: "https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc3Mjk3MDEwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Comprehensive analytics platform with real-time data visualization, custom reports, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3Mjk3NjUyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Laravel", "MySQL", "APIs"],
  },
  {
    title: "Mobile-First Web App",
    description: "Progressive web application optimized for mobile devices with offline capabilities and push notifications.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzcyOTM5MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Node.js", "MongoDB", "PWA"],
  },
  {
    title: "Portfolio & Blog Platform",
    description: "Custom CMS-powered portfolio and blog with dynamic content management, SEO optimization, and social media integration.",
    image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MjkwNTA0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "PHP", "MySQL", "CSS"],
  },
  {
    title: "Business Management System",
    description: "All-in-one business management platform with CRM, project tracking, invoicing, and team collaboration tools.",
    image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyOTQwMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Laravel", "PostgreSQL", "Docker"],
  },
  {
    title: "API Integration Platform",
    description: "Secure API gateway and integration platform connecting multiple third-party services with custom webhooks and automation.",
    image: "https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFwaSUyMGludGVncmF0aW9ufGVufDF8fHx8MTc3MzAwMjQ5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Node.js", "APIs", "Docker", "Git"],
  },
];

export function Portfolio() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="portfolio" className="py-24 px-4 bg-dark-navy" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of recent projects that demonstrate our expertise in building modern web solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-light-bg/5 border border-gold/20 rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                    <button className="p-3 bg-gold rounded-lg hover:bg-gold/90 transition-colors">
                      <ExternalLink className="w-5 h-5 text-dark-navy" />
                    </button>
                    {/* <button className="p-3 bg-white rounded-lg hover:bg-white/90 transition-colors">
                      <Github className="w-5 h-5 text-dark-navy" />
                    </button> */}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm border border-gold/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
