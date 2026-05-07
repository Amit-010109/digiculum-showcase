// import { Award } from "lucide-react";
// import AIReskilling from "../assets/AI-reskilling-journey.png";

// const JourneyFlowchart = () => {
//   return (
//     <section className="py-16 md:py-24 bg-background" id="courses">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-12 md:mb-16 ">
//           <div className="text-4xl md:text-5xl">
//             <div className="flex flex-col gap-2">
//             Your Personalized, Continuous, Collaborative
//             <div className="flex justify-center items-center gap-2">
//             <span className="text-primary font-bold">AI</span>

//             <span className="text-white font-bold">Reskilling Journey</span>
//             </div>
//             </div>

//           </div>
//         </div>

//         {/* Mobile View - Stacked Cards */}
//         <div className="lg:hidden space-y-6">
//           {/* Step 1 */}
//           <JourneyCard
//             title="1:1 Interviews"
//             duration="30 minutes"
//             description="Meeting with each cohort member to set individual targets"
//             step={1}
//           />

//           <ArrowDownMobile />

//           {/* Step 2 */}
//           <JourneyCard
//             title="AI Inspiration"
//             duration="1 hour"
//             description="Warm-up workshop. A day before cohort kick-off"
//             step={2}
//           />

//           <ArrowDownMobile />

//           {/* Step 3 */}
//           <JourneyCard
//             title="AI Practitioner Bootcamp"
//             duration="21 Days"
//             description="For individuals with all types of background: technical, non-technical or absolute beginners"
//             step={3}
//             highlight
//           />

//           <ArrowDownMobile />

//           {/* Step 4 */}
//           <JourneyCard
//             title="Action Planning"
//             duration="1 hour"
//             description="Individual session with each cohort member to plan practical application"
//             step={4}
//           />

//           <ArrowDownMobile />

//           {/* Certificate */}
//           <div className="border border-foreground/20 rounded-xl p-6 text-center bg-primary/5">
//             <Award className="w-10 h-10 text-primary mx-auto mb-3" />
//             <h3 className="font-semibold text-lg">AI Practitioner Certificate</h3>
//           </div>

//           <ArrowDownMobile />

//           {/* Post-Bootcamp */}
//           <div className="border border-dashed border-foreground/30 rounded-xl p-4">
//             <p className="text-xs text-foreground/60 italic mb-4 text-center">
//               Common for graduates of both programs
//             </p>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-center">
//                 <h3 className="font-semibold mb-2 text-sm">Coaching</h3>
//                 <p className="text-xs text-foreground/70">Regular check-ins</p>
//                 <p className="text-primary text-xs font-medium mt-1">3 months</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="font-semibold mb-2 text-sm">Ecosystem</h3>
//                 <p className="text-xs text-foreground/70">Collaboration</p>
//                 <p className="text-primary text-xs font-medium mt-1">perpetual</p>
//               </div>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="flex items-center gap-4 py-4">
//             <div className="flex-1 h-px bg-foreground/20" />
//             <span className="text-foreground/50 text-xs">Specialization Track</span>
//             <div className="flex-1 h-px bg-foreground/20" />
//           </div>

//           {/* Specialization */}
//           <JourneyCard
//             title="AI Specialization Program"
//             duration="1 month"
//             description="Select specialized track: Consulting, Compliance, Domain, or Creative"
//             step={5}
//             highlight
//           />

//           <ArrowDownMobile />

//           {/* Specialization Certificate */}
//           <div className="border border-foreground/20 rounded-xl p-6 text-center bg-primary/5">
//             <Award className="w-10 h-10 text-primary mx-auto mb-3" />
//             <h3 className="font-semibold text-lg mb-3">Completion Certificates</h3>
//             <div className="grid grid-cols-2 gap-2 text-sm">
//               <span>AI Consultant</span>
//               <span>Compliance Guardian</span>
//               <span>Domain Visionary</span>
//               <span>VITA Creator</span>
//             </div>
//           </div>

//           <ArrowDownMobile />

