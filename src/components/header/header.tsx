"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [currentHref, setHref] = useState("#home");
  // Sample navigation items - customize these as needed
  const navigation: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll effect for sticky header with animation
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = document.querySelectorAll("section[id]");
  
      // Throttle scroll events
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // --- Header hide/show logic ---
        if (currentScrollY > lastScrollY.current + 10 && currentScrollY > 150) {
          setHidden(true);
        } else if (
          lastScrollY.current - currentScrollY > 10 ||
          currentScrollY < 100
        ) {
          setHidden(false);
        }
  
        setScrolled(currentScrollY > 20);
        lastScrollY.current = currentScrollY;
  
        // --- Current section detection ---
        let current = "#home";
        sections.forEach((section) => {
          const top = section.getBoundingClientRect().top;
          if (top <= 120) {
            current = `#${section.id}`;
          }
        });
  
        setHref(current);
      }, 10);
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Add smooth scrolling for navigation links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href) {
          setHref(href);
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // Update URL without page reload
            window.history.pushState(null, "", href);
            // Close mobile menu if open
            setIsMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <>
      <header
      style={{
        zIndex:1
      }}
        ref={headerRef}
        onMouseEnter={()=>{
          
          if(hidden){
            setHidden(false);
          }

        }}
        onMouseLeave={()=>{
          if(!hidden){
            setHidden(true);
          }

        }}
        className={cn(
          "fixed w-full transition-all duration-300 ease-out z-50 flex justify-center",
          scrolled ? "top-3" : "top-0",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}>
        <div
          className={cn(
            "transition-all duration-300 ease-out backdrop-blur-md",
            scrolled
              ? "w-[35vw] rounded-lg bg-secondary-foreground/40 shadow-md py-3"
              : "w-full bg-secondary-foreground/50 py-4"
          )}>
          <div
            className={cn(
              "mx-auto container px-4 md:px-6 flex items-center",
              scrolled ? "justify-center" : "justify-between"
            )}>
            {/* Logo/Name with fade animation */}
            <div
              className={cn(
                "flex items-center transition-opacity duration-300 ease-in-out",
                scrolled
                  ? "opacity-0 absolute pointer-events-none"
                  : "opacity-100"
              )}>
              <a
                href="#home"
                className="text-xl md:text-2xl font-bold text-foreground">
                Portfolio
              </a>
              <span className="hidden md:inline-block ml-3 text-sm text-muted-foreground">
                Full-Stack Developer
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="flex space-x-6 lg:space-x-10 mr-6 lg:mr-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary font-medium transition-colors py-2 relative group">
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                        currentHref == item.href
                          ? "w-full"
                          : "group-hover:w-full"
                      }`}></span>
                   
                  </a>
                ))}
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-sidebar-primary text-sidebar-primary-foreground rounded-md hover:bg-sidebar-primary/90 transition-colors">
                Resume
              </a>
            </nav>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-foreground focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu - Positioned fixed and outside the header */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMenuOpen}>
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-full max-w-sm bg-card shadow-xl transition-transform duration-300 ease-in-out transform",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}>
          <div className="flex justify-between items-center p-4 border-b border-border/20">
            <a href="#home" className="text-xl font-bold text-foreground">
              Portfolio
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground focus:outline-none p-2 hover:bg-muted rounded-full"
              aria-label="Close navigation menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors py-4 border-b border-border/10 w-full flex justify-between items-center"
                onClick={handleNavClick}>
                <span className="text-lg">{item.name}</span>
                <span className="text-muted-foreground">→</span>
              </a>
            ))}
            <div className="pt-6 pb-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-sidebar-primary text-sidebar-primary-foreground rounded-md hover:bg-sidebar-primary/90 transition-colors inline-block w-full text-center font-medium">
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
