// components/Counter.tsx
"use client";

import { useState, useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  suffixClassName?: string;
  prefixClassName?: string;
  startOnView?: boolean;
  decimals?: number;
}

const Counter: React.FC<CounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
  suffixClassName = "text-amber-500",
  prefixClassName = "text-amber-500",
  startOnView = true,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startOnView) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing function - easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = eased * value;
      
      if (decimals > 0) {
        setCount(Number(currentValue.toFixed(decimals)));
      } else {
        setCount(Math.floor(currentValue));
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [started, value, duration, decimals]);

  const formatNumber = (num: number): string => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return num.toLocaleString("en-US");
  };

  return (
    <span ref={counterRef} className={className}>
      {prefix && <span className={prefixClassName}>{prefix}</span>}
      {formatNumber(count)}
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
};

export default Counter;