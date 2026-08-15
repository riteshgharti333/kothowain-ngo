"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiUsers,
  FiAward,
  FiFolder,
  FiStar,
  FiTarget,
  FiEye,
} from "react-icons/fi";
import HeadingWithPaint from "./HeadingWithPaint";

const Vision = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const stats = [
    { value: 500, label: "Team members", icon: FiUsers, suffix: "+" },
    { value: 70, label: "Awards won", icon: FiAward, suffix: "+" },
    { value: 3000, label: "Total projects", icon: FiFolder, suffix: "+" },
    { value: 7000, label: "Client reviews", icon: FiStar, suffix: "+" },
  ];

  const Counter = ({
    value,
    suffix,
    start,
    suffixColor,
  }: {
    value: number;
    suffix: string;
    start: boolean;
    suffixColor?: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(eased * value));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(value);
      };

      requestAnimationFrame(animate);
    }, [start, value]);

    return (
      <span>
        {count.toLocaleString()}
        <span className={suffixColor || "text-teal-950"}>{suffix}</span>
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-[100px] lg:py-[120px] bg-cream-100 relative overflow-hidden"
    >
      {/* Decorative circle */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border-[40px] border-amber-500/5 pointer-events-none" />
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-amber-500/5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Stats Grid */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`group relative rounded-3xl p-7 lg:p-8 transition-all duration-300 overflow-hidden ${
                  index % 2 === 0
                    ? "bg-amber-500 text-teal-950 hover:shadow-[0_20px_50px_-12px_rgba(232,163,23,0.4)]"
                    : "bg-teal-950 text-cream-50 hover:shadow-[0_20px_50px_-12px_rgba(10,58,46,0.4)]"
                } hover:-translate-y-1`}
              >
                {/* Organic blob shapes - Perfectly round */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${
                    index % 2 === 0 ? "bg-teal-950/5" : "bg-cream-50/5"
                  } group-hover:scale-150 transition-transform duration-700`}
                />
                <div
                  className={`absolute -bottom-12 -left-8 w-28 h-28 rounded-full ${
                    index % 2 === 0 ? "bg-teal-950/10" : "bg-cream-50/8"
                  } group-hover:scale-125 group-hover:-translate-x-2 transition-all duration-700`}
                />
                <div
                  className={`absolute top-1/2 -right-6 w-12 h-12 rounded-full ${
                    index % 2 === 0 ? "bg-teal-950/5" : "bg-amber-500/10"
                  } group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500`}
                />

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div
                  className={`relative w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    index % 2 === 0 ? "bg-teal-950/10" : "bg-cream-50/10"
                  }`}
                >
                  <stat.icon
                    className={`w-5 h-5 ${
                      index % 2 === 0 ? "text-teal-950" : "text-amber-400"
                    }`}
                  />
                </div>

                {/* Value */}
                <div className="relative font-display text-3xl lg:text-4xl font-bold leading-none">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    start={isStatsInView}
                    suffixColor={
                      index % 2 === 0 ? "text-teal-950" : "text-amber-400"
                    }
                  />
                </div>

                {/* Label */}
                <div
                  className={`relative mt-2 text-[13px] font-semibold ${
                    index % 2 === 0 ? "text-teal-950/80" : "text-cream-50/70"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Vision, mission & values
              </span>
            </motion.div>

            {/* Heading with paint */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <HeadingWithPaint
                text="Development that starts dignity, not dependency"
                className="text-left"
              />
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-white rounded-2xl p-6 mb-4 border border-teal-950/5 hover:border-amber-500/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-950 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-300">
                  <FiEye className="w-4 h-4 text-amber-400 group-hover:text-teal-950 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-teal-950 mb-1.5">
                    Vision
                  </h3>
                  <p className="text-ink-soft leading-[1.7] text-[15px]">
                    Socio-economic development, promotion and empowerment among
                    marginalized people in Bangladesh.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-white rounded-2xl p-6 mb-8 border border-teal-950/5 hover:border-amber-500/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-950 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-300">
                  <FiTarget className="w-4 h-4 text-amber-400 group-hover:text-teal-950 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-teal-950 mb-1.5">
                    Mission
                  </h3>
                  <p className="text-ink-soft leading-[1.7] text-[15px]">
                    To bring sustainable, positive change by reducing poverty
                    among marginalized people — especially women and children —
                    through participatory, rights-based programs in the
                    Chittagong Hill Tracts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm bg-amber-500 text-teal-950 transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:-translate-y-0.5 active:scale-95"
              >
                Learn More
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-teal-950/20 text-teal-950 transition-all duration-300 hover:border-teal-950 hover:bg-teal-950 hover:text-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                Join Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
