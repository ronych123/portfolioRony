import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, Send, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.12 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_3ym8o5e",
        "template_x7c1gnl",
        {
          from_name: formData.name,
          from_email: formData.email,
          budget: formData.budget,
          message: formData.message,
          to_email: "roni_chammai@hotmail.com",
        },
        "iCMASybbMMpiiEdua"
      );

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        budget: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (error) {
      toast.error("Failed to send message");
    }

    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-[#0a1520] relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(200,164,91,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          {/* Left — info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#C8A45B] text-[13px] tracking-[0.2em] uppercase font-medium mb-6"
            >
              Contact
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
              Ready to build
              <br />
              something great?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/45 text-[16px] leading-relaxed mb-12"
            >
              Whether you have a fully defined project or just an idea you're thinking through — reach
              out. We'll give you an honest assessment of what's possible and what it would take.
            </motion.p>

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-12"
            >
              <a
                href="mailto:roni_chammai@hotmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/15 hover:border-[#C8A45B]/30 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#C8A45B]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#C8A45B]" />
                </div>
                <div>
                  <div className="text-white/40 text-[11px] tracking-wide uppercase mb-0.5">Email</div>
                  <div className="text-white/75 text-[14px] group-hover:text-white transition-colors">
                    roni_chammai@hotmail.com
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C8A45B] ml-auto transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/ronyalchammai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/15 hover:border-[#C8A45B]/30 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#C8A45B]/10 flex items-center justify-center flex-shrink-0">
                  {/* <Linkedin className="w-4 h-4 text-[#C8A45B]" /> */}
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 text-[#C8A45B]" />
                </div>
                <div>
                  <div className="text-white/40 text-[11px] tracking-wide uppercase mb-0.5">LinkedIn</div>
                  <div className="text-white/75 text-[14px] group-hover:text-white transition-colors">
                    linkedin.com/in/ronyalchammai
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#C8A45B] ml-auto transition-colors" />
              </a>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot flex-shrink-0" />
              <span className="text-emerald-400/80 text-[13px]">
                Available for new projects — responding within 24 hours
              </span>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 lg:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C8A45B]/15 flex items-center justify-center mb-6">
                    <Send className="w-7 h-7 text-[#C8A45B]" />
                  </div>
                  <h3
                    className="text-white text-[24px] mb-3"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    Message received.
                  </h3>
                  <p className="text-white/45 text-[15px]">
                    I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="text-white text-[22px] mb-2"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    Start a Conversation
                  </h3>
                  <p className="text-white/40 text-[14px] mb-8">
                    Tell me about your project — even a rough idea is a great starting point.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/45 text-[12px] tracking-wide uppercase mb-2.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Alex Johnson"
                          className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-[#C8A45B]/50 focus:bg-white/[0.08] transition-all duration-200 text-[14px]"
                        />
                      </div>
                      <div>
                        <label className="block text-white/45 text-[12px] tracking-wide uppercase mb-2.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-[#C8A45B]/50 focus:bg-white/[0.08] transition-all duration-200 text-[14px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/45 text-[12px] tracking-wide uppercase mb-2.5">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/10 rounded-xl text-white focus:border-[#C8A45B]/50 focus:bg-white/[0.08] transition-all duration-200 text-[14px]"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" className="bg-[#0D1B2A]">Select a range...</option>
                        <option value="1-1k" className="bg-[#0D1B2A]">$100 - $1,000</option>
                        <option value="1k-5k" className="bg-[#0D1B2A]">$1,000 – $5,000</option>
                        <option value="5k-15k" className="bg-[#0D1B2A]">$5,000 – $15,000</option>
                        <option value="15k-30k" className="bg-[#0D1B2A]">$15,000 – $30,000</option>
                        <option value="30k-plus" className="bg-[#0D1B2A]">$30,000+</option>
                        <option value="ongoing" className="bg-[#0D1B2A]">Ongoing / Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/45 text-[12px] tracking-wide uppercase mb-2.5">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project — what you're building, your timeline, and what you need help with..."
                        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-[#C8A45B]/50 focus:bg-white/[0.08] transition-all duration-200 resize-none text-[14px]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group w-full flex items-center justify-center gap-2.5 py-4 bg-[#C8A45B] text-[#0D1B2A] text-[15px] font-semibold rounded-xl hover:bg-[#d4b070] transition-all duration-300 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-white/25 text-[12px] text-center">
                      No spam, ever. Your details are kept private.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}