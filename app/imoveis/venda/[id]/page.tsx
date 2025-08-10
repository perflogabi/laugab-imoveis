import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Bath, Bed, MapPin, Maximize2, Car, Phone, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Dados dos imóveis (em produção, viriam de uma API ou banco de dados)
const properties = [
  { 
    id: '1', 
    title: 'Casa com piscina', 
    price: 500000, 
    type: 'venda', 
    kind: 'Casa', 
    address: 'São Paulo', 
    fullAddress: 'Rua das Palmeiras, 123 - Jardins, São Paulo - SP',
    bedrooms: 3, 
    bathrooms: 2, 
    area: 150, 
    imageUrl: '/assets/imoveis/imovel2.webp',
    featured: true,
    description: 'Linda casa com piscina em condomínio fechado. Localizada em uma das melhores regiões de São Paulo, esta propriedade oferece conforto e sofisticação. A casa possui acabamento de alto padrão, jardim bem cuidado e área de lazer completa.',
    features: ['Piscina', 'Garagem para 2 carros', 'Wi-Fi', 'Área gourmet', 'Jardim privativo', 'Sistema de segurança'],
    yearBuilt: 2020,
    parkingSpaces: 2,
    condominiumFee: 800,
    iptu: 1200
  },
  { 
    id: '2', 
    title: 'Apartamento no centro', 
    price: 300000, 
    type: 'venda', 
    kind: 'Apartamento', 
    address: 'Rio de Janeiro', 
    fullAddress: 'Av. Rio Branco, 456 - Centro, Rio de Janeiro - RJ',
    bedrooms: 2, 
    bathrooms: 1, 
    area: 80, 
    imageUrl: '/assets/imoveis/imovel4.webp',
    featured: false,
    description: 'Apartamento bem localizado no centro do Rio de Janeiro, próximo a transportes públicos e comércio. Ideal para investimento ou moradia. O imóvel está em ótimo estado de conservação.',
    features: ['Portaria 24h', 'Elevador', 'Wi-Fi', 'Área de lazer', 'Salão de festas'],
    yearBuilt: 2015,
    parkingSpaces: 1,
    condominiumFee: 450,
    iptu: 800
  },
  { 
    id: '3', 
    title: 'Cobertura com vista', 
    price: 1200000, 
    type: 'venda', 
    kind: 'Cobertura', 
    address: 'Belo Horizonte', 
    fullAddress: 'Rua da Liberdade, 789 - Savassi, Belo Horizonte - MG',
    bedrooms: 4, 
    bathrooms: 3, 
    area: 250, 
    imageUrl: '/assets/imoveis/imovel5.webp',
    featured: true,
    description: 'Exclusiva cobertura com vista panorâmica da cidade. Esta propriedade de luxo oferece o melhor em conforto e sofisticação. Com acabamento premium e localização privilegiada.',
    features: ['Vista panorâmica', 'Terraço gourmet', 'Piscina privativa', 'Garagem para 3 carros', 'Wi-Fi', 'Sistema de automação'],
    yearBuilt: 2022,
    parkingSpaces: 3,
    condominiumFee: 1200,
    iptu: 2000
  },
  { 
    id: '4', 
    title: 'Studio moderno', 
    price: 250000, 
    type: 'venda', 
    kind: 'Studio', 
    address: 'Curitiba', 
    fullAddress: 'Rua das Flores, 321 - Batel, Curitiba - PR',
    bedrooms: 1, 
    bathrooms: 1, 
    area: 45, 
    imageUrl: '/assets/imoveis/imovel6.webp',
    featured: false,
    description: 'Studio moderno e funcional, perfeito para solteiros ou casais. Localizado em uma das melhores regiões de Curitiba, com fácil acesso a transportes e comércio.',
    features: ['Mobiliado', 'Wi-Fi', 'Portaria', 'Área de lazer', 'Estacionamento'],
    yearBuilt: 2018,
    parkingSpaces: 1,
    condominiumFee: 350,
    iptu: 600
  },
  { 
    id: '5', 
    title: 'Casa de campo', 
    price: 800000, 
    type: 'venda', 
    kind: 'Casa', 
    address: 'São Paulo', 
    fullAddress: 'Estrada do Sítio, 654 - Granja Viana, São Paulo - SP',
    bedrooms: 5, 
    bathrooms: 4, 
    area: 300, 
    imageUrl: '/assets/imoveis/imovel5.webp',
    featured: true,
    description: 'Espaçosa casa de campo com ampla área verde. Ideal para quem busca tranquilidade sem abrir mão do conforto. A propriedade possui área de lazer completa e muito espaço para a família.',
    features: ['Piscina', 'Churrasqueira', 'Horta', 'Garagem para 4 carros', 'Wi-Fi', 'Sistema de irrigação'],
    yearBuilt: 2019,
    parkingSpaces: 4,
    condominiumFee: 0,
    iptu: 1500
  },
  { 
    id: '6', 
    title: 'Apartamento perto da praia', 
    price: 700000, 
    type: 'venda', 
    kind: 'Apartamento', 
    address: 'Rio de Janeiro', 
    fullAddress: 'Av. Atlântica, 1234 - Copacabana, Rio de Janeiro - RJ',
    bedrooms: 3, 
    bathrooms: 2, 
    area: 120, 
    imageUrl: '/assets/imoveis/imovel2.webp',
    featured: false,
    description: 'Apartamento com vista para o mar em Copacabana. Localização privilegiada a poucos metros da praia, com todas as comodidades do bairro mais famoso do Rio.',
    features: ['Vista para o mar', 'Piscina', 'Academia', 'Portaria 24h', 'Wi-Fi', 'Salão de festas'],
    yearBuilt: 2017,
    parkingSpaces: 2,
    condominiumFee: 800,
    iptu: 1400
  },
  { 
    id: '7', 
    title: 'Casa em condomínio fechado', 
    price: 950000, 
    type: 'venda', 
    kind: 'Casa', 
    address: 'Belo Horizonte', 
    fullAddress: 'Rua das Acácias, 567 - Cidade Nova, Belo Horizonte - MG',
    bedrooms: 4, 
    bathrooms: 3, 
    area: 220, 
    imageUrl: '/assets/imoveis/imovel4.webp',
    featured: true,
    description: 'Casa em condomínio fechado com segurança 24h. A propriedade oferece tranquilidade e conforto para toda a família, com área de lazer completa e vizinhança selecionada.',
    features: ['Segurança 24h', 'Piscina', 'Quadra esportiva', 'Playground', 'Wi-Fi', 'Garagem para 3 carros'],
    yearBuilt: 2021,
    parkingSpaces: 3,
    condominiumFee: 950,
    iptu: 1800
  },
  { 
    id: '8', 
    title: 'Apartamento reformado', 
    price: 450000, 
    type: 'venda', 
    kind: 'Apartamento', 
    address: 'Curitiba', 
    fullAddress: 'Rua das Araucárias, 890 - Centro Cívico, Curitiba - PR',
    bedrooms: 2, 
    bathrooms: 2, 
    area: 90, 
    imageUrl: '/assets/imoveis/imovel4.webp',
    featured: false,
    description: 'Apartamento totalmente reformado com acabamento moderno. Localizado em região central, próximo a transportes públicos e comércio. Ideal para investimento ou moradia.',
    features: ['Reformado', 'Acabamento moderno', 'Portaria', 'Elevador', 'Wi-Fi', 'Área de lazer'],
    yearBuilt: 2010,
    parkingSpaces: 1,
    condominiumFee: 400,
    iptu: 700
  },
  { 
    id: '9', 
    title: 'Casa térrea', 
    price: 600000, 
    type: 'venda', 
    kind: 'Casa', 
    address: 'São Paulo', 
    fullAddress: 'Rua das Magnólias, 432 - Vila Madalena, São Paulo - SP',
    bedrooms: 3, 
    bathrooms: 2, 
    area: 180, 
    imageUrl: '/assets/imoveis/imovel5.webp',
    featured: false,
    description: 'Charmosa casa térrea em uma das regiões mais desejadas de São Paulo. A propriedade combina charme e funcionalidade, com jardim bem cuidado e acabamento de qualidade.',
    features: ['Jardim', 'Churrasqueira', 'Garagem para 2 carros', 'Wi-Fi', 'Área gourmet', 'Sistema de segurança'],
    yearBuilt: 2016,
    parkingSpaces: 2,
    condominiumFee: 0,
    iptu: 1100
  },
  { 
    id: '10', 
    title: 'Cobertura duplex', 
    price: 1500000, 
    type: 'venda', 
    kind: 'Cobertura', 
    address: 'Rio de Janeiro', 
    fullAddress: 'Av. Vieira Souto, 567 - Ipanema, Rio de Janeiro - RJ',
    bedrooms: 5, 
    bathrooms: 5, 
    area: 350, 
    imageUrl: '/assets/imoveis/imovel6.webp',
    featured: true,
    description: 'Exclusiva cobertura duplex com vista para o mar em Ipanema. Esta propriedade de luxo oferece o máximo em sofisticação e conforto, com acabamento premium e localização privilegiada.',
    features: ['Vista para o mar', 'Terraço gourmet', 'Piscina privativa', 'Garagem para 4 carros', 'Wi-Fi', 'Sistema de automação'],
    yearBuilt: 2023,
    parkingSpaces: 4,
    condominiumFee: 1500,
    iptu: 2500
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
    `${property.title} à venda em ${property.address}. ${property.bedrooms} quartos, ${property.bathrooms} banheiros, ${property.area}m². Valor ${formattedPrice}. Laugab Imobiliária.`;

  return {
    title: `${property.title} - ${property.address} | Laugab Imobiliária`,
    description: metaDescription,
    keywords: [
      'venda',
      'imóvel',
      property.kind.toLowerCase(),
      property.address,
      'Laugab Imobiliária',
      'compra de imóveis',
      `${property.bedrooms} quartos`,
      `${property.area}m²`,
      formattedPrice
    ].join(', '),
    openGraph: {
      title: `${property.title} - ${property.address}`,
      description: metaDescription,
      type: 'website',
      url: `https://laugabimobiliaria.vercel.app/imoveis/venda/${property.id}`,
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
      canonical: `https://laugabimobiliaria.vercel.app/imoveis/venda/${property.id}`,
    },
  };
}

// Gera rotas estáticas para todos os imóveis
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Navegação do site">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Início
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/imoveis/venda" className="hover:text-primary transition-colors">
              Imóveis à Venda
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium" aria-current="page">
            {property.title}
          </li>
        </ol>
      </nav>

      {/* Header do imóvel */}
      <header className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {property.featured && (
                <Badge variant="default" className="bg-green-700 text-white">
                  Destaque
                </Badge>
              )}
              <Badge className="bg-yellow-500 text-black border-transparent">
                Venda
              </Badge>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {property.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{property.fullAddress}</span>
            </div>
            <div className="text-3xl font-bold text-primary mb-4">
              {formattedPrice}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              className="flex items-center gap-2"
            >
              <Link href="tel:+551199999999" aria-label="Ligar para consulta">
                <Phone className="h-4 w-4" />
                Consultar
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Imagem principal */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                />
              </div>
            </CardContent>
          </Card>

          {/* Características principais */}
          <Card>
            <CardHeader>
              <CardTitle>Características</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">
                      {property.bedrooms === 1 ? 'Quarto' : 'Quartos'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">
                      {property.bathrooms === 1 ? 'Banheiro' : 'Banheiros'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{property.area}m²</div>
                    <div className="text-sm text-gray-600">Área útil</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{property.parkingSpaces}</div>
                    <div className="text-sm text-gray-600">
                      {property.parkingSpaces === 1 ? 'Vaga' : 'Vagas'}
                    </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Informações adicionais */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Adicionais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Tipo:</span>
                <span className="font-medium">{property.kind}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ano de construção:</span>
                <span className="font-medium">{property.yearBuilt}</span>
              </div>
              {property.condominiumFee > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Condomínio:</span>
                  <span className="font-medium">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(property.condominiumFee)}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">IPTU:</span>
                <span className="font-medium">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(property.iptu)}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle>Entre em Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link href="tel:+551199999999">
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 9999-9999
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="mailto:contato@laugabimobiliaria.com.br">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar E-mail
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="https://wa.me/5511999999999">
                  WhatsApp
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
