import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, MapPin, AlertCircle } from 'lucide-react';

export default function PropertyNotFound() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <CardTitle className="text-xl">Imóvel não Encontrado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              O imóvel que você está procurando não foi encontrado. Ele pode ter sido alugado ou removido do nosso catálogo.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/imoveis/aluguel">
                  <Search className="h-4 w-4 mr-2" />
                  Ver Outros Imóveis para Aluguel
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/imoveis/venda">
                  <MapPin className="h-4 w-4 mr-2" />
                  Ver Imóveis à Venda
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
