import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, MapPin } from 'lucide-react';

export default function PropertyNotFound() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900">
              Imóvel não encontrado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              O imóvel que você está procurando não foi encontrado. Ele pode ter sido vendido ou removido do nosso catálogo.
            </p>
            
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/imoveis/venda">
                  <Search className="h-4 w-4 mr-2" />
                  Ver Outros Imóveis à Venda
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link href="/imoveis/aluguel">
                  <Search className="h-4 w-4 mr-2" />
                  Ver Imóveis para Aluguel
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
              <p>Precisa de ajuda? Entre em contato conosco.</p>
              <p className="mt-1">
                <Link href="tel:+551199999999" className="text-blue-600 hover:underline">
                  (11) 9999-9999
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
