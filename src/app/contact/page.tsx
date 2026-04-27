import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SYKO",
  description: "Reach SYKO at our Brooklyn location.",
};

const phoneNumber = "(929) 441-4306";
const phoneHref = "+19294414306";
const address = "214a Prospect Park W, Brooklyn, NY 11215, United States";
const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d285.9233732835219!2d-73.9806640881821!3d40.66029012984064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b78ea7bc5e9%3A0x68f09419701d57d7!2sDukan%20SYKO%20Marketplace!5e0!3m2!1sen!2seg!4v1777281327867!5m2!1sen!2seg";

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="shell section-pad">
        <div className="mx-auto max-w-5xl space-y-8">
          <header className="text-center space-y-3">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Reach Us</h1>
            <p className="mx-auto max-w-2xl text-sm text-zinc-300">
              Get in touch with us directly or visit us at our Brooklyn location.
            </p>
          </header>

          <article className="card card-red p-8 text-center">
            <p className="eyebrow mb-4">Reach Us</p>
            <a
              href={`tel:${phoneHref}`}
              className="block font-brand text-4xl tracking-[0.08em] text-[#cc2200] hover:text-[#f0d9a8] transition-colors"
            >
              {phoneNumber}
            </a>
            <p className="mt-4 text-[#f0d9a8] text-base leading-relaxed">{address}</p>
          </article>

          <section className="card overflow-hidden">
            <div className="border-b border-[rgba(240,217,168,0.1)] px-6 py-4">
              <h2 className="font-brand text-2xl tracking-[0.08em] text-[#f0d9a8]">Our Location</h2>
            </div>
            <div className="mx-auto h-[450px] w-full max-w-3xl bg-[#0b0b0b]">
              <iframe
                src={mapEmbedSrc}
                title="SYKO location on Google Maps"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
