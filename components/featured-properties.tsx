"use client"
import { PropertyCard } from "@/components/property-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const propertyImages = [
  "/assets/imoveis/imovel2.webp",
  "/assets/imoveis/imovel4.webp",
  "/assets/imoveis/imovel5.webp",
  "/assets/imoveis/imovel6.webp",
];

// Dados simulados para demonstração
const featuredProperties = {
  venda: [
    {
      id: "apartamento-3-quartos-copacabana",
      title: "Apartamento de 3 Quartos em Copacabana",
      price: 1200000,
      type: "venda" as const,
      address: "Copacabana, Rio de Janeiro - RJ",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      imageUrl: propertyImages[0],
      featured: true,
    },
    {
      id: "casa-4-quartos-jardins",
      title: "Casa de 4 Quartos no Jardins",
      price: 2500000,
      type: "venda" as const,
      address: "Jardins, São Paulo - SP",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      imageUrl: propertyImages[1],
      featured: true,
    },
    {
      id: "cobertura-duplex-leblon",
      title: "Cobertura Duplex no Leblon",
      price: 4800000,
      type: "venda" as const,
      address: "Leblon, Rio de Janeiro - RJ",
      bedrooms: 4,
      bathrooms: 4,
      area: 320,
      imageUrl: propertyImages[2],
      featured: true,
    },
    {
      id: "apartamento-2-quartos-ipanema",
      title: "Apartamento de 2 Quartos em Ipanema",
      price: 1800000,
      type: "venda" as const,
      address: "Ipanema, Rio de Janeiro - RJ",
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      imageUrl: propertyImages[3],
      featured: true,
    },
    {
      id: "casa-condominio-alphaville",
      title: "Casa em Condomínio em Alphaville",
      price: 3200000,
      type: "venda" as const,
      address: "Alphaville, Barueri - SP",
      bedrooms: 5,
      bathrooms: 4,
      area: 450,
      imageUrl: propertyImages[0],
      featured: true,
    },
    {
      id: "apartamento-studio-vila-madalena",
      title: "Studio na Vila Madalena",
      price: 650000,
      type: "venda" as const,
      address: "Vila Madalena, São Paulo - SP",
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      imageUrl: propertyImages[1],
      featured: true,
    },
  ],
  aluguel: [
    {
      id: "apartamento-2-quartos-botafogo",
      title: "Apartamento de 2 Quartos em Botafogo",
      price: 3500,
      type: "aluguel" as const,
      address: "Botafogo, Rio de Janeiro - RJ",
      bedrooms: 2,
      bathrooms: 1,
      area: 75,
      imageUrl: propertyImages[2],
      featured: true,
    },
    {
      id: "casa-3-quartos-morumbi",
      title: "Casa de 3 Quartos no Morumbi",
      price: 8000,
      type: "aluguel" as const,
      address: "Morumbi, São Paulo - SP",
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      imageUrl: propertyImages[3],
      featured: true,
    },
    {
      id: "apartamento-1-quarto-barra",
      title: "Apartamento de 1 Quarto na Barra da Tijuca",
      price: 2800,
      type: "aluguel" as const,
      address: "Barra da Tijuca, Rio de Janeiro - RJ",
      bedrooms: 1,
      bathrooms: 1,
      area: 60,
      imageUrl: propertyImages[0],
      featured: true,
    },
    {
      id: "cobertura-3-quartos-pinheiros",
      title: "Cobertura de 3 Quartos em Pinheiros",
      price: 12000,
      type: "aluguel" as const,
      address: "Pinheiros, São Paulo - SP",
      bedrooms: 3,
      bathrooms: 3,
      area: 180,
      imageUrl: propertyImages[1],
      featured: true,
    },
    {
      id: "casa-condominio-barra",
      title: "Casa em Condomínio na Barra da Tijuca",
      price: 15000,
      type: "aluguel" as const,
      address: "Barra da Tijuca, Rio de Janeiro - RJ",
      bedrooms: 4,
      bathrooms: 3,
      area: 320,
      imageUrl: propertyImages[2],
      featured: true,
    },
    {
      id: "studio-centro",
      title: "Studio no Centro",
      price: 1800,
      type: "aluguel" as const,
      address: "Centro, São Paulo - SP",
      bedrooms: 1,
      bathrooms: 1,
      area: 35,
      imageUrl: propertyImages[3],
      featured: true,
    },
  ],
}

export function FeaturedProperties() {
  const vendaList = useMemo(() => featuredProperties.venda, [])
  const aluguelList = useMemo(() => featuredProperties.aluguel, [])
  return (
    <Tabs defaultValue="venda" className="w-full">
      <TabsList className="w-full max-w-md mx-auto mb-8">
        <TabsTrigger value="venda" className="flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md" aria-controls="venda-section-title">
          Imóveis à Venda
        </TabsTrigger>
        <TabsTrigger value="aluguel" className="flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md" aria-controls="aluguel-section-title">
          Imóveis para Aluguel
        </TabsTrigger>
      </TabsList>
      <TabsContent value="venda" role="tabpanel" aria-labelledby="venda-section-title">
        <section aria-labelledby="venda-section-title">
          <h2 id="venda-section-title" className="sr-only">Imóveis em destaque à venda</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendaList.map((property) => (
              <li key={property.id} className="list-none">
                <PropertyCard {...property} />
              </li>
          ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild>
              <Link href="/imoveis/venda">Ver todos os imóveis à venda</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/imoveis/aluguel">Ver todos os imóveis para alugar</Link>
            </Button>
        </div>
        </section>
      </TabsContent>
      <TabsContent value="aluguel" role="tabpanel" aria-labelledby="aluguel-section-title">
        <section aria-labelledby="aluguel-section-title">
          <h2 id="aluguel-section-title" className="sr-only">Imóveis em destaque para aluguel</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aluguelList.map((property) => (
              <li key={property.id} className="list-none">
                <PropertyCard {...property} />
              </li>
          ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild>
              <Link href="/imoveis/venda">Ver todos os imóveis à venda</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/imoveis/aluguel">Ver todos os imóveis para alugar</Link>
            </Button>
        </div>
        </section>
      </TabsContent>
    </Tabs>
  )
}
