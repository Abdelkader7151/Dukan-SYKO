import Image from "next/image";
import Link from "next/link";
import { restaurantInfo, dukanInfo, siteNav } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(240,217,168,0.1)] bg-[#0a0a0a]">
      {/* Cultural pattern strip */}
      <div className="h-1 bg-gradient-to-r from-[#cc2200] via-[#f5c842] to-[#cc2200]" />

      <div className="shell section-pad">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/branding/syko-logo-transparent.png"
                  alt="SYKO logo"
                  fill
                  sizes="48px"
                  className="object-contain rounded-md"
                />
              </div>
              <span className="font-brand text-4xl tracking-[0.1em] text-[#cc2200]">
                SYKO
              </span>
            </Link>
            <p className="text-sm text-[#888880] leading-6">
              Syrian and Korean cultures, crafted for Brooklyn.
            </p>
          </div>

          {/* Restaurant */}
          <div>
            <h3 className="eyebrow mb-4">Restaurant</h3>
            <address className="not-italic space-y-2 text-sm text-zinc-300">
              <p>{restaurantInfo.address}</p>
              <a
                href={`tel:${restaurantInfo.phone.replace(/\D/g, "")}`}
                className="block hover:text-[#f0d9a8] transition-colors"
              >
                {restaurantInfo.phone}
              </a>
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="block hover:text-[#f0d9a8] transition-colors"
              >
                {restaurantInfo.email}
              </a>
              <div className="pt-1 space-y-1 text-[#888880]">
                {restaurantInfo.hours.map((h) => (
                  <p key={h}>{h}</p>
                ))}
              </div>
            </address>
          </div>

          {/* Dukan */}
          <div>
            <h3 className="eyebrow mb-4">Dukan</h3>
            <address className="not-italic space-y-2 text-sm text-zinc-300">
              <p>{dukanInfo.address}</p>
              <a
                href={`tel:${dukanInfo.phone.replace(/\D/g, "")}`}
                className="block hover:text-[#f0d9a8] transition-colors"
              >
                {dukanInfo.phone}
              </a>
              <a
                href={`mailto:${dukanInfo.email}`}
                className="block hover:text-[#f0d9a8] transition-colors"
              >
                {dukanInfo.email}
              </a>
              <div className="pt-1 text-[#888880]">
                <p>{dukanInfo.hours[0]}</p>
              </div>
            </address>
          </div>

          {/* Nav */}
          <div>
            <h3 className="eyebrow mb-4">Navigate</h3>
            <nav className="space-y-2">
              {siteNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-zinc-300 hover:text-[#f0d9a8] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="divider-gold my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#888880]">
          <p>© 2026 SYKO Brooklyn. All rights reserved.</p>
          <p>Syrian and Korean cultures, crafted for Brooklyn.</p>
        </div>
      </div>
    </footer>
  );
}
