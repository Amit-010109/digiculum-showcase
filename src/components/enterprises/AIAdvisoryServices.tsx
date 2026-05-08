import { useState } from "react";
import BrochureDialog from "../individuals/BrochureDialog";
import brochurePdf from "@/assets/Digiculum Offerings.pdf";

const AIAdvisoryData = [
  {
    title: "AI Maturity Evaluation",
    description: "Based on 8 important factors",
  },
  {
    title: "AI Competence Evaluation",
    description: "Creating a roadmap to 10 new AI roles",
  },
  {
    title: "Enterprise AI Deployment Evaluation",
    description: "Assessing pre-integration AI readiness",
  },
  {
    title: "AI Strategy Workshop",
    description: "Strategies for all AI maturity levels",
  },
  {
    title: "Operational Readiness Workshop",
    description: "Building the foundation for Scaling AI",
  },
  {
    title: "AI Compliance Advisory",
    description: "AI Audit, Risk Management, Responsible AI Framework",
  },
  {
    title: "AI Technology Advisory",
    description: "Capabilities, Use cases, LLM & Vendor Selection",
  },
  {
    title: "AI Hackathons",
    description: "Identifying AI use cases and innovation",
  },
];

const AIAdvisoryServices = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  const handleBrochureSubmit = (data: {
    name: string;
    email: string;
    phone: string;
  }) => {
    console.log("User data:", data);
    const link = document.createElement("a");
    link.href = brochurePdf;
    link.download = "Enterprise-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setBrochureOpen(false);
  };

  return (
    <section id="ai-advisory" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Responsive Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-white tracking-tight">
          AI Advisory Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {AIAdvisoryData.map((course, index) => (
            <div
              key={index}
              className="relative h-auto min-h-[180px] md:min-h-[200px] flex flex-col rounded-xl p-6 
                         bg-white/5 border border-white/10 hover:border-primary/50 
                         hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-col flex-grow justify-center pt-2 md:pt-4">
                {/* Responsive Card Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {course.title}
                </h3>

                {/* Responsive Card Description */}
                <p className="text-sm md:text-base font-medium text-white/70 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-10">
          {/* Responsive Button */}
          <button
            className="px-6 py-3 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium transition-all hover:scale-105 bg-primary text-white shadow-lg shadow-primary/20"
            onClick={() => setBrochureOpen(true)}
          >
            Download Brochure
          </button>
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

export default AIAdvisoryServices;