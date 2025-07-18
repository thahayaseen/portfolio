"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import useObservation from "@/hooks/useObservation";
import "./about.css";
const name = "Thaha Yaseen K";
const aboutme =
  "a passionate MERN stack developer. After completing my higher secondary education, I joined Brototype, where I learned full-stack development. I built two major projects:";
const majorProjects = [
  {
    title: "E-commerce App",
    description:
      "An e-commerce application built using MongoDB, Node.js, EJS, and Bootstrap.",
    stack: ["MongoDB", "Node.js", "EJS", "Bootstrap"],
  },
  {
    title: "E-learning Platform",
    description:
      "A full-featured e-learning platform built with Next.js, Redux, Tailwind CSS, and ShadCN, following clean architecture principles. Includes real-time chat and video call features.",
    stack: [
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "ShadCN",
      "MongoDB",
      "Express",
      "Node.js",
    ],
  },
];

function AboutSection() {
  const observe = useObservation();

  useEffect(() => {
    // Target the elements we want to animate
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    // Set up the observer to add the 'animate' class when elements are visible
    animatedElements.forEach((en) => {
      observe(en);
    });
  }, [observe]);

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center relative">
            About Me
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
          </h2>
          <p className="text-primary text-center mt-4 max-w-2xl">
            {`Here's a glimpse into who I am and what I bring to the table.`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image with accent card */}
          <div className="relative animate-on-scroll slide-up">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl h-96 w-full md:w-5/6">
              <Image
                src="/image.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="absolute bottom-12 right-0 bg-white shadow-lg rounded-lg p-6 w-3/4 md:w-1/2 z-20">
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                5+ Years Experience
              </h3>
              <p className="text-secondary/50">
                Creating innovative web solutions for modern businesses
              </p>
            </div>
          </div>

          {/* Right Column - Bio and Details */}
          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-bold text-primary">
              {`I'm`} <span className="text-secondary-foreground ">{name}</span>
              , a Web Developer
            </h3>
            <p className="text-primary">
              {aboutme}
              {/* <span className="font-medium">Company XYZ</span>. */}
            </p>

            <div className="space-y-4">
              {majorProjects.map((data, ind) => (
                <div key={ind} className="flex items-start animate-on-scroll">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">
                      {data.title}
                    </h4>
                    <p className="text-primary/50">
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* <div className="flex items-start animate-on-scroll">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-primary">UI/UX Design</h4>
                  <p className="text-primary/50">
                    Creating intuitive user interfaces with a focus on user
                    experience and accessibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start animate-on-scroll">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-primary">
                    Full Stack Development
                  </h4>
                  <p className="text-primary/50">
                    Implementing backend solutions with Node.js, Express, and
                    various database technologies.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
