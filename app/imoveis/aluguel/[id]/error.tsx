'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, RefreshCw, AlertTriangle } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PropertyError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Erro na página do imóvel:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="text-xl">Erro ao Carregar Imóvel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Não foi possível carregar as informações do imóvel. Isso pode ter acontecido por um erro temporário ou o imóvel pode não existir mais.
            </p>
            <div className="space-y-3">
              <Button onClick={reset} className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" />
                Tentar Novamente
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/imoveis/aluguel">
                  <Search className="h-4 w-4 mr-2" />
                  Ver Outros Imóveis para Aluguel
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
