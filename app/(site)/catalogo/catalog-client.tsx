"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  products,
  categories,
  brands,
  Category,
} from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export function CatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCat = searchParams.get("cat") as Category | null;

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<Category | "todos">(
    initialCat ?? "todos"
  );
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [sort, setSort] = useState<"relevancia" | "precio-asc" | "precio-desc">(
    "relevancia"
  );

  useEffect(() => {
    const cat = searchParams.get("cat") as Category | null;
    setActiveCat(cat ?? "todos");
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCat !== "todos") list = list.filter((p) => p.category === activeCat);
    if (activeBrand)
      list = list.filter(
        (p) => p.brand.toLowerCase() === activeBrand.toLowerCase()
      );
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q)
      );
    }
    if (sort === "precio-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "precio-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCat, activeBrand, query, sort]);

  const changeCat = (cat: Category | "todos") => {
    setActiveCat(cat);
    if (cat === "todos") router.replace("/catalogo");
    else router.replace(`/catalogo?cat=${cat}`);
  };

  return (
    <div className="pt-32 md:pt-44">
      {/* Header editorial */}
      <section className="px-6 md:px-10 pb-12 md:pb-16">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="mono-label text-ember mb-4">
              [ {String(filtered.length).padStart(3, "0")} resultados ]
            </div>
            <h1 className="display-lg">
              Catálogo
              <br />
              <span className="serif-italic normal-case text-bone-dim">
                completo
              </span>
            </h1>
          </div>
          <div className="max-w-md flex-1 min-w-[280px]">
            <div className="mono-label text-bone-dim mb-2">Buscar</div>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Casco, campera, marca..."
                className="w-full bg-transparent border-b-2 border-hairline focus:border-ember transition-colors outline-none py-3 pr-10 text-lg font-mono placeholder:text-bone-dim/60"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-ember">
                ⌕
              </span>
            </div>
          </div>
        </div>

        <div className="edge-fade" />
      </section>

      {/* Filtros */}
      <section className="px-6 md:px-10 pb-12">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Sidebar filtros */}
          <aside className="md:col-span-3 space-y-10">
            <div>
              <div className="mono-label text-ember mb-4">/ Categorías</div>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => changeCat("todos")}
                    className={`w-full text-left font-display text-xl font-bold transition ${
                      activeCat === "todos"
                        ? "text-ember"
                        : "text-bone hover:text-ember/80"
                    }`}
                  >
                    Todos
                  </button>
                </li>
                {categories.map((c) => (
                  <li key={c.slug}>
                    <button
                      onClick={() => changeCat(c.slug)}
                      className={`w-full text-left font-display text-xl font-bold transition ${
                        activeCat === c.slug
                          ? "text-ember"
                          : "text-bone hover:text-ember/80"
                      }`}
                    >
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mono-label text-ember mb-4">/ Marcas</div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveBrand(null)}
                  className={`mono-label border px-3 py-1.5 transition ${
                    !activeBrand
                      ? "border-ember text-ember"
                      : "border-hairline text-bone-dim hover:border-bone"
                  }`}
                >
                  Todas
                </button>
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setActiveBrand(b)}
                    className={`mono-label border px-3 py-1.5 transition ${
                      activeBrand === b
                        ? "border-ember text-ember"
                        : "border-hairline text-bone-dim hover:border-bone"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mono-label text-ember mb-4">/ Ordenar</div>
              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value as typeof sort)
                }
                className="w-full bg-ink-2 border border-hairline text-bone px-3 py-2 font-mono text-sm outline-none focus:border-ember"
              >
                <option value="relevancia">Relevancia</option>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
              </select>
            </div>
          </aside>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-40 text-center">
                <div className="display-md text-bone-dim mb-4">Sin resultados</div>
                <p className="serif-italic text-bone-dim">
                  Probá con otra búsqueda o categoría.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
