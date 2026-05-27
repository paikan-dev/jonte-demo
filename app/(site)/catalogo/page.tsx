import { Suspense } from "react";
import { CatalogClient } from "./catalog-client";

export default function CatalogoPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-40 px-10 text-bone-dim mono-label">
          Cargando catálogo...
        </div>
      }
    >
      <CatalogClient />
    </Suspense>
  );
}
