"use client";
import { Bath, Bed, MapPin, Maximize2, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PropertyDetailsClient({ property }: { property: any }) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(property.price);

  const detalhes = [
    { label: "Condomínio", value: "R$ 900/mês" },
    { label: "IPTU", value: "R$ 250/mês" },
    { label: "Vaga de Garagem", value: "2 vagas cobertas" },
    { label: "Andar", value: "Térreo" },
    { label: "Posição", value: "Frente, sol da tarde" },
    { label: "Aceita Pet", value: <CheckCircle className="inline h-5 w-5 text-green-600" aria-label="Aceita pet" /> },
    { label: "Portaria 24h", value: <CheckCircle className="inline h-5 w-5 text-green-600" aria-label="Portaria 24h" /> },
    { label: "Elevador", value: <XCircle className="inline h-5 w-5 text-red-500" aria-label="Não possui elevador" /> },
    { label: "Mobiliado", value: <XCircle className="inline h-5 w-5 text-red-500" aria-label="Não mobiliado" /> },
  ];

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 mt-8 mb-12">
      <div className="mb-6">
        <Link href="/imoveis/aluguel" className="inline-flex items-center gap-2 text-blue-900 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1" aria-label="Voltar para a listagem de imóveis para alugar">
          <ArrowLeft className="h-5 w-5" />
          Voltar para imóveis para alugar
        </Link>
      </div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
        <div className="flex items-center text-gray-600 text-base mb-2">
          <MapPin className="h-5 w-5 mr-1.5" />
          <span>{property.address}</span>
        </div>
        <div className="text-2xl font-bold text-blue-900 mb-2">{formattedPrice} <span className="text-base font-normal text-gray-700">/mês</span></div>
        <div className="flex gap-6 text-gray-700 text-base mb-2">
          <span className="flex items-center"><Bed className="h-5 w-5 mr-1" />{property.bedrooms} quartos</span>
          <span className="flex items-center"><Bath className="h-5 w-5 mr-1" />{property.bathrooms} banheiros</span>
          <span className="flex items-center"><Maximize2 className="h-5 w-5 mr-1" />{property.area}m²</span>
        </div>
      </header>
      <div className="w-full aspect-[16/7] rounded-xl overflow-hidden mb-8">
        <Image
          src={property.imageUrl}
          alt={property.title}
          width={900}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Descrição do Imóvel</h2>
        <p className="text-gray-800 leading-relaxed">
          Excelente oportunidade no Morumbi! Casa ampla, arejada, com quintal, próxima a escolas, supermercados e fácil acesso à Marginal. Ideal para famílias que buscam conforto e segurança em um dos bairros mais tradicionais de São Paulo. Condomínio com portaria 24h e área de lazer.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Detalhes</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {detalhes.map((item) => (
            <div key={item.label} className="flex items-center">
              <dt className="font-medium w-40 text-gray-700">{item.label}:</dt>
              <dd className="ml-2 text-gray-900">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Localização</h2>
        <div className="rounded-lg overflow-hidden border w-full h-72 flex flex-col items-center justify-center">
          <img
            src="https://static-maps.yandex.ru/1.x/?lang=pt_BR&ll=-46.753682,-23.609994&z=15&l=map&size=600,300&pt=-46.753682,-23.609994,pm2rdm"
            alt="Mapa estático do imóvel no Morumbi"
            className="w-full h-72 object-cover"
            loading="lazy"
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onClick={() => window.open('https://www.openstreetmap.org/?mlat=-23.609994&mlon=-46.753682#map=15/-23.609994/-46.753682', '_blank')}
            type="button"
            aria-label="Abrir mapa interativo em nova aba"
          >
            Ver mapa interativo
          </button>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Entre em Contato</h2>
        {/* Formulário acessível e semântico para contato */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" aria-label="Formulário de contato para este imóvel">
          <div>
            <label htmlFor="nome" className="block font-medium mb-1">Nome</label>
            <input id="nome" name="nome" type="text" required className="w-full rounded border px-3 py-2" />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">E-mail</label>
            <input id="email" name="email" type="email" required className="w-full rounded border px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="mensagem" className="block font-medium mb-1">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows={3} required className="w-full rounded border px-3 py-2" defaultValue={`Olá, tenho interesse no imóvel: ${property.title}`}></textarea>
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-blue-900 text-white font-bold px-6 py-3 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" style={{ minHeight: 44 }}>
              Enviar Mensagem
            </button>
          </div>
        </form>
      </section>
    </article>
  );
} 