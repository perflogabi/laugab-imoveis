'use client';

import React, { useState } from 'react';
import { PropertyCard } from '@/components/property-card';
import { PropertySearchBar } from './PropertySearchBar';
import { PropertyFiltersDrawer } from './PropertyFiltersDrawer';

const propertyImages = [
  "/assets/imoveis/imovel2.webp",
  "/assets/imoveis/imovel4.webp",
  "/assets/imoveis/imovel5.webp",
  "/assets/imoveis/imovel6.webp",
];

const propertiesVenda = [
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
];

const tipos = ["Casa", "Apartamento", "Cobertura", "Studio"];
const localizacoes = Array.from(new Set(propertiesVenda.map(p => p.address.split(',')[0].trim())));

function formatarFaixaPreco(min: number, max: number) {
  if (!min && !max) return 'R$ 0 a Sem limite';
  if (min && !max) return `R$ ${min.toLocaleString()} a Sem limite`;
  if (!min && max) return `Até R$ ${max.toLocaleString()}`;
  return `R$ ${min.toLocaleString()} a R$ ${max.toLocaleString()}`;
}

export default function VendaPage() {
  const [search, setSearch] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showTipo, setShowTipo] = useState(false);
  const [showLocalizacao, setShowLocalizacao] = useState(false);
  const [showPreco, setShowPreco] = useState(false);
  const [filtros, setFiltros] = useState({
    minPrice: 0,
    maxPrice: 0,
    tipo: '',
    localizacao: '',
  });
  // Filtros resumidos para exibir no drawer
  const resumoPreco = formatarFaixaPreco(filtros.minPrice, filtros.maxPrice);
  const resumoTipo = filtros.tipo || 'Todos';
  const resumoLocalizacao = filtros.localizacao || 'Todas';

  // Filtragem dos imóveis
  const filteredProperties = propertiesVenda.filter((p) => {
    if (filtros.minPrice && p.price < filtros.minPrice) return false;
    if (filtros.maxPrice && p.price > filtros.maxPrice) return false;
    // Filtro de tipo apenas visual, pois todos são 'venda'
    if (filtros.tipo && !p.title.toLowerCase().includes(filtros.tipo.toLowerCase())) return false;
    if (filtros.localizacao && !p.address.toLowerCase().includes(filtros.localizacao.toLowerCase())) return false;
    if (search && !(
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase())
    )) return false;
    return true;
  });

  // Handlers para seleção dos filtros
  function handleTipoSelect(tipo: string) {
    setFiltros(f => ({ ...f, tipo }));
    setShowTipo(false);
  }
  function handleLocalizacaoSelect(loc: string) {
    setFiltros(f => ({ ...f, localizacao: loc }));
    setShowLocalizacao(false);
  }
  function handlePrecoSelect(min: number, max: number) {
    setFiltros(f => ({ ...f, minPrice: min, maxPrice: max }));
    setShowPreco(false);
  }
  function handleClear() {
    setFiltros({ minPrice: 0, maxPrice: 0, tipo: '', localizacao: '' });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">Imóveis à Venda</h2>
      <p className="text-lg text-gray-700 mb-6">
        Encontre aqui os melhores imóveis disponíveis para compra. Utilize os filtros para refinar sua busca e encontrar o imóvel ideal para você.
      </p>
      <PropertySearchBar
        value={search}
        onChange={setSearch}
        onSearch={() => {}}
        onOpenFilters={() => setDrawerOpen(true)}
      />
      <PropertyFiltersDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onApply={() => setDrawerOpen(false)}
        onClear={handleClear}
        price={resumoPreco}
        type={resumoTipo}
        location={resumoLocalizacao}
        onPriceClick={() => setShowPreco(true)}
        onTypeClick={() => setShowTipo(true)}
        onLocationClick={() => setShowLocalizacao(true)}
      />
      {/* Submodais simples para seleção dos filtros */}
      {showTipo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto">
            <h3 className="text-lg font-bold mb-4">Tipo de imóvel</h3>
            <ul className="space-y-2">
              <li>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-blue-50" onClick={() => handleTipoSelect('')}>Todos</button>
              </li>
              {tipos.map(tipo => (
                <li key={tipo}>
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-blue-50" onClick={() => handleTipoSelect(tipo)}>{tipo}</button>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 rounded bg-blue-900 text-white font-bold" onClick={() => setShowTipo(false)}>Fechar</button>
          </div>
        </div>
      )}
      {showLocalizacao && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto">
            <h3 className="text-lg font-bold mb-4">Localização</h3>
            <ul className="space-y-2">
              <li>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-blue-50" onClick={() => handleLocalizacaoSelect('')}>Todas</button>
              </li>
              {localizacoes.map(loc => (
                <li key={loc}>
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-blue-50" onClick={() => handleLocalizacaoSelect(loc)}>{loc}</button>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 rounded bg-blue-900 text-white font-bold" onClick={() => setShowLocalizacao(false)}>Fechar</button>
          </div>
        </div>
      )}
      {showPreco && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto">
            <h3 className="text-lg font-bold mb-4">Faixa de Preço</h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const min = (form.elements.namedItem('min') as HTMLInputElement)?.value;
                const max = (form.elements.namedItem('max') as HTMLInputElement)?.value;
                handlePrecoSelect(Number(min), Number(max));
              }}
            >
              <div className="flex gap-2 mb-4">
                <input name="min" type="number" min={0} placeholder="Mínimo" className="w-1/2 rounded border px-2 py-1" defaultValue={filtros.minPrice || ''} />
                <input name="max" type="number" min={0} placeholder="Máximo" className="w-1/2 rounded border px-2 py-1" defaultValue={filtros.maxPrice || ''} />
              </div>
              <button type="submit" className="w-full py-2 rounded bg-blue-900 text-white font-bold">Aplicar</button>
            </form>
            <button className="mt-4 w-full py-2 rounded bg-gray-200 text-gray-800 font-bold" onClick={() => setShowPreco(false)}>Fechar</button>
          </div>
        </div>
      )}
      {filteredProperties.length === 0 ? (
        <p className="text-center text-gray-500 mt-8" role="status">Nenhum imóvel encontrado com os filtros selecionados.</p>
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