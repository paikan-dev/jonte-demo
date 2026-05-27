import { categories, products } from "@/lib/products";

export default function CategoriasPage() {
  const count = (slug: string) =>
    products.filter((p) => p.category === slug).length;

  return (
    <div>
      <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="mono-label text-ember mb-3">[ 04 — Categorías ]</div>
          <h1 className="display-md">
            Organización{" "}
            <span className="serif-italic normal-case text-bone-dim">
              del catálogo
            </span>
          </h1>
          <p className="text-bone-dim mt-2">
            Administrá las categorías principales del sitio.
          </p>
        </div>
        <button className="btn-ember">+ Nueva categoría</button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {categories.map((c, i) => (
          <div
            key={c.slug}
            className="bg-ink-2 border border-hairline p-6 hover:border-ember/40 transition group"
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="mono-label text-ember mb-2">
                  [ {String(i + 1).padStart(2, "0")} ]
                </div>
                <h3 className="font-display font-extrabold text-3xl">
                  {c.label}
                </h3>
                <p className="serif-italic text-bone-dim mt-1">
                  {c.description}
                </p>
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                <button className="mono-label text-bone-dim hover:text-ember px-2">
                  Editar
                </button>
                <button className="mono-label text-bone-dim hover:text-ember px-2">
                  ⋯
                </button>
              </div>
            </div>
            <div className="flex items-baseline gap-6 pt-5 hairline-t">
              <div>
                <div className="font-display font-bold text-2xl">
                  {count(c.slug)}
                </div>
                <div className="mono-label text-bone-dim">productos</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-ember">
                  /{c.slug}
                </div>
                <div className="mono-label text-bone-dim">slug</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl">
                  {["pública", "pública", "pública", "oculta"][i] ?? "pública"}
                </div>
                <div className="mono-label text-bone-dim">visibilidad</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
