"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiHeart, FiMail, FiPhone, FiUser } from "react-icons/fi";
import HeadingWithPaint from "./HeadingWithPaint";

const Volunteer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      className="py-[120px] lg:py-[150px] bg-paper relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-amber-500/5 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-28 h-28 rounded-full bg-teal-950/5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&q=80"
                alt="Volunteer helping community"
                fill
                className="object-cover"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-amber-500 text-teal-950 p-6 rounded-2xl shadow-[0_16px_40px_-12px_rgba(232,163,23,0.6)] max-w-[200px]"
            >
              <div className="font-display text-4xl font-bold leading-none">
                500+
              </div>
              <div className="text-xs font-semibold mt-2 leading-tight">
                Active volunteers making change
              </div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-950 flex items-center justify-center">
                <FiHeart className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="font-bold text-teal-950 text-sm">
                  Make an impact
                </div>
                <div className="text-xs text-ink-soft">Join our mission</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Join the movement
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <HeadingWithPaint
                text="Become a volunteer change lives"
                className="text-left"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-ink-soft text-base leading-[1.7] mb-8 max-w-[440px]"
            >
              Your time and skills can transform communities. Join hundreds of
              volunteers working across the Chittagong Hill Tracts.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft/50" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    className="w-full bg-white border-[1.5px] border-teal-950/10 text-ink py-4 pl-11 pr-4 rounded-xl text-sm transition-all duration-300 placeholder:text-ink-soft/50 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft/50" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full bg-white border-[1.5px] border-teal-950/10 text-ink py-4 pl-11 pr-4 rounded-xl text-sm transition-all duration-300 placeholder:text-ink-soft/50 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft/50" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full bg-white border-[1.5px] border-teal-950/10 text-ink py-4 pl-11 pr-4 rounded-xl text-sm transition-all duration-300 placeholder:text-ink-soft/50 focus:outline-none focus:border-amber-500"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us why you want to join..."
                rows={3}
                className="bg-white border-[1.5px] border-teal-950/10 text-ink py-4 px-4 rounded-xl text-sm transition-all duration-300 placeholder:text-ink-soft/50 focus:outline-none focus:border-amber-500 resize-none"
              />

              <button
                type="submit"
                className="group relative mt-2 py-4 rounded-xl bg-amber-500 text-teal-950 font-bold text-[15px] overflow-hidden transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:-translate-y-0.5 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  Sign Up as Volunteer
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-ink-soft/60 text-[12.5px] mt-4"
            >
              We respect your privacy. Your info stays with us.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
