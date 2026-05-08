import React from "react";
import leadershipImg from "@/assets/leadership.png";
import competenceImg from "@/assets/competence.png";

const CoreOfferingsData = [
  {
    title: "AI Leadership Program",
    image: leadershipImg,
    alt: "AI Leadership Program Pyramid",
  },
  {
    title: "AI Competence Development Program",
    image: competenceImg,
    alt: "AI Competence Development Program Pyramid",
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
              className="relative flex flex-col items-center justify-start rounded-xl p-8 
                         bg-white/5 border border-white/10 hover:border-primary/50 
                         hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Card Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 group-hover:text-primary transition-colors duration-300 text-center">
                {course.title}
              </h3>

              {/* Image Container */}
              <div className="w-full flex-grow flex justify-center items-center p-4">
                <img
                  src={course.image}
                  alt={course.alt}
                  className="w-full max-w-sm h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCoreOfferings;