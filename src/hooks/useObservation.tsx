"use client";
import { useEffect, useRef, useCallback } from "react";

function useObservation(once: boolean = false) {
  const observer = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((node: Element | null) => {
    if (!node) return;

    if (!observer.current) {
      observer.current = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("inserted");
            entry.target.classList.add("animate");
          } else {
            if (once) {
              entry.target.classList.remove("animate");
            } else if (entry.target.classList.contains("animate"))
              obs.unobserve(entry.target);
          }
        });
      });
    }

    observer.current.observe(node);
  }, []);

  useEffect(() => {
    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return observe;
}

export default useObservation;
