"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiUsers,
  FiBookOpen,
  FiGlobe,
  FiHeart,
  FiShield,
  FiSun,
} from "react-icons/fi";
import HeadingWithPaint from "./HeadingWithPaint";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const focusItems = [
    { text: "Human rights & indigenous rights", icon: FiShield },
    { text: "Livelihood development", icon: FiSun },
    { text: "Climate resilience", icon: FiGlobe },
    { text: "Primary & higher education", icon: FiBookOpen },
    { text: "Health & sanitation", icon: FiHeart },
    { text: "Youth & adolescent development", icon: FiUsers },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=533&fit=crop&q=80",
      alt: "Indigenous community members",
      className:
        "absolute top-0 left-0 w-[48%] aspect-[3/4] z-30 rotate-[-2deg]",
      rotate: -4,
      delay: 0.15,
    },
    {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=533&fit=crop&q=80",
      alt: "Children education",
      className:
        "absolute top-[5%] right-0 w-[52%] aspect-[3/4] z-40 rotate-[3deg]",
      rotate: 5,
      delay: 0.25,
    },
    {
      src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=533&fit=crop&q=80",
      alt: "Community farming",
      className:
        "absolute bottom-[10%] left-0 w-[52%] aspect-[3/4] z-50 rotate-[-4deg]",
      rotate: -6,
      delay: 0.35,
    },
    {
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=533&fit=crop&q=80",
      alt: "Volunteer helping community",
      className:
        "absolute bottom-0 right-[2%] w-[46%] aspect-[3/4] z-20 rotate-[2deg]",
      rotate: 3,
      delay: 0.45,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-[120px] lg:py-[150px] bg-paper relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/30 to-transparent pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-2 sm:px-5 md:px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT MEDIA - Clean Scrapbook Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-[550px] aspect-[3/4] m-auto"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotate: img.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: img.rotate / 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: img.delay }}
                className={`${img.className} rounded-xl bg-white p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] group  transition-all duration-300 ease-out`}
              >
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="300px"
                  />
                </div>
              </motion.div>
            ))}

            {/* CENTER BADGE - 21+ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32%] aspect-square rounded-full bg-amber-500 flex items-center justify-center z-[70] shadow-[0_20px_60px_-12px_rgba(232,163,23,0.7)]"
            >
              <div className="text-center text-teal-950 px-5">
                <div className="font-display text-3xl lg:text-4xl font-bold leading-none">
                  21+
                </div>
                <div className="text-[9px] lg:text-[12px] font-semibold mt-1.5 leading-tight max-w-[100px]">
                  Years serving indigenous communities
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                About the organization
              </span>
            </motion.div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <HeadingWithPaint text="Building trust beyond reach" />
            </motion.div>

            {/* Paragraphs */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-ink-soft leading-[1.8] text-base mb-5"
            >
              Kothowain — the Vulnerable People&apos;s Development Organization
              — was established in 2003 in response to extreme poverty, low
              literacy, and the erosion of cultural identity among indigenous
              peoples in the Chittagong Hill Tracts of Bangladesh.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-ink-soft leading-[1.8] text-base mb-8"
            >
              What began as a small, locally-led response to hardship has grown
              into a coordinated effort across health, education, livelihoods
              and rights — always led by the people it serves.
            </motion.p>
            {/* Focus Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-display text-xl font-semibold mb-5 text-teal-950"
            >
              Where we focus
            </motion.div>
            {/* Focus List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {focusItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  className="group flex items-center gap-3 text-[14px] text-ink font-medium py-2.5 px-3.5 rounded-xl border border-transparent hover:border-amber-500/30 hover:bg-amber-50/50 transition-all duration-300"
                >
                  <span className="w-7 h-7 rounded-lg bg-teal-950/5 group-hover:bg-teal-950 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <item.icon className="w-3.5 h-3.5 text-teal-700 group-hover:text-amber-400 transition-colors duration-300" />
                  </span>
                  {item.text}
                </motion.div>
              ))}
            </div>
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link
                href="#"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm hover:text-amber-500 border-2 border-teal-950 text-teal-950 transition-all duration-300 hover:bg-teal-950  hover:-translate-y-0.5 active:scale-95"
              >
                Read our full story
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
