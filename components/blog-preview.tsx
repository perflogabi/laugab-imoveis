import Link from "next/link"
import Image from "next/image"
import { CalendarIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Dados simulados para demonstração
const blogPosts = [
  {
    id: "mercado-imobiliario-2025",
    title: "Tendências do Mercado Imobiliário para 2025",
    excerpt:
      "Descubra as principais tendências que vão moldar o mercado imobiliário brasileiro nos próximos anos e como se preparar para aproveitar as melhores oportunidades.",
    date: "2025-05-28",
    category: "Mercado",
    imageUrl: "/assets/blog/image.jpg",
  },
  {
    id: "dicas-comprar-primeiro-imovel",
    title: "10 Dicas Essenciais para Comprar seu Primeiro Imóvel",
    excerpt:
      "Um guia completo com as principais dicas para quem está planejando comprar o primeiro imóvel, desde a organização financeira até a escolha da localização ideal.",
    date: "2025-05-20",
    category: "Dicas",
    imageUrl: "/assets/blog/image.jpg",
  },
  {
    id: "decoracao-apartamentos-pequenos",
    title: "Decoração Inteligente para Apartamentos Pequenos",
    excerpt:
      "Ideias criativas e soluções práticas para aproveitar ao máximo o espaço em apartamentos pequenos, com dicas de decoração e organização.",
    date: "2025-05-15",
    category: "Decoração",
    imageUrl: "/assets/blog/image.jpg",
  },
  // Novos posts
  {
    id: "financiamento-imobiliario-2025",
    title: "Como se Preparar para o Financiamento Imobiliário em 2025",
    excerpt:
      "Saiba como organizar sua documentação, entender taxas e escolher o melhor banco para financiar seu imóvel no próximo ano.",
    date: "2025-05-10",
    category: "Dicas",
    imageUrl: "/assets/blog/image.jpg",
  },
  {
    id: "sustentabilidade-construcao",
    title: "Sustentabilidade na Construção Civil: O Futuro das Cidades",
    excerpt:
      "Conheça as práticas sustentáveis que estão transformando o setor imobiliário e tornando as cidades mais verdes e eficientes.",
    date: "2025-05-05",
    category: "Mercado",
    imageUrl: "/assets/blog/image.jpg",
  },
  {
    id: "tendencias-decoracao-2025",
    title: "Tendências de Decoração para 2025: O que estará em alta?",
    excerpt:
      "Descubra as cores, materiais e estilos que vão dominar os projetos de interiores no próximo ano.",
    date: "2025-04-28",
    category: "Decoração",
    imageUrl: "/assets/blog/image.jpg",
  },
]

interface BlogCardProps {
  post: typeof blogPosts[number]
}

function BlogCard({ post }: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    Mercado: "bg-blue-600",
    Dicas: "bg-green-700",
    Decoração: "bg-yellow-400 text-black",
  }

  const categoryColor = categoryColors[post.category] || "bg-gray-600"

  return (
    <Card className="overflow-hidden">
      <Link
        href={`/blog/${post.id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
        aria-label={`Ler post: ${post.title}`}
      >
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="h-full w-full object-cover transition-transform hover:scale-105"
                loading="lazy"
                sizes="(max-width: 480px) 95vw, (max-width: 768px) 80vw, 400px"
                fetchPriority="auto"
              />
            </div>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
            <Badge className={`${categoryColor} ${!categoryColor.includes('text-') ? 'text-white' : ''}`} aria-label={`Categoria: ${post.category}`}>
              {post.category}
            </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
              <CalendarIcon className="h-3 w-3 mr-1" aria-hidden="true" />
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {post.title}
            </h3>
          <p className="text-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
          <span className="text-sm font-medium text-primary hover:underline">Ler mais</span>
        </CardContent>
            </Link>
        </Card>
  )
}

export function BlogPreview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-labelledby="blog-section-title">
      <h2 id="blog-section-title" className="sr-only">Prévia do Blog</h2>
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </section>
  )
}
