import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const reasons = [
  {
    number: "01",
    title: "Clean, maintainable code",
    description:
      "We write code as if the next developer who reads it is you — clear, documented, and built to last beyond the initial launch.",
    image:
      "https://images.unsplash.com/photo-1547860664-b8537ca5f833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NTQ4NTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "02",
    title: "Performance by default",
    description:
      "Speed isn't an afterthought. Every application we build is optimized for real-world performance from day one.",
    image:
      "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "03",
    title: "Honest communication",
    description:
      "No vanishing acts, no vague updates. You'll always know where things stand, even when there's a problem to solve.",
    image:
      "https://images.unsplash.com/photo-1544028358-9697462040e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25lc3QlMjBjb252ZXJzYXRpb24lMjB0d28lMjBwZW9wbGUlMjB0YWxraW5nJTIwdHJ1c3R8ZW58MXx8fHwxNzc1NDg1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "04",
    title: "Delivery you can rely on",
    description:
      "Timelines exist for a reason. We take deadlines seriously and flag issues early — not the day before something is due.",
    image:
      "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "05",
    title: "Scalable architecture",
    description:
      "We build for where you're going, not just where you are. The systems we design are ready to grow when your business does.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "06",
    title: "Attention to detail",
    description:
      "The difference between good and great is often in the details — the micro-interactions, the edge cases, and the finishing touches.",
    image:
      "https://images.unsplash.com/photo-1672309558498-cfcc89afff25?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const highlights = [
  "Full-stack expertise",
  "Deadline-driven delivery",
  "Clear project communication",
  "Scalable, production-ready code",
];

export function WhyWorkWithMe() {
  const [ref, isInView] = useInView({ threshold: 0.06 });

  return (
    <section id="why" className="py-32 px-6 bg-[#0D1B2A] relative overflow-hidden" ref={ref}>
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(200,164,91,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header — split with image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#C8A45B] text-[13px] tracking-[0.2em] uppercase font-medium mb-6"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white leading-[1.1] tracking-tight mb-8"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.25rem, 3.5vw, 3rem)",
              }}
            >
              Why clients choose to work with us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 text-[17px] leading-relaxed max-w-[460px] mb-10"
            >
              Technical skill matters. But the developers who build long-term client relationships
              bring more than code — they bring clarity, reliability, and genuine care for the product.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-col gap-3 mb-10"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A45B] flex-shrink-0" strokeWidth={2} />
                  <span className="text-white/60 text-[14px]">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C8A45B] text-[#0D1B2A] text-[14px] font-semibold rounded-full hover:bg-[#d4b070] transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A45B]/20"
              >
                Let's Work Together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right: featured image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A45B]/15 via-transparent to-[#0D1B2A]/60" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-[#0D1B2A] border border-white/10 rounded-xl px-5 py-4 shadow-2xl"
            >
              <p
                className="text-[#C8A45B] text-[1.6rem] leading-none mb-1"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                100%
              </p>
              <p className="text-white/40 text-[12px]">Client satisfaction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-5 -right-5 bg-[#C8A45B] rounded-xl px-5 py-4 shadow-2xl"
            >
              <p
                className="text-[#0D1B2A] text-[1.6rem] leading-none mb-1"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                5+
              </p>
              <p className="text-[#0D1B2A]/60 text-[12px] font-medium">Years experience</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Reasons grid — now with images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="group bg-white/[0.04] hover:bg-white/[0.06] border border-white/8 hover:border-[#C8A45B]/20 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Card image */}
              <div className="relative h-36 overflow-hidden">
                <ImageWithFallback
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-[1.05] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1B2A]/90" />
                {/* Number badge on image */}
                <span className="absolute bottom-3 left-5 text-[#C8A45B]/50 group-hover:text-[#C8A45B]/80 text-[11px] font-mono tracking-widest transition-colors duration-300">
                  {reason.number}
                </span>
              </div>

              {/* Card text */}
              <div className="p-6 pt-5">
                <h3 className="text-white text-[17px] font-semibold mb-3 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-white/40 text-[14px] leading-[1.8]">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
