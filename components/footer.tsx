import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink-2 hairline-t mt-32">
      <div className="px-6 md:px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-5">
            <div className="mono-label text-ember mb-4">[ 01 / Contacto ]</div>
            <h3 className="display-md mb-8">
              ¿Listo para
              <br />
              <span className="serif-italic normal-case text-ember">rodar</span>?
            </h3>
            <div className="space-y-2 font-mono text-sm text-bone-dim">
              <p>Jara 2114 · Mar del Plata · Buenos Aires</p>
              <p>Lun a Sáb · 9 a 19 hs</p>
              <p className="text-bone">+54 9 223 695 3889</p>
              <p className="text-bone">motosjonte@gmail.com</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="mono-label text-bone-dim mb-5">Navegar</div>
            <ul className="space-y-3 font-display">
              <li>
                <Link href="/" className="hover:text-ember transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-ember transition">
                  Catálogo completo
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo?cat=cascos"
                  className="hover:text-ember transition"
                >
                  Cascos
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo?cat=indumentaria"
                  className="hover:text-ember transition"
                >
                  Indumentaria
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="mono-label text-bone-dim mb-5">Newsletter</div>
            <p className="text-bone-dim text-sm mb-5 leading-relaxed">
              Nuevos drops, ediciones limitadas y la cultura detrás de cada
              casco.
            </p>
            <form className="flex border border-hairline">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none font-mono placeholder:text-bone-dim/60"
              />
              <button
                type="submit"
                className="bg-ember px-5 text-bone mono-label"
              >
                Enviar →
              </button>
            </form>
          </div>
        </div>

        <div className="edge-fade" />

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-5">
            <Image
              src="/logo-jonte-blanco.png"
              alt="Motos Jonte"
              width={984}
              height={450}
              className="h-16 md:h-20 w-auto"
            />
            <span className="serif-italic text-bone-dim">desde 1998</span>
          </div>
          <div className="mono-label text-bone-dim">
            © 2026 · Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}
