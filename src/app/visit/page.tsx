import type { Metadata } from "next";
import Image from "next/image";
import { restaurantInfo, dukanInfo } from "@/content/site-content";

export const metadata: Metadata = {
  title: "SYKO",
  description:
    "Find addresses, phone numbers, and hours for SYKO Restaurant and Dukan SYKO Marketplace in Brooklyn.",
};

export default function VisitPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-56 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/illustrations/SyKo-12.webp" alt="Brooklyn Bridge"
            fill className="object-cover opacity-20 illus" sizes="100vw" />
          <Image src="/illustrations/SyKo-04.webp" alt="" fill
            className="object-contain object-right opacity-15 illus hidden md:block" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 to-[#050505]" />
        </div>
        <div className="shell relative z-10 pb-10">
          <p className="eyebrow mb-2">Visit</p>
          <h1 className="page-title">Find Us</h1>
        </div>
      </section>

      {/* Location cards */}
      <section className="shell section-pad">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Restaurant */}
          <article className="card card-red p-8 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-36 h-36 illus opacity-15">
              <Image src="/illustrations/SyKo-09.webp" alt="" fill className="object-contain" />
            </div>
            <p className="eyebrow mb-4">Restaurant</p>
            <h2 className="font-brand text-4xl tracking-[0.08em] text-[#cc2200]">SYKO Restaurant</h2>
            <div className="mt-5 space-y-2 text-sm text-zinc-300">
              <p className="text-[#f0d9a8] font-medium">{restaurantInfo.address}</p>
              <a href={`tel:${restaurantInfo.phone.replace(/\D/g,"")}`}
                className="block hover:text-[#f0d9a8] transition-colors">{restaurantInfo.phone}</a>
              <a href={`mailto:${restaurantInfo.email}`}
                className="block hover:text-[#f0d9a8] transition-colors">{restaurantInfo.email}</a>
            </div>
            <div className="mt-4 space-y-1 text-xs text-zinc-400">
              {restaurantInfo.hours.map((h) => <p key={h}>{h}</p>)}
            </div>
            <a href="tel:+19294414306" className="btn-primary mt-6 inline-flex">Call Restaurant</a>
          </article>

          {/* Dukan */}
          <article className="card p-8 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-28 h-28 illus opacity-20">
              <Image src="/illustrations/SyKo-05.webp" alt="" fill className="object-contain" />
            </div>
            <p className="eyebrow mb-4">Marketplace</p>
            <h2 className="font-brand text-4xl tracking-[0.08em] text-[#f0d9a8]">Dukan SYKO</h2>
            <div className="mt-5 space-y-2 text-sm text-zinc-300">
              <p className="text-[#f0d9a8] font-medium">{dukanInfo.address}</p>
              <a href={`tel:${dukanInfo.phone.replace(/\D/g,"")}`}
                className="block hover:text-[#f5c842] transition-colors">{dukanInfo.phone}</a>
              <a href={`mailto:${dukanInfo.email}`}
                className="block hover:text-[#f5c842] transition-colors">{dukanInfo.email}</a>
            </div>
            <div className="mt-4 text-xs text-zinc-400">
              <p>{dukanInfo.hours[0]}</p>
            </div>
            <a href="tel:+19294414306" className="btn-gold mt-6 inline-flex">Call Dukan</a>
          </article>
        </div>

        {/* Brooklyn Bridge art */}
        <div className="mt-10 relative h-52 rounded-2xl overflow-hidden border border-[rgba(240,217,168,0.1)]">
          <Image src="/illustrations/SyKo-12.webp" alt="Brooklyn Bridge — we are in Brooklyn"
            fill className="object-cover object-center opacity-35 illus" sizes="100vw" />
          <Image src="/illustrations/SyKo-02.webp" alt="New York skyline"
            fill className="object-contain object-right opacity-20 illus" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/80 to-transparent" />
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <p className="font-brand text-3xl tracking-[0.1em] text-[#cc2200]">Brooklyn, NY</p>
            <p className="text-[#f0d9a8] text-sm mt-1">Prospect Park W</p>
          </div>
        </div>
      </section>
    </div>
  );
}
