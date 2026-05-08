import React from "react";

const CoreOfferingsData = [
  {
    title: "AI Leadership Program",
    audience: "For Upper Middle and Top Management",
  },
  {
    title: "AI Competence Development Program",
    audience: "For Lower Middle and Lower Management",
  },
];

const EnterpriseCoreOfferings = () => {
  return (
    <section id="enterprise-core" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-white">
          Enterprise Core Offerings
        </h2>

        {/* Grid setup for 2 cards side-by-side that span the entire container width */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {CoreOfferingsData.map((course, index) => (
            <div
              key={index}
              className="relative h-auto min-h-[180px] md:min-h-[200px] flex flex-col justify-start rounded-xl p-6 md:p-8 
                         bg-white/5 border border-white/10 hover:border-primary/50 
                         hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Card Title - Increased margin-bottom (mb-8 md:mb-12) to add more space */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8 group-hover:text-primary transition-colors duration-300">
                {course.title}
              </h3>

              {/* Card Subtext */}
              <p className="text-sm md:text-base font-medium text-white/70">
                {course.audience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCoreOfferings;