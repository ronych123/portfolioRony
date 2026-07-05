import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import {
  Globe,
  UserCircle,
  ShoppingCart,
  CalendarCheck,
  LayoutDashboard,
  Users,
  Layers,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const solutions = [
  {
    icon: Globe,
    category: "Web Presence",
    title: "Business Websites",
    problem:
      "Many businesses lack a professional online presence, causing them to lose credibility and potential customers.",
    solution:
      "We build polished, fast, and conversion-focused websites that represent your brand, highlight your services, and turn visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1726056652663-8f1e42b2fc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbXBhbnklMjBwcm9mZXNzaW9uYWwlMjB3ZWJzaXRlJTIwbGFwdG9wfGVufDF8fHx8MTc3NTQ4NDg3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: UserCircle,
    category: "Personal Branding",
    title: "Portfolio Websites",
    problem:
      "Freelancers, developers, and creatives struggle to stand out and showcase their work in a compelling way online.",
    solution:
      "We design modern portfolio websites that highlight your skills and experience, helping you attract the right clients and opportunities.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: ShoppingCart,
    category: "E-Commerce",
    title: "E-Commerce Websites",
    problem:
      "Businesses relying on physical stores or social media miss out on sales from customers who prefer to shop online.",
    solution:
      "We build full-featured online stores with product management, secure checkout, and seamless payment integration — ready to sell from day one.",
    image:
      "https://images.unsplash.com/photo-1646193186175-4ec30e6e5882?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: CalendarCheck,
    category: "Booking & Reservations",
    title: "Online Booking Systems",
    problem:
      "Service-based businesses like clinics, salons, and restaurants lose bookings when customers can't easily reserve a slot.",
    solution:
      "We develop smart booking platforms that let clients schedule appointments 24/7, with automated confirmations and calendar management.",
    image:
      "https://images.unsplash.com/photo-1772734645532-a200e06f105d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBvaW50bWVudCUyMGJvb2tpbmclMjBjYWxlbmRhciUyMHNjaGVkdWxpbmclMjBhcHB8ZW58MXx8fHwxNzc1NDg0ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: LayoutDashboard,
    category: "Operations",
    title: "Business Management Dashboards",
    problem:
      "Growing businesses struggle to track orders, users, and analytics when data is scattered across multiple tools.",
    solution:
      "We build centralised admin dashboards that give your team a clear overview of operations, metrics, and performance — all in one place.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Users,
    category: "HR & Internal Tools",
    title: "Employee Management Systems",
    problem:
      "Companies managing teams manually through spreadsheets and email face inefficiency, errors, and poor visibility.",
    solution:
      "We create internal HR tools to manage employees, track leave requests, handle schedules, and streamline day-to-day operations.",
    image:
      "https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwb2ZmaWNlJTIwcGVvcGxlJTIwd29ya2luZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzc1NDg1NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  // {
  //   icon: Layers,
  //   category: "SaaS",
  //   title: "SaaS Platforms",
  //   problem:
  //     "Entrepreneurs with a software idea need a scalable product that multiple businesses can subscribe to and use independently.",
  //   solution:
  //     "I architect and build multi-tenant SaaS platforms with subscription billing, role-based access, and the infrastructure to grow with your user base.",
  //   image:
  //     "https://images.unsplash.com/photo-1731514539776-adf46be8b9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNvZnR3YXJlJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5JTIwYmx1ZSUyMHB1cnBsZXxlbnwxfHx8fDE3NzU0ODU0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  // },
  // {
  //   icon: Zap,
  //   category: "Backend & Integrations",
  //   title: "API-Based Systems",
  //   problem:
  //     "Mobile apps, third-party tools, and complex digital products need a reliable, secure backend to power their features.",
  //   solution:
  //     "I design and build robust REST APIs and backend systems that connect your product's moving parts, handle data securely, and scale under load.",
  //   image:
  //     "https://images.unsplash.com/photo-1645947091786-4399f228f5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBiYWNrZW5kJTIwc2VydmVyJTIwY29kZSUyMGludGVncmF0aW9ufGVufDF8fHx8MTc3NTQ4NDg4MHww&ixlib=rb-4.1.0&q=80&w=1080",
  // },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.06 });

  return (
    <section id="work" className="py-32 px-6 bg-[#F6F2EA]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#C8A45B] text-[13px] tracking-[0.2em] uppercase font-medium mb-6"
            >
              What We Build
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#0D1B2A] leading-[1.1] tracking-tight"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              }}
            >
              Solutions &amp; Websites We Can Build For You
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#0D1B2A]/50 text-[16px] leading-relaxed lg:max-w-[400px]"
          >
            From simple business websites to complex SaaS platforms — here are the types of digital
            products we design and develop for clients.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 + index * 0.07 }}
                className="group relative bg-white rounded-2xl border border-[#0D1B2A]/6 hover:border-[#C8A45B]/35 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#0D1B2A]/8 hover:-translate-y-1"
              >
                {/* Card image */}
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0D1B2A]/35 group-hover:bg-[#0D1B2A]/22 transition-colors duration-400" />
                  {/* Category tag */}
                  <div className="absolute bottom-3 left-4">
                    <span className="px-2.5 py-1 bg-[#C8A45B] text-[#0D1B2A] text-[10px] tracking-wider uppercase rounded-full font-bold">
                      {item.category}
                    </span>
                  </div>
                  {/* Icon badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" strokeWidth={1.6} />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h3
                    className="text-[#0D1B2A] leading-snug"
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <div className="w-7 h-px bg-[#C8A45B]/40 group-hover:w-12 transition-all duration-500" />

                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] text-[#C8A45B] uppercase tracking-widest font-semibold">
                      The Problem
                    </p>
                    <p className="text-[#0D1B2A]/50 text-[13px] leading-[1.75]">{item.problem}</p>
                  </div>

                  <div className="flex flex-col gap-1 mt-auto">
                    <p className="text-[10px] text-[#0D1B2A]/40 uppercase tracking-widest font-semibold">
                      The Solution
                    </p>
                    <p className="text-[#0D1B2A]/70 text-[13px] leading-[1.75]">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-[#0D1B2A]/35 text-[14px]">
            Have something specific in mind?{" "}
            <a
              href="#contact"
              className="text-[#C8A45B] hover:text-[#0D1B2A] underline underline-offset-4 decoration-[#C8A45B]/40 transition-colors duration-200 font-medium"
            >
              Let's talk about your project.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
