import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import coursesBg from "@/assets/courses.png";
import BrochureDialog from "../individuals/BrochureDialog";
// Adjust the path/name to your actual enterprise brochure PDF asset
import brochurePdf from "@/assets/Digiculum Offerings.pdf";

const EnterprisesHero = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBrochureSubmit = (data: {
    name: string;
    email: string;
    phone: string;
  }) => {
    // Here you can send data to Google Sheets or your backend
    console.log("User data:", data);

    // Download the PDF after form submission
    const link = document.createElement("a");
    link.href = brochurePdf;
    link.download = "Enterprise-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close the dialog
    setBrochureOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-20 pt-24 pb-8">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coursesBg})` }}
      />

      {/* Dark + Pink Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-pink-900/40" />

      {/* Content */}
      <div className="relative z-10 w-full pl-6 md:pl-16 lg:pl-24">
        <div className="max-w-3xl text-white">

          <h1 className="heading-xl mb-6 text-white">
            Reskilling and Advisory
          </h1>

          <p className="text-xl text-white/80 mb-8">
            For enterprises at all levels of AI maturity: Discovery, Mobilization, Experimentation, Pre-Scaling, Scaled Adoption
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size={isMobile ? "sm" : "lg"}
              className={`bg-primary hover:bg-primary/90 ${
                !isMobile ? "text-base px-8 py-6" : ""
              }`}
              onClick={() => setBrochureOpen(true)}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      <BrochureDialog
        open={brochureOpen}
        onOpenChange={setBrochureOpen}
        onSubmit={handleBrochureSubmit}
        sheetName="Enterprise Offering Brochure"
      />
    </section>
  );
};

export default EnterprisesHero;