import Link from "next/link";

export default function NuevoProducto() {
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/productos"
          className="mono-label text-bone-dim hover:text-ember"
        >
          ← Volver a productos
        </Link>
        <div className="mt-4 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="mono-label text-ember mb-3">
              [ Nuevo producto ]
            </div>
            <h1 className="display-md">
              Crear{" "}
              <span className="serif-italic normal-case text-bone-dim">
                producto
              </span>
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="btn-ghost">Guardar borrador</button>
            <button className="btn-ember">Publicar →</button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2 space-y-6">
          <Section title="Información básica" num="01">
            <Field label="Nombre del producto">
              <input
                className="form-input"
                placeholder="Ej: Casco Integral LS2 FF353"
              />
            </Field>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="SKU">
                <input
                  className="form-input font-mono"
                  placeholder="JNT-0021"
                />
              </Field>
              <Field label="Marca">
                <select className="form-input">
                  <option>Seleccionar marca...</option>
                  <option>LS2</option>
                  <option>HJC</option>
                  <option>Alpinestars</option>
                </select>
              </Field>
            </div>
            <Field label="Tagline editorial">
              <input
                className="form-input"
                placeholder="Una frase corta que lo defina"
              />
            </Field>
            <Field label="Descripción">
              <textarea
                className="form-input min-h-[120px] resize-y"
                placeholder="Descripción completa del producto..."
              />
            </Field>
          </Section>

          <Section title="Galería de imágenes" num="02">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square border-2 border-dashed border-hairline hover:border-ember bg-ink flex items-center justify-center cursor-pointer transition"
                >
                  <div className="text-center">
                    <div className="text-ember text-3xl">+</div>
                    <div className="mono-label text-bone-dim mt-1">
                      Imagen {i + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mono-label text-bone-dim mt-4">
              PNG · JPG · WEBP · máx 5 MB por imagen
            </p>
          </Section>

          <Section title="Especificaciones técnicas" num="03">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                <input
                  className="form-input"
                  placeholder="Característica (Ej: Material)"
                />
                <input
                  className="form-input"
                  placeholder="Valor (Ej: Fibra compuesta)"
                />
              </div>
            ))}
            <button className="mono-label text-ember mt-2">
              + Agregar especificación
            </button>
          </Section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <Section title="Publicación" num="">
            <Field label="Estado">
              <select className="form-input">
                <option>Borrador</option>
                <option>Publicado</option>
                <option>Archivado</option>
              </select>
            </Field>
            <Field label="Destacado">
              <div className="flex items-center gap-3 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-ember" />
                  <span className="text-sm text-bone-dim">
                    Mostrar en sección destacados
                  </span>
                </label>
              </div>
            </Field>
          </Section>

          <Section title="Categorización" num="">
            <Field label="Categoría">
              <select className="form-input">
                <option>Cascos</option>
                <option>Indumentaria</option>
                <option>Accesorios</option>
                <option>Repuestos</option>
              </select>
            </Field>
            <Field label="Colección">
              <select className="form-input">
                <option>Ninguna</option>
                <option>ROAD</option>
                <option>CITY</option>
                <option>TRACK</option>
                <option>ADVENTURE</option>
              </select>
            </Field>
          </Section>

          <Section title="Precio y stock" num="">
            <Field label="Precio (ARS)">
              <input className="form-input font-mono" placeholder="0" />
            </Field>
            <Field label="Stock">
              <input
                className="form-input font-mono"
                placeholder="0"
                type="number"
              />
            </Field>
          </Section>
        </aside>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: var(--color-ink);
          border: 1px solid var(--color-hairline);
          color: var(--color-bone);
          padding: 0.7rem 0.9rem;
          font-family: var(--font-display);
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-color: var(--color-ember);
        }
        .form-input::placeholder {
          color: rgba(168, 162, 155, 0.5);
        }
      `}</style>
    </div>
  );
}

function Section({
  title,
  num,
  children,
}: {
  title: string;
  num: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-ink-2 border border-hairline p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display font-bold text-lg">{title}</h3>
        {num && <span className="mono-label text-ember">[ {num} ]</span>}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mono-label text-bone-dim mb-2 block">{label}</label>
      {children}
    </div>
  );
}
