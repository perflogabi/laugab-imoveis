import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Breadcrumb from '@/components/breadcrumb';
import PropertySchema from '@/components/property-schema';
import SocialShare from '@/components/social-share';
import ContactSection from './contact-section';

// Ícones SVG inline otimizados
const BedIcon = ({ className = "h-5 w-5", size = 20 }: { className?: string; size?: number }) => (
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
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8v9" />
  </svg>
)

const BathIcon = ({ className = "h-5 w-5", size = 20 }: { className?: string; size?: number }) => (
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
    <path d="M4 12h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" />
    <path d="M6 12V6a2 2 0 0 1 2-2h3v2" />
    <line x1="4" x2="20" y1="20" y2="20" />
  </svg>
)

const MapPinIcon = ({ className = "h-4 w-4", size = 16 }: { className?: string; size?: number }) => (
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
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const Maximize2Icon = ({ className = "h-5 w-5", size = 20 }: { className?: string; size?: number }) => (
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
    <polyline points="15,3 21,3 21,9" />
    <polyline points="9,21 3,21 3,15" />
    <line x1="21" x2="14" y1="3" y2="10" />
    <line x1="3" x2="10" y1="21" y2="14" />
  </svg>
)

const CarIcon = ({ className = "h-5 w-5", size = 20 }: { className?: string; size?: number }) => (
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
    <path d="M14 16H9m11 0h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1l-1-4H6l-1 4H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="17.5" cy="16.5" r="2.5" />
  </svg>
)

// Dados dos imóveis para aluguel (em produção, viriam de uma API ou banco de dados)
const properties = [
  {
    id: 'apartamento-2-quartos-botafogo',
    title: 'Apartamento de 2 Quartos em Botafogo',
    price: 3500,
    type: 'aluguel',
    kind: 'Apartamento',
    address: 'Botafogo, Rio de Janeiro - RJ',
    fullAddress: 'Rua das Palmeiras, 456 - Botafogo, Rio de Janeiro - RJ',
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    imageUrl: '/assets/imoveis/imovel4.webp',
    images: [
      '/assets/imoveis/imovel4.webp',
      '/assets/imoveis/imovel2.webp',
      '/assets/imoveis/imovel5.webp',
      '/assets/imoveis/imovel6.webp',
      '/assets/imoveis/imovel4.webp'
    ],
    featured: true,
    description: 'Apartamento de 2 quartos para aluguel em Botafogo, Rio de Janeiro. 75m² mobiliado com Wi-Fi, área de lazer, portaria 24h e estacionamento. Próximo ao metrô e comércio. Aluguel R$ 3.500/mês + condomínio R$ 800. Região tradicional e bem localizada.',
    features: ['Mobiliado', 'Wi-Fi incluído', 'Área de lazer', 'Portaria 24h', 'Estacionamento', 'Segurança'],
    coordinates: [-22.9508, -43.1834] as [number, number],
    yearBuilt: 2015,
    parkingSpaces: 1,
    condominiumFee: 800,
    iptu: 600,
    availableDate: '2025-01-15',
    leaseTerm: '12 meses',
    deposit: 3500,
    petsAllowed: true
  },
  {
    id: 'casa-3-quartos-morumbi',
    title: 'Casa de 3 Quartos no Morumbi',
    price: 8000,
    type: 'aluguel',
    kind: 'Casa',
    address: 'Morumbi, São Paulo - SP',
    fullAddress: 'Rua das Acácias, 789 - Morumbi, São Paulo - SP',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    imageUrl: '/assets/imoveis/imovel6.webp',
    images: [
      '/assets/imoveis/imovel6.webp',
      '/assets/imoveis/imovel2.webp',
      '/assets/imoveis/imovel4.webp',
      '/assets/imoveis/imovel5.webp',
      '/assets/imoveis/imovel6.webp'
    ],
    featured: true,
    description: 'Casa de 3 quartos para aluguel no Morumbi, São Paulo. 180m² com jardim privativo, garagem para 2 carros, Wi-Fi, área gourmet e sistema de segurança. Região nobre com acabamento de alto padrão. Aluguel R$ 8.000/mês. Ideal para famílias.',
    features: ['Jardim privativo', 'Garagem para 2 carros', 'Wi-Fi incluído', 'Área gourmet', 'Sistema de segurança', 'Piscina'],
    coordinates: [-23.5505, -46.6333] as [number, number],
    yearBuilt: 2018,
    parkingSpaces: 2,
    condominiumFee: 0,
    iptu: 1200,
    availableDate: '2025-02-01',
    leaseTerm: '24 meses',
    deposit: 8000,
    petsAllowed: false
  },
  {
    id: 'apartamento-1-quarto-barra',
    title: 'Apartamento de 1 Quarto na Barra da Tijuca',
    price: 2800,
    type: 'aluguel',
    kind: 'Apartamento',
    address: 'Barra da Tijuca, Rio de Janeiro - RJ',
    fullAddress: 'Avenida das Américas, 1234 - Barra da Tijuca, Rio de Janeiro - RJ',
    bedrooms: 1,
    bathrooms: 1,
    area: 60,
    imageUrl: '/assets/imoveis/imovel2.webp',
    images: [
      '/assets/imoveis/imovel2.webp',
      '/assets/imoveis/imovel4.webp',
      '/assets/imoveis/imovel5.webp',
      '/assets/imoveis/imovel6.webp',
      '/assets/imoveis/imovel2.webp'
    ],
    featured: true,
    description: 'Apartamento de 1 quarto para aluguel na Barra da Tijuca, Rio de Janeiro. 60m² mobiliado com Wi-Fi, academia, piscina e portaria 24h. Próximo ao metrô, praias e comércio. Aluguel R$ 2.800/mês + condomínio R$ 600. Ideal para solteiros ou casais.',
    features: ['Mobiliado', 'Wi-Fi incluído', 'Academia', 'Piscina', 'Salão de festas', 'Portaria 24h'],
    coordinates: [-22.9719, -43.1825] as [number, number],
    yearBuilt: 2020,
    parkingSpaces: 1,
    condominiumFee: 600,
    iptu: 400,
    availableDate: '2025-01-20',
    leaseTerm: '12 meses',
    deposit: 2800,
    petsAllowed: true
  },
  {
    id: 'cobertura-3-quartos-pinheiros',
    title: 'Cobertura de 3 Quartos em Pinheiros',
    price: 12000,
    type: 'aluguel',
    kind: 'Cobertura',
    address: 'Pinheiros, São Paulo - SP',
    fullAddress: 'Rua dos Pinheiros, 567 - Pinheiros, São Paulo - SP',
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    imageUrl: '/assets/imoveis/imovel5.webp',
    images: [
      '/assets/imoveis/imovel5.webp',
      '/assets/imoveis/imovel2.webp',
      '/assets/imoveis/imovel4.webp',
      '/assets/imoveis/imovel6.webp',
      '/assets/imoveis/imovel5.webp'
    ],
    featured: true,
    description: 'Cobertura de 3 quartos para aluguel em Pinheiros, São Paulo. 180m² com vista panorâmica, terraço gourmet, garagem para 3 carros, Wi-Fi, spa e sala de cinema. Acabamento de luxo. Aluguel R$ 12.000/mês + condomínio R$ 1.500. Localização privilegiada.',
    features: ['Vista panorâmica', 'Terraço gourmet', 'Garagem para 3 carros', 'Wi-Fi incluído', 'Spa', 'Sala de cinema'],
    coordinates: [-23.5505, -46.6333] as [number, number],
    yearBuilt: 2022,
    parkingSpaces: 3,
    condominiumFee: 1500,
    iptu: 1800,
    availableDate: '2025-03-01',
    leaseTerm: '24 meses',
    deposit: 12000,
    petsAllowed: true
  },
  {
    id: 'casa-condominio-barra',
    title: 'Casa em Condomínio na Barra da Tijuca',
    price: 15000,
    type: 'aluguel',
    kind: 'Casa',
    address: 'Barra da Tijuca, Rio de Janeiro - RJ',
    fullAddress: 'Rua das Palmeiras, 890 - Barra da Tijuca, Rio de Janeiro - RJ',
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    imageUrl: '/assets/imoveis/imovel4.webp',
    images: [
      '/assets/imoveis/imovel4.webp',
      '/assets/imoveis/imovel2.webp',
      '/assets/imoveis/imovel5.webp',
      '/assets/imoveis/imovel6.webp',
      '/assets/imoveis/imovel4.webp'
    ],
    featured: true,
    description: 'Casa de 4 quartos em condomínio para aluguel na Barra da Tijuca, Rio de Janeiro. 320m² com piscina, quadra de tênis, playground, garagem para 4 carros e sistema de segurança. Condomínio fechado. Aluguel R$ 15.000/mês + condomínio R$ 2.000. Ideal para famílias.',
    features: ['Condomínio fechado', 'Piscina', 'Quadra de tênis', 'Playground', 'Garagem para 4 carros', 'Sistema de segurança'],
    coordinates: [-22.9719, -43.1825] as [number, number],
    yearBuilt: 2019,
    parkingSpaces: 4,
    condominiumFee: 2000,
    iptu: 2500,
    availableDate: '2025-02-15',
    leaseTerm: '24 meses',
    deposit: 15000,
    petsAllowed: true
  },
  {
    id: 'studio-centro',
    title: 'Studio no Centro',
    price: 1800,
    type: 'aluguel',
    kind: 'Studio',
    address: 'Centro, São Paulo - SP',
    fullAddress: 'Rua da Consolação, 123 - Centro, São Paulo - SP',
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    imageUrl: '/assets/imoveis/imovel6.webp',
    images: [
      '/assets/imoveis/imovel6.webp',
      '/assets/imoveis/imovel2.webp',
      '/assets/imoveis/imovel4.webp',
      '/assets/imoveis/imovel5.webp',
      '/assets/imoveis/imovel6.webp'
    ],
    featured: true,
    description: 'Studio de 35m² para aluguel no Centro de São Paulo. Mobiliado com Wi-Fi, cozinha americana, armários embutidos e portaria 24h. Próximo ao metrô. Aluguel R$ 1.800/mês + condomínio R$ 400. Ideal para estudantes ou profissionais.',
    features: ['Mobiliado', 'Wi-Fi incluído', 'Cozinha americana', 'Armários embutidos', 'Portaria 24h', 'Próximo ao metrô'],
    coordinates: [-23.5505, -46.6333] as [number, number],
    yearBuilt: 2017,
    parkingSpaces: 0,
    condominiumFee: 400,
    iptu: 300,
    availableDate: '2025-01-10',
    leaseTerm: '12 meses',
    deposit: 1800,
    petsAllowed: false
  }
];

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

// Gera metadados dinâmicos para SEO
export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return {
      title: 'Imóvel não encontrado | Laugab Imobiliária',
      description: 'O imóvel que você está procurando não foi encontrado. Entre em contato conosco para encontrar opções similares.',
    };
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(property.price);

  // Garante que a descrição não esteja vazia
  const metaDescription = property.description || 
    `${property.title} para aluguel em ${property.address}. ${property.bedrooms} quartos, ${property.bathrooms} banheiros, ${property.area}m². Aluguel ${formattedPrice}/mês. Laugab Imobiliária.`;

  return {
    title: `${property.title} - ${property.address} | Laugab Imobiliária`,
    description: metaDescription,
    keywords: [
      'aluguel',
      'imóvel',
      property.kind.toLowerCase(),
      property.address,
      'Laugab Imobiliária',
      'aluguel de imóveis',
      `${property.bedrooms} quartos`,
      `${property.area}m²`,
      formattedPrice
    ].join(', '),
    openGraph: {
      title: `${property.title} - ${property.address}`,
      description: metaDescription,
      type: 'website',
      url: `https://laugabimobiliaria.vercel.app/imoveis/aluguel/${property.id}`,
      images: [
        {
          url: property.imageUrl,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
      siteName: 'Laugab Imobiliária',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${property.title} - ${property.address}`,
      description: metaDescription,
      images: [property.imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://laugabimobiliaria.vercel.app/imoveis/aluguel/${property.id}`,
    },
  };
}

// Gera parâmetros estáticos para todas as páginas de imóveis
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = properties.find(p => p.id === id);

  if (!property) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(property.price);

  const formattedDeposit = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(property.deposit);

  const breadcrumbItems = [
    { label: 'Imóveis', href: '/imoveis' },
    { label: 'Aluguel', href: '/imoveis/aluguel' },
    { label: property.title }
  ];

  return (
    <>
      <PropertySchema property={property} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header do imóvel */}
            <header className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    <span>{property.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-sm">
                      {property.kind}
                    </Badge>
                    <Badge className="bg-green-700 text-white">
                      Aluguel
                    </Badge>
                    {property.featured && (
                      <Badge className="bg-yellow-500 text-black">
                        Destaque
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">
                    {formattedPrice}
                    <span className="text-lg font-normal text-gray-700">/mês</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Caução: {formattedDeposit}
                  </p>
                </div>
              </div>
            </header>

            {/* Galeria de Imagens */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                  <Image
                    src={property.imageUrl}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Características Principais */}
            <Card>
              <CardHeader>
                <CardTitle>Características</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <BedIcon className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{property.bedrooms}</p>
                      <p className="text-sm text-gray-600">
                        {property.bedrooms === 1 ? 'Quarto' : 'Quartos'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BathIcon className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{property.bathrooms}</p>
                      <p className="text-sm text-gray-600">
                        {property.bathrooms === 1 ? 'Banheiro' : 'Banheiros'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2Icon className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{property.area}m²</p>
                      <p className="text-sm text-gray-600">Área útil</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CarIcon className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{property.parkingSpaces}</p>
                      <p className="text-sm text-gray-600">
                        {property.parkingSpaces === 1 ? 'Vaga' : 'Vagas'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Descrição */}
            <Card>
              <CardHeader>
                <CardTitle>Descrição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Diferenciais */}
            <Card>
              <CardHeader>
                <CardTitle>Diferenciais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informações Adicionais */}
            <Card>
              <CardHeader>
                <CardTitle>Informações do Aluguel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Valor do aluguel:</span>
                  <span className="font-semibold text-gray-900">{formattedPrice}/mês</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Caução:</span>
                  <span className="font-semibold text-gray-900">{formattedDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Condomínio:</span>
                  <span className="font-semibold text-gray-900">
                    {property.condominiumFee > 0 
                      ? new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          maximumFractionDigits: 0,
                        }).format(property.condominiumFee)
                      : 'Incluso'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IPTU:</span>
                  <span className="font-semibold text-gray-900">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      maximumFractionDigits: 0,
                    }).format(property.iptu)}/ano
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prazo mínimo:</span>
                  <span className="font-semibold text-gray-900">{property.leaseTerm}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disponível em:</span>
                  <span className="font-semibold text-gray-900">
                    {new Date(property.availableDate).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Aceita pets:</span>
                  <span className="font-semibold text-gray-900">
                    {property.petsAllowed ? 'Sim' : 'Não'}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <ContactSection property={property} />

            {/* Compartilhamento Social */}
            <Card>
              <CardContent>
                <SocialShare
                  title={property.title}
                  description={property.description}
                  url={`https://laugabimobiliaria.vercel.app/imoveis/aluguel/${property.id}`}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Imóveis Similares */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Imóveis Similares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties
              .filter(p => p.id !== property.id && p.bedrooms === property.bedrooms)
              .slice(0, 3)
              .map((similarProperty) => (
                <Card key={similarProperty.id} className="overflow-hidden">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={similarProperty.imageUrl}
                      alt={similarProperty.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 text-gray-900">{similarProperty.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{similarProperty.address}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          maximumFractionDigits: 0,
                        }).format(similarProperty.price)}/mês
                      </span>
                      <Button asChild size="sm">
                        <Link href={`/imoveis/aluguel/${similarProperty.id}`}>
                          Ver Detalhes
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
