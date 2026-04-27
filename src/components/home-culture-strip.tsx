"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const icons = [
  { src: "/illustrations/SyKo-10.webp", alt: "Little Syria street sign", label: "Little Syria" },
  { src: "/illustrations/SyKo-11.webp", alt: "Korea Way street sign", label: "Korea Way" },
  { src: "/illustrations/SyKo-04.webp", alt: "Grand Army Plaza", label: "Brooklyn" },
];

export function HomeCultureStrip() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-[rgba(240,217,168,0.08)]">
      {/* Warm pattern bg at low opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/illustrations/SyKo-14.webp"
          alt=""
          fill
          className="object-cover object-center opacity-[0.07]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="shell section-pad relative z-10">
        {/* Statement */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="eyebrow mb-4">The Story Behind the Name</p>
          <h2 className="section-headline">
            Where <span className="text-[#cc2200]">Syria</span> met{" "}
            <span className="text-[#f5c842]">Korea</span>,{" "}
            <span className="text-[#f0d9a8]">Brooklyn</span> became home.
          </h2>
          <p className="mt-5 text-zinc-300 leading-7">
            In 2022 two families — one Syrian, one Korean — brought their
            culinary traditions together in Brooklyn on Prospect Park W. By 2024 the love
            spread into Dukan SYKO, a neighborhood marketplace celebrating both
            pantry cultures.
          </p>
        </motion.div>

        {/* Illustration trio */}
        <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-2xl mx-auto">
          {icons.map(({ src, alt, label }, i) => (
            <motion.div
              key={label}
              initial={reduced ? undefined : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 illus">
                <Image src={src} alt={alt} fill className="object-contain" />
              </div>
              <span className="eyebrow text-[0.7rem]">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
