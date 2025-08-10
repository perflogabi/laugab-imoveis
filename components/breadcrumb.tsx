import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav 
      className={`mb-6 ${className}`} 
      aria-label="Navegação do site"
    >
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link 
            href="/" 
            className="flex items-center hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label="Ir para página inicial"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
            {item.href && index < items.length - 1 ? (
              <Link 
                href={item.href}
                className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className="text-gray-900 font-medium px-1" 
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
