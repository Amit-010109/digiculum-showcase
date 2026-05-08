import { useState } from "react";
import BrochureDialog from "../individuals/BrochureDialog";
import brochurePdf from "@/assets/Digiculum Offerings.pdf";

const StandaloneOfferingsData = [
  { title: "AI Reskilling Workshop", audience: "For all Employees", duration: "3 hours" },
  { title: "Cultivating AI Mindset", audience: "For Employees and Leaders", duration: "3 hours" },
  { title: "Essential Competencies for AI Leaders", audience: "For Executives and Middle Managers", duration: "12 hours" },
  { title: "AI Practitioner Bootcamp", audience: "For all Employees", duration: "30 hours" },
  { title: "MS Copilot Studio Application", audience: "For Employees and Leaders", duration: "16 hours" },
  { title: "AI Specialization Program: Consulting Track", audience: "For Technology and Management Consultants", duration: "16 hours" },
  { title: "AI Specialization Program: Compliance Track", audience: "For Legal, Risk, Governance, Compliance SME", duration: "8 hours" },
  { title: "AI Specialization Program: Creative Track", audience: "For Digital Marketing SME, Content Creators, Designers", duration: "8 hours" },
  { title: "AI Specialization Program: Domain Track", audience: "For Non-Technical Professionals (HR, Finance, Accounting, Sales)", duration: "8 hours" },
  { title: "AI Specialization Program: Engineering Track", audience: "For Developers, Engineers", duration: "Duration as per requirement" },
  { title: "Exclusive Coaching", audience: "For all Employees", duration: "Duration as per requirement" },
];

const StandaloneReskillingOfferings = () => {
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
    <section id="self-paced" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Responsive Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-white tracking-tight">
          Standalone Reskilling Offerings
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {StandaloneOfferingsData.map((course, index) => (
            <div
              key={index}
              className="relative h-auto min-h-[180px] md:min-h-[200px] flex flex-col justify-between rounded-xl p-5 md:p-6 
                         bg-white/5 border border-white/10 hover:border-primary/50 
                         hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Responsive Card Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </h3>

                {/* Responsive Card Subtext */}
                <p className="text-xs md:text-sm font-medium text-white/70 mb-4">
                  {course.audience}
                </p>
              </div>

              {/* Styled Duration Badge */}
              <div className="flex items-center w-fit px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-[10px] md:text-xs font-semibold text-white/80 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
                <svg
                  className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
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

export default StandaloneReskillingOfferings;