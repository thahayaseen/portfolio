"use client";
import useObservation from "@/hooks/useObservation";
import Image from "next/image";
import React, { useEffect } from "react";
import "./hero.css";
function ImageHero() {
  const observe = useObservation();
  useEffect(() => {
    const data = document.querySelectorAll(".in-animation");
    data.forEach((data) => {
      console.log(data);

      observe(data);
    });
  }, [observe]);
  return (
    <div className="relative min-h-[50vh] max-h-[60vh] ">
      <div className=" absolute h-full inset-0 rounded-2xl overflow-hidden border-4 border-primary/20">
        <Image
          src="/image.png"
          alt="Portfolio Image"
          fill
          className="object-cover heroimage in-animation"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>
      {/* Decorative elements */}
      <div className="in-animation squre absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary rounded-lg bg-gray-500/80 backdrop-blur-sm z-10"></div>
      <div className="in-animation weel absolute -top-4 -left-4 w-16 h-16 border-2 border-secondary rounded-full bg-gray-500/80 backdrop-blur-sm z-10"></div>
    </div>
  );
}

export default ImageHero;
