"use client";

import Image from "next/image";

function scrollToForm() {
  if (typeof window !== "undefined") {
    const form = document.getElementById("financiamento-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export function SectionComoFunciona() {
  const steps = [
    "Preencha o formulário com seus dados.",
    "Nossa equipe entrará em contato para entender seu perfil e apresentar as melhores opções.",
    "Você recebe a simulação e escolhe a condição ideal para seu financiamento.",
    "Acompanhamos todo o processo até a aprovação e aquisição do seu imóvel!"
  ];

  return (
    <section className="w-full flex justify-center items-center py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto px-4">
        {/* Título */}
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center md:text-left">Como funciona?</h2>
        </div>
        {/* Card com etapas */}
        <div className="flex-1 flex items-center justify-center w-full">
          <ol className="bg-white border-2 border-green-600 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6 list-decimal list-inside">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className="w-full rounded-xl px-4 py-4 bg-white text-blue-900 text-base font-semibold text-center shadow-sm border border-green-100"
              >
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function SectionBannerSimular() {
  return (
    <section className="w-full flex justify-center items-center py-12 bg-white">
      <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center">
        <Image
          src="/assets/banner-investir.jpg"
          alt="Invista em imóveis"
          fill
          className="rounded-2xl shadow-xl w-full h-[320px] object-cover"
          loading="lazy"
          sizes="(max-width: 480px) 95vw, (max-width: 768px) 80vw, 800px"
          fetchPriority="auto"
        />
        {/* Overlay escuro no rodapé da imagem */}
        <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent rounded-b-2xl" />
        <button
          onClick={scrollToForm}
          className="absolute bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-2 rounded-lg shadow-lg text-lg transition-colors"
          aria-label="Ir para o formulário de simulação de financiamento"
        >
          Simular Financiamento
        </button>
      </div>
    </section>
  );
} 