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
  const [homeInHero, setHomeInHero] = useState(false);
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

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(false), 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousActive = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const focusFirst = () => {
      const root = document.getElementById("mobile-menu-dialog");
      const first = root?.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    };

    document.body.style.overflow = "hidden";
    const t = window.setTimeout(focusFirst, 0);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = previousOverflow;
      previousActive?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") {
      const t = window.setTimeout(() => setHomeInHero(false), 0);
      return () => window.clearTimeout(t);
    }

    const hero = document.getElementById("s-hero");
    if (!hero) {
      const t = window.setTimeout(() => setHomeInHero(false), 0);
      return () => window.clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHomeInHero(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const inHero = pathname === "/" ? homeInHero : false;
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
                src="/branding/syko-logo-transparent.webp"
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
              href="tel:+19294414306"
              className="btn-primary !py-2.5 !px-5 !text-sm ml-2"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu-dialog"
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-50 top-20 left-4 right-4 md:hidden rounded-2xl border border-[rgba(240,217,168,0.14)] bg-[rgba(5,5,5,0.92)] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  e.preventDefault();
                  setOpen(false);
                  return;
                }

                if (e.key !== "Tab") return;

                const root = e.currentTarget;
                const focusables = Array.from(
                  root.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                  ),
                ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

                if (focusables.length === 0) return;

                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                const active = document.activeElement as HTMLElement | null;

                if (e.shiftKey) {
                  if (active === first || !root.contains(active)) {
                    e.preventDefault();
                    last.focus();
                  }
                  return;
                }

                if (active === last) {
                  e.preventDefault();
                  first.focus();
                }
              }}
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">Menu</p>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(240,217,168,0.18)] text-[#f0d9a8] hover:bg-[rgba(240,217,168,0.08)] transition-colors"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    <span aria-hidden="true" className="text-2xl leading-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="divider-gold my-4" />

                <nav className="flex flex-col gap-4">
                  {siteNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        if (item.href === "/") scrollHomeTop(e);
                        setOpen(false);
                      }}
                      className="font-brand text-3xl tracking-[0.12em] text-[#f0d9a8] hover:text-[#cc2200] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <a
                  href="tel:+19294414306"
                  className="btn-primary mt-6 w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  Call Restaurant
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
