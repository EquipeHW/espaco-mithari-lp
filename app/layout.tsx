import type React from "react"
import type { Metadata } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import "./globals.css"
import GoogleTagManager from "./components/GoogleTagManager"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Espaço Mithari - Terapias Holísticas em São José dos Campos",
  description:
    "Reconecte-se com seu equilíbrio natural através de terapias holísticas certificadas. Barras de Access®, ThetaHealing® e Terapia Floral. Agende sua sessão experimental.",
  keywords:
    "terapias holísticas, São José dos Campos, Barras de Access, ThetaHealing, terapia floral, ansiedade, bem-estar, equilíbrio emocional",
  authors: [{ name: "Espaço Mithari" }],
  openGraph: {
    title: "Espaço Mithari - Terapias Holísticas",
    description: "Transforme sua vida com terapias holísticas certificadas em São José dos Campos",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}
