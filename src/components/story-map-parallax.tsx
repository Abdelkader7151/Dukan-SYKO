"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function StoryMapParallax() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = wrapRef.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 90%", end: "bottom top", scrub: 1 },
      });
      tl.fromTo("[data-p-bg]", { yPercent: -6, scale: 1.04 }, { yPercent: 12, scale: 1.12, ease: "none" }, 0)
        .fromTo("[data-p-mid]", { yPercent: -2 }, { yPercent: 18, ease: "none" }, 0)
        .fromTo("[data-p-top]", { yPercent: 0 }, { yPercent: 24, ease: "none" }, 0);
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative h-72 sm:h-96 overflow-hidden border-y border-[rgba(240,217,168,0.08)]">
      {/* Layer 1: pattern */}
      <Image data-p-bg src="/illustrations/SyKo-14.png" alt=""
        fill className="object-cover opacity-25" sizes="100vw" />
      {/* Layer 2: panoramic map */}
      <Image data-p-mid src="/illustrations/SyKo-13.png" alt="SYKO story map panorama"
        fill className="object-cover object-top opacity-55" sizes="100vw" />
      {/* Layer 3: vector composite */}
      <Image data-p-top src="/illustrations/SyKo-Vector-SmartObjects-01.png" alt=""
        fill className="object-contain object-center opacity-25" sizes="100vw" />
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      {/* Label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <p className="eyebrow opacity-80">Syria → Brooklyn ← Korea</p>
      </div>
    </div>
  );
}
