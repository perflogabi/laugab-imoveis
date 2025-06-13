import Link from "next/link";

export default function FinanciamentoBanner() {
  return (
    <section className="flex flex-col justify-center items-start bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl p-6 shadow-md w-full max-w-md min-h-[180px]" aria-label="Banner de financiamento">
      <h2 className="text-xl font-bold mb-2 text-blue-900">Financie seu Imóvel com Facilidade!</h2>
      <p className="mb-4 text-blue-800 text-sm">Simule as melhores condições de financiamento e conquiste o imóvel dos seus sonhos com a Laugab.</p>
      <Link href="/financiamento" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded transition-colors" aria-label="Ir para simulação de financiamento">
        Simular Financiamento
      </Link>
    </section>
  );
} 