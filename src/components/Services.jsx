import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "A well-built website isn't just a digital brochure — it's your best sales tool. I design and develop fast, conversion-focused websites that establish credibility and turn visitors into clients.",
    tags: ["Marketing Sites", "Landing Pages", "SEO-First"],
    image:
      "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbGFuZGluZyUyMHBhZ2UlMjBtb2NrdXB8ZW58MXx8fHwxNzc1NDg0ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Complex business logic deserves a thoughtful, scalable foundation. I build full-stack web apps with clean architecture, intuitive UX, and the flexibility to grow with your needs.",
    tags: ["Full-Stack", "React", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "03",
    title: "SaaS Development",
    description:
      "From MVP to full product launch, I build SaaS platforms that are ready to scale — with multi-tenant architecture, subscription billing, user management, and analytics built in.",
    tags: ["MVP to Launch", "Multi-Tenant", "Stripe Payments"],
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "04",
    title: "API Development",
    description:
      "Reliable, well-documented APIs are the backbone of modern software. I design and build RESTful and GraphQL APIs that are secure, performant, and built to integrate cleanly.",
    tags: ["REST & GraphQL", "Documentation", "Auth & Security"],
    image:
      "https://images.unsplash.com/photo-1645947091786-4399f228f5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBiYWNrZW5kJTIwc2VydmVyJTIwY29kZSUyMGludGVncmF0aW9ufGVufDF8fHx8MTc3NTQ4NDg4MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "05",
    title: "Performance Optimization",
    description:
      "Slow software costs real money. I audit and optimize existing applications for speed, Core Web Vitals, and user experience — measurable results, not guesses.",
    tags: ["Core Web Vitals", "Load Speed", "SEO Impact"],
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "06",
    title: "Technical Consulting",
    description:
      "Before you invest months in the wrong direction, let's make sure your strategy is sound. I provide honest, experienced guidance on architecture, technology decisions, and team practices.",
    tags: ["Architecture Review", "Code Audit", "Tech Stack"],
    image:
      "https://images.unsplash.com/photo-1690192336223-063c7197bd29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBjb25zdWx0aW5nJTIwc3RyYXRlZ3klMjBtZWV0aW5nJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3NzU0ODQ4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.08 });

  return (
    <section id="services" className="py-32 px-6 bg-[#0D1B2A] relative overflow-hidden" ref={ref}>
      {/* Subtle background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(200,164,91,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#C8A45B] text-[13px] tracking-[0.2em] uppercase font-medium mb-6"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white leading-[1.1] tracking-tight"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              }}
            >
              <span className="block sm:inline">What I can</span>{" "}
              <span className="block sm:inline">build for you</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/45 text-[17px] leading-relaxed lg:max-w-[400px]"
          >
            Every service I offer is tied to one outcome: making your product better, faster, and more
            valuable to your customers.
          </motion.p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 hover:border-[#C8A45B]/25 rounded-2xl overflow-hidden flex flex-col transition-all duration-400"
            >
              {/* Card image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-[1.05] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/10 via-transparent to-[#0D1B2A]" />
                <span
                  className="absolute top-4 left-5 text-white/35 group-hover:text-[#C8A45B]/70 transition-colors duration-300"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "0.85rem" }}
                >
                  {service.number}
                </span>
              </div>

              {/* Card content */}
              <div className="p-8 flex flex-col gap-4 flex-1">
                <h3
                  className="text-white text-[19px] leading-snug"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/45 text-[14px] leading-[1.8] flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-white/30 border border-white/10 rounded-full px-3 py-1 group-hover:border-[#C8A45B]/20 group-hover:text-white/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/[0.03] border border-white/8 rounded-2xl px-10 py-8"
        >
          <div>
            <p
              className="text-white text-[22px] mb-1"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Not sure what you need?
            </p>
            <p className="text-white/40 text-[15px]">
              Let's talk. I'll help you figure out the right approach for your goals.
            </p>
          </div>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C8A45B] text-[#0D1B2A] text-[14px] font-semibold rounded-full hover:bg-[#d4b070] transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A45B]/20 whitespace-nowrap"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
