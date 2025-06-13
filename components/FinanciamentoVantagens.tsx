export default function FinanciamentoVantagens() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-blue-200 py-12 px-4 flex flex-col items-center text-center gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">Vantagens de Financiar com a Laugab</h2>
      <p className="text-blue-800 max-w-2xl mb-4">Descubra porque milhares de clientes escolhem a Laugab para realizar o sonho do imóvel próprio com segurança e praticidade.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-blue-700 font-semibold text-lg mb-2">Taxas competitivas</span>
          <span className="text-blue-900 text-sm">Condições exclusivas e personalizadas para o seu perfil.</span>
        </li>
        <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-blue-700 font-semibold text-lg mb-2">Aprovação rápida</span>
          <span className="text-blue-900 text-sm">Processo descomplicado e análise ágil para você não perder tempo.</span>
        </li>
        <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-blue-700 font-semibold text-lg mb-2">Atendimento especializado</span>
          <span className="text-blue-900 text-sm">Equipe pronta para tirar dúvidas e acompanhar cada etapa do seu financiamento.</span>
        </li>
        <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-blue-700 font-semibold text-lg mb-2">Transparência total</span>
          <span className="text-blue-900 text-sm">Acompanhe cada etapa do processo com informações claras e detalhadas.</span>
        </li>
        <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-blue-700 font-semibold text-lg mb-2">Parcerias com grandes bancos</span>
          <span className="text-blue-900 text-sm">Mais opções de crédito e condições especiais para você escolher.</span>
        </li>
        <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-blue-700 font-semibold text-lg mb-2">Simulação sem compromisso</span>
          <span className="text-blue-900 text-sm">Faça sua simulação gratuitamente e tire todas as suas dúvidas antes de decidir.</span>
        </li>
      </ul>
    </section>
  );
} 