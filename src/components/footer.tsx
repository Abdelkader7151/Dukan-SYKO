import Image from "next/image";
import Link from "next/link";
import { restaurantInfo, dukanInfo } from "@/content/site-content";

export function SiteFooter() {
  const sharedAddress = dukanInfo.address;
  const sharedPhone = dukanInfo.phone;
  const sharedPhoneHref = sharedPhone.replace(/\D/g, "");

  return (
    <footer className="border-t border-[rgba(240,217,168,0.1)] bg-[#0a0a0a]">
      {/* Cultural pattern strip */}
      <div className="h-1 bg-gradient-to-r from-[#cc2200] via-[#f5c842] to-[#cc2200]" />

      <div className="shell py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div>
            <Link href="/" className="mb-3 flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/branding/syko-logo-transparent.webp"
                  alt="SYKO logo"
                  fill
                  sizes="40px"
                  className="object-contain rounded-md"
                />
              </div>
              <span className="font-brand text-3xl tracking-[0.1em] text-[#cc2200]">
                SYKO
              </span>
            </Link>
            <p className="text-sm text-[#888880] leading-6">
              Syrian and Korean cultures, crafted for Brooklyn.
            </p>
          </div>

          {/* Shared contact */}
          <div>
            <h3 className="eyebrow mb-3">Address &amp; Number</h3>
            <address className="not-italic space-y-2 text-sm text-zinc-300">
              <p>{sharedAddress}</p>
              <a
                href={`tel:${sharedPhoneHref}`}
                className="block hover:text-[#f0d9a8] transition-colors"
              >
                {sharedPhone}
              </a>
            </address>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="eyebrow mb-3">Opening Hours</h3>
            <div className="space-y-3 text-sm text-zinc-300">
              <div>
                <p className="text-[#f0d9a8]">Restaurant</p>
                <div className="mt-1 space-y-1 text-[#888880]">
                  {restaurantInfo.hours.map((h) => (
                    <p key={h}>{h}</p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[#f0d9a8]">Dukan</p>
                <div className="mt-1 text-[#888880]">
                  <p>{dukanInfo.hours[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-gold my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#888880]">
          <p>© 2026 SYKO Brooklyn. All rights reserved.</p>
          <p>Syrian and Korean cultures, crafted for Brooklyn.</p>
        </div>
      </div>
    </footer>
  );
}
