'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, RefreshCw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PropertyError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log do erro para monitoramento
    console.error('Erro na página do imóvel:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-8 w-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900">
              Ops! Algo deu errado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Não foi possível carregar as informações do imóvel. Isso pode ter acontecido por um erro temporário ou o imóvel pode não existir mais.
            </p>
            
            <div className="space-y-3">
              <Button 
                onClick={reset}
                className="w-full"
                variant="outline"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Tentar Novamente
              </Button>
              
              <Button asChild className="w-full">
                <Link href="/imoveis/venda">
                  <Search className="h-4 w-4 mr-2" />
                  Ver Outros Imóveis
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Voltar ao Início
                </Link>
              </Button>
            </div>
            
            <div className="text-xs text-gray-500 pt-4 border-t">
              <p>Código do erro: {error.digest || 'N/A'}</p>
              <p>Se o problema persistir, entre em contato conosco.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
