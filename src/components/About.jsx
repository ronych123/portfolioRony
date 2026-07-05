import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import image from '../assets/image.png';

const focuses = [
  "Full-Stack Web Development",
  "SaaS & API Architecture",
  "Performance Optimization",
  "Technical Strategy",
];

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="about" className="py-16 px-6 bg-[#F6F2EA]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#C8A45B] text-[13px] tracking-[0.2em] uppercase font-medium mb-6"
            >
              About
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#0D1B2A] mb-8 leading-[1.1] tracking-tight"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              }}
            >
              The developer
              <br />
              behind the work
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 mb-10"
            >
              <p className="text-[#0D1B2A]/65 text-[17px] leading-[1.75]">
                {/* I'm <strong className="text-[#0D1B2A] font-semibold">Rony Al Chammai</strong>, a software developer focused on */}
                We're a product-focused development studio building digital products that solve real business problems. We care deeply about clean
                architecture, thoughtful code, and delivering work that actually makes a difference.
              </p>
              <p className="text-[#0D1B2A]/65 text-[17px] leading-[1.75]">
                Whether you're a startup building from scratch or an established business looking to
                scale, we bring the technical expertise and the clarity of communication that turns your
                vision into a working product — on time and without surprises.
              </p>
            </motion.div>

            {/* Focus areas */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="text-[#0D1B2A]/40 text-[12px] tracking-[0.18em] uppercase mb-4 font-medium">
                Areas of Focus
              </p>
              <div className="flex flex-wrap gap-2.5">
                {focuses.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-[#0D1B2A]/6 border border-[#0D1B2A]/10 rounded-full text-[#0D1B2A]/70 text-[13px] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            // initial={{ opacity: 0, x: 24 }}
            // animate={isInView ? { opacity: 1, x: 0 } : {}}
            // transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative max-w-[460px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-[#C8A45B]/30 rounded-tr-2xl pointer-events-none" />
              
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <ImageWithFallback
                  src={image}
                  alt="Rony Al Chammai — Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div
                className="absolute z-10 -bottom-6 -left-6 bg-white rounded-2xl px-6 py-5 shadow-2xl shadow-black/10 border border-[#0D1B2A]/5"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div
                  className="text-[#0D1B2A] mb-1"
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "2rem",
                    lineHeight: 1,
                  }}
                >
                  5+
                </div>
                <div className="text-[#0D1B2A]/50 text-[12px] tracking-wide">Years of experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}