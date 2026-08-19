"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import TornEdgeOrganic from "./TornEdgeOrganic";

interface PageBannerProps {
  image: string;
  breadcrumb: string;
  headingLine1: string;
  headingHighlight: string;
  headingLine2: string;
  headingAfter?: string;
  description: string;
  seed?: number;
}

const PageBanner = ({
  image,
  breadcrumb,
  headingLine1,
  headingHighlight,
  headingLine2,
  headingAfter,
  description,
  seed = 100,
}: PageBannerProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-cream-50 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={breadcrumb}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* White shade - left side (very strong on mobile) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[75%] bg-gradient-to-r from-cream-50 via-cream-50 via-50% lg:via-cream-50/90 to-transparent [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)]" />

      {/* Top fade (very strong on mobile) */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-cream-50 via-cream-50 lg:via-cream-50/95 via-20% to-transparent" />

      {/* Torn paper divider */}
      <TornEdgeOrganic
        color="#fffdf8"
        height={100}
        seed={seed}
        className="z-20"
      />

      <div className="max-w-[1280px] mx-auto container-px relative z-10 pt-32 pb-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-teal-950/10 rounded-full px-5 py-2.5 text-sm mb-8">
            <Link
              href="/"
              className="text-ink-soft hover:text-amber-500 transition-colors flex items-center gap-2"
            >
              <FiHome className="w-3.5 h-3.5" />
              Home
            </Link>
            <span className="text-ink-soft/30">/</span>
            <span className="text-amber-500 font-semibold">{breadcrumb}</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-6xl xl:text-7xl text-teal-950 leading-[0.95] tracking-tight mb-8">
            {headingLine1}{" "}
            <span className="relative inline-block pb-2">
              <span className="text-amber-500 italic font-normal">
                {headingHighlight}
              </span>
            </span>
            <br />
            {headingLine2}{" "}
            {headingAfter && (
              <span className="text-teal-950">{headingAfter}</span>
            )}
          </h1>

          {/* Description */}
          <p className="text-ink-soft text-lg max-w-[520px] leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
