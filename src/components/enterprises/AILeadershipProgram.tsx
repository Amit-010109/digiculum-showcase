import AILeadershipBg from "@/assets/AI_Leadership_Program.png";

const AILeadershipProgram = () => {
  return (
    <section id="instructor-led" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg mb-10 text-white">AI Leadership Program</h2>

        {/* Image with highlight directly on its boundary */}
        <div className="rounded-xl overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary/5">
          <img
            src={AILeadershipBg}
            alt="AI Leadership Program"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AILeadershipProgram;