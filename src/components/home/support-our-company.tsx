import Image from "next/image";

export default function SupportCompany() {
  const logos = [
    "/images/business-partners/preview.jpg",
    "/images/business-partners/logo.png",
    "/images/business-partners/preview.jpg",
    "/images/business-partners/logo.png",
    "/images/business-partners/preview.jpg",
    "/images/business-partners/logo.png",
  ];

  const duplicated = [...logos, ...logos, ...logos];

  return (
    <section className="section">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Trusted by Leading Developers &amp; Partners
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          We partner with developers, architects, and suppliers who share our commitment
          to quality and reliability.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-surface py-8">
        <div className="flex animate-marquee items-center gap-16">
          {duplicated.map((src, index) => (
            <div
              key={index}
              className="flex h-14 w-36 shrink-0 items-center justify-center opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={140}
                height={56}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
