import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CONVERGY - Estratégia que vende. Execução que entrega.",
  description: "Agência estratégica de marketing e growth no Algarve, Portugal. Foco total no crescimento de pequenas e médias empresas com estratégias que funcionam.",
  keywords: "marketing digital, growth, agência marketing, Algarve, Portugal, PME, estratégia, conversão",
  authors: [{ name: "CONVERGY" }],
  creator: "CONVERGY",
  openGraph: {
    title: "CONVERGY - Estratégia que vende. Execução que entrega.",
    description: "Agência estratégica de marketing e growth no Algarve, Portugal.",
    url: "https://convergy.pt",
    siteName: "CONVERGY",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  );
}