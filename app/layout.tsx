import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIJAMU | Pijamas y detalles cute",
  description: "Pijamas para mujer, hombre, niños y parejas. Descubre diseños cómodos y detalles que enamoran.",
  openGraph: { title: "PIJAMU | Pijamas y detalles cute", description: "Pijamas que abrazan tus sueños.", images: ["/images/brand/hero-banner.png"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
