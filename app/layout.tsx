import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Motos Jonte — Cultura motera desde 1998",
  description:
    "Catálogo de indumentaria, cascos y accesorios para motociclistas. Equipamiento seleccionado para quienes viven la ruta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-bone font-display selection:bg-ember selection:text-bone">
        <div className="grain-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
