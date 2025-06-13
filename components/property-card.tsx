import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, MapPin, Maximize2 } from "lucide-react"
import React from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface PropertyCardProps {
  id: string
  title: string
  price: number
  type: "venda" | "aluguel"
  address: string
  bedrooms: number
  bathrooms: number
  area: number
  imageUrl: string
  featured?: boolean
  className?: string
}

const PropertyCardComponent = ({
  id,
  title,
  price,
  type,
  address,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  featured = false,
  className,
}: PropertyCardProps) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(price)

  const propertyUrl = `/imoveis/${type}/${id}`

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <div className="relative">
        <Link href={propertyUrl}>
          <div className="aspect-[16/9] overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={320}
              height={180}
              className="h-full w-full object-cover transition-transform hover:scale-105"
              loading="lazy"
              sizes="(max-width: 480px) 98vw, (max-width: 768px) 50vw, 320px"
              fetchPriority="auto"
            />
          </div>
        </Link>
        {featured && (
          <Badge variant="default" className="absolute top-2 right-2 bg-green-700 text-white" aria-label="Imóvel em destaque">
            Destaque
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">
            <Link href={propertyUrl} className="hover:text-primary transition-colors">
              {title}
            </Link>
          </h3>
          <Badge 
            className={
              type === "venda"
                ? "bg-yellow-500 text-black border-transparent"
                : "bg-green-600 text-white border-transparent"
            }
          >
            {type === "venda" ? "Venda" : "Aluguel"}
          </Badge>
        </div>
        <div className="flex items-center text-foreground text-sm mb-3">
          <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
          <span className="truncate">{address}</span>
        </div>
        <div className="text-xl font-bold mb-3">
          {formattedPrice}
          {type === "aluguel" && <span className="text-sm font-normal text-foreground">/mês</span>}
        </div>
        <div className="flex items-center justify-between text-sm text-foreground">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>
              {bedrooms} {bedrooms === 1 ? "Quarto" : "Quartos"}
            </span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>
              {bathrooms} {bathrooms === 1 ? "Banheiro" : "Banheiros"}
            </span>
          </div>
          <div className="flex items-center">
            <Maximize2 className="h-4 w-4 mr-1" />
            <span>{area}m²</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={propertyUrl}
          className="text-sm font-medium text-blue-900 hover:underline w-full text-center py-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition"
          style={{ minHeight: 44 }}
          aria-label={`Ver detalhes do imóvel: ${title}`}
        >
          Ver Detalhes
        </Link>
      </CardFooter>
      
    </Card>
    
  )
}

export const PropertyCard = React.memo(PropertyCardComponent)
