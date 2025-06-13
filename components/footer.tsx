import Link from "next/link"
import { Building2, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-[#005c4b] border-t" aria-label="Rodapé">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                <Building2 className="h-6 w-6 text-white" />
                <span>Laugab Imobiliária </span>
              </Link>
              <p className="text-white mb-4">
                Encontre o imóvel dos seus sonhos com a melhor imobiliária do mercado.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild className="border-white text-white bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 min-w-[44px] min-h-[44px]" aria-label="Facebook">
                  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-white text-white bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 min-w-[44px] min-h-[44px]" aria-label="Instagram">
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-white text-white bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 min-w-[44px] min-h-[44px]" aria-label="LinkedIn">
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-4 text-white">Links Rápidos</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/imoveis/venda" className="text-white hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                    Imóveis à Venda
                  </Link>
                </li>
                <li>
                  <Link href="/imoveis/aluguel" className="text-white hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                    Imóveis para Aluguel
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="text-white hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-white hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-4 text-white">Contato</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white">Av. Paulista, 1000, São Paulo - SP, 01310-100</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-white shrink-0" />
                  <Link href="tel:+551199999999" className="text-white hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                    (11) 9999-9999
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-white shrink-0" />
                  <Link
                    href="mailto:contato@imobiliariapremium.com.br"
                    className="text-white hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                  >
                    contato@imobiliariapremium.com.br
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-4 text-white">Newsletter</h2>
              <p className="text-white mb-4">
                Receba novidades e ofertas exclusivas diretamente no seu e-mail.
              </p>
              <form className="space-y-2" aria-label="Inscrição na newsletter">
                <label htmlFor="newsletter-email" className="sr-only">E-mail</label>
                <Input id="newsletter-email" type="email" placeholder="Seu e-mail" required className="bg-white/10 border-white text-white placeholder:text-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300" />
                <Button type="submit" className="w-full bg-white text-[#006e5e] font-bold hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                  Inscrever-se
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white">
            <p>© {new Date().getFullYear()} Imobiliária Laugab. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
