// components/Navbar.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const isAnimating = useRef(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 50) {
      setVisible(true);
      setScrolled(false);
      lastScrollY.current = currentScrollY;
      return;
    }

    setScrolled(true);

    const scrollDifference = currentScrollY - lastScrollY.current;

    if (Math.abs(scrollDifference) < 40) {
      lastScrollY.current = currentScrollY;
      return;
    }

    if (!isAnimating.current) {
      if (scrollDifference > 0 && currentScrollY > 100) {
        setVisible(false);
        setDropdownOpen(null);
      } else {
        setVisible(true);
      }
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    let ticking = false;

    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [handleScroll]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 250);
  };

  const navLinks = [
    { label: "Home", href: "/" },

    { label: "About Us", href: "/about" },

    {
      label: "Our Work",
      href: "/our-work",
      dropdown: [
        { label: "Education", href: "/our-work/education" },
        { label: "Food Support", href: "/our-work/food" },
        { label: "Clean Water", href: "/our-work/water" },
        { label: "Medical Support", href: "/our-work/medical-support" },
      ],
    },

    { label: "Our Impact", href: "/our-impact" },

    { label: "Stories", href: "/stories" },

    {
      label: "Get Involved",
      href: "#",
      dropdown: [
        { label: "Volunteer", href: "/volunteer" },
        { label: "Team", href: "/team" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -120 }}
      onAnimationStart={() => {
        isAnimating.current = true;
      }}
      onAnimationComplete={() => {
        isAnimating.current = false;
      }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-1000 z-999 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] py-2"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-2 lg:px-10">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-13 sm:h-13 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Kothowain"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-3xl lg:text-4xl tracking-tight bg-gradient-to-r from-teal-950 via-teal-700 to-amber-500 bg-clip-text text-transparent">
              Kothowain
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {link.dropdown ? (
                  <button
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === link.label ? null : link.label,
                      )
                    }
                    className={`group relative px-3.5 py-2 rounded-lg text-[14px] font-medium transition-colors duration-300 ${
                      scrolled
                        ? "text-ink-soft hover:text-amber-500"
                        : "text-ink-soft hover:text-amber-500"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {link.label}
                      <motion.span
                        animate={{
                          rotate: dropdownOpen === link.label ? 180 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <FiChevronDown className="w-3.5 h-3.5" />
                      </motion.span>
                    </span>

                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-500 rounded-full group-hover:w-3/4 transition-all duration-300 ease-out" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`group relative px-3.5 py-2 rounded-lg text-[14px] font-medium transition-colors duration-300 ${
                      scrolled
                        ? "text-ink-soft hover:text-amber-500"
                        : "text-ink-soft hover:text-amber-500"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-500 rounded-full group-hover:w-3/4 transition-all duration-300 ease-out" />
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && dropdownOpen === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] border border-gray-100 py-2 overflow-hidden"
                      onMouseEnter={() => {
                        if (dropdownTimeout.current)
                          clearTimeout(dropdownTimeout.current);
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.dropdown.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.2 }}
                        >
                          <Link
                            href={item.href}
                            className="group relative block px-5 py-2.5 text-[14px] text-ink-soft transition-colors duration-200"
                          >
                            <span className="relative z-10 group-hover:text-amber-500 transition-colors duration-200">
                              {item.label}
                            </span>
                            <span className="absolute inset-0 bg-amber-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-amber-500 text-teal-950 transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 hover:shadow-[0_8px_24px_-8px_rgba(232,163,23,0.4)] hover:-translate-y-0.5 active:scale-95"
            >
              Donate Now
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative flex items-center justify-center rounded-lg text-ink-soft hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:hidden mt-4 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setDropdownOpen(
                              dropdownOpen === link.label ? null : link.label,
                            )
                          }
                          className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-medium text-ink-soft hover:text-amber-500 rounded-lg hover:bg-amber-50 transition-colors"
                        >
                          {link.label}
                          <motion.span
                            animate={{
                              rotate: dropdownOpen === link.label ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <FiChevronDown className="w-4 h-4" />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {dropdownOpen === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="ml-4 border-l-2 border-amber-200 pl-3 overflow-hidden"
                            >
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block px-3 py-2.5 text-[14px] text-ink-soft hover:text-amber-500 rounded-lg hover:bg-amber-50 transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-3 py-3 text-[15px] font-medium text-ink-soft hover:text-amber-500 rounded-lg hover:bg-amber-50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/donate"
                  className="mt-3 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm bg-amber-500 text-teal-950 transition-all duration-300 hover:bg-teal-950 hover:text-amber-400 active:scale-95"
                >
                  Donate Now
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
export default Navbar;
