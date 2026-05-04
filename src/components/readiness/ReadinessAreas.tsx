import { Users, Cpu, Database, PersonStanding } from "lucide-react";
import customerImg from "@/assets/customer.png";
import technologyImg from "@/assets/technology.png";
import dataImg from "@/assets/data.png";
import peopleImg from "@/assets/people.png";

const readinessData = [
  {
    area: "Customer",
    icon: Users,
    color: "text-primary",
    image: customerImg,
    description:
      "The success of a business hinges on three key factors: delivering value to customers, generating profits, and managing customer relationships effectively. GenAI can enhance these factors by creating differentiated content to boost value and profits while fostering trust through responsible AI adoption. Understanding customer perspectives on GenAI is crucial, making customer the first readiness area of readiness rocket.",
  },
  {
    area: "Technology",
    icon: Cpu,
    color: "text-primary",
    image: technologyImg,
    description:
      "GenAI systems demand a strong technological foundation to support complex computations, scalable resources, and smooth integration with existing IT systems. Efficient management of technical debt is crucial to maximize the value and performance of these solutions. This makes technology the second readiness area of readiness rocket.",
  },
  {
    area: "Data",
    icon: Database,
    color: "text-primary",
    image: dataImg,
    description:
      "For GenAI models to perform accurately, they rely on high-quality, diverse data that is clean, well-structured, and readily available across systems. Proper data governance with clear policies and security measures ensures its integrity while enabling users to extract valuable insights. This makes data the third readiness area of readiness rocket.",
  },
  {
    area: "People",
    icon: PersonStanding,
    color: "text-primary",
    image: peopleImg,
    description:
      "Competent people are needed to develop, implement, and maintain genAI systems effectively. For its successful implementation, it is important that leaders should nurture a culture of continuous learning and collaboration among employees. This makes people the fourth readiness area of the readiness rocket.",
  },
];

const ReadinessAreas = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 space-y-40">
        {readinessData.map((section, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center`}
            >
              {/* IMAGE — always left on even, right on odd */}
              <div className={isReversed ? "md:order-2" : "md:order-1"}>
                <div className="h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={section.image}
                    alt={section.area}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className={isReversed ? "md:order-1" : "md:order-2"}>
                <div className="flex items-center gap-3 mb-8">
                  <section.icon className={`h-7 w-7 ${section.color}`} />
                  <h3 className={`text-3xl font-bold ${section.color}`}>
                    {section.area}
                  </h3>
                </div>

                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReadinessAreas;