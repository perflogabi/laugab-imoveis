import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "../globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Laugab Imobiliária | Seu Imóvel dos Sonhos",
  description:
    "Encontre os melhores imóveis para compra e aluguel com a Laugab Imobiliária. Atendimento personalizado e as melhores ofertas do mercado.",
  keywords: "imobiliária, imóveis, compra, venda, aluguel, apartamentos, casas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased w-full", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="w-full flex min-h-screen flex-col">
            <Header />
            <main className="w-full px-4 md:px-8 lg:px-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
