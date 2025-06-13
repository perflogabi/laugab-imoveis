import React from 'react';
import { Home, MapPin, DollarSign, ChevronRight } from 'lucide-react';

interface PropertyFiltersDrawerProps {
  open: boolean;
  onClose: () => void;
  onApply: () => void;
  onClear: () => void;
  price: string;
  type: string;
  location: string;
  onPriceClick?: () => void;
  onTypeClick?: () => void;
  onLocationClick?: () => void;
}

export function PropertyFiltersDrawer({ open, onClose, onApply, onClear, price, type, location, onPriceClick, onTypeClick, onLocationClick }: PropertyFiltersDrawerProps) {
  if (!open) return null;
  const filters = [
    {
      icon: <DollarSign className="h-5 w-5" />, label: 'Preço', value: price, onClick: onPriceClick
    },
    {
      icon: <Home className="h-5 w-5" />, label: 'Tipo', value: type, onClick: onTypeClick
    },
    {
      icon: <MapPin className="h-5 w-5" />, label: 'Localização', value: location, onClick: onLocationClick
    },
  ];
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="Filtros avançados"
      >
        <header className="px-6 py-5 border-b shadow-md text-2xl font-bold text-center sticky top-0 bg-white z-10">Filtros</header>
        <nav className="flex-1 overflow-y-auto px-0 py-0 divide-y divide-gray-200">
          <ul className="flex flex-col">
            {filters.map((item) => (
              <li key={item.label} className="bg-white hover:bg-gray-50 transition-colors cursor-pointer" onClick={item.onClick}>
                <div className="flex items-center px-6 py-4 gap-3">
                  <span className="text-blue-700">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span className="block font-semibold text-base text-gray-900">{item.label}</span>
                    <span className="block text-sm text-gray-500 font-medium truncate">{item.value}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="flex gap-3 border-t px-6 py-4 bg-white sticky bottom-0 z-10">
          <button
            type="button"
            className="flex-1 border-2 border-blue-600 text-blue-700 rounded-lg py-3 font-bold hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            onClick={onClose}
          >Cancelar</button>
          <button
            type="button"
            className="flex-1 border-2 border-blue-600 text-blue-700 rounded-lg py-3 font-bold hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            onClick={onClear}
          >Limpar</button>
          <button
            type="button"
            className="flex-1 bg-blue-900 text-white rounded-lg py-3 font-bold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            onClick={onApply}
          >Aplicar</button>
        </footer>
      </aside>
      <style jsx>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
} 