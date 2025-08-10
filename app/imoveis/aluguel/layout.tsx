import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imóveis para Aluguel | Laugab Imobiliária',
  description: 'Encontre os melhores imóveis para aluguel com a Laugab Imobiliária. Apartamentos, casas e coberturas em excelentes localizações. Atendimento personalizado e as melhores condições do mercado.',
  keywords: 'aluguel, imóveis, apartamentos, casas, coberturas, Laugab Imobiliária, locação',
  openGraph: {
    title: 'Imóveis para Aluguel | Laugab Imobiliária',
    description: 'Encontre os melhores imóveis para aluguel com a Laugab Imobiliária. Apartamentos, casas e coberturas em excelentes localizações.',
    type: 'website',
    url: 'https://laugabimobiliaria.vercel.app/imoveis/aluguel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imóveis para Aluguel | Laugab Imobiliária',
    description: 'Encontre os melhores imóveis para aluguel com a Laugab Imobiliária.',
  },
};

export default function AluguelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
