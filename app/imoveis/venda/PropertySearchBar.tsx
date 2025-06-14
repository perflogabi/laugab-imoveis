import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface PropertySearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  onOpenFilters: () => void;
}

export function PropertySearchBar({ value, onChange, onSearch, onOpenFilters }: PropertySearchBarProps) {
  return (
    <form
      className="flex flex-row w-full max-w-[400px] md:max-w-[580px] mx-auto mb-8 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all"
      role="search"
      onSubmit={e => { e.preventDefault(); onSearch(); }}
    >
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Busque por localização e tipo de imóvel"
        aria-label="Buscar por localização e tipo de imóvel"
        className="flex-1 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 placeholder:text-gray-400 border-0"
      />
      <button
        type="button"
        onClick={onOpenFilters}
        aria-label="Abrir filtros avançados"
        className="flex items-center justify-center px-4 py-3 border-l border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
      >
        <SlidersHorizontal className="h-6 w-6 text-gray-500" />
      </button>
      <button
        type="submit"
        className="flex items-center justify-center px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-lg cursor-pointer font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all border-l border-gray-200 rounded-none md:rounded-r-2xl h-full min-w-[48px] md:min-w-[auto]"
        aria-label="Buscar imóveis"
      >
        <Search className="h-6 w-6" />
        <span className="hidden md:inline ml-2">Buscar Imóveis</span>
      </button>
    </form>
  );
} 