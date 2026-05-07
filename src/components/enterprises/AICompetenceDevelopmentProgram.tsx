import AICompetenceBg from "@/assets/AI_Competence_Program.png";

const AIComepetenceDevelopmentProgram = () => {
  return (
    <section id="instructor-led" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg mb-10 text-white">AI Competence Development Program</h2>

        {/* Image with highlight directly on its boundary */}
        <div className="rounded-xl overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary/5">
          <img
            src={AICompetenceBg}
            alt="AI Competence Development Program"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AIComepetenceDevelopmentProgram;