// app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiShield,
  FiUsers,
  FiBookOpen,
  FiActivity,
  FiHome,
  FiAlertCircle,
  FiTarget,
  FiEye,
  FiAward,
  FiCheckCircle,
  FiArrowUpRight,
  FiCheck,
  FiGlobe,
  FiShare2,
  FiArrowLeft,
  FiGift,
} from "react-icons/fi";
import HeadingWithPaint from "../components/HeadingWithPaint";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import TornEdgeOrganic from "../components/TornEdgeOrganic";
import PageBanner from "../components/PageBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import SplitSection from "../components/SplitSection";

const AboutPage = () => {
  const Counter = ({
    value,
    suffix,
    start,
  }: {
    value: number;
    suffix?: string;
    start: boolean;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(eased * value));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(value);
      };

      requestAnimationFrame(animate);
    }, [start, value]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix && <span className="text-amber-400">{suffix}</span>}
      </span>
    );
  };

  const timeline = [
    {
      year: "2003",
      title: "Founded",
      desc: "Kothowain established in response to extreme poverty and cultural erosion in the CHT.",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=200&h=200&fit=crop&q=80",
    },
    {
      year: "2006",
      title: "First Community Project",
      desc: "Launched first education program reaching 200 children in Bandarban.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=200&h=200&fit=crop&q=80",
    },
    {
      year: "2012",
      title: "Expanded Programs",
      desc: "Added healthcare, sanitation, and livelihood development initiatives.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=200&fit=crop&q=80",
    },
    {
      year: "2018",
      title: "Major Milestone",
      desc: "Reached 5,000+ families across three Hill Districts.",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=200&h=200&fit=crop&q=80",
    },
    {
      year: "2026",
      title: "Today",
      desc: "Serving 7,000+ families with 500+ volunteers and 3,000+ projects.",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=200&h=200&fit=crop&q=80",
    },
  ];

  const featuredPartners = [
    {
      name: "UNDP-CHTDF",
      country: "United Nations",
      desc: "Community empowerment and gender equality projects in the Hill Tracts.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&q=80",
    },
    {
      name: "BRAC International",
      country: "Bangladesh",
      desc: "Education support program for non-formal education in CHT.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop&q=80",
    },
    {
      name: "UNESCO",
      country: "Global",
      desc: "Education for children programs with HOPE'87 Bangladesh & Austria.",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop&q=80",
    },
  ];

  const networks = [
    "Bangladesh National Youth Council, Dhaka",
    "Chittagong Hill Tracts Women Foundation Network",
    "Girls Not Brides (ending early child marriage), UK",
    "YSA-USA",
    "Network (BYN) - Jaago Foundation and UNDP",
    "Servas International",
    "The World Indigenous Tourism Alliance (WINTA), New Zealand",
    "Commonwealth Youth Peace Ambassadors Network - New York",
    "The Association for Women's Rights in Development (AWID) – Canada",
    "Women Thrive Alliance - Washington, D.C",
    "CIVICUS",
    "United Nations Framework Convention on Climate Change (UNFCCC)",
    "Climate Technology Centre & Network (CTCN)",
    "Global Legal Empowerment Network (Namati) - USA",
    "Mountain Partnership, FAO - Italy",
    "Netzkraft Movement",
    "The Adaptation Fund NGO Network - Germany",
    "NAHAB (National Alliance of Humanitarian Actors, Bangladesh)",
    "Dianova International - Switzerland",
    "The Global Network of Civil Society Organisations for Disaster Reduction (GNDR)",
    "Together to End FGM",
    "Advisory Member, Initiative for Equality - USA",
    "Rural Water Supply Network (RWSN) - Switzerland",
    "Regeneration International Network",
    "International Peace Bureau - Germany",
    "Climate Action Network South Asia (CANSA)",
    "Water Supply and Sanitation Collaborative Council (WSSCC) – Switzerland",
    "UNDRR Stakeholder Engagement Mechanism",
    "Global Alliance for the Rights of Older People",
    "International Association of Professionals in Humanitarian Assistance and Protection (PHAP) - Geneva, Switzerland",
    "GenderCC – Women for Climate Justice (Global Network) - Germany",
    "Global Constituency of Youth for Environment - UNEP Major Group for Children and Youth",
    "The Alliance for Child Protection in Humanitarian Action",
    "Social Science and Humanities Research Association (SSHRA)",
    "Global Alliance for Climate-Smart Agriculture (GACSA), FAO - Rome, Italy",
    "The Alliance for Child Protection in Humanitarian Action (UNICEF co-leads with World Vision)",
    "World Federation Against Drugs (WFAD) - Sweden",
    "Global Waste Cleaning Network (GWCN), England, UK",
    "International Community Tourism Association",
    "The Global Partnership and Fund to End Violence Against Children - New York",
    "Youth Collective - UK Government",
    "SDGAction33745 - UN",
    "The Think Global Institute",
    "KujaLink - Adeso, Kenya",
    "Plastic No Thanks",
    "The Grassroots Justice Network",
    "The Future Earth",
    "The People's Coalition on Food Sovereignty",
    "Asia Pacific Network of Environmental Defenders",
  ];

  const programPartners = [
    "Education Support Program on non-formal education in CHT - BRAC International",
    "Education for Children - HOPE'87 Bangladesh & Austria, UNESCO",
    "Education and Training Program - SONNE International",
    "Community Empowerment Project - UNDP-CHTDF",
    "Gender Equality Project funded by UNDP-CHTDF",
    "PROCESS Project (well-being services and cultural revival) - GRAUS, Manusher Jonno Foundation and DFID",
    "Indigenous Culture Industry Development Project - Prince Claus Fonds, The Netherlands",
    "Disability inclusiveness in all programs - Centre for Disability in Development & CBM International",
    "Water, Sanitation and Hygiene Promotion Project through Women and Children Rights Project in Bandarban Hill Tracts funded by Australian High Commission, Bangladesh",
    "Warm Clothes Distribution Program - Berger Paints Bangladesh Limited",
    "Indigenous cultural heritage development and promotion - Land is Life, NY (2018)",
    "Local Institution Capacity Building Program - Helen Keller International",
    "Underprivileged Women Sustainable Economic Development Project - Helen Keller International",
    "LEAN Project - CARITAS Bangladesh and United Purpose",
    "Survey and Research in Bandarban District - Centre for Research on Environment and People (C4RE)",
    "Primary Health Care & Medical Camp at Community Level - OFFPLOY, CIC (UK)",
    "Community-Based Health Care Support - FieldBrook Holdings LLC",
  ];

  // const programs = [
  //   {
  //     icon: FiBookOpen,
  //     title: "Education",
  //     desc: "Creating access to learning and skills for indigenous children.",
  //   },
  //   {
  //     icon: FiActivity,
  //     title: "Healthcare",
  //     desc: "Supporting healthier communities through medical outreach.",
  //   },
  //   {
  //     icon: FiHeart,
  //     title: "Food & Nutrition",
  //     desc: "Helping families access essential nutrition year-round.",
  //   },
  //   {
  //     icon: FiUsers,
  //     title: "Community Development",
  //     desc: "Creating opportunities for sustainable independence.",
  //   },
  //   {
  //     icon: FiAlertCircle,
  //     title: "Emergency Relief",
  //     desc: "Responding when communities need immediate help.",
  //   },
  // ];
  const impactStats = [
    { value: 10000, label: "Lives Reached", suffix: "+" },
    { value: 25, label: "Communities", suffix: "+" },
    { value: 50, label: "Projects", suffix: "+" },
    { value: 5000, label: "Families Supported", suffix: "+" },
  ];

  const objectives = [
    "To execute children, adolescent, youth and women's development activities",
    "To intervene in family planning and social education activities",
    "To implement rural and urban socio-economic development",
    "To create self-employment opportunities for women and marginalized groups",
    "To implement pure drinking water supply and sanitation activities",
    "To implement health, nutrition and chronic disease prevention programs",
    "To support destitute, disabled, orphans and poor students",
    "To empower, capacitate and develop women",
    "To support victims of man-made and natural disasters",
    "To raise awareness about harmful habits like tobacco, alcohol and smoking",
    "To implement climate change and agriculture initiatives",
    "To assist poor patients with necessary treatment",
    "To implement programs for disabled welfare and development",
    "To implement education programs",
    "To implement human rights programs including sustainable livelihood",
  ];

  const values = [
    {
      title: "Participation",
      desc: "Stakeholders are involved in decision-making.",
      icon: FiUsers,
    },
    {
      title: "Justice",
      desc: "Justice for all, regardless of background.",
      icon: FiShield,
    },
    {
      title: "Honesty",
      desc: "We act with transparency and integrity.",
      icon: FiCheckCircle,
    },
    {
      title: "Humanity",
      desc: "Compassion guides everything we do.",
      icon: FiHeart,
    },
    {
      title: "Gender Equality",
      desc: "Equal opportunities for all genders.",
      icon: FiUsers,
    },
    {
      title: "Transparency",
      desc: "Accountable to communities and donors.",
      icon: FiEye,
    },
    {
      title: "Environmental Conservation",
      desc: "Protecting nature for future generations.",
      icon: FiGlobe,
    },
    {
      title: "Respect",
      desc: "Valuing dignity of every person.",
      icon: FiHeart,
    },
    {
      title: "Sharing",
      desc: "Sharing skills and experience for growth.",
      icon: FiShare2,
    },
  ];

  const programs = [
    {
      icon: FiBookOpen,
      title: "Education",
      desc: "Creating access to learning and skills for indigenous children.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop&q=80",
    },
    {
      icon: FiActivity,
      title: "Healthcare",
      desc: "Supporting healthier communities through medical outreach.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
    },
    {
      icon: FiHeart,
      title: "Food & Nutrition",
      desc: "Helping families access essential nutrition year-round.",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=375&fit=crop&q=80",
    },
    {
      icon: FiUsers,
      title: "Community Development",
      desc: "Creating opportunities for sustainable independence.",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=500&h=375&fit=crop&q=80",
    },
    {
      icon: FiAlertCircle,
      title: "Emergency Relief",
      desc: "Responding when communities need immediate help.",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&h=375&fit=crop&q=80",
    },
  ];

  const swiperRef = useRef<any>(null);

  return (
    <main className="overflow-hidden">
      {/* About Hero */}
      <PageBanner
        image="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
        breadcrumb="About"
        headingLine1="Building"
        headingHighlight="Dignity."
        headingLine2="Creating"
        headingAfter="Opportunity."
        description="Kothowain — the Vulnerable People's Development Organization — works alongside indigenous communities across the Chittagong Hill Tracts to create lasting change through education, healthcare, and sustainable development."
        seed={100}
      />
      {/* Who We Are */}
      <section className="py-[100px] lg:py-[120px] bg-paper">
        <div className="max-w-[1280px] mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="container-px lg:px-0">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                  <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                    About the organization
                  </span>
                </div>
                <HeadingWithPaint
                  text="Hope for survival"
                  className="text-left mb-6"
                />

                {/* First paragraph */}
                <p className="text-ink-soft leading-[1.8] text-base mb-4">
                  Therefore, considering the above situation and establishing as
                  change of agent for bringing positive and building confidence
                  amongst locality, the KOTHOWAIN organization (Vulnerable
                  People&apos;s Development Organization) established in 2003 by
                  some social development activist in response to the issues of
                  extreme poverty, low literacy rate, social and political
                  conflict, eroding cultural identity, climate, environment, and
                  high incidence of human rights violations among the indigenous
                  peoples in the Chittagong Hill Tracts of Bangladesh.
                </p>

                {/* Second paragraph */}
                <p className="text-ink-soft leading-[1.8] text-base mb-4">
                  KOTHOWAIN a Tripura word meaning &apos;Hope for Survival&apos;
                  was officially registered as a non-government and
                  non-political voluntary development organization by the Social
                  Service Department of Bangladesh Government and it is
                  registered for foreign donations (voluntary activity
                  regulations Act 2016) –NGO affairs Bureau of Bangladesh
                  Government.
                </p>

                {/* Third paragraph */}
                <p className="text-ink-soft leading-[1.8] text-base mb-6">
                  The organization aims to develop the socio-economic conditions
                  of the most vulnerable and underprivileged people in the Hill
                  Tracts. Through the years, KOTHOWAIN has strived to build the
                  capacities of the communities to manage and implement projects
                  in a sustainable manner, have a voice in decision making, and
                  dignity as a people. This has been achieved in partnership
                  with local, national, and international agencies as well as
                  government institutions.
                </p>

                {/* Focus areas */}
                <div className="mb-6">
                  <div className="font-display text-xl font-semibold text-teal-950 mb-4">
                    KOTHOWAIN prioritized for focusing on the following areas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Human Rights and Indigenous Rights",
                      "Livelihood",
                      "Climate Change",
                      "Primary & Higher Education",
                      "Health and Sanitation",
                      "Adolescent and Youth Development",
                      "Empowerment and Employment",
                      "Advocacy, Linkage and Networking",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-ink font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Right Images - Auto-scrolling Masonry Columns */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden"
            >
              {/* Desktop - Vertical */}
              <div className="hidden lg:block relative h-[1000px]">
                <div className="grid grid-cols-2 gap-3 h-full">
                  <div className="overflow-hidden">
                    <div className="marquee-up flex flex-col gap-3">
                      {[0, 1].map((set) => (
                        <div key={set} className="flex flex-col gap-3">
                          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=533&fit=crop&q=80"
                              alt=""
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=300&fit=crop&q=80"
                              alt=""
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop&q=80"
                              alt=""
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="marquee-down flex flex-col gap-3">
                      {[0, 1].map((set) => (
                        <div key={set} className="flex flex-col gap-3">
                          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop&q=80"
                              alt=""
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&q=80"
                              alt=""
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop&q=80"
                              alt=""
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-paper to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-paper to-transparent z-10" />
              </div>

              {/* Mobile - Horizontal */}
              <div className="lg:hidden space-y-3">
                <div className="overflow-hidden">
                  <div className="marquee-left flex gap-3 w-max">
                    {[0, 1].map((set) => (
                      <div key={set} className="flex gap-3">
                        {[
                          "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=300&fit=crop&q=80",
                          "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=300&fit=crop&q=80",
                          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop&q=80",
                          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&q=80",
                        ].map((src, i) => (
                          <div
                            key={i}
                            className="relative w-36 h-36 rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
                          >
                            <Image
                              src={src}
                              alt=""
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="marquee-right flex gap-3 w-max">
                    {[0, 1].map((set) => (
                      <div key={set} className="flex gap-3">
                        {[
                          "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&h=300&fit=crop&q=80",
                          "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=300&fit=crop&q=80",
                          "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&h=300&fit=crop&q=80",
                          "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=300&fit=crop&q=80",
                        ].map((src, i) => (
                          <div
                            key={i}
                            className="relative w-36 h-36 rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
                          >
                            <Image
                              src={src}
                              alt=""
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <style jsx>{`
                .marquee-up {
                  animation: up 20s linear infinite;
                }
                .marquee-down {
                  animation: down 20s linear infinite;
                }
                .marquee-left {
                  animation: left 15s linear infinite;
                }
                .marquee-right {
                  animation: right 15s linear infinite;
                }
                @keyframes up {
                  from {
                    transform: translateY(0);
                  }
                  to {
                    transform: translateY(-50%);
                  }
                }
                @keyframes down {
                  from {
                    transform: translateY(-50%);
                  }
                  to {
                    transform: translateY(0);
                  }
                }
                @keyframes left {
                  from {
                    transform: translateX(0);
                  }
                  to {
                    transform: translateX(-50%);
                  }
                }
                @keyframes right {
                  from {
                    transform: translateX(-50%);
                  }
                  to {
                    transform: translateX(0);
                  }
                }
              `}</style>
            </motion.div>{" "}
          </div>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section className="py-[100px] lg:py-[120px] bg-cream-100 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-teal-950/5 pointer-events-none" />

        <div className="max-w-[900px] mx-auto container-px relative">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Our story
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </motion.div>
            <HeadingWithPaint
              text="The journey so far"
              className="justify-center"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Gradient line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-500 via-teal-700 to-amber-500 lg:-translate-x-1/2 rounded-full opacity-20" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row gap-4 mb-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Year badge on timeline */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-0 z-10">
                  <div className="bg-amber-500 text-teal-950 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                    {item.year}
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-10 w-4 h-4 rounded-full bg-amber-500 border-4 border-cream-100 z-10" />

                {/* Content */}
                <div
                  className={`ml-14 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-14 lg:text-right" : "lg:pl-14"}`}
                >
                  {/* Timeline Card - Image on top */}
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
                    {/* Image top */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                    </div>

                    {/* Content bottom */}
                    <div className="p-5">
                      <h3 className="font-display text-base lg:text-lg text-teal-950 font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-ink-soft text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission & Objectives */}
      <section className="py-[100px] lg:py-[120px] bg-paper relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-teal-950/5 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto container-px relative">
          {/* Section Head */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Why Kothowain
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </motion.div>
            <HeadingWithPaint
              text="Vision mission and core values"
              className="justify-center"
            />
          </div>

          {/* Vision & Mission Cards with Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden shadow-xl"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&q=80"
                  alt="Vision"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                    <FiEye className="w-5 h-5 text-teal-950" />
                  </div>
                  <h3 className="font-display text-xl text-cream-50 font-semibold">
                    Our Vision
                  </h3>
                </div>
                <p className="text-cream-50/80 text-sm leading-relaxed">
                  Socio economic development, promotion and empowerment among
                  marginalized people in Bangladesh.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-xl"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop&q=80"
                  alt="Mission"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500 via-amber-500/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-950 flex items-center justify-center">
                    <FiTarget className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="font-display text-xl text-teal-950 font-semibold">
                    Our Mission
                  </h3>
                </div>
                <p className="text-teal-950/80 text-sm leading-relaxed">
                  To bring sustainable positive change by reducing poverty among
                  marginalized people, especially women and children.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl lg:text-3xl text-teal-950 font-semibold">
                Objectives of Kothowain
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex items-start gap-3 bg-white rounded-xl p-4 border border-teal-950/5 hover:border-amber-500/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="w-6 h-6 rounded-full bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                    <FiCheck className="w-3 h-3 text-amber-600 group-hover:text-teal-950 transition-colors duration-300" />
                  </span>
                  <span className="text-sm text-ink-soft leading-relaxed">
                    {objective}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Same as Food Split Design */}
      <SplitSection
        image="https://images.unsplash.com/photo-1682786308110-fab1fe5e9446?q=80&w=584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Helping hands"
        badgeIcon={FiGift} // Changed to icon badge like food section
        badgeText="Get involved"
        title="Be Part of the"
        highlightText="Change"
        description="Change begins when people choose to act."
        buttons={[
          {
            text: "Donate Now",
            href: "#donate",
            icon: FiArrowRight,
            variant: "primary",
          },
          {
            text: "Volunteer",
            href: "#volunteer",
            icon: FiHeart,
            variant: "outline",
          },
        ]}
      />

      {/* Our Values */}
      <section className="py-[100px] lg:py-[120px] bg-cream-100">
        <div className="max-w-[1280px] mx-auto container-px">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Our values
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </motion.div>
            <HeadingWithPaint
              text="What guides our work"
              className="justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-7 border border-teal-950/5 hover:border-amber-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-950/5 group-hover:bg-teal-950 flex items-center justify-center mb-4 transition-colors duration-300">
                  <value.icon className="w-5 h-5 text-teal-700 group-hover:text-amber-400 transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg text-teal-950 font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Networks */}
      <section className="py-[100px] lg:py-[120px] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-500/5 pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-950/5 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto container-px relative">
          {/* Section Head */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                Partners & networks
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </motion.div>
            <HeadingWithPaint
              text="Together we create greater impact"
              className="justify-center"
            />
            <p className="text-ink-soft text-base mt-4 max-w-[600px] mx-auto">
              Kothowain collaborates with local, national, and international
              organizations to amplify our reach and deepen our impact.
            </p>
          </div>

          {/* Featured Partners - Cards with Images */}
          <div className="mb-16">
            <h3 className="font-display text-2xl text-teal-950 font-semibold text-center mb-8">
              Featured Development Partners
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Partner image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent" />
                  </div>
                  {/* Partner info */}
                  <div className="p-5">
                    <h4 className="font-display text-base text-teal-950 font-semibold mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-amber-500 text-xs font-bold">
                      {partner.country}
                    </p>
                    <p className="text-ink-soft text-sm leading-relaxed mt-2">
                      {partner.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Global Networks - Logo Grid */}
          <div className="mb-16">
            <h3 className="font-display text-2xl text-teal-950 font-semibold text-center mb-8">
              Global Networks & Memberships
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {networks.map((network, index) => (
                <motion.div
                  key={network}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group bg-white rounded-xl p-5 border border-teal-950/5 hover:border-amber-500/30 hover:shadow-md transition-all duration-300 flex items-center justify-center text-center"
                >
                  <span className="text-xs lg:text-sm text-ink-soft font-medium group-hover:text-teal-950 transition-colors duration-300 leading-snug">
                    {network}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Programs & Development Partners */}
          <div>
            <h3 className="font-display text-2xl text-teal-950 font-semibold text-center mb-8">
              Programs & Development Partners
            </h3>
            <div className="bg-teal-950 rounded-[2rem] p-4 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {programPartners.map((program, index) => (
                  <motion.div
                    key={program}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-cream-50/5 rounded-xl p-4 hover:bg-cream-50/10 transition-colors duration-300"
                  >
                    <p className="text-cream-50/70 text-sm leading-relaxed">
                      {program}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Image Cards */}
      <section className="py-[100px] lg:py-[120px] bg-paper relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                What we do
              </span>
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            </motion.div>
            <HeadingWithPaint
              text="Our areas of work"
              className="justify-center"
            />
          </div>
        </div>

        {/* Swiper - Full width edge to edge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* What We Do - Swiper Slider */}
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={1200}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3.5, spaceBetween: 28 },
            }}
            className="program-swiper !px-6 lg:!px-10"
          >
            {programs.map((program, index) => (
              <SwiperSlide key={program.title}>
                <div className="group relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/30 to-transparent" />
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-teal-950 font-display font-bold text-lg shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-display text-xl lg:text-2xl text-cream-50 font-semibold">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-cream-50/70 text-sm leading-relaxed">
                      {program.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
              className="w-11 h-11 rounded-full border border-teal-950/20 flex items-center justify-center text-teal-950 hover:bg-amber-500 hover:text-teal-950 hover:border-amber-500 transition-all duration-300"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper?.slideNext()}
              className="w-11 h-11 rounded-full border border-teal-950/20 flex items-center justify-center text-teal-950 hover:bg-amber-500 hover:text-teal-950 hover:border-amber-500 transition-all duration-300"
            >
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
        <style jsx>{`
          .program-swiper .swiper-pagination-bullets {
            bottom: 0 !important;
            text-align: center !important;
          }
          .program-swiper .swiper-pagination-bullet-active {
            background: var(--color-amber-500) !important;
            width: 24px !important;
            border-radius: 100px !important;
          }
        `}</style>
      </section>

      {/* Impact Stats - With Background Image */}
      <section className="relative py-[100px] lg:py-[120px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&h=800&fit=crop&q=80"
            alt="Impact background"
            fill
            className="object-cover"
            unoptimized
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-teal-950/80" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-950/70 to-teal-950/40" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 left-20 w-32 h-32 rounded-full bg-amber-500/5 blur-xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto container-px relative">
          <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-12 items-center">
            {/* Left heading */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="font-mono text-xs tracking-[0.18em] uppercase text-amber-500 font-bold">
                  Our impact
                </span>
              </div>
              <h2 className="font-display font-semibold text-4xl lg:text-5xl text-cream-50 leading-[1.1] tracking-tight mb-4">
                Making a{" "}
                <span className="text-amber-500 italic font-normal">
                  real difference
                </span>
              </h2>
              <p className="text-cream-50/60 text-base leading-relaxed">
                Every number represents lives touched and communities
                transformed through your support.
              </p>
            </motion.div>

            {/* Right stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative rounded-2xl p-6 lg:p-7 overflow-hidden group ${
                      index % 2 === 0
                        ? "bg-white/5 backdrop-blur-sm border border-cream-50/10"
                        : "bg-amber-500/10 backdrop-blur-sm border border-amber-500/20"
                    } hover:bg-white/10 transition-all duration-300`}
                  >
                    {/* Decorative blob inside card */}
                    <div
                      className={`absolute -top-8 -right-8 w-20 h-20 rounded-full ${
                        index % 2 === 0 ? "bg-amber-500/10" : "bg-cream-50/10"
                      } group-hover:scale-150 transition-transform duration-700`}
                    />
                    <div
                      className={`absolute -bottom-6 -left-6 w-14 h-14 rounded-full ${
                        index % 2 === 0 ? "bg-cream-50/5" : "bg-amber-500/10"
                      } group-hover:scale-125 transition-transform duration-500`}
                    />

                    {/* Value with count up */}
                    <div className="relative font-display text-3xl lg:text-4xl font-bold text-amber-400 mb-2">
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                        start={true}
                      />
                    </div>

                    {/* Label */}
                    <div className="relative text-cream-50/60 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Team */}
      <Team />

      {/* Testimonial */}
      <Testimonial />
    </main>
  );
};

export default AboutPage;
