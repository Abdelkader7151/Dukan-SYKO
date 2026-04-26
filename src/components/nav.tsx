"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteNav } from "@/content/site-content";

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [inHero, setInHero] = useState(false);
  const scrollHomeTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setInHero(false);
      return;
    }

    const hero = document.getElementById("s-hero");
    if (!hero) {
      setInHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInHero(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const showNavLogo = pathname !== "/" || !inHero || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "border-b border-[rgba(240,217,168,0.1)] bg-[rgba(5,5,5,0.88)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="shell flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={scrollHomeTop}>
            <motion.div
              initial={false}
              animate={{
                opacity: showNavLogo ? 1 : 0,
                scale: showNavLogo ? 1 : 0.65,
                y: showNavLogo ? 0 : -6,
              }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                rotate: [0, -10, 10, -8, 8, -5, 5, 0],
                transition: { duration: 0.6 },
              }}
              className="relative w-14 h-14 sm:w-20 sm:h-20 shrink-0"
            >
              <Image
                src="/branding/syko-logo-transparent.png"
                alt="SYKO logo"
                fill
                sizes="(max-width: 640px) 56px, 80px"
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {siteNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={item.href === "/" ? scrollHomeTop : undefined}
                className={`text-base font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                  pathname === item.href
                    ? "text-[#f0d9a8]"
                    : "text-zinc-300 hover:text-[#f0d9a8]"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#cc2200]"
                  />
                )}
              </Link>
            ))}
            <a
              href="tel:+19294240423"
              className="btn-primary !py-2.5 !px-5 !text-sm ml-2"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-[#f0d9a8] transition-transform duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#f0d9a8] transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#f0d9a8] transition-transform duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-[#050505]/97 flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {siteNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={item.href === "/" ? scrollHomeTop : undefined}
                className="font-brand text-5xl tracking-[0.12em] text-[#f0d9a8] hover:text-[#cc2200] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+19294240423"
              className="btn-primary mt-4"
            >
              Call Restaurant
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
