import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const testimonials = [
  {
    quote:
      "Working with this team was a smooth and professional experience from start to finish. They understood our vision, communicated clearly throughout the project, and delivered a polished solution that aligned perfectly with our expectations. Their attention to detail and commitment to quality made the entire process effortless.",
    name: "Gilbert Loutfi",
    role: "CEO",
    initials: "GL",
  },
  {
    quote:
      "The team quickly understood our requirements and transformed complex ideas into practical, user-friendly solutions. They were proactive, responsive to feedback, and consistently found ways to improve both the user experience and the overall performance of the application.",
    name: "Hoda Mrad",
    role: "Product Manager",
    initials: "HM",
  },
  {
    quote:
      "They built a scalable backend and API that has been reliable since launch. The codebase is clean, easy to maintain, and expanding the platform with new features has been straightforward. We'd gladly collaborate with this company again.",
    name: "Jessika Arairo",
    role: "Founder",
    initials: "JA",
  },
];

const stats = [
  { value: "50+", label: "Projects completed" },
  { value: "5+", label: "Years experience" },
  { value: "< 24h", label: "Average response time" },
  { value: "100%", label: "On-time delivery rate" },
];

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.08 });

  return (
    <section
      id="testimonials"
      className="py-16 px-6 bg-[#0D1B2A] relative overflow-hidden"
      ref={ref}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200,164,91,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#C8A45B] text-[13px] tracking-[0.2em] uppercase font-medium mb-6"
          >
            Testimonials
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
            What clients say
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group bg-white/[0.04] hover:bg-white/[0.06] border border-white/15 rounded-2xl p-8 flex flex-col gap-6 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div
                className="text-[#C8A45B]/70 transition-colors"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "4rem",
                  lineHeight: 0.7,
                }}
              >
                "
              </div>

              {/* Quote text */}
              <p className="text-white/60 text-[15px] leading-[1.85] flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                <div className="w-10 h-10 rounded-full bg-[#C8A45B]/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A45B] text-[13px] font-semibold">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="text-white text-[14px] font-medium">
                    {t.name}
                  </div>
                  <div className="text-white/35 text-[12px]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 shadow-lg shadow-white/[0.03] rounded-2xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0a1520]/[0.03] py-10 px-8 text-center hover:bg-white/15 transition-colors"
            >
              <div
                className="text-white mb-2"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "2.25rem",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/35 text-[12px] tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}