import { brands, products } from "@/lib/products";

export default function MarcasPage() {
  const count = (b: string) =>
    products.filter((p) => p.brand.toUpperCase() === b.toUpperCase()).length;

  return (
    <div>
      <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="mono-label text-ember mb-3">[ 05 — Marcas ]</div>
          <h1 className="display-md">
            Marcas{" "}
            <span className="serif-italic normal-case text-bone-dim">
              del catálogo
            </span>
          </h1>
          <p className="text-bone-dim mt-2">
            {brands.length} marcas · aparecen como filtro en el sitio público.
          </p>
        </div>
        <button className="btn-ember">+ Nueva marca</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {brands.map((b, i) => (
          <div
            key={b}
            className="bg-ink-2 border border-hairline p-5 hover:border-ember/40 transition group"
          >
            <div className="mono-label text-bone-dim mb-3">
              [ {String(i + 1).padStart(2, "0")} ]
            </div>
            <div className="font-display font-extrabold text-2xl mb-2">
              {b}
            </div>
            <div className="flex items-baseline justify-between pt-3 hairline-t">
              <div className="mono-label text-bone-dim">
                {count(b)} productos
              </div>
              <button className="mono-label text-bone-dim hover:text-ember opacity-0 group-hover:opacity-100 transition">
                Editar →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
