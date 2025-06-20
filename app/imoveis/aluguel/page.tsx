'use client';

import React from 'react';
import { PropertyCard } from '@/components/property-card';

const propertyImages = [
  "/assets/imoveis/imovel2.webp",
  "/assets/imoveis/imovel4.webp",
  "/assets/imoveis/imovel5.webp",
  "/assets/imoveis/imovel6.webp",
];

const propertiesAluguel = [
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
];

export default function AluguelPage() {
  // A lógica de filtro foi removida. Exibindo todos os imóveis.
  const filteredProperties = propertiesAluguel;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">Imóveis para Aluguel</h2>
      <p className="text-lg text-gray-700 mb-6">
        Encontre aqui os melhores imóveis disponíveis para aluguel.
      </p>
      
      {filteredProperties.length === 0 ? (
        <p className="text-center text-gray-500 mt-8" role="status">Nenhum imóvel para aluguel encontrado.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8" aria-live="polite">
          {filteredProperties.map((property) => (
            <li key={property.id} className="list-none">
              <PropertyCard {...property} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 