"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { restaurantInfo, dukanInfo } from "@/content/site-content";

export function HomeQuickContact() {
  const reduced = useReducedMotion();

  return (
    <section className="shell pb-24">
      <div className="relative card overflow-hidden">
        {/* Vector composite as background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/illustrations/SyKo-Vector-SmartObjects-01.webp"
            alt=""
            fill
            className="object-cover object-center opacity-[0.11]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/80" />
        </div>

        <div className="relative z-10 p-8 sm:p-12 grid gap-8 sm:grid-cols-2">
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow mb-3">SYKO Restaurant</p>
            <p className="text-zinc-200 text-sm leading-6">{restaurantInfo.address}</p>
            <p className="text-zinc-400 text-sm mt-2">{restaurantInfo.hours[0]}</p>
            <a
              href="tel:+19294414306"
              className="btn-primary mt-5 inline-flex"
            >
              📞 Call Restaurant
            </a>
          </motion.div>

          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <p className="eyebrow mb-3">Dukan SYKO</p>
            <p className="text-zinc-200 text-sm leading-6">{dukanInfo.address}</p>
            <p className="text-zinc-400 text-sm mt-2">{dukanInfo.hours[0]}</p>
            <a
              href="tel:+19294414306"
              className="btn-gold mt-5 inline-flex"
            >
              📞 Call Dukan
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
