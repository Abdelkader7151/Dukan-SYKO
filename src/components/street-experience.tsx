"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { restaurantInfo, dukanInfo } from "@/content/site-content";

export function StreetExperience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {

      // ─── 1. HERO: PIN + SYKO WORD RISES TO BECOME SECTION TITLE ───
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#s-hero",
          start: "top top",
          end: "+=620",
          pin: true,
          scrub: 0.45,
        },
      });
      heroTl
        .to("#hero-brand-stack", { y: -165, scale: 0.58, ease: "none" }, 0)
        .to("#hero-logo", { opacity: 0, scale: 0.72, y: -28, duration: 0.14, ease: "none" }, 0)
        .to("#hero-syko", { y: -8, scale: 1.03, opacity: 1, ease: "none" }, 0.1)
        .to("#hero-sub", { opacity: 0, y: -40, ease: "none" }, 0)
        .to("#hero-ctas", { opacity: 0, y: -30, ease: "none" }, 0)
        .fromTo(
          "#hero-next-title",
          { opacity: 0, y: 70 },
          { opacity: 1, y: 0, ease: "none" },
          0.45,
        );

      // ─── 2. BRAND SECTION ENTRANCES ───
      gsap.fromTo(
        "#restaurant-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: "#s-restaurant", start: "top 75%", once: true },
        },
      );
      gsap.fromTo(
        "#dukan-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: "#s-dukan", start: "top 75%", once: true },
        },
      );

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="overflow-x-hidden compact-street">

      {/* ═══════════════════════════════════════════════
          SECTION 1: HERO — THE STREET ENTRY
          Street view: signs on poles left & right,
          NYC skyline behind, Brooklyn Bridge depth
      ═══════════════════════════════════════════════ */}
      <section
        id="s-hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Cultural pattern very faint */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/illustrations/SyKo-14.webp" alt="" fill
            className="object-cover opacity-[0.07]" sizes="100vw" priority />
        </div>

        {/* NYC skyline far horizon */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] z-0 pointer-events-none">
          <Image src="/illustrations/SyKo-02.webp" alt="" fill
            className="object-cover object-bottom opacity-[0.18] illus" sizes="100vw" priority />
        </div>

        {/* Brooklyn Bridge — deep background center */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] z-0 pointer-events-none">
          <Image src="/illustrations/SyKo-12.webp" alt="" fill
            className="object-cover object-bottom opacity-[0.12] illus" sizes="100vw" priority />
        </div>

        {/* Red vanishing-point glow */}
        <div className="absolute inset-0 z-0 pointer-events-none
          bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(204,34,0,0.22),transparent_65%)]" />

        {/* LEFT street pole — Little Syria sign */}
        <div id="sign-syria"
          className="absolute left-4 sm:left-10 md:left-20 top-[30%] -translate-y-1/2 w-28 sm:w-40 md:w-52 z-20 illus hidden sm:block">
          <Image src="/illustrations/SyKo-10.webp" alt="Little Syria" width={220} height={310}
            className="w-full h-auto drop-shadow-[0_8px_24px_rgba(204,34,0,0.5)]" />
        </div>

        {/* RIGHT street pole — Korea Way sign */}
        <div id="sign-korea"
          className="absolute right-4 sm:right-10 md:right-20 top-[30%] -translate-y-1/2 w-28 sm:w-40 md:w-52 z-20 illus hidden sm:block">
          <Image src="/illustrations/SyKo-11.webp" alt="Korea Way" width={220} height={310}
            className="w-full h-auto drop-shadow-[0_8px_24px_rgba(245,200,66,0.4)]" />
        </div>

        {/* Hero brand stack: intentionally outside the CTA container */}
        <div
          id="hero-brand-stack"
          className="absolute left-1/2 top-[12%] sm:top-[17%] -translate-x-1/2 z-10 flex flex-col items-center px-3 w-full"
        >
          {/* Logo mark */}
          <div id="hero-logo" className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 mb-4 sm:mb-5">
            <Image
              src="/branding/syko-logo-transparent.webp"
              alt="SYKO"
              fill
              sizes="(max-width: 640px) 144px, (max-width: 768px) 160px, 176px"
              className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.65)]"
            />
          </div>

          {/* SYKO word — this element moves up to become the next section's title */}
          <div id="hero-syko">
            <div className="syko-word-street-wrap">
              <h1 className="syko-word-street" aria-label="SYKO">
                <span className="syko-word-shadow">
                  <span className="syko-word-color">
                    <span className="syko-word-letter">
                      <span className="syko-word-size">
                        <span className="syko-word-weight">
                          <span className="syko-word-family">
                            <span className="syko-word-style">SYKO</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </h1>
            </div>
          </div>
          <p id="hero-sub" className="syko-subword mt-3">
            <span className="hero-sub-accent">Sy</span>rian &amp; <span className="hero-sub-accent">Ko</span>rean Cuisine
          </p>
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-10 text-center px-4 pt-[56vh] sm:pt-[60vh]">
          {/* CTAs */}
          <div id="hero-ctas" className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link href="/restaurant/" className="btn-primary">Go to Restaurant</Link>
            <Link href="/dukan/" className="btn-outline">Go to Dukan</Link>
          </div>

          {/* This fades IN as SYKO rises — becomes the next section reveal */}
          <div id="hero-next-title" className="opacity-0 absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none px-4">
            <p className="eyebrow mb-4">Where the street begins</p>
            <h2 className="section-headline text-[#f0d9a8]">
              Two cultures.<br />One Brooklyn street.
            </h2>
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2: THE RESTAURANT — LEFT BUILDING
          Street-style: words on left, image on right
      ═══════════════════════════════════════════════ */}
      <section id="s-restaurant" className="relative overflow-hidden bg-[#050505]">
        <div className="divider-gold" />

        {/* Background pattern tint */}
        <div className="absolute inset-0 z-0 pointer-events-none
          bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(204,34,0,0.12),transparent_60%)]" />

        <div id="restaurant-card"
          className="shell section-pad grid gap-6 lg:grid-cols-[1fr_1fr] items-center">

          {/* LEFT: Street words */}
          <div className="space-y-6">
            <div>
              <p className="eyebrow mb-3">The Restaurant</p>
              <h2 className="page-title !text-[#cc2200]">SYKO</h2>
              <p className="syko-subword mt-1 text-[#f0d9a8]">Restaurant</p>
            </div>
            <p className="text-zinc-300 text-sm leading-7 max-w-md">
              {restaurantInfo.description}
            </p>

            {/* Street-sign style menu list */}
            <div className="space-y-2">
              {restaurantInfo.menuHighlights.map((item) => (
                <div key={item}
                  className="flex items-center gap-3 border-l-2 border-[#cc2200] pl-4">
                  <span className="text-[#f0d9a8] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1 text-xs text-zinc-500">
              {restaurantInfo.hours.map((h) => <p key={h}>{h}</p>)}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/restaurant/" className="btn-primary">Full Menu</Link>
              <a href="tel:+19294414306" className="btn-outline">
                {restaurantInfo.phone}
              </a>
            </div>
          </div>

          {/* RIGHT: Storefront + ruins art */}
          <div className="relative h-72 sm:h-[28rem]">
            {/* Syrian ruins behind */}
            <div className="absolute left-0 bottom-0 w-2/3 h-full pointer-events-none illus">
              <Image src="/illustrations/SyKo-08.webp" alt="" fill
                sizes="(max-width: 1024px) 66vw, 33vw"
                className="object-contain object-left-bottom opacity-20" />
            </div>
            {/* Main storefront */}
            <div className="absolute right-0 bottom-0 w-full h-full illus">
              <Image src="/illustrations/SyKo-06.webp" alt="SYKO restaurant storefront"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-right-bottom opacity-85" />
            </div>
            {/* Address label overlay */}
            <div className="absolute top-4 left-4 bg-[#0e0e0e]/80 border border-[rgba(204,34,0,0.3)]
              rounded-xl px-4 py-3 backdrop-blur-sm">
              <p className="text-xs text-zinc-400">📍 {restaurantInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4: THE DUKAN — RIGHT BUILDING
          Words on right, logo on left
      ═══════════════════════════════════════════════ */}
      <section id="s-dukan" className="relative overflow-hidden bg-[#050505]">
        <div className="divider-gold" />

        <div className="absolute inset-0 z-0 pointer-events-none
          bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(245,200,66,0.08),transparent_60%)]" />

        <div id="dukan-card"
          className="shell section-pad grid gap-6 lg:grid-cols-[1fr_1fr] items-center">

          {/* LEFT: Dukan logo art */}
          <div className="relative h-64 sm:h-96 order-2 lg:order-1">
            {/* Korean temple behind */}
            <div className="absolute inset-0 pointer-events-none illus">
              <Image src="/illustrations/SyKo-07.webp" alt="" fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-left-bottom opacity-20" />
            </div>
            {/* Dukan fez logo large */}
            <div className="absolute inset-0 pointer-events-none">
              <Image src="/branding/syko-logo-transparent.webp" alt="Dukan SYKO" fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6 opacity-80" />
            </div>
            {/* Korean heart accent */}
            <div className="absolute right-4 top-4 w-20 pointer-events-none illus">
              <Image src="/illustrations/SyKo-05.webp" alt="" width={120} height={140}
                className="w-full h-auto opacity-75" />
            </div>
          </div>

          {/* RIGHT: Words on right side */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <p className="eyebrow mb-3">The Marketplace</p>
              <h2 className="page-title !text-[#f0d9a8]">DUKAN</h2>
              <p className="font-brand text-2xl tracking-[0.2em] text-[#f5c842] mt-1">SYKO</p>
            </div>
            <p className="text-zinc-300 text-sm leading-7 max-w-md">
              {dukanInfo.description}
            </p>

            {/* Category grid — street stall labels */}
            <div className="grid grid-cols-2 gap-2">
              {dukanInfo.categories.slice(0, 8).map((cat) => (
                <div key={cat}
                  className="border border-[rgba(245,200,66,0.2)] rounded-lg px-3 py-2
                    text-xs text-zinc-300 bg-[rgba(245,200,66,0.04)]">
                  {cat}
                </div>
              ))}
            </div>

            <p className="text-xs text-zinc-500">{dukanInfo.hours[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dukan/" className="btn-gold">Browse Dukan</Link>
              <a href="tel:+19294414306" className="btn-outline">{dukanInfo.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4: WALK THE STORY (SINGLE MAP)
      ═══════════════════════════════════════════════ */}
      <section id="s-pano" className="relative bg-[#050505] overflow-hidden">
        <div className="divider-gold" />

        {/* Top label */}
        <div className="shell py-10 relative z-10">
          <p className="font-brand text-center text-4xl sm:text-6xl tracking-[0.08em] text-[#f0d9a8]">
            Walk the Story
          </p>
        </div>

        {/* Single static story map image (full horizontal width) */}
        <div className="pb-10 sm:pb-14">
          <Image
            src="/maps/syki-story-map.webp"
            alt="SYKI story map"
            width={4096}
            height={847}
            sizes="100vw"
            className="block w-full h-auto"
            priority={false}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5: END OF STREET — CONTACT/VISIT
          Grand Army Plaza arch as the end landmark
      ═══════════════════════════════════════════════ */}
      <section className="relative bg-[#050505] overflow-hidden">
        <div className="divider-gold" />

        {/* Grand Army arch — end of street landmark */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/illustrations/SyKo-04.webp" alt="" fill
            className="object-contain object-bottom opacity-15 illus" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        </div>

        <div className="shell section-pad relative z-10">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">End of the Street</p>
            <h2 className="section-headline text-[#f0d9a8]">You've arrived.<br />Come find us.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {/* Restaurant */}
            <div className="card card-red p-7 text-center">
              <p className="eyebrow mb-3">Restaurant</p>
              <h3 className="font-brand text-4xl tracking-[0.08em] text-[#cc2200]">SYKO</h3>
              <address className="not-italic mt-4 space-y-2 text-sm text-zinc-300">
                <p className="text-[#f0d9a8]">{restaurantInfo.address}</p>
                <p>{restaurantInfo.hours[0]}</p>
              </address>
              <a href="tel:+19294414306" className="btn-primary mt-5 inline-flex">
                📞 {restaurantInfo.phone}
              </a>
            </div>

            {/* Dukan */}
            <div className="card p-7 text-center">
              <p className="eyebrow mb-3">Marketplace</p>
              <h3 className="font-brand text-4xl tracking-[0.08em] text-[#f5c842]">DUKAN</h3>
              <address className="not-italic mt-4 space-y-2 text-sm text-zinc-300">
                <p className="text-[#f0d9a8]">{dukanInfo.address}</p>
                <p>{dukanInfo.hours[0]}</p>
              </address>
              <a href="tel:+19294414306" className="btn-gold mt-5 inline-flex">
                📞 {dukanInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
