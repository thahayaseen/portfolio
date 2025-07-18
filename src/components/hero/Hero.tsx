// import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import "./hero.css";
import MultiLineTypewriter from "../MultiLineTypewriter";
import ImageHero from "./ImageHero";
// import useObservation from "@/hooks/useObservation";
const intro = `I  build modern web apps with MongoDB, Express, React, and Node.js. I focus on clean code, real-world solutions, and continuous learning.`;
const name = "Thaha Yaseen K";
function Hero() {
  return (
    <section id="home" className="relative w-full  py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {` Hi, I'm `}
              <p className="text-pretty text-blue-300">{name}</p>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              a MERN stack developer .
            </h2>

            <MultiLineTypewriter lines={intro} />
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="px-8 py-4 text-lg font-medium">
                View My Work
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-medium bg-transparent text-white border-white hover:bg-white/10">
                Contact Me
              </Button>
            </div>
          </div>

     
          <ImageHero />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-6 h-10 border-4 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
