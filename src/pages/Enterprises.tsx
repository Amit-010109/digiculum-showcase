import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import { CoursesHero, InstructorLedCourses, SelfPacedCourses } from "@/components/courses";
import EnterprisesHero from "@/components/enterprises/EnterprisesHero";
import AILeadershipProgram from "@/components/enterprises/AILeadershipProgram";
import AIComepetenceDevelopmentProgram from "@/components/enterprises/AICompetenceDevelopmentProgram";
import StandaloneReskillingOfferings from "@/components/enterprises/StandaloneReskillingOfferings";
import AIAdvisoryServices from "@/components/enterprises/AIAdvisoryServices";
import EnterpriseCoreOfferings from "@/components/enterprises/EnterpriseCoreOfferings";

const Enterprises = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <EnterprisesHero />
      <SectionSeparator />
      <EnterpriseCoreOfferings />
      <SectionSeparator />
      <StandaloneReskillingOfferings />
      <SectionSeparator />
      <AIAdvisoryServices />
      <Footer />
    </div>
  );
};

export default Enterprises;
