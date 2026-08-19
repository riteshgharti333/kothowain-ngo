"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import Counter from "./Counter";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
      alt: "Children education in rural area",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=800&fit=crop",
      alt: "Community farming initiative",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=800&fit=crop",
      alt: "Healthcare support for families",
    },
    {
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=800&fit=crop",
      alt: "Volunteer helping community",
    },
  ];

  const stats = [
    { value: 3000, label: "Projects delivered", suffix: "+" },
    { value: 7000, label: "Families reached", suffix: "+" },
    { value: 500, label: "Volunteers & staff", suffix: "+" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center bg-cream-50 overflow-hidden">
      {/* Right side - Full height image */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[50%] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[activeSlide].image}
              alt={slides[activeSlide].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Left fade - blends into cream (Desktop only) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-cream-50 via-cream-50/60 via-10% to-transparent via-20%" />

        {/* Mobile overlay - medium intensity */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-cream-50/80 via-cream-50/65 to-cream-50/80" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream-50/80 to-transparent" />

        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-cream-50/80 to-transparent" />
      </div>

      {/* Left Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-2 sm:px-5 md:px-6 lg:px-10 lg:pb-15 lg:pt-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen">
          <div className="py-32 lg:py-0">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-display font-bold text-6xl sm:text-7xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-teal-950 relative"
            >
              Together,
              <br />
              we can end
              <br />
              <span className="relative inline-block">
                <span className="text-amber-500 italic font-normal">
                  hunger
                </span>
                {/* Decorative underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C50 3 150 3 198 9"
                    stroke="#e8a317"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
              .
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-[460px] mt-6 mb-8 text-lg leading-relaxed text-ink-soft"
            >
              No one should go to bed hungry. We work alongside indigenous
              communities across the Hill Tracts to bring food security,
              education, and dignity within reach.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#donate"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm bg-amber-500 text-teal-950 transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-0.5 active:scale-95"
              >
                Donate Now
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#about"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-teal-950/20 text-teal-950 transition-all duration-300 hover:border-teal-950 hover:bg-teal-950 hover:text-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                <FiPlay className="w-4 h-4 transition-transform duration-300 group-hover:scale-125" />
                Our Story
              </Link>
            </motion.div>

            {/* Stats - Simple but Enhanced with Count Up */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-8 lg:gap-12 mt-14 pt-10 border-t border-teal-950/10"
            >
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  {/* Decorative top accent */}
                  <div className="absolute -top-[41px] left-0 w-0 h-[3px] bg-gradient-to-r from-amber-500 to-transparent rounded-full group-hover:w-full transition-all duration-500" />

                  {/* Value with amber suffix */}
                  <div className="font-display text-2xl lg:text-4xl font-bold text-teal-950">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="font-display text-2xl lg:text-4xl font-bold text-teal-950"
                      suffixClassName="text-amber-500"
                      startOnView={true}
                    />
                  </div>

                  {/* Label */}
                  <div className="text-xs lg:text-sm text-ink-soft font-medium mt-1.5 transition-colors duration-300 group-hover:text-teal-950">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - empty spacer */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
