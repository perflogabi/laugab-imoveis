"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

// Componente de busca de imóveis com alta acessibilidade e responsividade
interface PropertySearchProps {
  type: "venda" | "aluguel"
}

export function PropertySearch({ type }: PropertySearchProps) {
  const [priceRange, setPriceRange] = useState([0])

  const maxPrice = type === "venda" ? 5000000 : 20000

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: Implementar lógica de busca
  }

  return (
    <form
      className="space-y-4 max-w-7xl w-full mx-auto p-4"
      role="search"
      aria-label="Busca de imóveis"
      onSubmit={handleSubmit}
    >
      <h2 className="sr-only">Buscar Imóveis</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location" className="text-lg">Localização</Label>
          <Input id="location" placeholder="Cidade, bairro ou região" className="text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
        </div>
        <div className="space-y-2">
          <Label id="property-type-label" htmlFor="property-type" className="text-lg">Tipo de Imóvel</Label>
          <Select>
            <SelectTrigger id="property-type" aria-labelledby="property-type-label" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartamento</SelectItem>
              <SelectItem value="house">Casa</SelectItem>
              <SelectItem value="commercial">Comercial</SelectItem>
              <SelectItem value="land">Terreno</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label id="bedrooms-label" htmlFor="bedrooms" className="text-lg">Quartos</Label>
          <Select>
            <SelectTrigger id="bedrooms" aria-labelledby="bedrooms-label" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="text-lg">
              <SelectItem value="1+">1+</SelectItem>
              <SelectItem value="2+">2+</SelectItem>
              <SelectItem value="3+">3+</SelectItem>
              <SelectItem value="4+">4+</SelectItem>
              <SelectItem value="5+">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="price-range" className="text-lg">Faixa de Preço</Label>
          <span className="text-lg text-foreground">Até {formatPrice(priceRange[0])}</span>
        </div>
        <Slider
          id="price-range"
          aria-label="Faixa de Preço"
          min={0}
          max={maxPrice}
          step={type === "venda" ? 50000 : 100}
          value={priceRange}
          onValueChange={setPriceRange}
          aria-valuenow={priceRange[0]}
          aria-valuemin={0}
          aria-valuemax={maxPrice}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label id="bathrooms-label" htmlFor="bathrooms" className="text-lg">Banheiros</Label>
          <Select>
            <SelectTrigger id="bathrooms" aria-labelledby="bathrooms-label" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1+">1+</SelectItem>
              <SelectItem value="2+">2+</SelectItem>
              <SelectItem value="3+">3+</SelectItem>
              <SelectItem value="4+">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label id="area-label" htmlFor="area" className="text-lg">Área (m²)</Label>
          <Select>
            <SelectTrigger id="area" aria-labelledby="area-label" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="text-xl">
              <SelectItem value="50+">50+ m²</SelectItem>
              <SelectItem value="100+">100+ m²</SelectItem>
              <SelectItem value="150+">150+ m²</SelectItem>
              <SelectItem value="200+">200+ m²</SelectItem>
              <SelectItem value="300+">300+ m²</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label id="features-label" htmlFor="features" className="text-lg">Características</Label>
          <Select>
            <SelectTrigger id="features" aria-labelledby="features-label" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="text-xl">
              <SelectItem value="garage">Garagem</SelectItem>
              <SelectItem value="pool">Piscina</SelectItem>
              <SelectItem value="garden">Jardim</SelectItem>
              <SelectItem value="security">Segurança 24h</SelectItem>
              <SelectItem value="gym">Academia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center">
        <Button size="lg" type="submit" variant="secondary" className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">
          <Search className="h-4 w-4 mr-2" />
          Buscar Imóveis
        </Button>
      </div>
    </form>
  )
}
