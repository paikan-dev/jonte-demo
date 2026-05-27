import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const metrics = [
  { label: "Productos activos", value: "1.024", delta: "+12", sub: "últimos 30 días" },
  { label: "Categorías", value: "04", delta: "0", sub: "sin cambios" },
  { label: "Marcas", value: "17", delta: "+2", sub: "nuevas este mes" },
  { label: "Vistas del catálogo", value: "8.432", delta: "+18%", sub: "vs mes anterior" },
];

const activity = [
  { when: "hace 3 min", who: "Sistema", what: "Importación Excel: 42 productos actualizados", type: "import" },
  { when: "hace 1 h", who: "Joaco", what: "Editó producto JNT-0014 · Campera AJ74 Route", type: "edit" },
  { when: "hace 2 h", who: "Joaco", what: "Creó categoría Repuestos", type: "create" },
  { when: "ayer", who: "Sistema", what: "Backup automático completado", type: "system" },
  { when: "ayer", who: "Joaco", what: "Subió 12 imágenes al producto JNT-0003", type: "media" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="mono-label text-ember mb-3">[ 01 — Dashboard ]</div>
          <h1 className="display-md">
            Buen día,{" "}
            <span className="serif-italic normal-case text-ember">Joaco</span>
          </h1>
          <p className="text-bone-dim mt-2">
            Resumen del catálogo al {new Date().toLocaleDateString("es-AR")}
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/importar" className="btn-ghost">
            Importar Excel
          </Link>
          <Link href="/admin/productos/nuevo" className="btn-ember">
            Nuevo producto +
          </Link>
        </div>
      </div>

      {/* Métricas */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="bg-ink-2 border border-hairline p-6 relative overflow-hidden group hover:border-ember/40 transition"
          >
            <div className="mono-label text-bone-dim mb-3">
              [ {String(i + 1).padStart(2, "0")} ]
            </div>
            <div className="font-display font-extrabold text-5xl leading-none mb-2">
              {m.value}
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <span
                className={`mono-label ${
                  m.delta.startsWith("+") ? "text-ember" : "text-bone-dim"
                }`}
              >
                {m.delta}
              </span>
              <span className="mono-label text-bone-dim">{m.sub}</span>
            </div>
            <div className="mt-4 text-xs text-bone-dim uppercase tracking-wider">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Grid: Actividad + Productos recientes */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-ink-2 border border-hairline p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="mono-label text-ember mb-1">/ Actividad reciente</div>
              <h3 className="font-display font-bold text-xl">Últimos movimientos</h3>
            </div>
            <Link href="#" className="mono-label text-bone-dim hover:text-ember">
              Ver todo →
            </Link>
          </div>
          <ul className="space-y-1">
            {activity.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-4 py-3 hairline-b last:border-0"
              >
                <div
                  className={`w-2 h-2 mt-2 rounded-full shrink-0 ${
                    a.type === "import"
                      ? "bg-ember"
                      : a.type === "create"
                      ? "bg-signal"
                      : "bg-bone-dim"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm">{a.what}</div>
                  <div className="mono-label text-bone-dim mt-1">
                    {a.who} · {a.when}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-ink-2 border border-hairline p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="mono-label text-ember mb-1">/ Stock bajo</div>
              <h3 className="font-display font-bold text-xl">Atención</h3>
            </div>
          </div>
          <ul className="space-y-4">
            {products.slice(0, 4).map((p) => (
              <li key={p.id} className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-ink-3 shrink-0 overflow-hidden">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{p.name}</div>
                  <div className="mono-label text-bone-dim">{p.sku}</div>
                </div>
                <div className="mono-label text-ember">3 u.</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        <QuickCard
          href="/admin/importar"
          title="Importar desde Excel"
          desc="Cargá cientos de productos con un archivo .xlsx"
          icon="↥"
        />
        <QuickCard
          href="/admin/productos/nuevo"
          title="Crear producto manual"
          desc="Alta pieza por pieza con galería de imágenes"
          icon="+"
        />
        <QuickCard
          href="/admin/media"
          title="Biblioteca de imágenes"
          desc="Subí y organizá las fotos del catálogo"
          icon="◎"
        />
      </div>
    </div>
  );
}

function QuickCard({
  href,
  title,
  desc,
  icon,
}: {
  href: string;
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-ink-2 border border-hairline hover:border-ember transition p-6 relative"
    >
      <div className="text-ember text-4xl mb-6 font-display">{icon}</div>
      <h4 className="font-display font-bold text-lg mb-1 group-hover:text-ember transition">
        {title}
      </h4>
      <p className="text-bone-dim text-sm leading-relaxed">{desc}</p>
      <div className="mono-label text-bone-dim mt-4 group-hover:text-ember transition">
        Abrir →
      </div>
    </Link>
  );
}
