// components/SplitSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiArrowRight } from "react-icons/fi";

interface ButtonProps {
  text: string;
  href: string;
  icon?: IconType;
  variant?: "primary" | "outline";
}

interface SplitSectionProps {
  image: string;
  imageAlt: string;
  imagePosition?: "right" | "left";
  badgeIcon?: IconType;
  badgeText: string;
  title: string;
  highlightText?: string;
  highlightAfter?: string;
  highlightClassName?: string;
  description: string;
  buttons?: ButtonProps[];
  minHeight?: string;
  imageMinHeight?: string;
  backgroundColor?: string;
  textColor?: string;
  descriptionColor?: string;
  className?: string;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  image,
  imageAlt,
  imagePosition = "right",
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  highlightText,
  highlightAfter,
  highlightClassName = "text-amber-500 italic font-normal",
  description,
  buttons = [],
  minHeight = "480px",
  imageMinHeight = "280px",
  backgroundColor = "bg-teal-950",
  textColor = "text-cream-50",
  descriptionColor = "text-cream-50/70",
  className = "",
}) => {
  const isImageRight = imagePosition === "right";

  const buttonStyles = {
    primary:
      "group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-cream-50 hover:-translate-y-0.5 active:scale-95",
    outline:
      "group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-cream-50/30 text-cream-50 font-semibold text-sm transition-all duration-300 hover:border-cream-50 hover:bg-cream-50 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95",
  };

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight }}
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: isImageRight ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative overflow-hidden ${
            isImageRight ? "order-1 lg:order-2" : "order-1"
          }`}
          style={{ minHeight: imageMinHeight }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            unoptimized
          />
          <div
            className={`absolute inset-0 ${
              isImageRight
                ? "bg-gradient-to-l from-teal-950/40 to-transparent lg:from-transparent lg:to-teal-950/60"
                : "bg-gradient-to-r from-teal-950/40 to-transparent lg:from-teal-950/60 lg:to-transparent"
            }`}
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: isImageRight ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${backgroundColor} p-5 md:p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden ${
            isImageRight ? "order-2 lg:order-1" : "order-2"
          }`}
        >
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-amber-500/10" />

          {BadgeIcon && (
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-amber-500 font-bold mb-5 inline-flex items-center gap-2">
              <BadgeIcon className="w-4 h-4" /> {badgeText}
            </span>
          )}

          <h2
            className={`font-display font-semibold text-4xl lg:text-5xl ${textColor} leading-[1.05] tracking-tight mb-4`}
          >
            {title}{" "}
            {highlightText && (
              <span className={highlightClassName}>{highlightText}</span>
            )}
            {highlightAfter && ` ${highlightAfter}`}
          </h2>

          <p
            className={`${descriptionColor} text-lg max-w-[420px] leading-relaxed mb-8`}
          >
            {description}
          </p>

          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {buttons.map((button, index) => {
                const ButtonIcon = button.icon;
                return (
                  <Link
                    key={index}
                    href={button.href}
                    className={
                      buttonStyles[button.variant || "primary"]
                    }
                  >
                    {button.text}
                    {ButtonIcon && (
                      <ButtonIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SplitSection;