"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { storyTimeline } from "@/content/site-content";

export function StoryTimeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = ref.current;
    if (!container) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = container.querySelectorAll<HTMLElement>("[data-card]");
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
            delay: i * 0.04,
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className="space-y-4">
      {storyTimeline.map((item) => (
        <article key={item.year}
          data-card
          className="card p-5 transition-all duration-300
            hover:-translate-y-1 hover:border-[rgba(204,34,0,0.4)]"
        >
          <p className="font-brand text-2xl tracking-[0.15em] text-[#cc2200]">{item.year}</p>
          <h3 className="font-semibold text-[#f0d9a8] mt-1 leading-tight">{item.title}</h3>
          <p className="mt-2 text-xs leading-5 text-zinc-400">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
