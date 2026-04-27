"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { storyTimeline } from "@/content/site-content";

export function HomeStoryPreview() {
  const reduced = useReducedMotion();
  const panoramaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = panoramaRef.current;
    if (!el) return;

    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 85%", end: "bottom top", scrub: 0.8 },
    });
    tl.fromTo(el, { xPercent: -3 }, { xPercent: 3, ease: "none" });
    return () => { tl.kill(); };
  }, [reduced]);

  return (
    <section className="relative overflow-hidden">
      {/* Panoramic scroll scene */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <div ref={panoramaRef} className="absolute inset-0 w-[110%] -left-[5%]">
          <Image
            src="/illustrations/SyKo-13.webp"
            alt="SYKO story panorama – Syria Korea Brooklyn"
            fill
            className="object-cover object-top opacity-75"
            sizes="110vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Timeline */}
      <div className="shell -mt-2 pb-16">
        <div className="card p-6 sm:p-10">
          <p className="eyebrow mb-6">Migration · Culture · Cuisine</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {storyTimeline.map((item, i) => (
              <motion.article
                key={item.year}
                initial={reduced ? undefined : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative pl-4 border-l border-[rgba(204,34,0,0.35)]"
              >
                <p className="font-brand text-2xl tracking-[0.12em] text-[#cc2200]">{item.year}</p>
                <h3 className="font-semibold text-[#f0d9a8] mt-1 leading-tight">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-400">{item.detail}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/story/" className="btn-outline !border-[#f5c842] !text-[#f5c842] hover:!bg-[#f5c842] hover:!text-[#050505]">
              Read the Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
