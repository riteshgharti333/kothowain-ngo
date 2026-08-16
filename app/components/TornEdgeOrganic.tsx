// components/TornEdgeOrganic.tsx
"use client";

import React from "react";

interface TornEdgeOrganicProps {
  color?: string;
  flip?: "top" | "bottom";
  height?: number;
  seed?: number;
  className?: string;
}

export default function TornEdgeOrganic({
  color = "#fffdf8",
  flip = "bottom",
  height = 120,
  seed = 7,
  className = "",
}: TornEdgeOrganicProps) {
  const uid = React.useId().replace(/:/g, "");

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${
        flip === "top" ? "top-0" : "bottom-0"
      } ${className}`}
      style={{
        height,
        transform: flip === "top" ? "scaleY(-1)" : undefined,
        lineHeight: 0,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id={`torn-organic-${uid}`}
            x="-10%"
            y="-60%"
            width="120%"
            height="220%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.09"
              numOctaves={3}
              seed={seed}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="34"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <rect
          x={-40}
          y={70}
          width={1520}
          height={94}
          fill={color}
          filter={`url(#torn-organic-${uid})`}
        />
      </svg>
    </div>
  );
}
