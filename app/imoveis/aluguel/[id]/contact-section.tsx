"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Property {
  id: string
  title: string
  price: number
  type: string
  kind: string
  address: string
  fullAddress: string
  bedrooms: number
  bathrooms: number
  area: number
  imageUrl: string
  images: string[]
  featured: boolean
  description: string
  features: string[]
  coordinates: [number, number]
  yearBuilt: number
  parkingSpaces: number
  condominiumFee: number
  iptu: number
  availableDate: string
  leaseTerm: string
  deposit: number
  petsAllowed: boolean
}

interface ContactSectionProps {
  property: Property
}

// Ícones SVG inline otimizados
const PhoneIcon = ({ className = "h-5 w-5", size = 20 }: { className?: string; size?: number }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = ({ className = "h-5 w-5", size = 20 }: { className?: string; size?: number }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const MessageCircleIcon = ({ className = "h-5 w-5", size = 20 }: { className?: string; size?: number }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

export default function ContactSection({ property }: ContactSectionProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Interessado neste imóvel?</CardTitle>
        <p className="text-muted-foreground">
          Entre em contato conosco para mais informações sobre {property.title}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <PhoneIcon className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium">Telefone</p>
            <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <MailIcon className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium">E-mail</p>
            <p className="text-sm text-muted-foreground">contato@laugab.com.br</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <MessageCircleIcon className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium">WhatsApp</p>
            <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">
            {property.type === 'aluguel' ? 'Aluguel:' : 'Preço:'}
          </p>
          <p className="text-2xl font-bold text-green-600">
            R$ {property.price.toLocaleString('pt-BR')}
            {property.type === 'aluguel' && '/mês'}
          </p>
        </div>
        
        <Button className="w-full" size="lg">
          Solicitar Informações
        </Button>
      </CardContent>
    </Card>
  )
}
