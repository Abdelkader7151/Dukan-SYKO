import Image from "next/image";
import Link from "next/link";
import { restaurantInfo, dukanInfo } from "@/content/site-content";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17.5 6.5h.01"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function YelpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 7.5 12 12l4-4.5M12 12v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="https://www.instagram.com/syko_restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SYKO on Instagram"
                className="group inline-flex items-center gap-3 rounded-xl pr-2 transition-colors hover:bg-[rgba(240,217,168,0.06)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(240,217,168,0.18)] text-[#f0d9a8] group-hover:bg-[rgba(240,217,168,0.08)] transition-colors">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5]">
                  Instgram
                </span>
              </a>
              <a
                href="https://www.yelp.com/biz/syko-brooklyn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SYKO on Yelp"
                className="group inline-flex items-center gap-3 rounded-xl pr-2 transition-colors hover:bg-[rgba(240,217,168,0.06)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(240,217,168,0.18)] text-[#f0d9a8] group-hover:bg-[rgba(240,217,168,0.08)] transition-colors">
                  <YelpIcon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium tracking-wide text-[#d32323]">
                  Yelp
                </span>
              </a>
            </div>
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
