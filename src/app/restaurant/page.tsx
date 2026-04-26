import type { Metadata } from "next";
import Image from "next/image";
import { restaurantInfo } from "@/content/site-content";

const restaurantFeaturedItems = [
  { name: "SYKO Shawarma Plate", price: "$18", tag: "Best Seller", image: "/illustrations/SyKo-06.png" },
  { name: "Bulgogi Mezze Bowl", price: "$16", tag: "Fusion Pick", image: "/illustrations/SyKo-07.png" },
  { name: "Weekend Brunch Set", price: "$21", tag: "Brunch", image: "/illustrations/SyKo-05.png" },
  { name: "Bakery + Tea Combo", price: "$9", tag: "Quick Bite", image: "/illustrations/SyKo-08.png" },
];

export const metadata: Metadata = {
  title: "SYKO Restaurant | Syrian & Korean Cuisine in Brooklyn",
  description:
    "Explore SYKO Restaurant in Windsor Terrace, Brooklyn — Syrian and Korean halal cuisine with dine-in, delivery, and takeout.",
};

export default function RestaurantPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        {/* Pattern bg */}
        <div className="absolute inset-0 z-0">
          <Image src="/illustrations/SyKo-14.png" alt="" fill
            className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(204,34,0,0.18),transparent_65%)]" />
        </div>
        {/* Syrian ruins — left */}
        <div className="absolute left-0 bottom-0 w-64 h-48 illus opacity-25 hidden lg:block">
          <Image src="/illustrations/SyKo-08.png" alt="" fill sizes="256px" className="object-contain object-left-bottom" />
        </div>
        {/* Restaurant storefront — right */}
        <div className="absolute right-8 bottom-0 w-64 sm:w-80 h-52 sm:h-64 illus opacity-60 hidden md:block">
          <Image src="/illustrations/SyKo-06.png" alt="SYKO restaurant" fill sizes="(max-width: 640px) 256px, 320px" className="object-contain object-right-bottom" />
        </div>
        <div className="shell relative z-10 pb-16 pt-24">
          <p className="eyebrow mb-4">Restaurant</p>
          <h1 className="page-title">{restaurantInfo.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            {restaurantInfo.description}
          </p>
        </div>
      </section>

      {/* Menu + Hours */}
      <section className="shell section-pad">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Menu highlights */}
          <div className="card p-8">
            <p className="eyebrow mb-6">What We Serve</p>
            <div className="space-y-3">
              {restaurantInfo.menuHighlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl
                  border border-[rgba(240,217,168,0.1)] bg-[#050505]/60 px-5 py-4">
                  <span className="text-[#cc2200] text-lg">▸</span>
                  <span className="text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visit info */}
          <div className="space-y-5">
            <div className="card p-6">
              <p className="eyebrow mb-4">Hours</p>
              <div className="space-y-2">
                {restaurantInfo.hours.map((h) => (
                  <p key={h} className="text-sm text-zinc-300 leading-6">{h}</p>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <p className="eyebrow mb-4">Location &amp; Contact</p>
              <address className="not-italic space-y-2 text-sm text-zinc-300">
                <p>{restaurantInfo.address}</p>
                <a href={`tel:${restaurantInfo.phone.replace(/\D/g,"")}`}
                  className="block text-[#f0d9a8] hover:text-[#cc2200] transition-colors">
                  {restaurantInfo.phone}
                </a>
                <a href={`mailto:${restaurantInfo.email}`}
                  className="block text-[#888880] hover:text-[#f0d9a8] transition-colors">
                  {restaurantInfo.email}
                </a>
              </address>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="tel:+19294240423" className="btn-primary">Call Now</a>
                <a href="https://www.sykorestaurant.com" target="_blank"
                  rel="noopener noreferrer" className="btn-outline">
                  Order Online
                </a>
              </div>
            </div>

            {/* Korean temple decoration */}
            <div className="card p-4 flex justify-center overflow-hidden relative h-36">
              <Image src="/illustrations/SyKo-07.png" alt="Korean temple"
                fill sizes="100vw" className="object-contain p-4 opacity-40 illus" />
            </div>
          </div>
        </div>
      </section>

      {/* Product-forward showcase */}
      <section className="shell pb-14 sm:pb-20">
        <div className="mb-8">
          <p className="eyebrow mb-2">Order Favorites</p>
          <h2 className="section-headline text-[#f0d9a8]">Most Ordered Right Now</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {restaurantFeaturedItems.map((item) => (
            <article
              key={item.name}
              className="card card-red relative overflow-hidden p-4 group transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(204,34,0,0.45)]"
            >
              <div className="relative h-36 rounded-xl overflow-hidden bg-[#0b0b0b] border border-[rgba(240,217,168,0.12)]">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-3 illus opacity-85 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm text-zinc-100 font-medium">{item.name}</p>
                <p className="font-brand text-2xl text-[#cc2200] tracking-[0.06em]">{item.price}</p>
              </div>
              <p className="text-xs text-[#f5c842] mt-1">{item.tag}</p>
              <div className="mt-4 flex gap-2">
                <button type="button" className="btn-primary !py-2 !px-4 !text-xs">
                  Add to Order
                </button>
                <a href="tel:+19294240423" className="btn-outline !py-2 !px-4 !text-xs">
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
