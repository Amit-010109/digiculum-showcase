import { useState, useEffect } from "react";
import homebg from "@/assets/hero-img.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-24 pb-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homebg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-12">

        {/* Main Heading */}
  <div className="text-center mb-8">
    <h1 className="text-white text-3xl md:text-5xl font-bold">
      Your AI Reskilling & Advisory Partner
    </h1>
  </div>

  {/* Subheading for cards */}
  <div className="text-center mb-8">
    <h2 className="text-white text-xl md:text-2xl font-semibold">
      Our Core Offerings
    </h2>
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left Card - For Individuals */}
          <div className="bg-card/50 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in-up">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/20 text-white font-semibold text-xs md:text-sm rounded-full">
                  For Individuals
                </span>
              </div>
              <p className="text-foreground/70 italic mb-2 md:mb-4 text-xs md:text-sm">
                Technical, Non-Technical, or Absolute Beginners
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                AI Reskilling
              </h2>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 ">
                App
              </h2>
              {/* <div className="flex gap-1.5">
                <span className="text-white italic text-xs md:text-sm mb-2 md:mb-4">
                  Start Date:
                </span>
                <span className="text-white font-bold italic text-xs md:text-sm mb-2 md:mb-4">
                  9th Mar, 2026
                </span>
              </div> */}
            <div className="h-2 md:h-4" />
              <p className="text-foreground/60 text-xs md:text-sm mb-4 md:mb-2">
                Personalized-roadmap
              </p>

              <div className="mt-auto">
                <a
                  href='/app' target="_blank"
                  className={`btn-primary inline-block ${
                    isMobile ? "text-xs px-4 py-2" : "text-sm px-6 py-2.5"
                  }`}
                >
                  Find More
                </a>
              </div>
            </div>
          </div>

          {/* Right Card - For Business Leaders */}
          <div className="bg-card/50 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in-delay-1">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/20 text-white font-semibold text-xs md:text-sm rounded-full">
                  For Business Leaders
                </span>
              </div>
              <p className="text-foreground/70 italic mb-2 md:mb-4 text-xs md:text-sm">
                Senior Leaders, Executives, or Functional Decision-makers
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                AI Leadership
              </h2>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
                 Program
              </h2>

              <div className="h-2 md:h-4" />

              <p className="text-foreground/60 text-xs md:text-sm mb-4 md:mb-6">
                Enterprise-focused
              </p>

              <div className="mt-auto">
                <a
                  href="/enterprises"
                  className={`btn-primary inline-block ${
                    isMobile ? "text-xs px-4 py-2" : "text-sm px-6 py-2.5"
                  }`}
                >
                  Find More
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card/50 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in-delay-1">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/20 text-white font-semibold text-xs md:text-sm rounded-full">
                  For Employees
                </span>
              </div>
              <p className="text-foreground/70 italic mb-2 md:mb-4 text-xs md:text-sm">
                Early Career, Mid-Management, and SMEs
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                AI Competence
              </h2>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
                Development Program 
              </h2>

              <div className="h-2 md:h-4" />

              <p className="text-foreground/60 text-xs md:text-sm mb-4 md:mb-6">
                Value-driven
              </p>

              <div className="mt-auto">
                <a
                  href="/enterprises"
                  className={`btn-primary inline-block ${
                    isMobile ? "text-xs px-4 py-2" : "text-sm px-6 py-2.5"
                  }`}
                >
                  Find More
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card/50 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in-delay-1">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/20 text-white font-semibold text-xs md:text-sm rounded-full">
                  For Enterprises
                </span>
              </div>
              <p className="text-foreground/70 italic mb-2 md:mb-4 text-xs md:text-sm">
                Mid-sized, Large-sized, and Global MNCs
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                AI Advisory
              </h2>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
                Services
              </h2>

              <div className="h-2 md:h-4" />

              <p className="text-foreground/60 text-xs md:text-sm mb-4 md:mb-6">
                Transformation-oriented
              </p>

              <div className="mt-auto">
                <a
                  href="/enterprises"
                  className={`btn-primary inline-block ${
                    isMobile ? "text-xs px-4 py-2" : "text-sm px-6 py-2.5"
                  }`}
                >
                  Find More
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;