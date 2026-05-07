import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leaders from "./pages/Leaders";
import Individuals from "./pages/Individuals";
import Readiness from "./pages/Readiness"
import Courses from "./pages/Courses";
import Enterprises from "./pages/Enterprises";
import Ecosystem from "./pages/Ecosystem";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import GeneralTerms from "./components/GeneralTerms";
import RefundPolicy from "./components/RefundPolicy";
import EcosystemFormUpdated from "./pages/EcosystemFormUpdated";
import EssentialCompetenciesOfAi from "./components/courses/instructor-courses/EssentialCompetenciesOfAi";
import GenerativeAiTechnicalMasterclass from "./components/courses/instructor-courses/GenerativeAiTechnicalMasterclass";
import AiGenaiTransformationStrategy from "./components/courses/instructor-courses/AiGenaiTransformationStrategy";
import CultivatingAiGenaiMindset from "./components/courses/instructor-courses/CultivatingAiGenaiMindset";
import AiGenaiOperationalReadiness from "./components/courses/instructor-courses/AiGenaiOperationalReadiness";
import AIMindsetAssessment from "./pages/AIMindsetAssessment";
import AIQAssessment from "./pages/AIQAssessment";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/individuals" element={<Individuals />} />
          <Route path="/readiness" element={<Readiness />} />
          <Route path="/reskilling" element={<Courses />} />
          <Route path="/enterprises" element={<Enterprises />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/terms" element={<GeneralTerms />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/aiqassessment" element={<AIQAssessment />} />
          <Route path="/assessment" element={<AIMindsetAssessment />} />
          <Route path="/ecosystemform" element={<EcosystemFormUpdated />} />
          <Route
            path="/courses/Essential-Competencies-of-AI/GenAI-Leader"
            element={<EssentialCompetenciesOfAi />}
          />
          <Route
            path="/courses/Generative-AI-Technical-Masterclass"
            element={<GenerativeAiTechnicalMasterclass />}
          />
          <Route
            path="/courses/AI/GenAI-Transformation-Strategy"
            element={<AiGenaiTransformationStrategy />}
          />
          <Route
            path="/courses/Cultivating-AI/GenAI-Mindset"
            element={<CultivatingAiGenaiMindset />}
          />
          <Route
            path="/courses/AI/GenAI-Operational-Readiness"
            element={<AiGenaiOperationalReadiness />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
