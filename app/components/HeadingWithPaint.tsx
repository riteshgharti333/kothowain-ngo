// components/HeadingWithPaint.tsx
"use client";

import Image from "next/image";

interface HeadingWithPaintProps {
  text: string;
  className?: string;
}

const HeadingWithPaint = ({ text, className = "" }: HeadingWithPaintProps) => {
  // Split text into words
  const words = text.split(" ");

  // Calculate midpoint (rounded up for first line)
  const midPoint = Math.ceil(words.length / 2);

  // Split into two lines
  const line1 = words.slice(0, midPoint).join(" ");
  const line2 = words.slice(midPoint).join(" ");

  return (
    <div className={`relative inline-block ${className} mb-5`}>
      {/* Paint splash background */}
      <Image
        src="/paint.png"
        alt=""
        width={600}
        height={200}
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] object-cover pointer-events-none opacity-70 rotate-[-3deg]"
      />
      {/* Text - always 2 lines */}
      <h2 className="relative z-10 font-display font-semibold text-4xl lg:text-5xl text-teal-950 leading-[1.1] tracking-tight">
        <span className="block">{line1}</span>
        <span className="block">{line2}</span>
      </h2>
    </div>
  );
};

export default HeadingWithPaint;
