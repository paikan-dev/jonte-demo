import Image from "next/image";
import { products, asset } from "@/lib/products";

export default function MediaPage() {
  const allImages = products.flatMap((p) =>
    p.images.map((src) => ({ src, name: p.name, sku: p.sku }))
  );

  return (
    <div>
      <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="mono-label text-ember mb-3">[ 06 — Media ]</div>
          <h1 className="display-md">
            Biblioteca{" "}
            <span className="serif-italic normal-case text-bone-dim">
              de imágenes
            </span>
          </h1>
          <p className="text-bone-dim mt-2">
            {allImages.length} imágenes · 2.4 GB usados de 10 GB
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-ghost">Crear carpeta</button>
          <button className="btn-ember">↥ Subir imágenes</button>
        </div>
      </div>

      {/* Dropzone rápido */}
      <div className="bg-ink-2 border-2 border-dashed border-hairline hover:border-ember transition p-8 text-center mb-8 cursor-pointer">
        <div className="text-ember text-4xl mb-2">↥</div>
        <div className="font-display font-medium">
          Arrastrá imágenes acá para subirlas
        </div>
        <div className="mono-label text-bone-dim mt-2">
          PNG · JPG · WEBP · máx 5 MB
        </div>
      </div>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2">
        {allImages.slice(0, 48).map((img, i) => (
          <div
            key={i}
            className="aspect-square bg-ink-3 relative overflow-hidden group cursor-pointer border border-hairline hover:border-ember transition"
          >
            <Image
              src={asset(img.src)}
              alt={img.name}
              fill
              sizes="200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
              <div className="mono-label text-ember">{img.sku}</div>
              <div className="text-xs text-bone truncate">{img.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
