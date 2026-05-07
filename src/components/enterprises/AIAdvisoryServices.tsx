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
    <section id="ai-advisory" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg mb-10 text-white">
          AI Advisory Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {AIAdvisoryData.map((course, index) => (
            <div
              key={index}
              className="relative h-auto min-h-[200px] flex flex-col rounded-xl p-6 
                         bg-white/5 border border-white/10 hover:border-primary/50 
                         hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Added pt-4 to push text slightly down, flex-grow/justify-center to balance vertical alignment */}
              <div className="flex flex-col flex-grow justify-center pt-4">
                {/* Increased title to text-2xl and adjusted line height (leading-tight) to fill space */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {course.title}
                </h3>

                {/* Increased description to text-base for better proportion against the larger card */}
                <p className="text-base font-medium text-white/70 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Download Brochure Button */}
        <div className="flex justify-center mt-10">
          <button
            className="px-8 py-3 rounded-full text-base font-medium transition-all hover:scale-105 bg-primary text-white shadow-lg shadow-primary/20"
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