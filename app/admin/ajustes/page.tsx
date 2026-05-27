export default function AjustesPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="mono-label text-ember mb-3">[ 07 — Ajustes ]</div>
        <h1 className="display-md">
          Configuración{" "}
          <span className="serif-italic normal-case text-bone-dim">general</span>
        </h1>
      </div>

      <div className="space-y-4">
        <Section title="Identidad de la empresa" num="01">
          <Field label="Nombre comercial">
            <input className="form-input" defaultValue="Jonte Motos" />
          </Field>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="CUIT">
              <input className="form-input font-mono" defaultValue="30-00000000-0" />
            </Field>
            <Field label="Teléfono">
              <input className="form-input font-mono" defaultValue="+54 9 223 695 3889" />
            </Field>
          </div>
          <Field label="Email de contacto">
            <input className="form-input font-mono" defaultValue="motosjonte@gmail.com" />
          </Field>
          <Field label="Dirección">
            <input className="form-input" defaultValue="Jara 2114, Mar del Plata, Buenos Aires" />
          </Field>
        </Section>

        <Section title="Modo exposición / kiosko" num="02">
          <div className="flex items-start gap-4 p-4 bg-ember/5 border border-ember/30">
            <div className="text-ember text-3xl">◉</div>
            <div>
              <div className="font-display font-bold mb-1">
                Modo pantalla para muestras
              </div>
              <p className="text-bone-dim text-sm leading-relaxed">
                Activá esta función para usar el catálogo en una pantalla de
                exposición con rotación automática de productos.
              </p>
            </div>
          </div>
          <Field label="Tiempo por producto">
            <select className="form-input">
              <option>5 segundos</option>
              <option>7 segundos</option>
              <option>10 segundos</option>
            </select>
          </Field>
          <Field label="Orden de rotación">
            <select className="form-input">
              <option>Aleatorio</option>
              <option>Alfabético</option>
              <option>Por categoría</option>
              <option>Destacados primero</option>
            </select>
          </Field>
        </Section>

        <Section title="SEO y redes" num="03">
          <Field label="Título del sitio">
            <input
              className="form-input"
              defaultValue="JONTE — Motor Culture since 1998"
            />
          </Field>
          <Field label="Meta descripción">
            <textarea
              className="form-input min-h-[80px]"
              defaultValue="Catálogo de indumentaria, cascos y accesorios para motociclistas."
            />
          </Field>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Instagram">
              <input className="form-input font-mono" defaultValue="@jontemotos" />
            </Field>
            <Field label="WhatsApp">
              <input className="form-input font-mono" defaultValue="+54 9 261 000 0000" />
            </Field>
          </div>
        </Section>

        <div className="flex gap-3 justify-end pt-4">
          <button className="btn-ghost">Cancelar</button>
          <button className="btn-ember">Guardar cambios</button>
        </div>
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
        }
        .form-input:focus { border-color: var(--color-ember); }
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
        <span className="mono-label text-ember">[ {num} ]</span>
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
