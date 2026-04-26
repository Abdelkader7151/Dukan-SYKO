import type { Metadata } from "next";
import Image from "next/image";
import { dukanInfo } from "@/content/site-content";

const dukanFeaturedItems = [
  { name: "Syrian Pantry Bundle", price: "$34", tag: "Bundle Deal", image: "/illustrations/SyKo-08.png" },
  { name: "Korean Essentials Box", price: "$29", tag: "Top Pick", image: "/illustrations/SyKo-07.png" },
  { name: "Bakery & Tea Starter", price: "$12", tag: "Daily Favorite", image: "/illustrations/SyKo-05.png" },
  { name: "Weekly New Arrivals", price: "New", tag: "Just In", image: "/illustrations/SyKo-06.png" },
];

export const metadata: Metadata = {
  title: "Dukan SYKO Marketplace | Brooklyn Middle Eastern & Asian Grocery",
  description:
    "Browse Dukan SYKO Marketplace in Brooklyn — Middle Eastern and Asian pantry essentials, weekly sales, and new arrivals.",
};

export default function DukanPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/illustrations/SyKo-14.png" alt="" fill
            className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_30%,rgba(245,200,66,0.12),transparent_65%)]" />
        </div>
        {/* Dukan logo large hero mark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 illus opacity-35 hidden md:block">
          <Image src="/branding/dukan-syko-from-pdf.png" alt="Dukan SYKO logo"
            fill sizes="(max-width: 640px) 256px, 320px" className="object-contain pr-6" />
        </div>
        {/* Korean temple bg */}
        <div className="absolute left-4 bottom-0 w-52 h-40 illus opacity-15 hidden lg:block">
          <Image src="/illustrations/SyKo-07.png" alt="" fill sizes="208px" className="object-contain object-left-bottom" />
        </div>
        <div className="shell relative z-10 pb-16 pt-24">
          <p className="eyebrow mb-4">Marketplace</p>
          <h1 className="page-title">Dukan SYKO</h1>
          <p className="font-brand text-2xl tracking-[0.2em] text-[#f5c842] mt-1">
            Middle Eastern &amp; Asian Marketplace
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            {dukanInfo.description}
          </p>
        </div>
      </section>

      {/* Product-forward marketplace strip */}
      <section className="shell pb-14 sm:pb-20">
        <div className="mb-8">
          <p className="eyebrow mb-2">Shop Highlights</p>
          <h2 className="section-headline text-[#f0d9a8]">Featured Market Picks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dukanFeaturedItems.map((item) => (
            <article
              key={item.name}
              className="card relative overflow-hidden p-4 group transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(245,200,66,0.38)]"
            >
              <div className="relative h-36 rounded-xl overflow-hidden bg-[#0b0b0b] border border-[rgba(240,217,168,0.12)]">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-3 illus opacity-85 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm text-zinc-100 font-medium">{item.name}</p>
                <p className="font-brand text-2xl text-[#f5c842] tracking-[0.06em]">{item.price}</p>
              </div>
              <p className="text-xs text-[#cc2200] mt-1">{item.tag}</p>
              <div className="mt-4 flex gap-2">
                <button type="button" className="btn-gold !py-2 !px-4 !text-xs">
                  Add to Cart
                </button>
                <a href="tel:+19294414306" className="btn-outline !py-2 !px-4 !text-xs">
                  Call
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
