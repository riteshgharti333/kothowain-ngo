"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import HeadingWithPaint from "./HeadingWithPaint";

const Causes = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // ... (same causes array as above) ...
  const causes = [
    {
      tag: "Food Security",
      title: "Healthy Food",
      description:
        "Nutrition packages and community kitchens for families facing seasonal food shortage.",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop&q=80",
      bgAccent: "bg-amber-500",
      raised: "$8,500",
      goal: "$10,000",
      fill: 85,
      delay: 0,
    },
    {
      tag: "Water Access",
      title: "Water Treatment",
      description:
        "Safe drinking-water access and sanitation training for remote hill villages.",
      image:
        "https://images.unsplash.com/photo-1541544181051-e46607bc22a4?w=600&h=400&fit=crop&q=80",
      bgAccent: "bg-teal-950",
      raised: "$9,500",
      goal: "$10,000",
      fill: 95,
      delay: 0.1,
    },
    {
      tag: "Education",
      title: "Education Support",
      description:
        "Scholarships, school supplies and teacher training for indigenous children.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop&q=80",
      bgAccent: "bg-amber-500",
      raised: "$7,500",
      goal: "$10,000",
      fill: 75,
      delay: 0.2,
    },
    {
      tag: "Healthcare",
      title: "Medical Support",
      description:
        "Essential medical care, medicines and health support for families in remote communities.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
      bgAccent: "bg-teal-950",
      raised: "$6,800",
      goal: "$10,000",
      fill: 68,
      delay: 0.3,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="causes"
      className="py-[120px] lg:py-[150px] bg-paper relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-amber-500/5 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-teal-950/5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-2 sm:px-5 md:px-6 lg:px-10 relative">
        {/* Header (Same as above) */}
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
              Active campaigns
            </span>
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <HeadingWithPaint
              text="Where your support goes to work"
              className="justify-center"
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto">
          {causes.map((cause, index) => {
            // Apply different rotations and vertical offsets
            const rotate =
              index === 0 ? "-2deg" : index === 1 ? "3deg" : "-1.5deg";
            const yOffset = index === 0 ? "0" : index === 1 ? "-30px" : "30px";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative w-full"
                style={{
                  transform: `rotate(${rotate}) translateY(${yOffset})`,
                }}
              >
                <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-[0_15px_40px_-12px_rgba(21,36,32,0.15)] group-hover:shadow-[0_30px_60px_-20px_rgba(21,36,32,0.3)] transition-all duration-500">
                  <Image
                    src={cause.image}
                    alt={cause.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Additional bottom shadow */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-teal-950/90 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/90 via-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span
                    className={`absolute top-4 right-4 ${cause.bgAccent} text-cream-50 text-[10px] font-bold py-1.5 px-3 rounded-full tracking-wider z-10`}
                  >
                    {cause.tag}
                  </span>
                  <div
                    className={`absolute top-4 left-4 w-9 h-9 rounded-full ${cause.bgAccent} flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10`}
                  >
                    <FiArrowUpRight className="w-4 h-4 text-cream-50" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 z-10">
                    <h3 className="font-display text-xl lg:text-2xl text-cream-50 mb-1.5 lg:mb-2 font-semibold leading-tight">
                      {cause.title}
                    </h3>
                    <p className="text-white text-[12px] lg:text-[13px] leading-[1.5] mb-3 lg:mb-4 line-clamp-2">
                      {cause.description}
                    </p>
                    <div className="mb-2.5 lg:mb-3">
                      <div className="flex justify-between text-[10px] lg:text-xs text-cream-50/80 mb-1 lg:mb-1.5 font-medium">
                        <span className="font-bold text-cream-50">
                          Raised: {cause.raised}
                        </span>
                        <span>Goal {cause.goal}</span>
                      </div>
                      <div className="h-1 lg:h-1.5 rounded-full bg-cream-50/20 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cause.fill}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: 0.5,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
                        />
                      </div>
                    </div>
                    <Link
                      href="#donate"
                      className="inline-flex items-center gap-2 py-2 lg:py-2.5 px-4 lg:px-5 rounded-full bg-cream-50 text-teal-950 font-semibold text-xs lg:text-sm transition-all duration-300 hover:bg-teal-950 hover:text-cream-50 active:scale-95"
                    >
                      Donate Now{" "}
                      <FiArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes;
