"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/admin", label: "Dashboard", icon: "◉" },
  { href: "/admin/productos", label: "Productos", icon: "▦" },
  { href: "/admin/importar", label: "Importar Excel", icon: "↥" },
  { href: "/admin/categorias", label: "Categorías", icon: "❖" },
  { href: "/admin/marcas", label: "Marcas", icon: "✦" },
  { href: "/admin/media", label: "Media", icon: "◎" },
  { href: "/admin/ajustes", label: "Ajustes", icon: "⚙" },
];

export function AdminNav() {
  const path = usePathname();
  return (
    <nav className="px-3 py-5 flex-1">
      <div className="mono-label text-bone-dim px-3 mb-3">/ Navegación</div>
      <ul className="space-y-1">
        {nav.map((item) => {
          const active =
            item.href === "/admin"
              ? path === "/admin"
              : path.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm font-display transition-all ${
                  active
                    ? "bg-ember/10 text-ember border-l-2 border-ember"
                    : "text-bone-dim hover:text-bone hover:bg-ink-3 border-l-2 border-transparent"
                }`}
              >
                <span className="w-4 text-center">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
