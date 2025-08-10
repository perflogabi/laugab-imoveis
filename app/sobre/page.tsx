import { Metadata } from 'next';
import React from 'react';
import { AboutLaugab } from '@/components/AboutLaugab';

export const metadata: Metadata = {
  title: 'Sobre Nós | Laugab Imobiliária',
  description: 'Conheça a história da Laugab Imobiliária, nossa missão, visão e valores. Mais de 15 anos de experiência no mercado imobiliário brasileiro, oferecendo atendimento personalizado e confiança.',
  keywords: 'sobre, Laugab Imobiliária, história, missão, valores, imobiliária, confiança',
  openGraph: {
    title: 'Sobre Nós | Laugab Imobiliária',
    description: 'Conheça a história da Laugab Imobiliária, nossa missão, visão e valores. Mais de 15 anos de experiência no mercado imobiliário.',
    type: 'website',
    url: 'https://laugabimobiliaria.vercel.app/sobre',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nós | Laugab Imobiliária',
    description: 'Conheça a história da Laugab Imobiliária, nossa missão, visão e valores.',
  },
};

export default function SobrePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <AboutLaugab modoPaginaCompleta />
      <section className="mt-8 md:mt-12 bg-white rounded-xl shadow p-6 md:p-10 border border-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Nossa História</h1>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Fundada em 2008, a Laugab Imobiliária nasceu do sonho de transformar o mercado imobiliário brasileiro, oferecendo um atendimento humano, transparente e inovador. Ao longo dos anos, construímos uma reputação sólida baseada em confiança, ética e resultados concretos para nossos clientes.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem, sempre prontos para entender as necessidades de cada cliente e encontrar as melhores soluções em compra, venda, aluguel e administração de imóveis residenciais e comerciais.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Investimos constantemente em tecnologia, capacitação e inovação para garantir processos ágeis, seguros e uma experiência diferenciada. Mais do que imóveis, entregamos sonhos, conquistas e novos começos.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Missão, Visão e Valores</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li><strong>Missão:</strong> Realizar sonhos e facilitar conquistas, conectando pessoas ao imóvel ideal com excelência e confiança.</li>
          <li><strong>Visão:</strong> Ser referência em inovação, atendimento e resultados no mercado imobiliário nacional.</li>
          <li><strong>Valores:</strong> Ética, transparência, respeito, inovação, compromisso com o cliente e responsabilidade social.</li>
        </ul>
      </section>
    </main>
  );
} 