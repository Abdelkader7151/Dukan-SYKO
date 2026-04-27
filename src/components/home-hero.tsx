"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.1, ease: "easeOut" as const, delay },
});

export function HomeHero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">

      {/* ── Background layers ── */}
      {/* Cultural pattern (SyKo-14) as full-screen bg */}
      <motion.div
        {...(reduced ? {} : { initial: { opacity: 0 }, animate: { opacity: 0.18 }, transition: { duration: 2 } })}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/illustrations/SyKo-14.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Red radial glow — brand colour */}
      <div className="absolute inset-0 z-0 pointer-events-none
        bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(204,34,0,0.22),transparent_65%),
            radial-gradient(ellipse_45%_40%_at_75%_60%,rgba(245,200,66,0.10),transparent_55%)]" />

      {/* Panoramic story map at bottom */}
      <motion.div
        {...(reduced ? {} : fadeIn(0.6))}
        className="absolute bottom-0 left-0 right-0 z-0 h-56 sm:h-72 opacity-30"
      >
        <Image
          src="/illustrations/SyKo-13.webp"
          alt="SYKO story panorama"
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </motion.div>

      {/* ── Floating illustration elements ── */}
      {/* Brooklyn Bridge — right */}
      <motion.div
        {...(reduced ? {} : {
          initial: { opacity: 0, x: 60, rotate: 3 },
          animate: { opacity: 0.55, x: 0, rotate: 1 },
          transition: { duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
        })}
        className="absolute -right-8 top-1/2 -translate-y-1/2 w-80 sm:w-[28rem] z-0 illus hidden sm:block"
      >
        <Image src="/illustrations/SyKo-12.webp" alt="Brooklyn Bridge" width={500} height={380} className="w-full h-auto" />
      </motion.div>

      {/* Asia map — left background */}
      <motion.div
        {...(reduced ? {} : {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 0.22, x: 0 },
          transition: { duration: 1.4, delay: 1.0 },
        })}
        className="absolute left-0 top-1/4 w-72 sm:w-96 z-0 illus hidden lg:block"
      >
        <Image src="/illustrations/SyKo-01.webp" alt="Syria Korea map" width={500} height={600} className="w-full h-auto" />
      </motion.div>

      {/* Korean finger heart — top right floating */}
      <motion.div
        {...(reduced ? {} : {
          initial: { opacity: 0, y: -30, rotate: -15 },
          animate: { opacity: 0.9, y: 0, rotate: -8 },
          transition: { duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] },
        })}
        className="absolute right-6 top-28 w-20 sm:w-28 z-10 illus hidden md:block"
      >
        <Image src="/illustrations/SyKo-05.webp" alt="Korean heart" width={160} height={190} className="w-full h-auto" />
      </motion.div>

      {/* Dotted journey path */}
      <motion.div
        {...(reduced ? {} : fadeIn(1.5))}
        className="absolute left-[18%] top-[12%] w-12 sm:w-20 z-10 illus opacity-30 hidden lg:block"
      >
        <Image src="/illustrations/SyKo-03.webp" alt="" width={80} height={200} className="w-full h-auto" />
      </motion.div>

      {/* ── Main content ── */}
      <div className="shell relative z-10 py-24">
        <div className="max-w-4xl">

          <motion.p
            {...(reduced ? {} : fadeUp(0.1))}
            className="eyebrow mb-6"
          >
            Brooklyn, New York
          </motion.p>

          <motion.div {...(reduced ? {} : fadeUp(0.25))}>
            <h1 className="syko-word">SYKO</h1>
            <p className="syko-subword mt-2">Syrian &amp; Korean Cuisine</p>
          </motion.div>

          <motion.h2
            {...(reduced ? {} : fadeUp(0.45))}
            className="section-headline mt-8 max-w-2xl"
          >
            Two cultures.<br />
            <span className="text-[#f0d9a8]">One neighborhood destination.</span>
          </motion.h2>

          <motion.p
            {...(reduced ? {} : fadeUp(0.6))}
            className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg"
          >
            Where Syrian warmth and Korean craft meet in Brooklyn — through a
            restaurant, a dukan marketplace, and a shared love of food culture.
          </motion.p>

          <motion.div
            {...(reduced ? {} : fadeUp(0.75))}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/restaurant/" className="btn-primary">
              Go to Restaurant
            </Link>
            <Link href="/dukan/" className="btn-outline">
              Go to Dukan
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...(reduced ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 2, duration: 1 } })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-[0.3em] text-[#888880] uppercase">Scroll</span>
        <motion.div
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#cc2200] to-transparent"
        />
      </motion.div>
    </section>
  );
}
