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
      <Image data-p-bg src="/illustrations/SyKo-14.webp" alt=""
        fill className="object-cover opacity-25" sizes="100vw" />
      {/* Layer 2: panoramic map */}
      <Image data-p-mid src="/illustrations/SyKo-13.webp" alt="SYKO story map panorama"
        fill className="object-cover object-top opacity-55" sizes="100vw" />
      {/* Layer 3: vector composite */}
      <Image data-p-top src="/illustrations/SyKo-Vector-SmartObjects-01.webp" alt=""
        fill className="object-contain object-center opacity-25" sizes="100vw" />
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]">
        <div className="absolute inset-0 z-10 px-4 py-4 sm:px-8 sm:py-6">
          <div className="mx-auto grid h-full max-w-5xl place-items-center gap-4 lg:grid-cols-2 lg:gap-6">
            <article className="relative w-full max-w-[520px] aspect-[16/9]">
              <Image
                src="/branding/quote-frame.webp"
                alt=""
                fill
                className="object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.65)]"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-[21%_16%_20%_16%] flex items-center justify-center">
                <p className="text-center text-[clamp(1.05rem,1.8vw,1.45rem)] font-semibold leading-[1.35] text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.9)]">
                  During the early 1880s, the first Syrians emigrated to the U.S., which led to the
                  creation of Little Syria on Washington Street.
                </p>
              </div>
            </article>

            <article className="relative w-full max-w-[520px] aspect-[16/9]">
              <Image
                src="/branding/quote-frame.webp"
                alt=""
                fill
                className="object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.65)]"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-[21%_16%_20%_16%] flex items-center justify-center">
                <p className="text-center text-[clamp(1.05rem,1.8vw,1.45rem)] font-semibold leading-[1.35] text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.9)]">
                  The first Koreans arrived in 1884, followed by more in 1903. They established
                  Korean communities in Queens and Manhattan.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* Label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-20">
        <p className="eyebrow opacity-80">Syria → Brooklyn ← Korea</p>
      </div>
    </div>
  );
}
