'use client';

import React, { useState } from 'react';
import { PropertyCard } from '@/components/property-card';
import { PropertySearchBar } from './PropertySearchBar';
import { PropertyFiltersDrawer } from './PropertyFiltersDrawer';

const tipos = ["Casa", "Apartamento", "Cobertura", "Studio"];
const localizacoes = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"]; // Exemplo de localizações fixas

function formatarFaixaPreco(min: number, max: number) {
  if (!min && !max) return 'R$ 0 a Sem limite';
  if (min && !max) return `R$ ${min.toLocaleString()} a Sem limite`;
  if (!min && max) return `Até R$ ${max.toLocaleString()}`;
  return `R$ ${min.toLocaleString()} a R$ ${max.toLocaleString()}`;
}

interface Property {
  id: string;
  title: string;
  price: number;
  type: "venda" | "aluguel";
  kind: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  featured: boolean;
}

const allProperties: Property[] = [
  { id: '1', title: 'Casa com piscina', price: 500000, type: 'venda', kind: 'Casa', address: 'São Paulo', bedrooms: 3, bathrooms: 2, area: 150, imageUrl: '/assets/imoveis/imovel2.webp', featured: true },
  { id: '2', title: 'Apartamento no centro', price: 300000, type: 'venda', kind: 'Apartamento', address: 'Rio de Janeiro', bedrooms: 2, bathrooms: 1, area: 80, imageUrl: '/assets/imoveis/imovel4.webp', featured: false },
  { id: '3', title: 'Cobertura com vista', price: 1200000, type: 'venda', kind: 'Cobertura', address: 'Belo Horizonte', bedrooms: 4, bathrooms: 3, area: 250, imageUrl: '/assets/imoveis/imovel5.webp', featured: true },
  { id: '4', title: 'Studio moderno', price: 250000, type: 'venda', kind: 'Studio', address: 'Curitiba', bedrooms: 1, bathrooms: 1, area: 45, imageUrl: '/assets/imoveis/imovel6.webp', featured: false },
  { id: '5', title: 'Casa de campo', price: 800000, type: 'venda', kind: 'Casa', address: 'São Paulo', bedrooms: 5, bathrooms: 4, area: 300, imageUrl: '/assets/imoveis/imovel5.webp', featured: true },
  { id: '6', title: 'Apartamento perto da praia', price: 700000, type: 'venda', kind: 'Apartamento', address: 'Rio de Janeiro', bedrooms: 3, bathrooms: 2, area: 120, imageUrl: '/assets/imoveis/imovel2.webp', featured: false },
  { id: '7', title: 'Casa em condomínio fechado', price: 950000, type: 'venda', kind: 'Casa', address: 'Belo Horizonte', bedrooms: 4, bathrooms: 3, area: 220, imageUrl: '/assets/imoveis/imovel4.webp', featured: true },
  { id: '8', title: 'Apartamento reformado', price: 450000, type: 'venda', kind: 'Apartamento', address: 'Curitiba', bedrooms: 2, bathrooms: 2, area: 90, imageUrl: '/assets/imoveis/imovel4.webp', featured: false },
  { id: '9', title: 'Casa térrea', price: 600000, type: 'venda', kind: 'Casa', address: 'São Paulo', bedrooms: 3, bathrooms: 2, area: 180, imageUrl: '/assets/imoveis/imovel5.webp', featured: false },
  { id: '10', title: 'Cobertura duplex', price: 1500000, type: 'venda', kind: 'Cobertura', address: 'Rio de Janeiro', bedrooms: 5, bathrooms: 5, area: 350, imageUrl: '/assets/imoveis/imovel6.webp', featured: true },
];

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
  const filteredProperties: Property[] = allProperties.filter(property => {
    const { minPrice, maxPrice, tipo, localizacao } = filtros;
    if (minPrice > 0 && property.price < minPrice) return false;
    if (maxPrice > 0 && property.price > maxPrice) return false;
    if (tipo && property.kind !== tipo) return false;
    if (localizacao && property.address !== localizacao) return false;
    if (search && !property.title.toLowerCase().includes(search.toLowerCase())) return false;
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
          {filteredProperties.map(({ id, title, price, type, address, bedrooms, bathrooms, area, imageUrl, featured }) => (
            <li key={id} className="list-none">
              <PropertyCard 
                id={id}
                title={title}
                price={price}
                type={type}
                address={address}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                area={area}
                imageUrl={imageUrl}
                featured={featured}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 