//           {/* Post-Specialization */}
//           <div className="border border-dashed border-foreground/30 rounded-xl p-4">
//             <p className="text-xs text-foreground/60 italic mb-4 text-center">
//               Only for graduates of AI Specialization Program
//             </p>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-center">
//                 <h3 className="font-semibold mb-2 text-sm">Skill Building</h3>
//                 <p className="text-xs text-foreground/70">Relevant to current job</p>
//                 <p className="text-primary text-xs font-medium mt-1">1 year</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="font-semibold mb-2 text-sm">Feeds</h3>
//                 <p className="text-xs text-foreground/70">Regular AI updates</p>
//                 <p className="text-primary text-xs font-medium mt-1">1 year</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Desktop View - Original Flow */}
//         <div className="hidden lg:block overflow-x-auto pb-8">
//           <div className="diagram-container min-w-[1000px]">
//             {/* Top Row - Main Journey Steps */}
//             <div className="flex items-start justify-between gap-4 mb-8">
//               {/* Step 1: Interviews */}
//               <div className="flex-1 text-center">
//                 <h3 className="font-semibold text-lg mb-2">1:1<br />Interviews</h3>
//                 <p className="text-primary text-sm font-medium mb-2">30 minutes</p>
//                 <p className="text-sm text-foreground/70">
//                   meeting with each cohort member to set individual targets
//                 </p>
//               </div>

//               <div className="flex items-center pt-6">
//                 <Arrow />
//               </div>

//               {/* Step 2: Inspiration */}
//               <div className="flex-1 text-center">
//                 <h3 className="font-semibold text-lg mb-2">AI<br />Inspiration</h3>
//                 <p className="text-primary text-sm font-medium mb-2">1 hour</p>
//                 <p className="text-sm text-foreground/70">
//                   warm-up workshop. A day before cohort kick-off
//                 </p>
//               </div>

//               <div className="flex items-center pt-6">
//                 <Arrow />
//               </div>

//               {/* Step 3: Bootcamp */}
//               <div className="flex-1 text-center">
//                 <h3 className="font-semibold text-lg mb-2">AI Practitioner<br />Bootcamp</h3>
//                 <p className="text-sm text-foreground/70 mb-2">
//                   For individuals with all types of background: technical, non-technical or absolute beginners
//                 </p>
//                 <p className="text-primary text-sm font-medium">21 Days</p>
//               </div>

//               <div className="flex items-center pt-6">
//                 <Arrow />
//               </div>

//               {/* Step 4: Action Planning */}
//               <div className="flex-1 text-center">
//                 <h3 className="font-semibold text-lg mb-2">Action<br />Planning</h3>
//                 <p className="text-primary text-sm font-medium mb-2">1 hour</p>
//                 <p className="text-sm text-foreground/70">
//                   individual session with each cohort member to plan practical application
//                 </p>
//               </div>

//               <div className="flex items-center pt-6">
//                 <Arrow />
//               </div>

//               {/* Certificate */}
//               <div className="flex-1 text-center">
//                 <div className="flex justify-center mb-2">
//                   <Award className="w-12 h-12 text-foreground" />
//                 </div>
//                 <h3 className="font-semibold text-lg">AI Practitioner<br />Certificate</h3>
//               </div>

//               <div className="flex items-center pt-6">
//                 <Arrow />
//               </div>

//               {/* Post-Bootcamp */}
//               <div className="flex-1">
//                 <p className="text-xs text-foreground/60 italic mb-2 text-center">
//                   Common for graduates of both AI Practitioner Bootcamp and AI Specialization Program
//                 </p>
//                 <div className="flex gap-4">
//                   <div className="flex-1 text-center">
//                     <h3 className="font-semibold mb-2">Coaching</h3>
//                     <p className="text-sm text-foreground/70">
//                       Regular check-ins to track individual progress over
//                     </p>
//                     <p className="text-primary text-sm font-medium">3 months</p>
//                   </div>
//                   <div className="flex-1 text-center">
//                     <h3 className="font-semibold mb-2">Ecosystem</h3>
//                     <p className="text-sm text-foreground/70">
//                       Collaboration with other individuals on AI topics
//                     </p>
//                     <p className="text-primary text-sm font-medium">perpetual</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Arrow Down from Bootcamp */}
//             <div className="flex justify-center mb-8" style={{ marginLeft: "25%" }}>
//               <ArrowDown />
//             </div>

