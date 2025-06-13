import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/ui/ContactForm";
import FinanciamentoVantagens from "@/components/FinanciamentoVantagens";
import { SectionBannerSimular } from "@/components/FinanciamentoComoFunciona";

export default function FinanciamentoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header />
      <main className="flex flex-col gap-12 flex-1">
        {/* Banner com formulário */}
        <section
          className="w-full py-16 flex justify-end items-center relative"
          style={{
            backgroundImage: "url('/assets/banner-financiamento.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.60) 100%)",
              zIndex: 1,
            }}
            aria-hidden="true"
          />
          <div
            id="financiamento-form"
            className="w-full max-w-2xl mr-8"
            style={{
              marginRight: "5vw",
              marginLeft: "auto",
              position: "relative",
              zIndex: 2,
            }}
          >
            <ContactForm />
          </div>
        </section>
        {/* Vantagens */}
        <FinanciamentoVantagens />
        <SectionBannerSimular />
        {/* Como funciona */}
        {/* <SectionComoFunciona /> */}
      </main>
      <Footer />
    </div>
  );
} 