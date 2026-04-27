"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type {
  RestaurantMenuCategory,
  RestaurantMenuChoice,
  RestaurantMenuItem,
} from "@/content/site-content";

type MenuFilter = "All" | RestaurantMenuCategory;
type MenuChoice = RestaurantMenuChoice;

const categoryOrder: RestaurantMenuCategory[] = [
  "Cold Appetizer",
  "Hot Appetizer",
  "Salads",
  "Sandwiches",
  "Main Course",
  "Desserts",
];

type RestaurantMenuProps = {
  items: RestaurantMenuItem[];
};

export default function RestaurantMenu({ items }: RestaurantMenuProps) {
  const [activeFilter, setActiveFilter] = useState<MenuFilter>("All");
  const [activeMenuChoice, setActiveMenuChoice] = useState<MenuChoice>("Syrian Menu");
  const [showSideFlags, setShowSideFlags] = useState(true);

  const menuItems = useMemo(() => {
    return items.filter((item) =>
      activeMenuChoice === "Syrian Menu"
        ? !item.menuChoice || item.menuChoice === "Syrian Menu"
        : item.menuChoice === activeMenuChoice,
    );
  }, [activeMenuChoice, items]);

  const availableCategories = useMemo(
    () => categoryOrder.filter((category) => menuItems.some((item) => item.category === category)),
    [menuItems],
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return menuItems;
    }

    return menuItems.filter((item) => item.category === activeFilter);
  }, [activeFilter, menuItems]);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY) < 8) return;

      // Hide while scrolling down, show while scrolling up.
      setShowSideFlags(currentY < lastY || currentY < 100);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="shell pb-14 sm:pb-20">
      <div className="pointer-events-none fixed inset-y-0 left-0 right-0 z-30 hidden xl:block">
        <div
          className={`absolute left-3 top-1/2 w-[300px] -translate-y-1/2 transition-all duration-300 ${
            showSideFlags ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          }`}
        >
          <div className="relative aspect-[16/10]">
            <Image src="/branding/quote-frame.webp" alt="" fill className="object-contain" sizes="300px" />
            <div className="absolute inset-[21%_16%_20%_16%] flex items-center justify-center">
              <p className="text-center text-base font-semibold leading-6 text-zinc-100">
                During the early 1880s, the first Syrians emigrated to the U.S., helping shape
                Little Syria on Washington Street.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`absolute right-3 top-1/2 w-[300px] -translate-y-1/2 transition-all duration-300 ${
            showSideFlags ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
        >
          <div className="relative aspect-[16/10]">
            <Image src="/branding/quote-frame.webp" alt="" fill className="object-contain" sizes="300px" />
            <div className="absolute inset-[21%_16%_20%_16%] flex items-center justify-center">
              <p className="text-center text-base font-semibold leading-6 text-zinc-100">
                The first Koreans arrived in 1884, followed by more in 1903, establishing Korean
                Town in Queens and Manhattan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="section-headline text-[#f0d9a8]">Restaurant Products</h2>
      </div>

      <div className="mb-6 border-b border-[rgba(240,217,168,0.2)]">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {(["Syrian Menu", "Korean Menu", "SYKO FUSION"] as const).map((choice) => (
            <button
              key={choice}
              type="button"
              onClick={() => setActiveMenuChoice(choice)}
              className={`relative border-b-2 px-3 py-2.5 text-sm transition sm:text-base ${
                activeMenuChoice === choice
                  ? "border-[#15a8a0] text-zinc-100"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span
                className={
                  choice === "Syrian Menu"
                    ? "font-brand tracking-[0.08em] text-[#f0d9a8]"
                    : choice === "Korean Menu"
                      ? "font-semibold tracking-[0.12em] text-[#c8e9ff]"
                      : "font-semibold tracking-[0.18em] text-[#f5c842]"
                }
              >
                {choice}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveFilter("All")}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            activeFilter === "All"
              ? "border-[#cc2200] bg-[#cc2200] text-white"
              : "border-[rgba(240,217,168,0.28)] bg-[#0d0d0d] text-zinc-200 hover:border-[rgba(240,217,168,0.45)] hover:text-[#f0d9a8]"
          }`}
        >
          All
        </button>

        {availableCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveFilter(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeFilter === category
                ? "border-[#cc2200] bg-[#cc2200] text-white"
                : "border-[rgba(240,217,168,0.28)] bg-[#0d0d0d] text-zinc-200 hover:border-[rgba(240,217,168,0.45)] hover:text-[#f0d9a8]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 mb-4 border-t border-[rgba(240,217,168,0.12)] pt-4 sm:mt-8 sm:mb-6">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
          {activeMenuChoice} · {activeFilter === "All" ? "All Categories" : activeFilter} · {filteredItems.length} items
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <article
            key={`${item.category}-${item.name}`}
            className="card card-red relative overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(204,34,0,0.45)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#f5c842]">{item.category}</p>
                <h3 className="mt-1 text-xl font-semibold text-zinc-100">{item.name}</h3>
              </div>
              <p className="font-brand text-3xl leading-none text-[#cc2200]">{item.price}</p>
            </div>

            <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>

            {item.note && <p className="mt-3 text-xs leading-5 text-[#f0d9a8]">{item.note}</p>}

            {item.tags && item.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={`${item.name}-${tag}`}
                    className="rounded-full border border-[rgba(240,217,168,0.28)] bg-[#0a0a0a] px-2.5 py-1 text-[11px] font-medium text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              <a href="tel:+19294414306" className="btn-primary !px-4 !py-2 !text-xs">
                Order
              </a>
              <a href="tel:+19294414306" className="btn-outline !px-4 !py-2 !text-xs">
                Call
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
