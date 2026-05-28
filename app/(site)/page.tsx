import Image from "next/image";
import Link from "next/link";
import { products, asset } from "@/lib/products";
import { Ticker } from "@/components/ticker";
import { Partners } from "@/components/partners";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  const featured = products.filter((p) => p.featured);
  const latest = products.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-20 md:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2400&q=85"
            alt="Rider nocturno"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
          <div className="absolute inset-0 spotlight" />
        </div>

        <div className="absolute top-36 left-6 md:left-10 z-10 hidden md:block fade">
          <div className="mono-label text-bone-dim mb-2">[ Est. 1998 ]</div>
          <div className="mono-label text-ember">MENDOZA · ARGENTINA</div>
        </div>

        <div className="absolute top-36 right-6 md:right-10 z-10 text-right hidden md:block fade">
          <div className="mono-label text-bone-dim mb-2">Colección</div>
          <div className="mono-label text-ember">AUTUMN / 26</div>
        </div>

        <div className="relative z-10 px-6 md:px-10 pb-12 md:pb-20">
          <div
            className="mb-8 flex items-center gap-4 rise"
            style={{ animationDelay: "200ms" }}
          >
            <div className="h-px w-16 bg-ember" />
            <span className="mono-label text-ember">01 — La cultura</span>
          </div>

          <h1
            className="display-xl mb-6 rise"
            style={{ animationDelay: "300ms" }}
          >
            Rodá.
            <br />
            <span className="text-ember">Equipate.</span>
            <br />
            <span className="serif-italic normal-case lowercase text-bone/90 font-normal">
              volvé.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-10">
            <p
              className="max-w-md text-bone-dim leading-relaxed rise"
              style={{ animationDelay: "500ms" }}
            >
              Catálogo curado de cascos, indumentaria técnica y accesorios
              para quienes entienden la moto como un estilo, no como un
              transporte.
            </p>
            <div
              className="flex flex-wrap gap-3 rise"
              style={{ animationDelay: "600ms" }}
            >
              <Link href="/catalogo" className="btn-ember">
                Explorar catálogo
              </Link>
              <Link href="/catalogo?cat=cascos" className="btn-ghost">
                Cascos →
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 right-6 md:right-10 z-10 mono-label text-bone-dim flex items-center gap-3 fade"
          style={{ animationDelay: "1s" }}
        >
          <span>SCROLL</span>
          <div className="w-12 h-px bg-bone-dim" />
        </div>
      </section>

      <Ticker />

      {/* MANIFESTO */}
      <section className="px-6 md:px-10 py-24 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2">
            <div className="mono-label text-ember">[ 02 ]</div>
            <div className="mono-label text-bone-dim mt-2">Manifiesto</div>
          </div>
          <div className="md:col-span-10">
            <p className="display-md max-w-5xl">
              No vendemos equipamiento.{" "}
              <span className="serif-italic normal-case text-ember">
                Vestimos
              </span>{" "}
              una forma de ver el mundo desde arriba de dos ruedas — donde el
              pavimento se convierte en{" "}
              <span className="serif-italic normal-case text-bone-dim">
                territorio
              </span>{" "}
              y cada kilómetro cuenta una historia.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES BENTO */}
      <section className="px-6 md:px-10 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="mono-label text-ember mb-3">
              [ 03 — Categorías ]
            </div>
            <h2 className="display-lg">
              Qué te
              <br />
              <span className="serif-italic normal-case text-bone-dim">
                pondrás hoy
              </span>
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="mono-label text-bone-dim hover:text-ember transition hidden md:block"
          >
            Ver todo →
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-3 md:gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          <CategoryTile
            number="01"
            title="Cascos"
            slug="cascos"
            img={asset("/placeholder/product.svg")}
            className="md:col-span-7 md:row-span-2"
            big
          />
          <CategoryTile
            number="02"
            title="Indumentaria"
            slug="indumentaria"
            img={asset("/placeholder/product.svg")}
            className="md:col-span-5"
          />
          <CategoryTile
            number="03"
            title="Accesorios"
            slug="accesorios"
            img={asset("/placeholder/product.svg")}
            className="md:col-span-3"
          />
          <CategoryTile
            number="04"
            title="Repuestos"
            slug="repuestos"
            img="https://images.unsplash.com/photo-1635770310801-fc2a30d83a2b?auto=format&fit=crop&w=1200&q=80"
            className="md:col-span-2"
          />
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 md:px-10 py-24 hairline-t">
        <div className="mb-14">
          <div className="mono-label text-ember mb-3">
            [ 04 — Destacados ]
          </div>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="display-lg">
              Selección del
              <br />
              <span className="text-ember">mes</span>
            </h2>
            <p className="serif-italic text-bone-dim text-xl max-w-xs">
              Lo mejor de esta temporada, curado pieza por pieza.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-6 md:px-10 py-32 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/5] img-frame">
          <Image
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1400&q=85"
            alt="Rider"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:pl-10">
          <div className="text-ember text-7xl font-serif leading-none mb-6">
            “
          </div>
          <p className="font-serif italic text-3xl md:text-4xl leading-tight mb-8">
            La moto no te lleva a lugares. Te lleva a versiones distintas de
            vos mismo.
          </p>
          <div className="mono-label text-bone-dim">
            — Tomás R., cliente desde 2011
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section className="px-6 md:px-10 py-24 hairline-t">
        <div className="mb-14 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="mono-label text-ember mb-3">
              [ 05 — Últimos ingresos ]
            </div>
            <h2 className="display-lg">Recién llegados</h2>
          </div>
          <Link href="/catalogo" className="btn-ghost">
            Todo el catálogo →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {latest.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      <Partners />

      {/* CTA */}
      <section className="px-6 md:px-10 py-32 text-center">
        <div className="mono-label text-ember mb-4">[ 08 — Visitanos ]</div>
        <h2 className="display-xl mb-6">
          Tu próxima
          <br />
          <span className="serif-italic normal-case text-ember">
            aventura
          </span>
          <br />
          empieza acá.
        </h2>
        <p className="text-bone-dim max-w-lg mx-auto mb-10 text-lg leading-relaxed">
          Recorré el catálogo completo y encontrá el equipamiento que te
          acompaña.
        </p>
        <Link href="/catalogo" className="btn-ember">
          Ver catálogo completo
        </Link>
      </section>
    </>
  );
}

function CategoryTile({
  number,
  title,
  slug,
  img,
  className = "",
  big = false,
}: {
  number: string;
  title: string;
  slug: string;
  img: string;
  className?: string;
  big?: boolean;
}) {
  return (
    <Link
      href={`/catalogo?cat=${slug}`}
      className={`img-frame group relative block ${className}`}
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover opacity-75 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="mono-label text-ember">[ {number} ]</span>
          <span className="mono-label text-bone-dim opacity-0 group-hover:opacity-100 transition">
            Ver →
          </span>
        </div>
        <h3
          className={`font-display font-extrabold uppercase tracking-tight leading-none ${
            big ? "text-5xl md:text-7xl" : "text-3xl md:text-4xl"
          } group-hover:text-ember transition-colors`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}
