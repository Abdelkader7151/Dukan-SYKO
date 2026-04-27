import type { Metadata } from "next";
import Image from "next/image";
import { StoryTimeline } from "@/components/story-timeline";
import { StoryMapParallax } from "@/components/story-map-parallax";
import { storyTimeline } from "@/content/site-content";

export const metadata: Metadata = {
  title: "SYKO",
  description:
    "Follow the SYKO cultural story from Syrian and Korean migration history to the Brooklyn restaurant and marketplace.",
};

export default function StoryPage() {
  return (
    <div className="pt-16">
      <section className="relative min-h-[62vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/illustrations/SyKo-01.webp"
            alt="Syria Korea origin map"
            fill className="object-contain object-center opacity-20" sizes="100vw" />
          <Image
            src="/illustrations/SyKo-14.webp"
            alt=""
            fill
            className="object-cover opacity-10" sizes="100vw" />
          <Image
            src="/illustrations/SyKo-12.webp"
            alt=""
            fill
            className="object-cover object-bottom opacity-[0.12]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 to-[#050505]" />
        </div>

        <div className="absolute left-8 top-28 w-40 illus opacity-55 hidden lg:block">
          <Image src="/illustrations/SyKo-10.webp" alt="Little Syria" width={200} height={280} className="w-full h-auto" />
        </div>
        <div className="absolute right-12 top-28 w-40 illus opacity-55 hidden lg:block">
          <Image src="/illustrations/SyKo-11.webp" alt="Korea Way" width={200} height={280} className="w-full h-auto" />
        </div>

        <div className="shell relative z-10 pb-16 pt-32">
          <p className="eyebrow mb-4">Our Story</p>
          <h1 className="page-title">How SYKO Started</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            From early Syrian and Korean migration history to one neighborhood destination in
            Brooklyn, this is the journey that became SYKO.
          </p>
        </div>
      </section>

      <section className="shell py-10 sm:py-14">
        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
          <article className="relative aspect-[16/10]">
            <Image src="/branding/quote-frame.webp" alt="" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-[21%_16%_20%_16%] flex items-center justify-center">
              <p className="text-center text-[clamp(0.95rem,1.6vw,1.3rem)] font-semibold leading-[1.35] text-zinc-100">
                During the early 1880s, the first Syrians emigrated to the U.S., which led to the
                creation of Little Syria on Washington Street.
              </p>
            </div>
          </article>
          <article className="relative aspect-[16/10]">
            <Image src="/branding/quote-frame.webp" alt="" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-[21%_16%_20%_16%] flex items-center justify-center">
              <p className="text-center text-[clamp(0.95rem,1.6vw,1.3rem)] font-semibold leading-[1.35] text-zinc-100">
                The first Koreans arrived in 1884, followed by more in 1903. They established
                Korean communities in Queens and Manhattan.
              </p>
            </div>
          </article>
        </div>
      </section>

      <StoryMapParallax />

      <section className="shell section-pad">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="eyebrow mb-6">Historical Timeline</p>
            <StoryTimeline />
          </div>

          <div className="space-y-6">
            <div className="card card-red p-8">
              <p className="eyebrow mb-3">How It Became a Place</p>
              <h2 className="section-headline text-[#f0d9a8]">From History to Neighborhood Home</h2>
              <p className="mt-4 text-zinc-300 leading-7 text-sm">
                SYKO brings Syrian and Korean flavors into one identity shaped by Brooklyn street
                culture, shared hospitality, and the stories of migration.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="relative h-28 rounded-xl overflow-hidden border border-[rgba(240,217,168,0.1)] bg-[#0b0b0b]">
                  <Image src="/illustrations/SyKo-08.webp" alt="Syrian heritage" fill className="object-contain p-3 illus opacity-70" />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden border border-[rgba(240,217,168,0.1)] bg-[#0b0b0b]">
                  <Image src="/illustrations/SyKo-07.webp" alt="Korean heritage" fill className="object-contain p-3 illus opacity-70" />
                </div>
              </div>
            </div>

            <div className="card p-8">
              <p className="eyebrow mb-4">The Start of SYKO</p>
              <p className="text-zinc-300 leading-7 text-sm">
                {storyTimeline[2].detail} {storyTimeline[3].detail}
              </p>
              <div className="mt-5 relative h-40 rounded-xl overflow-hidden border border-[rgba(240,217,168,0.1)]">
                <Image src="/illustrations/SyKo-06.webp" alt="SYKO restaurant" fill className="object-contain p-4 illus opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
