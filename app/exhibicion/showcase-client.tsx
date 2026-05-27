"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories, Category } from "@/lib/products";

const AUTOPLAY_MS = 7000;

export function ShowcaseClient() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat") as Category | null;

  const list = useMemo(() => {
    if (!catParam) return products;
    return products.filter((p) => p.category === catParam);
  }, [catParam]);

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [now, setNow] = useState(new Date());
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef(Date.now());

  const current = list[index % list.length];
  const next = list[(index + 1) % list.length];

  // reloj
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // autoplay con barra de progreso suave
  useEffect(() => {
    if (!playing) return;
    startRef.current = Date.now();
    progressRef.current = 0;

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const p = Math.min(elapsed / AUTOPLAY_MS, 1);
      progressRef.current = p;
      setProgress(p);
      if (p >= 1) {
        setIndex((i) => (i + 1) % list.length);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing, index, list.length]);

  // reset al cambiar filtro
  useEffect(() => {
    setIndex(0);
  }, [catParam]);

  // teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === " ") {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goNext = () => setIndex((i) => (i + 1) % list.length);
  const goPrev = () => setIndex((i) => (i - 1 + list.length) % list.length);

  if (!current) {
    return (
      <div className="h-screen flex items-center justify-center text-bone-dim">
        Sin productos para mostrar.
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-ink text-bone overflow-hidden select-none">
      {/* Pre-carga del siguiente para transición suave */}
      <div className="hidden">
        <Image
          key={next.id}
          src={next.images[0]}
          alt=""
          width={1200}
          height={1600}
          priority
        />
      </div>

      {/* FRAME PRINCIPAL */}
      <div
        key={current.id}
        className="absolute inset-0 grid grid-cols-12 animate-in"
      >
        {/* Imagen lado izquierdo */}
        <div className="col-span-7 relative p-10">
          <div className="relative w-full h-full bg-ink-2 overflow-hidden">
            {/* Frame elegante con esquinas */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <Corner className="top-0 left-0" />
              <Corner className="top-0 right-0 rotate-90" />
              <Corner className="bottom-0 right-0 rotate-180" />
              <Corner className="bottom-0 left-0 -rotate-90" />
            </div>

            <Image
              src={current.images[0]}
              alt={current.name}
              fill
              priority
              sizes="60vw"
              className="object-contain p-12 img-zoom"
            />

            {/* SKU floating */}
            <div className="absolute top-6 left-6 mono-label text-bone-dim">
              {current.sku}
            </div>
            <div className="absolute top-6 right-6 mono-label text-ember">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(list.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Info lado derecho */}
        <div className="col-span-5 p-12 flex flex-col justify-between relative">
          <div className="slide-up-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-14 bg-ember" />
              <span className="mono-label text-ember">
                {current.category}
              </span>
            </div>

            <div className="mono-label text-bone-dim mb-4">
              {current.brand}
            </div>

            <h1 className="font-display font-extrabold text-[clamp(3rem,6vw,6.5rem)] leading-[0.85] tracking-tight mb-6 uppercase">
              {current.name}
            </h1>

            <p className="serif-italic text-3xl text-bone-dim leading-tight max-w-xl">
              {current.tagline}
            </p>
          </div>

          {/* Specs */}
          <div className="slide-up-2 mt-12">
            <div className="mono-label text-ember mb-6">
              / Especificaciones
            </div>
            <dl className="space-y-4">
              {current.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between items-baseline gap-6 py-3 border-b border-hairline"
                >
                  <dt className="mono-label text-bone-dim">{s.label}</dt>
                  <dd className="font-display font-medium text-xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Footer — solo info editorial, sin precio */}
          <div className="slide-up-3 mt-10 flex items-end justify-between">
            <div>
              <div className="mono-label text-bone-dim mb-1">
                Consultá disponibilidad
              </div>
              <div className="font-display font-bold text-xl text-ember">
                jontemotos.com
              </div>
            </div>
            <div className="serif-italic text-bone-dim text-lg">
              — edición 26
            </div>
          </div>
        </div>
      </div>

      {/* BARRA SUPERIOR — identidad + reloj + filtro */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-5">
        <Link href="/" className="flex flex-col items-start gap-1">
          <Image
            src="/logo-jonte-blanco.png"
            alt="Motos Jonte"
            width={984}
            height={450}
            className="h-10 w-auto"
          />
          <div className="mono-label text-ember text-[0.55rem]">
            MODO EXPOSICIÓN
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <CatBtn active={!catParam} href="/exhibicion" label="Todo" />
          {categories.map((c) => (
            <CatBtn
              key={c.slug}
              active={catParam === c.slug}
              href={`/exhibicion?cat=${c.slug}`}
              label={c.label}
            />
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="font-display font-bold text-2xl tabular-nums leading-none">
              {now.toLocaleTimeString("es-AR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="mono-label text-bone-dim mt-1">
              {now
                .toLocaleDateString("es-AR", {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                })
                .toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      {/* CONTROLES INFERIORES */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 px-8 py-6">
        {/* Barra de progreso */}
        <div className="h-px bg-hairline relative mb-5">
          <div
            className="absolute inset-y-0 left-0 bg-ember transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          {/* Marca actual + next preview */}
          <div className="mono-label text-bone-dim flex items-center gap-4">
            <span>
              ↳ SIGUIENTE:{" "}
              <span className="text-bone">{next.name}</span>
            </span>
          </div>

          {/* Controles */}
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              className="w-12 h-12 border border-hairline hover:border-ember hover:text-ember transition font-display text-2xl"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => setPlaying((p) => !p)}
              className="w-14 h-12 border border-ember text-ember hover:bg-ember hover:text-bone transition font-display text-sm uppercase tracking-wider"
            >
              {playing ? "❚❚" : "▶"}
            </button>
            <button
              onClick={goNext}
              className="w-12 h-12 border border-hairline hover:border-ember hover:text-ember transition font-display text-2xl"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>

          {/* Atajos */}
          <div className="mono-label text-bone-dim hidden md:flex gap-4">
            <span>← →  NAVEGAR</span>
            <span>ESPACIO  PAUSAR</span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes image-in {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes zoom-idle {
          from { transform: scale(1); }
          to { transform: scale(1.04); }
        }
        .animate-in { animation: image-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .slide-up-1 { animation: slide-up 0.9s 0.2s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .slide-up-2 { animation: slide-up 0.9s 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .slide-up-3 { animation: slide-up 0.9s 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .img-zoom { animation: zoom-idle 8s ease-in-out both; }
      `}</style>
    </div>
  );
}

function CatBtn({
  active,
  href,
  label,
}: {
  active: boolean;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`mono-label px-4 py-2 border transition ${
        active
          ? "border-ember text-ember bg-ember/10"
          : "border-hairline text-bone-dim hover:text-bone hover:border-bone"
      }`}
    >
      {label}
    </Link>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute w-8 h-8 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-px bg-ember" />
      <div className="absolute top-0 left-0 w-px h-full bg-ember" />
    </div>
  );
}
