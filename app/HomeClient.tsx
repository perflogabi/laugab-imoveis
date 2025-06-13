"use client"

import Link from "next/link"
import { ArrowRight, Building, HomeIcon, MapPin } from "lucide-react"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AboutLaugab } from "@/components/AboutLaugab"
import Image from "next/image"

const FeaturedProperties = dynamic(() => import("@/components/featured-properties").then(m => m.FeaturedProperties), { ssr: false, loading: () => <div style={{height: 320}} className="w-full flex items-center justify-center text-muted-foreground">Carregando imóveis em destaque...</div> })
const TestimonialCarousel = dynamic(() => import("@/components/testimonial-carousel").then(m => m.TestimonialCarousel), { ssr: false, loading: () => <div style={{height: 180}} className="w-full flex items-center justify-center text-muted-foreground">Carregando depoimentos...</div> })
const BlogPreview = dynamic(() => import("@/components/blog-preview").then(m => m.BlogPreview), { ssr: false, loading: () => <div style={{height: 320}} className="w-full flex items-center justify-center text-muted-foreground">Carregando blog...</div> })

export default function HomeClient() {
  return (
    <>
      <Header />
      <section className="relative w-full md:w-[80%] mx-auto rounded-b-2xl">
        <div className="relative h-[400px] md:h-[600px] rounded-b-2xl rounded-t-2xl overflow-hidden">
          <Image
            src="/assets/banner-home.webp"
            alt="Banner principal - Laugab Imobiliária"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            className="object-cover object-right-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10 rounded-b-2xl" />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="w-full">
              <div className="max-w-xl space-y-5 px-5">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">
                  Encontre o Imóvel Perfeito para Você
                </h1>
                <p className="text-base md:text-xl text-white">
                  Milhares de opções para compra e aluguel em todo o Brasil com a melhor imobiliária do mercado.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild>
                    <Link href="/imoveis/venda">Comprar Imóvel</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/imoveis/aluguel">Alugar Imóvel</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutLaugab />

      <main className="w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* <section className="py-8 md:py-16 w-full">
          <div className="flex justify-center">
            <div className="bg-card rounded-xl shadow-lg -mt-16 md:-mt-24 relative z-30 max-w-5xl w-full mx-auto">
              <Tabs defaultValue="comprar" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-auto p-1 md:p-2">
                  <TabsTrigger value="comprar" className="py-3 md:py-4 text-lg cursor-pointer">
                    Comprar
                  </TabsTrigger>
                  <TabsTrigger value="alugar" className="py-3 md:py-4 text-lg cursor-pointer">
                    Alugar
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="comprar" className="p-4 md:p-6">
                  <PropertySearch type="venda" />
                </TabsContent>
                <TabsContent value="alugar" className="p-4 md:p-6">
                  <PropertySearch type="aluguel" />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section> */}

        <section className="py-8 md:py-24 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Imóveis em Destaque</h2>
              <p className="text-muted-foreground mt-2">
                Confira nossas melhores opções de imóveis para compra e aluguel
              </p>
            </div>
          </div>
          <Suspense fallback={<div style={{height:320}} className="w-full flex items-center justify-center text-muted-foreground">Carregando imóveis em destaque...</div>}>
            <FeaturedProperties />
          </Suspense>
        </section>

        <section className="bg-gray-200 rounded-xl py-8 md:py-24 w-full">
          <div className="w-full px-0">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Por que escolher a Laugab Imobiliária?</h2>
              <p className="text-muted-foreground mt-4">
                Somos especialistas no mercado imobiliário há mais de 20 anos, oferecendo as melhores opções e um
                atendimento personalizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:grid-cols-3 gap-8">
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Amplo Portfólio</h3>
                  <p className="text-muted-foreground">
                    Milhares de imóveis disponíveis para compra e aluguel em todo o Brasil, com opções para todos os
                    perfis e orçamentos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <HomeIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Atendimento Personalizado</h3>
                  <p className="text-muted-foreground">
                    Nossos corretores são especializados em encontrar o imóvel perfeito para você, com atendimento
                    exclusivo e personalizado.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Localização Estratégica</h3>
                  <p className="text-muted-foreground">
                    Imóveis nas melhores localizações, com fácil acesso a transporte, comércio, escolas e áreas de lazer.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto min-h-[48px] min-w-[48px] px-6 py-4 bg-white text-[#007a68] font-bold border border-[#007a68] hover:bg-[#e6f4ea] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 transition"
                aria-label="Conheça nossa história"
              >
                <Link href="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-24 w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">O que nossos clientes dizem</h2>
            <p className="text-muted-foreground mt-4">
              A satisfação dos nossos clientes é nossa maior conquista. Confira alguns depoimentos.
            </p>
          </div>
          <Suspense fallback={<div style={{height:180}} className="w-full flex items-center justify-center text-muted-foreground">Carregando depoimentos...</div>}>
            <TestimonialCarousel />
          </Suspense>
        </section>

        <section className="py-8 md:py-24 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Blog e Notícias</h2>
              <p className="text-muted-foreground mt-2">Fique por dentro das novidades do mercado imobiliário</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <Link href="/blog">
                Ver Todos os Artigos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Suspense fallback={<div style={{height:320}} className="w-full flex items-center justify-center text-muted-foreground">Carregando blog...</div>}>
            <BlogPreview />
          </Suspense>
        </section>

        <section className="bg-primary text-primary-foreground py-8 md:py-24 w-full mb-5" aria-labelledby="cta-title">
          <div className="w-full px-0">
            <div className="text-center max-w-3xl mx-auto">
              <h2 id="cta-title" className="text-2xl md:text-3xl font-bold tracking-tight">Pronto para encontrar seu imóvel ideal?</h2>
              <p className="mt-4 text-primary-foreground/90">
                Entre em contato conosco e deixe-nos ajudar você a encontrar o imóvel perfeito para suas necessidades.
              </p>
              <div className="flex flex-col gap-3 w-full max-w-xs mx-auto sm:flex-row sm:justify-center sm:max-w-none mt-8">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="w-full sm:w-auto min-h-[48px] min-w-[48px] px-6 py-4 bg-white text-[#007a68] font-bold border border-[#007a68] hover:bg-[#e6f4ea] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 transition"
                  aria-label="Fale conosco"
                >
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-h-[48px] min-w-[48px] px-6 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  asChild
                  aria-label="Ver imóveis disponíveis"
                >
                  <Link href="/imoveis/venda">Ver Imóveis</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 