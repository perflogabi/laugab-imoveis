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
      className="flex w-full max-w-3xl mx-auto mb-8 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all"
      role="search"
      onSubmit={e => { e.preventDefault(); onSearch(); }}
    >
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Busque por localização e tipo de imóvel"
        aria-label="Buscar por localização e tipo de imóvel"
        className="flex-1 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 placeholder:text-gray-400"
      />
      <button
        type="button"
        onClick={onOpenFilters}
        aria-label="Abrir filtros avançados"
        className="px-5 border-l border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
      >
        <SlidersHorizontal className="h-6 w-6 text-gray-500" />
      </button>
      <button
        type="submit"
        className="flex items-center gap-2 px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all md:rounded-none rounded-r-2xl md:w-auto w-full"
        aria-label="Buscar imóveis"
      >
        <Search className="h-6 w-6" />
        <span className="hidden sm:inline">Buscar Imóveis</span>
      </button>
    </form>
  );
} 