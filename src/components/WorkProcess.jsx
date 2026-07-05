import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a focused conversation about your goals, constraints, and success criteria. I ask the questions other developers forget to ask.",
    image:
      "https://images.unsplash.com/photo-1762427353897-20e566f120a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNjb3ZlcnklMjBicmFpbnN0b3JtJTIwcmVzZWFyY2glMjBpZGVhJTIwbGlnaHRidWxifGVufDF8fHx8MTc3NTQ4NTQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "I map out the technical approach, propose the right stack, and scope the work clearly — so there are no surprises later.",
    image:
      "https://images.unsplash.com/photo-1677506048148-0c914dd8197b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHBsYW5uaW5nJTIwcm9hZG1hcCUyMHdoaXRlYm9hcmQlMjBzdGlja3klMjBub3Rlc3xlbnwxfHx8fDE3NzU0ODU0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "03",
    title: "Architecture",
    description:
      "Before writing a line of code, I design the system. A solid architectural foundation prevents 80% of problems down the road.",
    image:
      "https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBkaWFncmFtJTIwc3RydWN0dXJlfGVufDF8fHx8MTc3NTQ4NTQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Clean code, regular commits, and consistent progress updates. You're never left wondering what's happening.",
    image:
      "https://images.unsplash.com/photo-1547860664-b8537ca5f833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NTQ4NTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Thorough QA across devices, browsers, and edge cases. I don't ship until I'm confident it will hold up in the real world.",
    image:
      "https://images.unsplash.com/photo-1705579611598-e6d261d0107b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwdGVzdGluZyUyMGJ1ZyUyMHJldmlldyUyMG1hZ25pZnlpbmclMjBnbGFzc3xlbnwxfHx8fDE3NzU0ODU0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Smooth deployment with proper monitoring and documentation. I stay available post-launch to handle any immediate needs.",
    image:
      "https://images.unsplash.com/photo-1758691737138-7b9b1884b1db?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function WorkProcess() {
  const [ref, isInView] = useInView({ threshold: 0.06 });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -72;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="process" className="py-32 px-6 bg-[#F6F2EA]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#C8A45B] text-[13px] tracking-[0.2em] uppercase font-medium mb-6"
          >
            Process
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
            How every project gets done right
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-[#0D1B2A]/6 hover:border-[#C8A45B]/30 overflow-hidden flex flex-col transition-all duration-400 hover:shadow-xl hover:shadow-[#0D1B2A]/7 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0D1B2A]/30 group-hover:bg-[#0D1B2A]/20 transition-colors duration-400" />
                {/* Number circle */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                  <span
                    className="text-white text-[11px] font-mono font-semibold"
                  >
                    {step.number}
                  </span>
                </div>
                {/* Gold accent bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C8A45B]/0 via-[#C8A45B]/60 to-[#C8A45B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <h3
                  className="text-[#0D1B2A] text-[18px] leading-snug"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <div className="w-6 h-px bg-[#C8A45B]/40 group-hover:w-10 transition-all duration-500" />
                <p className="text-[#0D1B2A]/50 text-[13px] leading-[1.8]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0D1B2A]/4 border border-[#0D1B2A]/8 rounded-2xl px-8 py-7"
        >
          <p className="text-[#0D1B2A]/60 text-[15px] leading-relaxed">
            Most projects go from kickoff to launch in{" "}
            <strong className="text-[#0D1B2A]/80 font-semibold">4 to 12 weeks</strong> depending on scope.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex-shrink-0 text-[14px] font-semibold text-[#C8A45B] hover:text-[#b89550] transition-colors underline underline-offset-4"
          >
            Discuss your timeline →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
