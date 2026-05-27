import { Suspense } from "react";
import { ShowcaseClient } from "./showcase-client";

export const metadata = {
  title: "JONTE — Modo Exposición",
};

export default function ExhibicionPage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center text-bone-dim mono-label">
          Cargando exposición...
        </div>
      }
    >
      <ShowcaseClient />
    </Suspense>
  );
}
