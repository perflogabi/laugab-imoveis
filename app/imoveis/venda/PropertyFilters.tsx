import React from 'react';
import { Bed, Bath, Ruler, MapPin, DollarSign } from 'lucide-react';

interface PropertyFiltersProps {
  filters: {
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    neighborhood: string;
  };
  neighborhoods: string[];
  onChange: (filters: PropertyFiltersProps['filters']) => void;
}

export function PropertyFilters({ filters, neighborhoods, onChange }: PropertyFiltersProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: name === 'bedrooms' || name === 'bathrooms' || name === 'area' || name === 'minPrice' || name === 'maxPrice' ? Number(value) : value });
  }

  return (
    <form
      className="flex flex-wrap gap-2 md:gap-4 items-end bg-white/80 border border-gray-200 rounded-lg shadow-sm px-3 py-2 mb-8"
      aria-label="Filtros de imóveis"
    >
      <div className="flex items-center gap-1 w-[110px]">
        <DollarSign className="h-4 w-4 text-gray-400" />
        <input
          id="minPrice"
          name="minPrice"
          type="number"
          min={0}
          value={filters.minPrice}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          aria-label="Preço mínimo"
          placeholder="Mín."
        />
      </div>
      <div className="flex items-center gap-1 w-[110px]">
        <DollarSign className="h-4 w-4 text-gray-400" />
        <input
          id="maxPrice"
          name="maxPrice"
          type="number"
          min={0}
          value={filters.maxPrice}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          aria-label="Preço máximo"
          placeholder="Máx."
        />
      </div>
      <div className="flex items-center gap-1 w-[90px]">
        <Bed className="h-4 w-4 text-gray-400" />
        <input
          id="bedrooms"
          name="bedrooms"
          type="number"
          min={0}
          value={filters.bedrooms}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          aria-label="Número de quartos"
          placeholder="Quartos"
        />
      </div>
      <div className="flex items-center gap-1 w-[90px]">
        <Bath className="h-4 w-4 text-gray-400" />
        <input
          id="bathrooms"
          name="bathrooms"
          type="number"
          min={0}
          value={filters.bathrooms}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          aria-label="Número de banheiros"
          placeholder="Banheiros"
        />
      </div>
      <div className="flex items-center gap-1 w-[110px]">
        <Ruler className="h-4 w-4 text-gray-400" />
        <input
          id="area"
          name="area"
          type="number"
          min={0}
          value={filters.area}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          aria-label="Área mínima em metros quadrados"
          placeholder="Área mín."
        />
      </div>
      <div className="flex items-center gap-1 min-w-[160px] flex-1">
        <MapPin className="h-4 w-4 text-gray-400" />
        <select
          id="neighborhood"
          name="neighborhood"
          value={filters.neighborhood}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          aria-label="Bairro"
        >
          <option value="">Todos os bairros</option>
          {neighborhoods.map((bairro) => (
            <option key={bairro} value={bairro}>{bairro}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      >Buscar</button>
    </form>
  );
} 