import About from "@/components/About-me/About";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/skills";


import React from "react";

function Page() {
  return (
    <div className="h-[500vh] w-full  bg-gradient-to-r from-primary-foreground to-secondary z-10">
      <Hero />
      <About />
      <Skills/>
    </div>
  );
}

export default Page;
