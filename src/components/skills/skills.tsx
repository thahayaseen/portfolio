"use client";
import React, { useEffect, useCallback, useMemo } from "react";
import './skill.css'
import { skillColors, skillIcons } from "./skill";
import Observer from "@/hooks/useObservation";

// Utility function to convert hex to rgba
const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

function Skills() {
  const observer = Observer();

  // Memoize skills data to prevent unnecessary recalculations
  const skillsData = useMemo(() => {
    return Object.keys(skillIcons).map((skillName) => ({
      name: skillName,
      IconComponent: skillIcons[skillName],
      color: skillColors[skillName],
    })).filter(skill => skill.IconComponent); // Filter out skills without icons
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".skillcard");
    cards.forEach((card) => {
      observer(card);
    });
  }, [observer]);

  // Optimized mouse move handler with useCallback
  const handleMouseMove = useCallback((
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    color: string
  ) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    target.style.setProperty("--bg-color", hexToRgba(color, 0.4));
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    target.style.setProperty("--bg-color", "transparent");
  }, []);

  return (
    <section id="skills" className="skills-section py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center relative mb-4">
            Skills & Technologies
            <div className="h-1 w-16 sm:w-20 bg-blue-600 mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            These are the tools and technologies that power my development workflow and bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 justify-items-center">
          {skillsData.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              onMouseMove={(e) => handleMouseMove(e, skill.color)}
              onMouseLeave={handleMouseLeave}
              className="skillcard group "
              style={{
                background: `radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--bg-color, transparent) 0%, transparent 80%)`,
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ 
                     background: `linear-gradient(45deg, transparent, ${skill.color}20, transparent)` 
                   }} 
              />
              
              {/* Content */}
              <div className="relative p-4 sm:p-6 flex flex-col items-center justify-center gap-3 min-h-[100px] sm:min-h-[120px]">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gray-50 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors duration-300">
                  <skill.IconComponent 
                    size={window.innerWidth < 640 ? 32 : window.innerWidth < 768 ? 40 : 48} 
                    color={skill.color}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Skill level indicator (optional) */}
                <div className="w-full max-w-16 h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      backgroundColor: skill.color,
                      width: `${75 + Math.random() * 25}%` // Random skill level for demo
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Skills count */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            {skillsData.length}+ Technologies & Counting
          </p>
        </div>
      </div>

    
    </section>
  );
}

export default Skills;