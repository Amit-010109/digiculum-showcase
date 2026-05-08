import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Column 1: Navigation */}
          <div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/app"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  App
                </a>
              </li>
              <li>
                <a
                  href="/enterprises"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Enterprises
                </a>
              </li>
              <li>
                <a
                  href="/ecosystem"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Ecosystem
                </a>
              </li>
              <li>
                <a
                  href="https://www.amitprabhu.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Founder
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  General Terms
                </a>
              </li>
              <li>
                <a
                  href="/refund"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Contact - Hidden on mobile */}
          <div className="hidden md:block">
            <p className="text-foreground/70 mb-4">Follow us on</p>
            <a
              href="https://www.linkedin.com/company/digiculum/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold text-xl"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
          </div>

          {/* Column 4: CTA - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-end">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amit@digiculum.com"
              className="btn-primary text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile: Social Media - Below the two columns */}
        <div className="md:hidden mt-8">
          <p className="text-foreground/70 mb-4">Follow us on</p>
          <a
            href="https://www.linkedin.com/company/digiculum/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold text-xl"
          >
            <Linkedin className="w-6 h-6" />
            LinkedIn
          </a>
        </div>

        {/* Mobile: Contact Button - Centered */}
        <div className="md:hidden flex justify-center mt-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@digiculum.com"
            className="btn-primary text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-foreground/50 text-sm">
            Copyright 2026 © Digiculum. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;