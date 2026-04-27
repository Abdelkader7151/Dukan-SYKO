import type { Metadata } from "next";
import Image from "next/image";
import RestaurantMenu from "@/components/restaurant-menu";
import { restaurantInfo, restaurantMenuItems } from "@/content/site-content";

export const metadata: Metadata = {
  title: "SYKO",
  description:
    "Explore SYKO Restaurant in Brooklyn on Prospect Park W — Syrian and Korean halal cuisine with dine-in, delivery, and takeout.",
};

export default function RestaurantPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        {/* Pattern bg */}
        <div className="absolute inset-0 z-0">
          <Image src="/illustrations/SyKo-14.webp" alt="" fill
            className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(204,34,0,0.18),transparent_65%)]" />
        </div>
        {/* Syrian ruins — left */}
        <div className="absolute left-0 bottom-0 w-64 h-48 illus opacity-25 hidden lg:block">
          <Image src="/illustrations/SyKo-08.webp" alt="" fill sizes="256px" className="object-contain object-left-bottom" />
        </div>
        {/* Restaurant storefront — right */}
        <div className="absolute right-8 bottom-0 w-64 sm:w-80 h-52 sm:h-64 illus opacity-60 hidden md:block">
          <Image src="/illustrations/SyKo-06.webp" alt="SYKO restaurant" fill sizes="(max-width: 640px) 256px, 320px" className="object-contain object-right-bottom" />
        </div>
        <div className="shell relative z-10 pb-16 pt-24">
          <p className="eyebrow mb-4">Restaurant</p>
          <h1 className="page-title">{restaurantInfo.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            {restaurantInfo.description}
          </p>
        </div>
      </section>

      <RestaurantMenu items={restaurantMenuItems} />
    </div>
  );
}
