'use client';

import React from 'react';
import { BlogPreview } from '@/components/blog-preview';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-lg text-gray-700 mb-6">
          Dicas, tendências e novidades do mercado imobiliário para você se informar e tomar as melhores decisões.
        </p>
        <BlogPreview />
      </div>
      <Footer />
    </>
  );
} 