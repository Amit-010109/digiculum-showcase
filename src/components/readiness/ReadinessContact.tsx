import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";

const LeadersContact = () => {
  const handleConsultation = () => {
    window.open(import.meta.env.VITE_CALENDLY_URL, "_blank");
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="diagram-container text-center max-w-3xl mx-auto">
          <h2 className="heading-md mb-6">
            Want to explore more?
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Write to us at amit@digiculum.com
        
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-20 bg-border" />
            <span className="text-muted-foreground font-medium">OR</span>
            <div className="h-px flex-1 max-w-20 bg-border" />
          </div>

          <h3 className="text-xl font-semibold mb-6">
            Schedule a 30-minute consultation with us
          </h3>

          <Button
            onClick={handleConsultation}
            size="lg"
            className="btn-primary text-lg px-10 py-6"
          >
            <Calendar className="mr-2 h-5 w-5" />
            1:1 Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadersContact;
