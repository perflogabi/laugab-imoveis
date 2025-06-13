'use client';

import React, { useState } from 'react';
import { PropertyCard } from '@/components/property-card';
import { PropertySearchBar } from '../venda/PropertySearchBar';
import { PropertyFiltersDrawer } from '../venda/PropertyFiltersDrawer';

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

const tipos = ["Casa", "Apartamento", "Cobertura", "Studio"];
const localizacoes = Array.from(new Set(propertiesAluguel.map(p => p.address.split(',')[0].trim())));

function formatarFaixaPreco(min: number, max: number) {
  if (!min && !max) return 'R$ 0 a Sem limite';
  if (min && !max) return `R$ ${min.toLocaleString()} a Sem limite`;
  if (!min && max) return `Até R$ ${max.toLocaleString()}`;
  return `R$ ${min.toLocaleString()} a R$ ${max.toLocaleString()}`;
}

export default function AluguelPage() {
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
  const filteredProperties = propertiesAluguel.filter((p) => {
    if (filtros.minPrice && p.price < filtros.minPrice) return false;
    if (filtros.maxPrice && p.price > filtros.maxPrice) return false;
    if (filtros.tipo && !p.title.toLowerCase().includes(filtros.tipo.toLowerCase())) return false;
    if (filtros.localizacao && !p.address.toLowerCase().includes(filtros.localizacao.toLowerCase())) return false;
    if (search && !(
      p.address.toLowerCase().includes(search.toLowerCase()) ||
      p.title.toLowerCase().includes(search.toLowerCase())
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
      <h2 className="text-2xl font-bold mb-2">Imóveis para Aluguel</h2>
      <p className="text-lg text-gray-700 mb-6">
        Encontre aqui os melhores imóveis disponíveis para aluguel. Utilize os filtros para refinar sua busca e encontrar o imóvel ideal para você.
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
            <form onSubmit={e => { e.preventDefault(); handlePrecoSelect(Number((e.target as any).min.value), Number((e.target as any).max.value)); }}>
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