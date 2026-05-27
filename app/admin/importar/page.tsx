import Link from "next/link";

export default function ImportarPage() {
  return (
    <div>
      <div className="mb-10">
        <div className="mono-label text-ember mb-3">[ 03 — Importación ]</div>
        <h1 className="display-md">
          Importar{" "}
          <span className="serif-italic normal-case text-bone-dim">
            desde Excel
          </span>
        </h1>
        <p className="text-bone-dim mt-2 max-w-2xl">
          Cargá cientos de productos en segundos con un archivo{" "}
          <span className="text-ember font-mono">.xlsx</span> siguiendo el
          formato de Jonte.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Dropzone */}
        <div className="lg:col-span-2">
          <div className="bg-ink-2 border-2 border-dashed border-hairline hover:border-ember transition p-16 text-center">
            <div className="text-ember text-7xl font-display mb-6">↥</div>
            <h3 className="display-md mb-3">
              Arrastrá tu archivo{" "}
              <span className="serif-italic normal-case text-ember">acá</span>
            </h3>
            <p className="text-bone-dim mb-8">
              o hacé click para seleccionarlo desde tu computadora
            </p>
            <button className="btn-ember">Seleccionar archivo .xlsx</button>
            <div className="mono-label text-bone-dim mt-6">
              Máximo 10 MB · hasta 5.000 productos por archivo
            </div>
          </div>

          {/* Historial */}
          <div className="mt-8 bg-ink-2 border border-hairline p-6">
            <div className="mono-label text-ember mb-4">
              / Importaciones recientes
            </div>
            <ul className="space-y-1">
              {[
                {
                  name: "catalogo-abril-2026.xlsx",
                  date: "Hace 3 min",
                  items: "42 productos",
                  status: "ok",
                },
                {
                  name: "cascos-ls2-nuevo-lote.xlsx",
                  date: "Ayer · 18:42",
                  items: "18 productos",
                  status: "ok",
                },
                {
                  name: "alpinestars-marzo.xlsx",
                  date: "12/04/2026",
                  items: "64 productos",
                  status: "ok",
                },
                {
                  name: "actualizacion-precios.xlsx",
                  date: "08/04/2026",
                  items: "320 productos",
                  status: "warning",
                },
              ].map((h) => (
                <li
                  key={h.name}
                  className="flex items-center gap-4 py-3 hairline-b last:border-0"
                >
                  <div
                    className={`w-8 h-8 border flex items-center justify-center shrink-0 ${
                      h.status === "ok"
                        ? "border-ember/40 text-ember"
                        : "border-signal/40 text-signal"
                    }`}
                  >
                    {h.status === "ok" ? "✓" : "!"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm truncate">{h.name}</div>
                    <div className="mono-label text-bone-dim mt-1">
                      {h.items} · {h.date}
                    </div>
                  </div>
                  <button className="mono-label text-bone-dim hover:text-ember">
                    Ver detalle →
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guía lateral */}
        <aside className="space-y-4">
          <div className="bg-ink-2 border border-hairline p-6">
            <div className="mono-label text-ember mb-3">/ Plantilla</div>
            <h4 className="font-display font-bold text-lg mb-2">
              Descargá la plantilla
            </h4>
            <p className="text-bone-dim text-sm leading-relaxed mb-5">
              Usá nuestro formato oficial para asegurar una importación sin
              errores.
            </p>
            <button className="btn-ghost w-full justify-center">
              ↧ plantilla-jonte.xlsx
            </button>
          </div>

          <div className="bg-ink-2 border border-hairline p-6">
            <div className="mono-label text-ember mb-4">/ Columnas requeridas</div>
            <ul className="space-y-3">
              {[
                ["sku", "Identificador único"],
                ["nombre", "Texto, máx 120 chars"],
                ["marca", "LS2, HJC, etc."],
                ["categoria", "cascos · indumentaria..."],
                ["precio", "Número en ARS"],
                ["stock", "Cantidad entera"],
                ["descripcion", "Texto largo"],
                ["imagen_1..4", "URL o nombre"],
              ].map(([col, desc]) => (
                <li key={col} className="flex justify-between gap-3 text-sm">
                  <code className="font-mono text-ember">{col}</code>
                  <span className="text-bone-dim text-right">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ember/5 border border-ember/40 p-6">
            <div className="mono-label text-ember mb-3">/ Tip</div>
            <p className="text-bone-dim text-sm leading-relaxed">
              Si un SKU ya existe, se{" "}
              <span className="text-bone">actualizará</span> en lugar de
              duplicarse. Ideal para actualizar precios masivamente.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
