import Image from "next/image";
import { IconQuote, IconStarFilled } from "@tabler/icons-react";

type ClientItem = {
  image: string;
  clientName: string;
  company: string;
  text: string;
};

export const ParallaxScroll = ({ clientsText }: { clientsText: ClientItem[] }) => {
  return (
    <section className="section">
      <div className="mb-12 text-center">
        <span className="inline-block rounded-md bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          The relationships we build matter as much as the structures we build.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clientsText.slice(0, 6).map((client, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:border-primary hover:shadow-lg"
          >
            <IconQuote size={28} className="mb-4 text-primary" />
            <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
              {client.text}
            </p>
            <div className="mb-4 flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStarFilled key={i} size={16} />
              ))}
            </div>
            <div className="flex items-center gap-3 border-t border-border pt-5">
              <Image
                src={client.image}
                alt={client.clientName}
                width={44}
                height={44}
                className="size-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-foreground">{client.clientName}</p>
                <p className="text-xs text-muted">{client.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
