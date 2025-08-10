import React from 'react';

interface PropertySchemaProps {
  property: {
    id: string;
    title: string;
    price: number;
    type: string;
    kind: string;
    address: string;
    fullAddress: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    imageUrl: string;
    description: string;
    yearBuilt: number;
    parkingSpaces: number;
    condominiumFee: number;
    iptu: number;
    coordinates: [number, number];
    deposit?: number;
    leaseTerm?: string;
    availableDate?: string;
    petsAllowed?: boolean;
  };
}

export default function PropertySchema({ property }: PropertySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": property.type === 'venda' ? "Product" : "RealEstateListing",
    "name": property.title,
    "description": property.description,
    "image": property.imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Laugab Imobiliária"
    },
    "offers": {
      "@type": "Offer",
      "price": property.price,
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "RealEstateAgent",
        "name": "Laugab Imobiliária",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Paulista, 1000",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "postalCode": "01310-100",
          "addressCountry": "BR"
        },
        "telephone": "+551199999999",
        "email": "contato@laugabimobiliaria.com.br"
      },
      ...(property.type === 'aluguel' ? {
        "leaseLength": property.leaseTerm,
        "deposit": property.deposit,
        "availableFrom": property.availableDate
      } : {})
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Tipo de Imóvel",
        "value": property.kind
      },
      {
        "@type": "PropertyValue",
        "name": "Quartos",
        "value": property.bedrooms
      },
      {
        "@type": "PropertyValue",
        "name": "Banheiros",
        "value": property.bathrooms
      },
      {
        "@type": "PropertyValue",
        "name": "Área",
        "value": `${property.area}m²`
      },
      {
        "@type": "PropertyValue",
        "name": "Vagas de Estacionamento",
        "value": property.parkingSpaces
      },
      {
        "@type": "PropertyValue",
        "name": "Ano de Construção",
        "value": property.yearBuilt
      },
      {
        "@type": "PropertyValue",
        "name": "Condomínio",
        "value": property.condominiumFee > 0 ? `R$ ${property.condominiumFee}` : "Não há"
      },
      {
        "@type": "PropertyValue",
        "name": "IPTU",
        "value": `R$ ${property.iptu}`
      },
      ...(property.type === 'aluguel' ? [
        {
          "@type": "PropertyValue",
          "name": "Caução",
          "value": `R$ ${property.deposit}`
        },
        {
          "@type": "PropertyValue",
          "name": "Prazo Mínimo",
          "value": property.leaseTerm
        },
        {
          "@type": "PropertyValue",
          "name": "Aceita Pets",
          "value": property.petsAllowed ? "Sim" : "Não"
        }
      ] : [])
    ],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": property.address,
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": property.coordinates[0],
        "longitude": property.coordinates[1]
      }
    },
    "category": property.type === 'venda' ? 'Imóvel à Venda' : 'Imóvel para Aluguel'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
