'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CalendarIcon, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    id: "mercado-imobiliario-2025",
    title: "Tendências do Mercado Imobiliário para 2025",
    excerpt:
      "Descubra as principais tendências que vão moldar o mercado imobiliário brasileiro nos próximos anos e como se preparar para aproveitar as melhores oportunidades.",
    date: "2025-05-28",
    category: "Mercado",
    imageUrl: "/assets/blog/image.jpg",
    content: `O mercado imobiliário brasileiro está passando por grandes transformações. Em 2025, espera-se uma valorização dos imóveis em regiões metropolitanas, impulsionada por investimentos em infraestrutura e tecnologia. Especialistas apontam que a busca por imóveis sustentáveis e inteligentes será uma das principais tendências. Além disso, o crédito imobiliário deve se tornar mais acessível, facilitando a compra da casa própria para milhares de brasileiros. Fique atento às oportunidades e prepare-se para investir com segurança!`,
  },
  {
    id: "dicas-comprar-primeiro-imovel",
    title: "10 Dicas Essenciais para Comprar seu Primeiro Imóvel",
    excerpt:
      "Um guia completo com as principais dicas para quem está planejando comprar o primeiro imóvel, desde a organização financeira até a escolha da localização ideal.",
    date: "2025-05-20",
    category: "Dicas",
    imageUrl: "/assets/blog/image.jpg",
    content: `Comprar o primeiro imóvel é um grande passo! Antes de tudo, organize suas finanças, pesquise bastante sobre as regiões de interesse e conte com a ajuda de um corretor de confiança. Não se esqueça de analisar a documentação do imóvel e simular diferentes opções de financiamento. Lembre-se: planejamento é fundamental para fazer um bom negócio e evitar surpresas desagradáveis.`,
  },
  {
    id: "decoracao-apartamentos-pequenos",
    title: "Decoração Inteligente para Apartamentos Pequenos",
    excerpt:
      "Ideias criativas e soluções práticas para aproveitar ao máximo o espaço em apartamentos pequenos, com dicas de decoração e organização.",
    date: "2025-05-15",
    category: "Decoração",
    imageUrl: "/assets/blog/image.jpg",
    content: `Apartamentos pequenos podem ser muito aconchegantes! Invista em móveis multifuncionais, cores claras e espelhos para ampliar o ambiente. Prateleiras e nichos ajudam a organizar sem ocupar espaço. Plantas e objetos decorativos dão vida ao lar. Com criatividade, é possível transformar até os menores espaços em ambientes charmosos e funcionais.`,
  },
  {
    id: "financiamento-imobiliario-2025",
    title: "Como se Preparar para o Financiamento Imobiliário em 2025",
    excerpt:
      "Saiba como organizar sua documentação, entender taxas e escolher o melhor banco para financiar seu imóvel no próximo ano.",
    date: "2025-05-10",
    category: "Dicas",
    imageUrl: "/assets/blog/image.jpg",
    content: `O financiamento imobiliário em 2025 promete ser mais acessível, com taxas competitivas e processos digitais. Prepare sua documentação com antecedência, mantenha o nome limpo e pesquise as melhores condições nos bancos. Simule diferentes cenários e escolha a opção que melhor se encaixa no seu orçamento.`,
  },
  {
    id: "sustentabilidade-construcao",
    title: "Sustentabilidade na Construção Civil: O Futuro das Cidades",
    excerpt:
      "Conheça as práticas sustentáveis que estão transformando o setor imobiliário e tornando as cidades mais verdes e eficientes.",
    date: "2025-05-05",
    category: "Mercado",
    imageUrl: "/assets/blog/image.jpg",
    content: `A sustentabilidade é uma pauta cada vez mais presente na construção civil. Materiais ecológicos, reaproveitamento de água e energia solar são algumas das soluções adotadas por construtoras inovadoras. O futuro das cidades depende de projetos que respeitem o meio ambiente e promovam qualidade de vida para todos.`,
  },
  {
    id: "tendencias-decoracao-2025",
    title: "Tendências de Decoração para 2025: O que estará em alta?",
    excerpt:
      "Descubra as cores, materiais e estilos que vão dominar os projetos de interiores no próximo ano.",
    date: "2025-04-28",
    category: "Decoração",
    imageUrl: "/assets/blog/image.jpg",
    content: `Em 2025, a decoração de interiores será marcada por tons terrosos, materiais naturais e muita personalidade. O minimalismo continua em alta, mas com toques de cor e texturas. Invista em peças artesanais e valorize o conforto do seu lar!`,
  },
];

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Notícia não encontrada</h1>
          <button onClick={() => router.back()} className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-900 text-white font-bold hover:bg-blue-800">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-3 py-2 mb-6 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-700 font-medium"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </button>
        <div className="mb-6">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={256}
            className="rounded-lg w-full h-64 object-cover mb-4"
          />
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-2 py-1 rounded bg-blue-600 text-white text-xs font-semibold">{post.category}</span>
            <span className="flex items-center text-xs text-gray-500">
              <CalendarIcon className="h-3 w-3 mr-1" />
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-700 mb-4">{post.excerpt}</p>
        </div>
        <article className="prose prose-lg max-w-none text-gray-900 mb-8">
          {post.content}
        </article>
      </div>
      <Footer />
    </>
  );
} 