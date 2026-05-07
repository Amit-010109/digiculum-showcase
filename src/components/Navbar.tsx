import { useState } from "react";
import { Menu, X } from "lucide-react";
import digiLogo from "@/assets/Digiculum-Logo.png";

const navLinks = [
  
  { label: "App", href: "http://localhost:8080/app"},
  { label: "Enterprises", href: "/enterprises" },
  { label: "Ecosystem", href: "/ecosystem" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 mx-4 md:mx-8 lg:mx-16 bg-card/90 backdrop-blur-md border border-border/30 rounded-2xl">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={digiLogo}
              alt="Digiculum Logo"
              className="h-12 md:h-14 w-auto max-h-10 md:max-h-12 object-contain mix-blend-screen brightness-110 contrast-125"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
