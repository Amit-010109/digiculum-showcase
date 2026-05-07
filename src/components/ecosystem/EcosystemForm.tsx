import React, { useState } from "react";
import {
  Mail,
  User,
  Phone,
  Briefcase,
  Shield,
  Loader2,
} from "lucide-react";

const EcosystemForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "",
    otherOccupation: "",
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captcha, setCaptcha] = useState(() => {
    const n1 = Math.floor(Math.random() * 100) + 1;
    const n2 = Math.floor(Math.random() * 100) + 1;
    return { n1, n2, answer: n1 + n2 };
  });

  const occupations = [
    "Technical Professional",
    "Non-Technical Professional",
    "Student",
    "Job Seeker",
    "Entrepreneur",
    "Other",
  ];

  const sanitizeInput = (name: string, value: string) => {
    if (name === "firstName" || name === "lastName") {
      // Lock numbers
      return value.replace(/[^a-zA-Z\s'-]/g, "");
    }

    if (name === "phone") {
      // Lock alphabets
      return value.replace(/[^0-9+\-()\s]/g, "");
    }

    return value;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    const sanitizedValue = sanitizeInput(name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    validateField(name, sanitizedValue);
  };

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          newErrors.firstName = "First name is required";
        } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
          newErrors.firstName =
            "First name can only contain letters, spaces, hyphens and apostrophes";
        } else if (value.trim().length < 2) {
          newErrors.firstName = "First name must be at least 2 characters";
        } else {
          delete newErrors.firstName;
        }
        break;

      case "lastName":
        if (!value.trim()) {
          newErrors.lastName = "Last name is required";
        } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
          newErrors.lastName =
            "Last name can only contain letters, spaces, hyphens and apostrophes";
        } else if (value.trim().length < 2) {
          newErrors.lastName = "Last name must be at least 2 characters";
        } else {
          delete newErrors.lastName;
        }
        break;

      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (
          !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          newErrors.email =
            "Please enter a valid email address (e.g., user@example.com)";
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (!value.trim()) {
          newErrors.phone = "Phone number is required";
        } else {
          // Remove all non-digit characters for validation
          const digitsOnly = value.replace(/\D/g, "");
          if (digitsOnly.length < 10) {
            newErrors.phone = "Phone number must be at least 10 digits";
          } else if (digitsOnly.length > 15) {
            newErrors.phone = "Phone number cannot exceed 15 digits";
          } else if (!/^[\d\s\-+()]+$/.test(value)) {
            newErrors.phone =
              "Phone number can only contain digits, spaces, +, -, and ()";
          } else {
            delete newErrors.phone;
          }
        }
        break;

      case "occupation":
        if (!value) {
          newErrors.occupation = "Please select your occupation";
        } else {
          delete newErrors.occupation;
        }
        break;

      case "otherOccupation":
        if (formData.occupation === "Other" && !value.trim()) {
          newErrors.otherOccupation = "Please specify your occupation";
        } else if (formData.occupation === "Other" && value.trim().length < 3) {
          newErrors.otherOccupation =
            "Occupation must be at least 3 characters";
        } else {
          delete newErrors.otherOccupation;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCaptchaAnswer(value);

    const isCorrect = Number(value) === captcha.answer;
    setCaptchaVerified(isCorrect);

    const newErrors = { ...errors };
    if (value && !isCorrect) {
      newErrors.captcha = "Incorrect answer. Please try again.";
    } else if (isCorrect) {
      delete newErrors.captcha;
    }
    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate all fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.firstName)) {
      newErrors.firstName =
        "First name can only contain letters, spaces, hyphens and apostrophes";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.lastName)) {
      newErrors.lastName =
        "Last name can only contain letters, spaces, hyphens and apostrophes";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email =
        "Please enter a valid email address (e.g., user@example.com)";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, "");
      if (digitsOnly.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits";
      } else if (digitsOnly.length > 15) {
        newErrors.phone = "Phone number cannot exceed 15 digits";
      } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
        newErrors.phone =
          "Phone number can only contain digits, spaces, +, -, and ()";
      }
    }

    if (!formData.occupation) {
      newErrors.occupation = "Please select your occupation";
    }

    if (formData.occupation === "Other" && !formData.otherOccupation.trim()) {
      newErrors.otherOccupation = "Please specify your occupation";
    } else if (
      formData.occupation === "Other" &&
      formData.otherOccupation.trim().length < 3
    ) {
      newErrors.otherOccupation = "Occupation must be at least 3 characters";
    }

    if (!captchaVerified) {
      newErrors.captcha = "Please solve the captcha correctly";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector(".text-red-400");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    const submissionData = {
      timestamp: new Date().toISOString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      occupation:
        formData.occupation === "Other"
          ? formData.otherOccupation
          : formData.occupation,
      status: "Pending Review",
    };

    try {
      const GOOGLE_SHEETS_URL = import.meta.env.VITE_ECOSYSTEM_URL;

      // Fire and forget - send data to Google Sheets in the background
      // Don't await the response, just trigger it
      fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(submissionData),
      }).catch((error) => {
        // Log error but don't block the user experience
        console.error("Error submitting to Google Sheets:", error);
      });

      // Immediately proceed with UI updates without waiting for Google Sheets
      setSubmitted(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        occupation: "",
        otherOccupation: "",
      });
      setCaptchaAnswer("");
      setCaptchaVerified(false);
      setErrors({});

      // Generate new captcha
      const n1 = Math.floor(Math.random() * 100) + 1;
      const n2 = Math.floor(Math.random() * 100) + 1;
      setCaptcha({ n1, n2, answer: n1 + n2 });

    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "There was an error submitting your application. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">
          <div className="w-16 h-16 bg-primary/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Application Submitted!
          </h2>
          <p className="text-gray-300 mb-6">
            Thank you for your interest in joining our ecosystem. Your
            application is under review and we'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="bg-primary/50 p-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              Join Our Ecosystem
            </h1>
            <p className="text-purple-100">
              Complete the form below to start your onboarding journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-gray-400 focus:outline-none border transition-all ${
                    errors.firstName
                      ? "border-red-500"
                      : "border-white/10 focus:border-primary/50"
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-gray-400 focus:outline-none border transition-all ${
                    errors.lastName
                      ? "border-red-500"
                      : "border-white/10 focus:border-primary/50"
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                <Mail className="w-4 h-4 mr-2" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-gray-400 focus:outline-none border transition-all ${
                  errors.email
                    ? "border-red-500"
                    : "border-white/10 focus:border-primary/50"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                <Phone className="w-4 h-4 mr-2" />
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-gray-400 focus:outline-none border transition-all ${
                  errors.phone
                    ? "border-red-500"
                    : "border-white/10 focus:border-primary/50"
                }`}
                placeholder="+91 "
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Occupation */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                <Briefcase className="w-4 h-4 mr-2" />
                Occupation *
              </label>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 rounded-lg text-white focus:outline-none border transition-all ${
                  errors.occupation
                    ? "border-red-500"
                    : "border-white/10 focus:border-primary/50"
                }`}
              >
                <option value="" className="bg-primary">
                  Select your occupation
                </option>
                {occupations.map((occ) => (
                  <option
                    key={occ}
                    value={occ}
                    className="bg-black hover:bg-white"
                  >
                    {occ}
                  </option>
                ))}
              </select>
              {errors.occupation && (
                <p className="text-red-400 text-sm mt-1">{errors.occupation}</p>
              )}
            </div>

            {/* Other Occupation (conditional) */}
            {formData.occupation === "Other" && (
              <div>
                <label className="text-sm font-medium text-gray-200 mb-2 block">
                  Please Specify *
                </label>
                <input
                  type="text"
                  name="otherOccupation"
                  value={formData.otherOccupation}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-gray-400 focus:outline-none border transition-all ${
                    errors.otherOccupation
                      ? "border-red-500"
                      : "border-white/10 focus:border-primary/50"
                  }`}
                  placeholder="Enter your occupation"
                />
                {errors.otherOccupation && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.otherOccupation}
                  </p>
                )}
              </div>
            )}

            {/* Captcha */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <label className="flex items-center text-sm font-medium text-gray-200 mb-3">
                <Shield className="w-4 h-4 mr-2" />
                Security Verification *
              </label>
              <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
                <div className="bg-primary/50 text-white px-6 py-3 rounded-lg font-mono text-lg text-center sm:w-auto">
                  {captcha.n1} + {captcha.n2} = ?
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={captchaAnswer}
                    onChange={handleCaptchaChange}
                    className={`w-full sm:w-32 px-4 py-3 bg-white/5 rounded-lg text-white text-center focus:outline-none border transition-all ${
                      errors.captcha
                        ? "border-red-500"
                        : "border-white/10 focus:border-primary/50"
                    }`}
                    placeholder="Answer"
                  />
                  {captchaVerified && (
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {errors.captcha && (
                <p className="text-red-400 text-sm mt-2">{errors.captcha}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold text-lg transform transition-all shadow-lg ${
                isSubmitting
                  ? "bg-primary/50 cursor-not-allowed"
                  : "bg-primary/50 hover:from-purple-700 hover:to-blue-700 hover:scale-[1.02] hover:shadow-xl"
              } text-white flex items-center justify-center gap-2`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>

            <p className="text-center text-gray-400 text-sm">
              Your application will be reviewed manually. You'll receive a
              response at your registered email address.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EcosystemForm;