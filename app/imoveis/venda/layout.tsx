import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imóveis à Venda | Laugab Imobiliária',
  description: 'Encontre os melhores imóveis à venda com a Laugab Imobiliária. Casas, apartamentos, coberturas e studios em excelentes localizações. Financiamento facilitado e atendimento personalizado.',
  keywords: 'venda, imóveis, casas, apartamentos, coberturas, compra, Laugab Imobiliária',
  openGraph: {
    title: 'Imóveis à Venda | Laugab Imobiliária',
    description: 'Encontre os melhores imóveis à venda com a Laugab Imobiliária. Casas, apartamentos, coberturas e studios em excelentes localizações.',
    type: 'website',
    url: 'https://laugabimobiliaria.vercel.app/imoveis/venda',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imóveis à Venda | Laugab Imobiliária',
    description: 'Encontre os melhores imóveis à venda com a Laugab Imobiliária.',
  },
};

export default function VendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