//             {/* Bottom Row - Specialization */}
//             <div className="flex items-start gap-4" style={{ marginLeft: "20%" }}>
//               {/* Specialization */}
//               <div className="text-center max-w-xs">
//                 <h3 className="font-semibold text-lg mb-2">AI Specialization<br />Program</h3>
//                 <p className="text-sm text-foreground/70 mb-4">
//                   Individual selects one of the following specialized tracks:
//                 </p>
//                 <div className="space-y-1 font-semibold">
//                   <p>Consulting</p>
//                   <p>Compliance</p>
//                   <p>Domain</p>
//                   <p>Creative</p>
//                 </div>
//                 <p className="text-primary text-sm font-medium mt-4">1 month</p>
//               </div>

//               <div className="flex items-center pt-12">
//                 <Arrow />
//               </div>

//               {/* Completion Certificate */}
//               <div className="text-center">
//                 <div className="flex justify-center mb-2">
//                   <Award className="w-12 h-12 text-foreground" />
//                 </div>
//                 <h3 className="font-semibold text-lg mb-4">Completion<br />Certificates</h3>
//                 <div className="space-y-1 text-sm font-medium">
//                   <p>AI Consultant</p>
//                   <p>Compliance Guardian</p>
//                   <p>Domain Visionary</p>
//                   <p>VITA Creator</p>
//                 </div>
//               </div>

//               <div className="flex items-center pt-12">
//                 <Arrow />
//               </div>

//               {/* Post-Specialization */}
//               <div className="border-t border-dashed border-foreground/30 pt-4">
//                 <p className="text-xs text-foreground/60 italic mb-4">
//                   Only for graduates of AI Specialization Program
//                 </p>
//                 <div className="flex gap-8">
//                   <div className="text-center">
//                     <h3 className="font-semibold mb-2">Skill Building</h3>
//                     <p className="text-sm text-foreground/70">
//                       Relevant to current job
//                     </p>
//                     <p className="text-primary text-sm font-medium">1 year</p>
//                   </div>
//                   <div className="text-center">
//                     <h3 className="font-semibold mb-2">Feeds</h3>
//                     <p className="text-sm text-foreground/70">
//                       Regular updates on AI on topics of interest
//                     </p>
//                     <p className="text-primary text-sm font-medium">1 year</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// interface JourneyCardProps {
//   title: string;
//   duration: string;
//   description: string;
//   step: number;
//   highlight?: boolean;
// }

// const JourneyCard = ({ title, duration, description, highlight }: JourneyCardProps) => (
//   <div className={`border rounded-xl p-4 text-center ${highlight ? 'border-primary/50 bg-primary/5' : 'border-foreground/20'}`}>
//     <h3 className="font-semibold text-base mb-2">{title}</h3>
//     <p className="text-primary text-sm font-medium mb-2">{duration}</p>
//     <p className="text-xs text-foreground/70">{description}</p>
//   </div>
// );

// const Arrow = () => (
//   <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-foreground/50">
//     <path d="M0 10H35M35 10L28 3M35 10L28 17" stroke="currentColor" strokeWidth="2" />
//   </svg>
// );

// const ArrowDown = () => (
//   <svg width="20" height="40" viewBox="0 0 20 40" fill="none" className="text-foreground/50">
//     <path d="M10 0V35M10 35L3 28M10 35L17 28" stroke="currentColor" strokeWidth="2" />
//   </svg>
// );

// const ArrowDownMobile = () => (
//   <div className="flex justify-center">
//     <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-foreground/50">
//       <path d="M10 0V25M10 25L3 18M10 25L17 18" stroke="currentColor" strokeWidth="2" />
//     </svg>
//   </div>
// );

// export default JourneyFlowchart;

import AIReskilling from "@/assets/AI_Reskilling_Journey.png"

const JourneyFlowchart = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="courses">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-3xl md:text-4xl">
            <div className="flex flex-col gap-2 text-xl md:text-2xl lg:text-3xl font-light mb-4">
              Your Personalized, Continuous, Collaborative
              <div className="flex justify-center items-center gap-2">
                <span className="text-primary font-bold">AI</span>
                <span className="text-white font-bold">Reskilling Journey</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image with highlight directly on its boundary */}
        <div className="rounded-xl overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary/5">
          <img
            src={AIReskilling}
            alt="AI Reskilling Journey"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default JourneyFlowchart;
