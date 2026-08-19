"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<any>(null);

  const testimonials = [
    {
      quote:
        "Education is the foundation of change. By funding schools, scholarships and training, we help children unlock their potential for a better future.",
      name: "M A Mamun",
      role: "Country Manager, Kothowain",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    },
    {
      quote:
        "Kothowain's approach to community development is truly transformative. They listen first, then act. That's what makes the difference.",
      name: "Sarah Chakma",
      role: "Community Leader, Rangamati",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    },
    {
      quote:
        "The livelihood programs changed our village. Families now have stable income and children are going to school regularly.",
      name: "Ratan Tripura",
      role: "Beneficiary, Bandarban",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-[120px] lg:py-[140px] bg-teal-950 text-cream-50 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-amber-500/5 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-28 h-28 rounded-full bg-cream-50/5 pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-2 sm:px-5 md:px-6 lg:px-10 relative">
        {/* Simple Centered Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1200}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} !w-2 !h-2 !bg-cream-50/30 !opacity-100"></span>`;
              },
            }}
            loop={true}
            className="testimonial-simple"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-4 pb-14">
                  {/* Avatar */}
                  <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-amber-500 mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-5 h-5 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-display font-normal italic text-xl lg:text-2xl leading-[1.5] max-w-[700px] mx-auto text-cream-50 mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="font-bold text-cream-50 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-cream-50/60">
                    {testimonial.role}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows - positioned sides (hidden on mobile/tablet) */}
          <button
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 z-10 w-12 h-12 rounded-full border border-cream-50/20 items-center justify-center text-cream-50 hover:bg-amber-500 hover:text-teal-950 hover:border-amber-500 transition-all duration-300"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper?.slideNext()}
            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-0 z-10 w-12 h-12 rounded-full border border-cream-50/20 items-center justify-center text-cream-50 hover:bg-amber-500 hover:text-teal-950 hover:border-amber-500 transition-all duration-300"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .testimonial-simple .swiper-pagination-bullets {
          bottom: 0 !important;
          text-align: center !important;
        }
        .testimonial-simple .swiper-pagination-bullet-active {
          background: var(--color-amber-500) !important;
          width: 24px !important;
          border-radius: 100px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
