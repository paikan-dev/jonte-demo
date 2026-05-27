import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "@/lib/products";

export default function AdminProducts() {
  return (
    <div>
      <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="mono-label text-ember mb-3">[ 02 — Productos ]</div>
          <h1 className="display-md">
            Catálogo{" "}
            <span className="serif-italic normal-case text-bone-dim">
              completo
            </span>
          </h1>
          <p className="text-bone-dim mt-2">
            1.024 productos activos · mostrando primeros 20
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/importar" className="btn-ghost">
            ↥ Importar Excel
          </Link>
          <Link href="/admin/productos/nuevo" className="btn-ember">
            + Nuevo producto
          </Link>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-3 mb-6 bg-ink-2 border border-hairline p-4">
        <div className="relative flex-1 min-w-[240px]">
          <input
            type="text"
            placeholder="Buscar por SKU, nombre o marca..."
            className="w-full bg-ink border border-hairline px-4 py-2.5 text-sm font-mono outline-none focus:border-ember"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ember">
            ⌕
          </span>
        </div>
        <select className="bg-ink border border-hairline px-3 py-2.5 text-sm font-mono outline-none focus:border-ember">
          <option>Todas las categorías</option>
          <option>Cascos</option>
          <option>Indumentaria</option>
          <option>Accesorios</option>
          <option>Repuestos</option>
        </select>
        <select className="bg-ink border border-hairline px-3 py-2.5 text-sm font-mono outline-none focus:border-ember">
          <option>Todas las marcas</option>
          <option>LS2</option>
          <option>HJC</option>
          <option>Alpinestars</option>
        </select>
        <select className="bg-ink border border-hairline px-3 py-2.5 text-sm font-mono outline-none focus:border-ember">
          <option>Estado: Todos</option>
          <option>Publicado</option>
          <option>Borrador</option>
          <option>Sin stock</option>
        </select>
        <button className="mono-label border border-hairline hover:border-ember px-4 py-2.5">
          Exportar ↧
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-ink-2 border border-hairline overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="hairline-b text-left">
              <th className="p-4 w-10">
                <input type="checkbox" className="accent-ember" />
              </th>
              <th className="p-4 mono-label text-bone-dim">Producto</th>
              <th className="p-4 mono-label text-bone-dim">SKU</th>
              <th className="p-4 mono-label text-bone-dim">Categoría</th>
              <th className="p-4 mono-label text-bone-dim">Marca</th>
              <th className="p-4 mono-label text-bone-dim text-right">Precio</th>
              <th className="p-4 mono-label text-bone-dim text-center">Stock</th>
              <th className="p-4 mono-label text-bone-dim text-center">Estado</th>
              <th className="p-4 mono-label text-bone-dim"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => {
              const stock = (i * 7) % 40;
              const status =
                stock === 0 ? "sin-stock" : stock < 5 ? "bajo" : "ok";
              return (
                <tr
                  key={p.id}
                  className="hairline-b hover:bg-ink-3/50 transition group"
                >
                  <td className="p-4">
                    <input type="checkbox" className="accent-ember" />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 bg-ink-3 shrink-0 overflow-hidden">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium truncate max-w-[240px]">
                          {p.name}
                        </div>
                        <div className="mono-label text-bone-dim truncate max-w-[240px]">
                          {p.tagline}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-bone-dim">{p.sku}</td>
                  <td className="p-4 capitalize text-bone-dim">{p.category}</td>
                  <td className="p-4 font-mono text-bone-dim">{p.brand}</td>
                  <td className="p-4 text-right font-mono font-medium">
                    {formatPrice(p.price)}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`font-mono ${
                        status === "sin-stock"
                          ? "text-ember"
                          : status === "bajo"
                          ? "text-signal"
                          : "text-bone"
                      }`}
                    >
                      {stock}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`mono-label px-2 py-1 inline-block ${
                        status === "sin-stock"
                          ? "bg-ember/15 text-ember"
                          : status === "bajo"
                          ? "bg-signal/15 text-signal"
                          : "bg-bone/10 text-bone"
                      }`}
                    >
                      {status === "sin-stock"
                        ? "Sin stock"
                        : status === "bajo"
                        ? "Bajo"
                        : "Activo"}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex gap-1 justify-end opacity-0 group-hover:opacity-100 transition">
                      <button className="mono-label text-bone-dim hover:text-ember px-2">
                        Editar
                      </button>
                      <button className="mono-label text-bone-dim hover:text-ember px-2">
                        ⋯
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Paginación */}
        <div className="p-4 hairline-t flex items-center justify-between">
          <div className="mono-label text-bone-dim">
            Mostrando 1 — 20 de 1.024
          </div>
          <div className="flex gap-1">
            <button className="mono-label w-9 h-9 border border-hairline hover:border-ember">
              ←
            </button>
            <button className="mono-label w-9 h-9 bg-ember text-bone">1</button>
            <button className="mono-label w-9 h-9 border border-hairline hover:border-ember">
              2
            </button>
            <button className="mono-label w-9 h-9 border border-hairline hover:border-ember">
              3
            </button>
            <span className="mono-label w-9 h-9 flex items-center justify-center text-bone-dim">
              ···
            </span>
            <button className="mono-label w-9 h-9 border border-hairline hover:border-ember">
              52
            </button>
            <button className="mono-label w-9 h-9 border border-hairline hover:border-ember">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
