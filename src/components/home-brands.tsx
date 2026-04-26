"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { restaurantInfo, dukanInfo } from "@/content/site-content";

export function HomeBrands() {
  const reduced = useReducedMotion();

  return (
    <section className="shell section-pad">
      <motion.p
        initial={reduced ? undefined : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="eyebrow text-center mb-12"
      >
        Choose Your Experience
      </motion.p>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* ── Restaurant card ── */}
        <motion.article
          initial={reduced ? undefined : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="card card-red relative overflow-hidden group"
        >
          {/* Restaurant storefront illustration */}
          <div className="absolute -right-6 bottom-0 w-56 sm:w-72 h-48 sm:h-60 illus opacity-35
            transition-opacity duration-500 group-hover:opacity-55">
            <Image
              src="/illustrations/SyKo-06.png"
              alt="SYKO restaurant"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
          {/* Syrian ruins motif — subtle */}
          <div className="absolute left-0 bottom-0 w-32 h-32 illus opacity-10">
            <Image src="/illustrations/SyKo-08.png" alt="" fill className="object-contain object-left-bottom" />
          </div>

          <div className="relative z-10 p-8 sm:p-10">
            <span className="eyebrow">Restaurant</span>
            <h2 className="font-brand text-5xl sm:text-6xl tracking-[0.07em] text-[#cc2200] mt-3 leading-none">
              SYKO
            </h2>
            <p className="text-[#f5c842] font-brand text-xl tracking-[0.15em] mt-1">Syrian &amp; Korean</p>
            <p className="mt-5 text-zinc-300 text-sm leading-6 max-w-sm">
              {restaurantInfo.description}
            </p>
            <div className="mt-4 space-y-1 text-xs text-[#888880]">
              {restaurantInfo.hours.map((h) => <p key={h}>{h}</p>)}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/restaurant" className="btn-primary">Explore Menu</Link>
              <a href="tel:+19294240423" className="btn-outline !border-[#cc2200] !text-[#cc2200] hover:!bg-[#cc2200] hover:!text-white">
                Call Now
              </a>
            </div>
          </div>
        </motion.article>

        {/* ── Dukan card ── */}
        <motion.article
          initial={reduced ? undefined : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="card relative overflow-hidden group"
        >
          {/* Dukan logo large */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-36 sm:w-48 h-36 sm:h-48
            illus opacity-30 transition-opacity duration-500 group-hover:opacity-55">
            <Image
              src="/branding/syko-logo-transparent.png"
              alt="Dukan SYKO"
              fill
              className="object-contain"
            />
          </div>
          {/* Korean temple motif */}
          <div className="absolute left-0 bottom-0 w-36 h-28 illus opacity-10">
            <Image src="/illustrations/SyKo-07.png" alt="" fill className="object-contain object-left-bottom" />
          </div>

          <div className="relative z-10 p-8 sm:p-10">
            <span className="eyebrow">Marketplace</span>
            <h2 className="font-brand text-5xl sm:text-6xl tracking-[0.07em] text-[#f0d9a8] mt-3 leading-none">
              DUKAN
            </h2>
            <p className="text-[#f5c842] font-brand text-xl tracking-[0.15em] mt-1">SYKO Marketplace</p>
            <p className="mt-5 text-zinc-300 text-sm leading-6 max-w-sm">
              {dukanInfo.description}
            </p>
            <div className="mt-4 text-xs text-[#888880]">
              <p>{dukanInfo.hours[0]}</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/dukan" className="btn-gold">Browse Categories</Link>
              <a href="tel:+19294414306" className="btn-outline">
                Call Dukan
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
