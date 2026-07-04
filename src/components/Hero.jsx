import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D1B2A] pt-24 pb-16 px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,164,91,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,91,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(200,164,91,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column — main content */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                <span className="text-[13px] text-white/60 tracking-wide">Available for new projects — 2026</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#C8A45B] text-sm tracking-[0.2em] uppercase mb-5 font-medium"
            >
              Rony Al Chammai — Software Developer
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-white mb-8 leading-[1.08] tracking-tight"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(3rem, 6vw, 5.25rem)",
              }}
            >
              I build software
              <br />
              your business
              <br />
              <span style={{ color: "#C8A45B", fontStyle: "italic" }}>deserves.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-white/55 text-[17px] leading-relaxed max-w-[520px] mb-12"
            >
              Full-stack web development for startups and growing businesses — crafted for
              performance, built to scale, and designed to convert.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#C8A45B] text-[#0D1B2A] text-[15px] font-semibold rounded-full hover:bg-[#d4b070] transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A45B]/20 hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/15 text-white/70 text-[15px] font-medium rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
              >
                View Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right column — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-[440px]">
              {/* Glow behind card */}
              <div className="absolute -inset-8 bg-[#C8A45B]/8 rounded-3xl blur-3xl pointer-events-none" />

              {/* Main card */}
              <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-8 overflow-hidden">
                {/* Top bar decoration */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="ml-2 text-[11px] text-white/20 font-mono tracking-wider">
                    ronyalchammai.com
                  </div>
                </div>

                {/* Code-style content */}
                <div className="font-mono text-[13px] leading-7 mb-8">
                  <div className="text-white/25">// Developer Profile</div>
                  <div className="mt-2">
                    <span className="text-[#C8A45B]/70">const</span>{" "}
                    <span className="text-white/80">developer</span>{" "}
                    <span className="text-white/40">=</span>{" "}
                    <span className="text-white/40">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">name:</span>{" "}
                    <span className="text-emerald-400/80">"Rony Al Chammai"</span>
                    <span className="text-white/30">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">role:</span>{" "}
                    <span className="text-emerald-400/80">"Software Developer"</span>
                    <span className="text-white/30">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">stack:</span>{" "}
                    <span className="text-white/40">[</span>
                  </div>
                  {["Laravel", "Livewire", "Alpine.js", "React.js"].map((tech) => (
                    <div key={tech} className="pl-8">
                      <span className="text-[#C8A45B]/80">"{tech}"</span>
                      <span className="text-white/30">,</span>
                    </div>
                  ))}
                  <div className="pl-4 text-white/40">],</div>
                  <div className="pl-4">
                    <span className="text-white/40">available:</span>{" "}
                    <span className="text-[#C8A45B]">true</span>
                    <span className="text-white/30">,</span>
                  </div>
                  <div className="text-white/40">{"}"}</div>
                </div>

                {/* Bottom badge */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/8">
                  <div className="w-8 h-8 rounded-full bg-[#C8A45B]/15 flex items-center justify-center">
                    <span className="text-[#C8A45B] text-xs font-bold">R</span>
                  </div>
                  <div>
                    <div className="text-white/70 text-[13px] font-medium">Rony Al Chammai</div>
                    <div className="text-white/30 text-[11px]">Full-Stack Developer</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                    <span className="text-emerald-400/70 text-[11px]">Open to work</span>
                  </div>
                </div>
              </div>

              {/* Floating tech tags */}
              <motion.div
                className="absolute -right-5 top-16 bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 rounded-full bg-[#C8A45B]" />
                <span className="text-white/70 text-[12px] font-medium">Full-Stack</span>
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-20 bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white/70 text-[12px] font-medium">Available Now</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}