// app/our-work/food/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiDroplet,
  FiSun,
  FiUsers,
  FiPackage,
  FiHome,
  FiShoppingBag,
  FiStar,
  FiMail,
  FiCheckCircle,
  FiGift,
} from "react-icons/fi";
import HeadingWithPaint from "../../components/HeadingWithPaint";
import PageBanner from "../../components/PageBanner";
import { useState } from "react";

const FoodPage = () => {
  /* ---------------------------------------------------------------- */
  /* Content                                                           */
  /* ---------------------------------------------------------------- */

  const menu = [
    {
      icon: FiHome,
      tag: "Weekly",
      title: "Community Kitchens",
      desc: "Shared cooking spaces where families combine ingredients and cook together during lean months.",
      serves: "Serves 600+ families",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&q=80",
    },
    {
      icon: FiPackage,
      tag: "Monthly",
      title: "Nutrition Packages",
      desc: "Rice, lentils, oil and fortified staples delivered to households before the seasonal shortage hits hardest.",
      serves: "1,800 packages a month",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: FiUsers,
      tag: "Daily",
      title: "School Feeding",
      desc: "A hot midday meal at every learning center, so hunger is never the reason a child stops attending.",
      serves: "3,200 meals a day",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=450&fit=crop&q=80",
    },
    {
      icon: FiSun,
      tag: "Seasonal",
      title: "Kitchen Gardens",
      desc: "Home garden kits and seed banks that turn a small yard into a family's own year-round pantry.",
      serves: "900 gardens planted",
      image:
        "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&h=450&fit=crop&q=80",
    },
  ];

  const tiffinTiers = [
    {
      tier: "1",
      title: "Source",
      desc: "Local farms and grain stores across the Hill Districts.",
      icon: FiSun,
      side: "left",
    },
    {
      tier: "2",
      title: "Kitchen",
      desc: "Community kitchens cook and portion each week's supply.",
      icon: FiHome,
      side: "right",
    },
    {
      tier: "3",
      title: "Center",
      desc: "Learning centers and clinics distribute to families on-site.",
      icon: FiUsers,
      side: "left",
    },
    {
      tier: "4",
      title: "Table",
      desc: "A hot meal reaches the family table before it goes cold.",
      icon: FiHeart,
      side: "right",
    },
  ];

  const plateStats = [
    {
      label: "Meals Served",
      value: "1.1M+",
      color: "bg-amber-500",
      icon: FiPackage,
    },
    {
      label: "Water Access",
      value: "94%",
      color: "bg-teal-700",
      icon: FiDroplet,
    },
    {
      label: "Malnutrition Drop",
      value: "31%",
      color: "bg-amber-400",
      icon: FiHeart,
    },
    {
      label: "Kitchens Running",
      value: "38",
      color: "bg-teal-950",
      icon: FiHome,
    },
  ];

  const seasons = [
    {
      month: "Boishakh",
      season: "Spring Harvest",
      desc: "Early vegetables and seed distribution begin.",
      image:
        "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=400&h=500&fit=crop&q=80",
    },
    {
      month: "Ashar",
      season: "Monsoon Planting",
      desc: "Rice paddies planted; kitchen gardens expand.",
      image:
        "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400&h=500&fit=crop&q=80",
    },
    {
      month: "Ashwin",
      season: "Lean Season",
      desc: "Nutrition packages scale up before the harvest gap.",
      image:
        "https://images.unsplash.com/photo-1626200926749-1b25d3f97fa6?w=400&h=500&fit=crop&q=80",
    },
    {
      month: "Poush",
      season: "Winter Harvest",
      desc: "Main rice harvest; community kitchens run full.",
      image:
        "https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?w=400&h=500&fit=crop&q=80",
    },
  ];

  const marketStalls = [
    { name: "World Food Programme", note: "Emergency food response" },
    { name: "FAO Bangladesh", note: "Agricultural resilience" },
    { name: "Manusher Jonno Foundation", note: "Community kitchens" },
    { name: "Helen Keller Intl.", note: "Nutrition training" },
    { name: "CARITAS Bangladesh", note: "Seasonal relief" },
    { name: "United Purpose", note: "Kitchen gardens" },
  ];

  const [activeTier, setActiveTier] = useState(0);

  return (
    <main className="">
      {/* ============================================================ */}
      {/* 1. HERO                                                        */}
      {/* ============================================================ */}
      <PageBanner
        image="https://images.unsplash.com/photo-1694286068611-d0c24cbc2cd5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVlZGluZyUyMHRoZSUyMHBvb3J8ZW58MHx8MHx8fDA%3D"
        breadcrumb="Food & Nutrition"
        headingLine1="No Family"
        headingHighlight="Goes Hungry."
        headingLine2="No Harvest"
        headingAfter="Wasted."
        description="From kitchen gardens to community kitchens, Kothowain builds a food system that runs on what the Hill Tracts already grow — shared, stored, and served before the lean season bites."
        seed={300}
      />

      {/* ============================================================ */}
      {/* 2. FROM HARVEST TO HOME — bento image mosaic                  */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                  From harvest to home
                </span>
              </div>
              <HeadingWithPaint
                text="A pantry that never sits empty"
                className="text-left mb-6"
              />
              <p className="text-ink-soft leading-[1.85] text-base mb-4">
                In the Chittagong Hill Tracts, the gap between one harvest and
                the next is when families go without. Kothowain works the whole
                chain — seed, soil, storage, and stove — so that gap closes a
                little more each year.
              </p>
              <p className="text-ink-soft leading-[1.85] text-base mb-8">
                Kitchen gardens grow the everyday vegetables. Community kitchens
                turn shared grain into shared meals. And when the season runs
                short, nutrition packages carry families through.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Kitchen Gardens",
                  "Community Kitchens",
                  "Nutrition Packages",
                  "School Feeding",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold text-teal-950 bg-white border border-teal-950/10 px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento image mosaic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-3 grid-rows-2 gap-3 h-[420px] lg:h-[460px]"
            >
              <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=700&h=800&fit=crop&q=80"
                  alt="Kitchen garden harvest"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 to-transparent" />
                <span className="absolute bottom-3 left-4 text-cream-50 text-xs font-bold">
                  Kitchen Garden, Bandarban
                </span>
              </div>
              <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=400&h=400&fit=crop&q=80"
                  alt="Fresh vegetables"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>
              <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop&q=80"
                  alt="Children eating a meal"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ON THE MENU — program menu cards                            */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                On the menu
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="What we put on the table"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menu.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-[1.75rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[300px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/50 to-transparent" />

                <span className="absolute top-5 left-5 bg-amber-500 text-teal-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {item.tag}
                </span>
                <span className="absolute top-5 right-5 w-11 h-11 rounded-full bg-cream-50/15 backdrop-blur-sm flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-cream-50" />
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                  <h3 className="font-display text-xl lg:text-2xl text-cream-50 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream-50/75 text-sm leading-relaxed mb-3 max-w-[380px]">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                    <FiStar className="w-3.5 h-3.5" /> {item.serves}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE TIFFIN ROUTE — signature stacked-tier motif */}
      <section className="py-[90px] lg:py-[130px] bg-teal-950 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="max-w-[820px] mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                How a meal travels
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream-50">
              The Tiffin Route
            </h2>
            <p className="text-cream-50/60 text-sm mt-3 max-w-[380px] mx-auto">
              Four tiers, carried like a tiffin, from field to family.
            </p>
          </div>

          <div className="relative">
            {/* Carrying handle */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[220px] h-[70px] hidden sm:block"
              viewBox="0 0 220 70"
              fill="none"
            >
              <motion.path
                d="M10,70 C10,10 210,10 210,70"
                stroke="#e8a317"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </svg>

            <div className="pt-16 sm:pt-20 space-y-4">
              {tiffinTiers.map((tier, index) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveTier(index)}
                  onMouseLeave={() => setActiveTier(0)} // Reset to first tier or keep last hovered
                  className={`w-full flex items-center gap-5 rounded-full pl-3 pr-6 py-3 transition-all duration-300 text-left cursor-pointer ${
                    activeTier === index
                      ? "bg-cream-50 shadow-xl scale-[1.02]"
                      : "bg-cream-50/10 hover:bg-cream-50/15"
                  }`}
                >
                  <span
                    className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-lg transition-colors duration-300 ${
                      activeTier === index
                        ? "bg-amber-500 text-teal-950"
                        : "bg-teal-900 text-amber-400"
                    }`}
                  >
                    <tier.icon className="w-5 h-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span
                      className={`block font-mono text-[10px] tracking-widest font-bold ${
                        activeTier === index
                          ? "text-amber-600"
                          : "text-amber-400/70"
                      }`}
                    >
                      TIFFIN {tier.tier}
                    </span>
                    <span
                      className={`block font-display text-lg font-semibold ${
                        activeTier === index ? "text-teal-950" : "text-cream-50"
                      }`}
                    >
                      {tier.title}
                    </span>
                    <span
                      className={`block text-sm mt-0.5 ${
                        activeTier === index
                          ? "text-ink-soft"
                          : "text-cream-50/50"
                      }`}
                    >
                      {tier.desc}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. THE FULL PLATE — impact as a divided plate                  */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1280px] mx-auto px-2 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Plate visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[440px] aspect-square mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_25px_60px_-20px_rgba(21,36,32,0.3)] border-[10px] border-cream-50" />
              <div className="absolute inset-[10px] rounded-full overflow-hidden grid grid-cols-2 grid-rows-2 gap-[3px]">
                {plateStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className={`relative flex flex-col items-center justify-center text-center p-4 ${stat.color} ${
                      index === 2 || index === 3 ? "flex-col-reverse" : ""
                    }`}
                  >
                    <stat.icon className="w-5 h-5 text-cream-50/80 mb-1.5" />
                    <span className="font-display text-xl lg:text-2xl font-bold text-cream-50">
                      {stat.value}
                    </span>
                    <span className="text-cream-50/70 text-[10px] uppercase tracking-wide font-semibold mt-0.5">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-[38%] rounded-full bg-cream-50 shadow-inner flex items-center justify-center">
                <FiHeart className="w-7 h-7 text-amber-500" />
              </div>
            </motion.div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                  The full plate
                </span>
              </div>
              <HeadingWithPaint
                text="Impact, served in one sitting"
                className="text-left mb-6"
              />
              <p className="text-ink-soft leading-[1.85] text-base mb-4">
                Every wedge of this plate is a program working at once — meals
                served, clean water reaching kitchens, malnutrition falling, and
                community kitchens staying lit through the lean months.
              </p>
              <p className="text-ink-soft leading-[1.85] text-base">
                None of the four works alone. A meal without clean water isn't a
                full plate, and neither is one without a kitchen to cook it in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. RECIPE CARD — cook spotlight                                */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                From the kitchen
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Meet a community cook"
              className="justify-center"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] rounded-[1.75rem] overflow-hidden bg-white shadow-[0_25px_60px_-25px_rgba(21,36,32,0.25)]"
          >
            <div className="relative aspect-[4/5] lg:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1641536618779-b10c232ec2b2?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ushai Marma, community cook"
                fill
                className="object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent" />
            </div>

            <div className="p-8 lg:p-11">
              <span className="font-mono text-[10px] tracking-widest text-amber-500 font-bold uppercase">
                Recipe Card
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-teal-950 font-semibold mt-2 mb-1">
                Ushai Marma
              </h3>
              <p className="text-amber-500 text-sm font-bold mb-6">
                Kitchen Coordinator, Ruma Community Kitchen
              </p>

              <p className="text-ink-soft text-sm leading-relaxed mb-5">
                Ushai runs the stove for forty families twice a week, turning
                whatever the community pools together — rice, greens, dried fish
                — into a meal that stretches the furthest.
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 border-t border-b border-dashed border-teal-950/15 py-5">
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Serves
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    40 families / week
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Cooking since
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    2016
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Specialty
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    Stretch-rice stews
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wide text-ink-soft font-bold mb-1">
                    Trained
                  </span>
                  <span className="text-teal-950 font-semibold text-sm">
                    6 new cooks
                  </span>
                </div>
              </div>

              <div className="bg-cream-50 rounded-2xl p-5 border-l-4 border-amber-500">
                <p className="text-teal-950 text-sm italic leading-relaxed">
                  "Nobody eats better than anyone else at my table. That's the
                  whole recipe."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ============================================================ */}
      {/* 8. MARKET STALL PARTNERS                                       */}
      {/* ============================================================ */}
      <section className="py-[90px] lg:py-[120px] bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Who stocks the shelves
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </div>
            <HeadingWithPaint
              text="Our market partners"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {marketStalls.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative bg-teal-950 rounded-2xl p-6 pt-8 overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                {/* signboard post */}
                <span className="absolute top-0 left-7 w-[3px] h-5 bg-amber-500" />
                <div className="flex items-center gap-2 mb-3">
                  <FiShoppingBag className="w-4 h-4 text-amber-400" />
                  <FiCheckCircle className="w-3.5 h-3.5 text-cream-50/40" />
                </div>
                <h3 className="font-display text-base text-cream-50 font-semibold mb-1">
                  {partner.name}
                </h3>
                <p className="text-cream-50/50 text-xs">{partner.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. DINNER INVITATION CTA                                       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden order-1 lg:order-2 min-h-[280px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=900&fit=crop&q=80"
              alt="Family sharing a meal"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-l from-teal-950/40 to-transparent lg:from-transparent lg:to-teal-950/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-teal-950 p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden order-2 lg:order-1"
          >
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-amber-500/10" />

            <span className="font-mono text-xs tracking-[0.25em] uppercase text-amber-500 font-bold mb-5 inline-flex items-center gap-2">
              <FiGift className="w-4 h-4" /> You're invited
            </span>

            <h2 className="font-display font-semibold text-4xl lg:text-5xl text-cream-50 leading-[1.05] tracking-tight mb-4">
              Set a place at the{" "}
              <span className="text-amber-500 italic font-normal">table</span>
            </h2>

            <p className="text-cream-50/70 text-lg max-w-[420px] leading-relaxed mb-8">
              One gift funds one week of meals for one community kitchen. Pull
              up a chair.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#donate"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-teal-950 font-semibold text-sm transition-all duration-300 hover:bg-cream-50 hover:-translate-y-0.5 active:scale-95"
              >
                Fund a Meal
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#volunteer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-cream-50/30 text-cream-50 font-semibold text-sm transition-all duration-300 hover:border-cream-50 hover:bg-cream-50 hover:text-teal-950 hover:-translate-y-0.5 active:scale-95"
              >
                Volunteer to Cook
                <FiHeart className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
};

export default FoodPage;
