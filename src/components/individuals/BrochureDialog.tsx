import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2 } from "lucide-react";

interface BrochureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (data: { name: string; email: string; phone: string }) => void;
  sheetName: string;
}

const BrochureDialog = ({ open, onOpenChange, onSubmit, sheetName }: BrochureDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const phoneRegex = /^\d{7,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid phone number (7–15 digits)");
      setIsSubmitting(false);
      return;
    }

    try {
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_BROCHURE_URL;

      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          timestamp: new Date().toISOString(),
          sheetName: sheetName,
        }),
      }).catch(err => {
        console.error("Error submitting to Google Sheets:", err);
      });

      if (onSubmit) {
        onSubmit(formData);
      }

      setFormData({ name: "", email: "", phone: "" });
      onOpenChange(false);

      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

    } catch (err) {
      console.error("Error in form submission:", err);
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    if (field === "phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 15) {
        setFormData(prev => ({ ...prev, [field]: numericValue }));
      }
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }

    if (error) setError(null);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Download Brochure</DialogTitle>
            <DialogDescription className="text-base">
              Please provide your details to download the AI Practitioner Bootcamp brochure.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                disabled={isSubmitting}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                disabled={isSubmitting}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                disabled={isSubmitting}
                className="w-full"
                maxLength={15}
              />
              <p className="text-xs text-muted-foreground">
                Enter your phone number (numbers only)
              </p>
            </div>

            {error && (
              <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                {error}
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit & Download"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-md">
            <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold">Download Complete!</p>
              <p className="text-sm opacity-90">
                Your brochure has been downloaded successfully.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrochureDialog;