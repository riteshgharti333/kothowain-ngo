"use client";

const Marquee = () => {
  const items = [
    "Together, we build a world where everyone has the chance to thrive",
    "Kindness travels further when it's shared",
    "Every meal restores a little more dignity",
    "Together, we build a world where everyone has the chance to thrive",
    "Kindness travels further when it's shared",
    "Every meal restores a little more dignity",
  ];

  return (
    <>
      <div className="bg-teal-950 py-5 overflow-hidden relative">
        {/* Left fade */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-teal-950 to-transparent z-10 pointer-events-none" />

        {/* Right fade */}
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-teal-950 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex w-max">
          {items.map((text, index) => (
            <span
              key={index}
              className="font-display italic text-[22px] text-cream-100 whitespace-nowrap px-10 flex items-center gap-6"
            >
              {text}
              <span className="not-italic text-sm text-amber-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: scrollLeft 32s linear infinite;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default Marquee;
