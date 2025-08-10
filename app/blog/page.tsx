import { Metadata } from 'next';
import React from 'react';
import { BlogPreview } from '@/components/blog-preview';

export const metadata: Metadata = {
  title: 'Blog | Laugab Imobiliária',
  description: 'Dicas, tendências e novidades do mercado imobiliário. Fique por dentro das melhores oportunidades de investimento e dicas para compra e aluguel de imóveis.',
  keywords: 'blog, imobiliária, dicas, mercado imobiliário, investimento, Laugab Imobiliária',
  openGraph: {
    title: 'Blog | Laugab Imobiliária',
    description: 'Dicas, tendências e novidades do mercado imobiliário. Fique por dentro das melhores oportunidades.',
    type: 'website',
    url: 'https://laugabimobiliaria.vercel.app/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Laugab Imobiliária',
    description: 'Dicas, tendências e novidades do mercado imobiliário.',
  },
};

export default function BlogPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-lg text-gray-700 mb-6">
          Dicas, tendências e novidades do mercado imobiliário para você se informar e tomar as melhores decisões.
        </p>
        <BlogPreview />
      </div>
    </>
  );
} 