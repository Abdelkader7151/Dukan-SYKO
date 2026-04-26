import Image from "next/image";

export default function Loading() {
  return (
    <div className="syko-loader-screen" role="status" aria-live="polite" aria-label="Loading page">
      <div className="syko-loader-wrap">
        <div className="syko-loader-ring" />
        <div className="syko-loader-logo">
          <Image
            src="/branding/syko-logo-transparent.png"
            alt="SYKO"
            fill
            sizes="112px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
