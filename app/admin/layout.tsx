import Image from "next/image";
import Link from "next/link";
import { AdminNav } from "./admin-nav";
import { asset } from "@/lib/products";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-ink text-bone">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-ink-2 hairline-b flex flex-col min-h-screen border-r border-hairline">
        <div className="px-6 py-6 hairline-b">
          <Link href="/" className="flex flex-col items-start gap-2 group">
            <Image
              src={asset("/logo-jonte-blanco.png")}
              alt="Motos Jonte"
              width={984}
              height={450}
              className="h-12 w-auto"
            />
            <div className="mono-label text-ember text-[0.55rem]">
              ADMIN · v1.0
            </div>
          </Link>
        </div>

        <AdminNav />

        <div className="mt-auto px-6 py-5 hairline-t">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-ember/20 border border-ember flex items-center justify-center font-display font-bold text-ember">
              J
            </div>
            <div>
              <div className="text-sm font-display font-medium">Joaco Srl</div>
              <div className="mono-label text-bone-dim text-[0.6rem]">
                administrador
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="block mt-4 mono-label text-bone-dim hover:text-ember transition"
          >
            ← Volver al sitio
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 hairline-b px-8 flex items-center justify-between bg-ink/95 sticky top-0 z-40 backdrop-blur">
          <div className="mono-label text-bone-dim">
            [ Panel administrativo · Demo visual ]
          </div>
          <div className="flex items-center gap-4">
            <div className="mono-label text-bone-dim hidden md:block">
              Última sincronización: hace 3 min
            </div>
            <button className="mono-label bg-ember text-bone px-4 py-2">
              Nuevo producto +
            </button>
          </div>
        </header>
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  );
}
