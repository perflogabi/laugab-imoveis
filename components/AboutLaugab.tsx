import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AboutLaugabProps {
  modoPaginaCompleta?: boolean;
}

export function AboutLaugab({ modoPaginaCompleta = false }: AboutLaugabProps) {
  return (
    <section
      className={
        modoPaginaCompleta
          ? 'relative max-w-5xl mx-auto mb-8 md:mb-12 rounded-2xl shadow-xl bg-white flex flex-col md:flex-row-reverse items-center overflow-hidden border border-gray-100 px-4 pt-6 md:pt-10'
          : 'relative z-20 max-w-7xl mx-auto -mt-6 sm:-mt-12 md:-mt-24 mb-8 md:mb-12 rounded-2xl shadow-xl bg-white flex flex-col md:flex-row-reverse items-center overflow-hidden border border-gray-100 px-4'
      }
      aria-labelledby="about-laugab-title"
      style={modoPaginaCompleta ? { minHeight: 220, zIndex: 1 } : { minHeight: 220 }}
    >
      <div className="hidden sm:flex w-full md:w-1/2 h-44 sm:h-56 md:h-[320px] relative items-center justify-center p-1 sm:p-2 md:p-4">
        <Image
          src="/assets/equipe.jpg"
          alt="Equipe da Laugab Imobiliária"
          fill
          className="object-cover object-center rounded-xl shadow-md"
          sizes="(max-width: 480px) 95vw, (max-width: 768px) 80vw, 400px"
          loading="lazy"
          fetchPriority="auto"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 xs:p-6 md:p-10 flex flex-col gap-3 xs:gap-4">
        <h2 id="about-laugab-title" className="text-xl xs:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 xs:mb-4">
          Sobre a Laugab Imobiliária
        </h2>
        <p className="text-gray-700 text-sm xs:text-base md:text-lg mb-2 xs:mb-4 leading-relaxed">
          Há mais de <strong>15 anos</strong> no mercado, a Laugab Imobiliária é referência em confiança, inovação e atendimento personalizado.
          Nossa equipe já ajudou mais de <strong>2.500 famílias</strong> a encontrar o imóvel ideal, com mais de <strong>1.000 imóveis vendidos</strong> e <strong>1.500 imóveis alugados</strong> em todo o Brasil.
        </p>
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 mb-2 xs:mb-4" aria-label="Números da Laugab Imobiliária">
          <div className="flex flex-col items-center min-w-[60px] xs:min-w-[80px]">
            <span className="text-xl xs:text-2xl md:text-3xl font-extrabold text-green-800 drop-shadow-sm">15+</span>
            <span className="text-[10px] xs:text-[11px] md:text-xs text-green-800 font-medium mt-1">anos de experiência</span>
          </div>
          <div className="flex flex-col items-center min-w-[60px] xs:min-w-[80px]">
            <span className="text-xl xs:text-2xl md:text-3xl font-extrabold text-green-800 drop-shadow-sm">2.500+</span>
            <span className="text-[10px] xs:text-[11px] md:text-xs text-green-800 font-medium mt-1">famílias atendidas</span>
          </div>
          <div className="flex flex-col items-center min-w-[60px] xs:min-w-[80px]">
            <span className="text-xl xs:text-2xl md:text-3xl font-extrabold text-green-800 drop-shadow-sm">1.000+</span>
            <span className="text-[10px] xs:text-[11px] md:text-xs text-green-800 font-medium mt-1">imóveis vendidos</span>
          </div>
          <div className="flex flex-col items-center min-w-[60px] xs:min-w-[80px]">
            <span className="text-xl xs:text-2xl md:text-3xl font-extrabold text-green-800 drop-shadow-sm">1.500+</span>
            <span className="text-[10px] xs:text-[11px] md:text-xs text-green-800 font-medium mt-1">imóveis alugados</span>
          </div>
        </div>
        {!modoPaginaCompleta && (
          <Link
            href="/sobre"
            className="mt-1 xs:mt-2 px-4 py-2 rounded-lg bg-green-700 text-white font-semibold shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-colors w-auto min-w-0 self-start text-sm xs:text-base"
          >
            Ler mais
          </Link>
        )}
      </div>
    </section>
  );
} 