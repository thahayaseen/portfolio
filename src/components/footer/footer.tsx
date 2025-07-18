// Footer.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Input } from "../ui/input";
import { Separator } from "@radix-ui/react-separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section - Logo, About, Navigation, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand/Logo Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">John Doe</h2>
            <p className="text-muted-foreground mb-6">
              Creative developer and designer crafting unique digital
              experiences with modern technologies and thoughtful design.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink size={16} /> About Me
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink size={16} /> Projects
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink size={16} /> Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink size={16} /> Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink size={16} /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail size={20} className="mt-1 shrink-0" />
                <span>hello@johndoe.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone size={20} className="mt-1 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="mt-1 shrink-0" />
                <span>San Francisco, CA, USA</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates about new projects and blog posts.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email address"
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 border-r-0"
              />
              <Button
                variant="default"
                className="rounded-l-none"
                size="icon"
                aria-label="Subscribe">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section - Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a
              href="/sitemap"
              className="text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
