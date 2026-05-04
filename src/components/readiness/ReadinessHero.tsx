import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import readinessbg from "@/assets/readinessbg.png";

const LeadersHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleConsultation = () => {
    // Opens Calendly or consultation booking page
    window.open(import.meta.env.VITE_CALENDLY_URL, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-20 pt-24 pb-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${readinessbg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 w-full pl-6 md:pl-16 lg:pl-24">
        <div className="max-w-3xl">
          <h1 className="heading-xl mb-6 animate-fade-in">
            AI Readiness & Competence Evaluation
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in-delay-1">
            Through the proprietary Readiness Rocket Framework
          </p>

          <p className="text-lg text-primary font-medium mb-10 animate-fade-in-delay-1">
            Only for Enterprises
          </p>

          <Button
            onClick={handleConsultation}
            size={isMobile ? "sm" : "lg"}
            className={`bg-primary hover:bg-primary/90 animate-fade-in-delay-2 ${
              !isMobile ? "text-lg px-10 py-6" : ""
            }`}
          >
            <Calendar className="mr-2 h-5 w-5" />
            1:1 Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadersHero;