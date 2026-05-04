import rocketFramework from "@/assets/rocketframework.png";

const ReadinessRocketFramework = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-6 text-white/85 text-base leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Readiness Rocket Framework
            </h2>

            <p>
              Just as rockets launch <strong className="text-white">satellites</strong> into{" "}
              <em>space</em>, readiness rocket can launch{" "}
              <strong className="text-white">enterprises</strong> into a new space of GenAI.
            </p>

            <p>
              The important components of rockets are <em>payload</em>,{" "}
              <em>boosters</em>, and <em>launchpad</em>.
            </p>

            <p>
              Just as <strong className="text-white">payload</strong> carries satellite, the
              most critical component of the mission, payload of readiness rocket includes{" "}
              <strong className="text-white">GenAI maturity assessment</strong>,{" "}
              <strong className="text-white">scaled adoption strategy</strong>, and{" "}
              <strong className="text-white">readiness areas</strong> — the most critical
              components of operational readiness.
            </p>

            <p>
              Just as <strong className="text-white">boosters</strong> provide the necessary
              thrust to overcome earth's gravity and propel the rocket into space,{" "}
              <strong className="text-white">boosters of readiness rocket</strong> facilitate
              enterprises to escape the status quo and accelerate toward new realms of AI
              innovations.
            </p>

            <p>
              Just as <strong className="text-white">launchpad</strong> serves as the stable
              foundation for the rocket during preparation and liftoff, ensuring a safe and
              controlled launch, the launchpad of readiness rocket provides a strong
              foundation and support, helps mitigate risks and overcome issues, and ensures
              deliverables are achieved.
            </p>

            <p>
              Just as trajectory optimization enables rockets gain more speed through gravity
              turn, which involves using earth's rotation for a speed boost,{" "}
              <strong className="text-white">ecosystems</strong> enables scaled adoption of
              GenAI 3X faster by enabling collaboration between enterprises.
            </p>
          </div>

          {/* RIGHT: Rocket Diagram Image */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden border border-white/10 w-full max-w-md">
              <img
                src={rocketFramework}
                alt="Readiness Rocket Framework Diagram"
                className="w-full h-full object-contain bg-white/5"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReadinessRocketFramework;