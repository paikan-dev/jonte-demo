import Image from "next/image";
import { partners } from "@/lib/products";

export function Partners() {
  return (
    <section className="px-6 md:px-10 py-24 hairline-t">
      <div className="mb-14 flex items-end justify-between flex-wrap gap-6">
        <div>
          <div className="mono-label text-ember mb-3">[ 07 — Partners ]</div>
          <h2 className="display-lg">
            Trabajamos
            <br />
            <span className="serif-italic normal-case text-bone-dim">
              con los mejores
            </span>
          </h2>
        </div>
        <p className="serif-italic text-bone-dim text-xl max-w-md">
          Marcas que comparten nuestra obsesión por la calidad y la
          durabilidad.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {partners.map((p, i) => (
          <div
            key={p.name}
            className="group relative aspect-[4/3] bg-ink-2 border border-hairline hover:border-ember/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  sizes="240px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{
                    filter: "grayscale(1) brightness(1.6) contrast(1.1)",
                  }}
                />
              </div>
            </div>

            {/* Hover overlay: color + info */}
            <div className="absolute inset-0 bg-ember/0 group-hover:bg-ember/5 transition-all duration-500" />

            {/* Corner marker */}
            <div className="absolute top-3 left-3 mono-label text-bone-dim">
              [ {String(i + 1).padStart(2, "0")} ]
            </div>
            <div className="absolute bottom-3 right-3 mono-label text-bone-dim group-hover:text-ember transition">
              {p.name.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
