"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Carrossel de depoimentos com foco em acessibilidade e responsividade
// Exibe depoimentos de clientes com navegação por botões e indicadores

// Dados simulados para demonstração
const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Compradora",
    content:
      "Encontrei o apartamento dos meus sonhos com a ajuda da Imobiliária Premium. O atendimento foi excepcional do início ao fim, e o processo de compra foi muito mais simples do que eu imaginava.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    role: "Proprietário",
    content:
      "Vendi meu imóvel em tempo recorde e pelo valor que eu esperava. A equipe da Imobiliária Premium é extremamente profissional e conhece muito bem o mercado.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Locatária",
    content:
      "Aluguei um apartamento através da Imobiliária Premium e fiquei impressionada com a agilidade e transparência em todo o processo. Recomendo a todos que estão procurando um imóvel para alugar.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Roberto Santos",
    role: "Investidor",
    content:
      "Como investidor imobiliário, valorizo muito a parceria com a Imobiliária Premium. Eles sempre me apresentam as melhores oportunidades e me ajudam a maximizar o retorno dos meus investimentos.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Juliana Mendes",
    role: "Compradora",
    content:
      "A Imobiliária Premium entendeu exatamente o que eu procurava e me mostrou apenas imóveis que se encaixavam no meu perfil. Isso economizou muito do meu tempo e tornou a busca muito mais agradável.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      role="region"
      aria-labelledby="testimonial-carousel-title"
      className="relative flex justify-center items-center py-8 md:py-12"
    >
      <h2 id="testimonial-carousel-title" className="sr-only">Depoimentos de clientes</h2>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 border-green-600 text-green-600 bg-white/80 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        onClick={prevTestimonial}
        aria-label="Depoimento anterior"
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Depoimento anterior</span>
      </Button>
      <div className="w-full max-w-xl mx-auto">
        <Card className="shadow-lg border border-gray-100 bg-white">
          <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
            <Quote className="h-8 w-8 text-green-600 mb-4" />
            <p className="text-base md:text-lg mb-4 max-w-lg text-foreground" aria-live="polite">
              {testimonials[currentIndex].content}
            </p>
            <div className="flex flex-col items-center gap-1 mt-2">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mb-1 border-2 border-green-600">
                    <Image
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 480px) 40px, (max-width: 640px) 48px, 80px"
                      loading="lazy"
                      fetchPriority="auto"
                    />
                  </div>
              <h3 className="font-semibold text-base text-green-700">{testimonials[currentIndex].name}</h3>
              <p className="text-xs text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </CardContent>
          </Card>
        <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
                "w-11 h-11 flex items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600",
                index === currentIndex ? "bg-green-600" : "bg-green-200"
            )}
              style={{ minWidth: 44, minHeight: 44 }}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ver depoimento ${index + 1}`}
              tabIndex={0}
          />
        ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 border-green-600 text-green-600 bg-white/80 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        onClick={nextTestimonial}
        aria-label="Próximo depoimento"
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Próximo depoimento</span>
      </Button>
    </section>
  )
}
