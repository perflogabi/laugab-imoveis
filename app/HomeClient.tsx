"use client"

import Link from "next/link"
import { ArrowRight, Building, HomeIcon, MapPin } from "lucide-react"
import dynamic from "next/dynamic"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AboutLaugab } from "@/components/AboutLaugab"
import Image from "next/image"

// Carregamento lazy otimizado dos componentes
const FeaturedProperties = dynamic(
  () => import("@/components/featured-properties").then(m => ({ default: m.FeaturedProperties })), 
  { 
    ssr: true, 
    loading: () => (
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-64 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
)

const TestimonialCarousel = dynamic(
  () => import("@/components/testimonial-carousel").then(m => ({ default: m.TestimonialCarousel })), 
  { 
    ssr: true, 
    loading: () => (
      <div className="w-full max-w-xl mx-auto">
        <div className="animate-pulse">
          <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-11 h-11 bg-gray-200 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }
)

const BlogPreview = dynamic(
  () => import("@/components/blog-preview").then(m => ({ default: m.BlogPreview })), 
  { 
    ssr: true, 
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
)

export default function HomeClient() {
  return (
    <>
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
        <section className="py-8 md:py-24 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Imóveis em Destaque</h2>
              <p className="text-muted-foreground mt-2">
                Confira nossas melhores opções de imóveis para compra e aluguel
              </p>
            </div>
          </div>
          <Suspense fallback={
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 rounded-lg h-64 mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center p-6 border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ampla Variedade</h3>
                  <p className="text-muted-foreground text-sm">
                    Milhares de imóveis disponíveis para compra e aluguel em todo o Brasil.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Localização Estratégica</h3>
                  <p className="text-muted-foreground text-sm">
                    Imóveis em bairros nobres e regiões em desenvolvimento.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HomeIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Atendimento Personalizado</h3>
                  <p className="text-muted-foreground text-sm">
                    Nossa equipe especializada está sempre pronta para ajudar você.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Processo Simplificado</h3>
                  <p className="text-muted-foreground text-sm">
                    Documentação e procedimentos burocráticos facilitados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-24 w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Depoimentos de Clientes</h2>
            <p className="text-muted-foreground mt-4">
              Veja o que nossos clientes dizem sobre a Laugab Imobiliária
            </p>
          </div>
          <Suspense fallback={
            <div className="w-full max-w-xl mx-auto">
              <div className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-11 h-11 bg-gray-200 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          }>
            <TestimonialCarousel />
          </Suspense>
        </section>

        <section className="py-8 md:py-24 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Blog</h2>
              <p className="text-muted-foreground mt-2">
                Fique por dentro das novidades do mercado imobiliário
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">
                Ver todos os posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          }>
            <BlogPreview />
          </Suspense>
        </section>
      </main>
    </>
  )
} 