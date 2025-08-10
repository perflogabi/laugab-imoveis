import { MetadataRoute } from 'next';

// Dados dos imóveis à venda (em produção, viriam de uma API ou banco de dados)
const propertiesVenda = [
  { id: '1', title: 'Casa com piscina', address: 'São Paulo' },
  { id: '2', title: 'Apartamento no centro', address: 'Rio de Janeiro' },
  { id: '3', title: 'Cobertura com vista', address: 'Belo Horizonte' },
  { id: '4', title: 'Studio moderno', address: 'Curitiba' },
  { id: '5', title: 'Casa de campo', address: 'São Paulo' },
  { id: '6', title: 'Apartamento perto da praia', address: 'Rio de Janeiro' },
  { id: '7', title: 'Casa em condomínio fechado', address: 'Belo Horizonte' },
  { id: '8', title: 'Apartamento reformado', address: 'Curitiba' },
  { id: '9', title: 'Casa térrea', address: 'São Paulo' },
  { id: '10', title: 'Cobertura duplex', address: 'Rio de Janeiro' },
];

// Dados dos imóveis para aluguel (em produção, viriam de uma API ou banco de dados)
const propertiesAluguel = [
  { id: 'apartamento-2-quartos-botafogo', title: 'Apartamento de 2 Quartos em Botafogo', address: 'Rio de Janeiro' },
  { id: 'casa-3-quartos-morumbi', title: 'Casa de 3 Quartos no Morumbi', address: 'São Paulo' },
  { id: 'apartamento-1-quarto-barra', title: 'Apartamento de 1 Quarto na Barra da Tijuca', address: 'Rio de Janeiro' },
  { id: 'cobertura-3-quartos-pinheiros', title: 'Cobertura de 3 Quartos em Pinheiros', address: 'São Paulo' },
  { id: 'casa-condominio-barra', title: 'Casa em Condomínio na Barra da Tijuca', address: 'Rio de Janeiro' },
  { id: 'studio-centro', title: 'Studio no Centro', address: 'São Paulo' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://laugabimobiliaria.vercel.app';
  
  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/imoveis/venda`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/imoveis/aluguel`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/financiamento`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Páginas dinâmicas dos imóveis à venda
  const propertyVendaPages = propertiesVenda.map((property) => ({
    url: `${baseUrl}/imoveis/venda/${property.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Páginas dinâmicas dos imóveis para aluguel
  const propertyAluguelPages = propertiesAluguel.map((property) => ({
    url: `${baseUrl}/imoveis/aluguel/${property.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...propertyVendaPages, ...propertyAluguelPages];
}
