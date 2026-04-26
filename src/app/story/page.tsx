import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StoryTimeline } from "@/components/story-timeline";
import { StoryMapParallax } from "@/components/story-map-parallax";
import { storyTimeline } from "@/content/site-content";

export const metadata: Metadata = {
  title: "SYKO Story | Syrian and Korean Cultural Journey to Brooklyn",
  description:
    "Follow the SYKO cultural story from Syrian and Korean migration history to the Brooklyn restaurant and marketplace.",
};

export default function StoryPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {/* Asia map + pattern layers */}
        <div className="absolute inset-0 z-0">
          <Image src="/illustrations/SyKo-01.png" alt="Syria Korea origin map"
            fill className="object-contain object-center opacity-20" sizes="100vw" />
          <Image src="/illustrations/SyKo-14.png" alt="" fill
            className="object-cover opacity-10" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 to-[#050505]" />
        </div>

        {/* Street signs */}
        <div className="absolute left-8 top-28 w-40 illus opacity-55 hidden lg:block">
          <Image src="/illustrations/SyKo-10.png" alt="Little Syria" width={200} height={280} className="w-full h-auto" />
        </div>
        <div className="absolute right-12 top-28 w-40 illus opacity-55 hidden lg:block">
          <Image src="/illustrations/SyKo-11.png" alt="Korea Way" width={200} height={280} className="w-full h-auto" />
        </div>

        <div className="shell relative z-10 pb-16 pt-32">
          <p className="eyebrow mb-4">Our Story</p>
          <h1 className="page-title">Syrian × Korean<br />in Brooklyn</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            A journey from two sides of the world to one table in Windsor Terrace.
            This is the story of migration, cuisine, and community.
          </p>
        </div>
      </section>

      {/* Panoramic scroll map */}
      <StoryMapParallax />

      {/* Timeline */}
      <section className="shell section-pad">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow mb-6">Timeline</p>
            <StoryTimeline />
          </div>

          {/* Story narrative with illustrations */}
          <div className="space-y-6">
            <div className="card p-8">
              <p className="eyebrow mb-4">Migration &amp; Roots</p>
              <p className="text-zinc-300 leading-7 text-sm">
                {storyTimeline[0].detail} {storyTimeline[1].detail}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="relative h-28 rounded-xl overflow-hidden border border-[rgba(240,217,168,0.1)]">
                  <Image src="/illustrations/SyKo-08.png" alt="Syrian heritage"
                    fill className="object-contain p-3 illus opacity-60" />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden border border-[rgba(240,217,168,0.1)]">
                  <Image src="/illustrations/SyKo-07.png" alt="Korean heritage"
                    fill className="object-contain p-3 illus opacity-60" />
                </div>
              </div>
            </div>

            <div className="card p-8">
              <p className="eyebrow mb-4">Where Two Worlds Met</p>
              <p className="text-zinc-300 leading-7 text-sm">
                {storyTimeline[2].detail} {storyTimeline[3].detail}
              </p>
              <div className="mt-5 relative h-40 rounded-xl overflow-hidden border border-[rgba(240,217,168,0.1)]">
                <Image src="/illustrations/SyKo-06.png" alt="SYKO restaurant"
                  fill className="object-contain p-4 illus opacity-70" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
