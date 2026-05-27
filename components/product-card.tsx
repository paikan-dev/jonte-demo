import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <Link
      href={`/producto/${product.id}`}
      className="group block relative"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="img-frame aspect-[4/5] mb-4 relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="mono-label bg-ink/70 backdrop-blur px-2 py-1">
            {product.sku}
          </span>
          {product.featured && (
            <span className="mono-label bg-ember px-2 py-1">DESTACADO</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="mono-label text-bone">Ver detalle →</div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="mono-label text-bone-dim mb-1">{product.brand}</div>
          <h3 className="font-display font-bold text-lg leading-tight group-hover:text-ember transition-colors">
            {product.name}
          </h3>
          <p className="serif-italic text-bone-dim text-sm mt-1">
            {product.tagline}
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="font-mono text-sm font-medium">
            {formatPrice(product.price)}
          </div>
        </div>
      </div>
    </Link>
  );
}
