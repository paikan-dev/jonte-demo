import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getRelated, formatPrice, products, asset } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const related = getRelated(product.id, product.category);

  return (
    <div className="pt-32 md:pt-40">
      {/* Breadcrumb */}
      <div className="px-6 md:px-10 mb-10">
        <div className="mono-label text-bone-dim flex items-center gap-3">
          <Link href="/" className="hover:text-ember">
            Inicio
          </Link>
          <span>/</span>
          <Link
            href={`/catalogo?cat=${product.category}`}
            className="hover:text-ember"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-ember">{product.sku}</span>
        </div>
      </div>

      {/* Hero product */}
      <section className="px-6 md:px-10 grid md:grid-cols-12 gap-8 md:gap-14 mb-32">
        {/* Gallery */}
        <div className="md:col-span-7">
          <div className="img-frame aspect-[4/5] relative mb-4">
            <Image
              src={asset(product.images[0])}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
            <div className="absolute top-5 left-5 mono-label bg-ink/70 backdrop-blur px-3 py-1.5">
              {product.sku}
            </div>
            {product.collection && (
              <div className="absolute top-5 right-5 mono-label bg-ember px-3 py-1.5">
                {product.collection}
              </div>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((src, i) => (
                <div key={i} className="img-frame aspect-[4/5] relative">
                  <Image
                    src={asset(src)}
                    alt={`${product.name} ${i + 2}`}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
          <div className="mono-label text-ember mb-3">{product.brand}</div>
          <h1 className="display-md mb-4">{product.name}</h1>
          <p className="serif-italic text-2xl text-bone-dim mb-8">
            {product.tagline}
          </p>

          <div className="flex items-baseline gap-3 mb-10">
            <span className="font-mono text-4xl font-medium text-ember">
              {formatPrice(product.price)}
            </span>
            <span className="mono-label text-bone-dim">ARS</span>
          </div>

          <div className="hairline-t hairline-b py-6 mb-8">
            <p className="text-bone-dim leading-relaxed">
              {product.description}
            </p>
          </div>

          {product.colors && (
            <div className="mb-8">
              <div className="mono-label text-bone-dim mb-3">Colores</div>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <div
                    key={c}
                    className="w-10 h-10 border border-hairline hover:border-ember transition cursor-pointer"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-10">
            <div className="mono-label text-ember mb-5">
              / Especificaciones
            </div>
            <dl className="space-y-3">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between gap-6 py-2 hairline-b"
                >
                  <dt className="mono-label text-bone-dim">{s.label}</dt>
                  <dd className="font-display font-medium text-bone text-right">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/5492610000000"
              target="_blank"
              rel="noopener"
              className="btn-ember justify-center"
            >
              Consultar por WhatsApp →
            </a>
            <Link
              href={`/catalogo?cat=${product.category}`}
              className="btn-ghost justify-center"
            >
              Ver más {product.category}
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 md:px-10 hairline-t py-24">
          <div className="mb-12">
            <div className="mono-label text-ember mb-3">
              [ Relacionados ]
            </div>
            <h2 className="display-lg">
              Combina
              <br />
              <span className="serif-italic normal-case text-bone-dim">
                con esto
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
