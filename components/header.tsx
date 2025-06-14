"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Building2, Key, FileText, Users, Phone, Menu, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const whatsappNumber = '551199999999'; // Substitua pelo número real
const whatsappLink = `https://wa.me/${whatsappNumber}`;

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Início",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/imoveis/venda",
      label: "Comprar",
      icon: Building2,
      active: pathname === "/imoveis/venda" || pathname.startsWith("/imoveis/venda/"),
    },
    {
      href: "/imoveis/aluguel",
      label: "Alugar",
      icon: Key,
      active: pathname === "/imoveis/aluguel" || pathname.startsWith("/imoveis/aluguel/"),
    },
    {
      href: "/blog",
      label: "Blog",
      icon: FileText,
      active: pathname === "/blog" || pathname.startsWith("/blog/"),
    },
    {
      href: "/sobre",
      label: "Sobre Nós",
      icon: Users,
      active: pathname === "/sobre",
    },
    {
      href: "/contato",
      label: "Contato",
      icon: Phone,
      active: pathname === "/contato",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-[80%] mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Abrir menu">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <div className="px-7">
                  <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setIsOpen(false)}>
                    <Building2 className="h-6 w-6 text-primary" />
                    <span>Laugab Imobiliária</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 px-1 mt-8">
                  {routes.filter(route => route.label !== 'Contato').map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md hover:bg-accent",
                        route.active ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                      )}
                    >
                      <route.icon className="h-5 w-5 text-green-600" />
                      {route.label}
                    </Link>
                  ))}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-md bg-[#107c41] text-white hover:bg-[#0b5c2a] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 3C9.37258 3 4 8.37258 4 15C4 17.3852 4.8038 19.6266 6.22222 21.4444L4 29L11.1111 26.7778C12.929 28.1962 15.1705 29 17.5556 29C24.183 29 29.5556 23.6274 29.5556 17C29.5556 10.3726 24.183 5 17.5556 5C17.5556 5 16 3 16 3Z" fill="white"/>
                      <path d="M16 5C22.6274 5 28 10.3726 28 17C28 23.6274 22.6274 29 16 29C13.6148 29 11.3734 28.1962 9.55556 26.7778L4 29L6.22222 21.4444C4.8038 19.6266 4 17.3852 4 15C4 8.37258 9.37258 3 16 3V5Z" fill="#25D366"/>
                      <path d="M16 7C11.0294 7 7 11.0294 7 16C7 17.3852 7.8038 19.6266 9.22222 21.4444L7 29L14.1111 26.7778C15.929 28.1962 18.1705 29 20.5556 29C25.5262 29 29.5556 24.9706 29.5556 20C29.5556 15.0294 25.5262 11 20.5556 11C20.5556 11 16 7 16 7Z" fill="#25D366"/>
                      <path d="M16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23C12.134 23 9 19.866 9 16C9 12.134 12.134 9 16 9Z" fill="white"/>
                      <path d="M21.7071 19.2929C21.3166 19.6834 20.6834 19.6834 20.2929 19.2929L16 15L11.7071 19.2929C11.3166 19.6834 10.6834 19.6834 10.2929 19.2929C9.90237 18.9024 9.90237 18.2692 10.2929 17.8787L15.2929 12.8787C15.6834 12.4882 16.3166 12.4882 16.7071 12.8787L21.7071 17.8787C22.0976 18.2692 22.0976 18.9024 21.7071 19.2929Z" fill="white"/>
                    </svg>
                    WhatsApp
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="hidden md:flex items-center gap-2 font-bold text-xl">
              <Building2 className="h-6 w-6 text-primary" />
              <span>Laugab Imobiliária</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-5" role="navigation" aria-label="Menu principal">
            {routes.filter(route => route.label !== 'Contato').map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                    route.active ? "text-primary" : "text-foreground",
                )}
              >
                  <route.icon className="h-5 w-5 text-green-600" />
                {route.label}
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#107c41] text-white font-bold shadow hover:bg-[#0b5c2a] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-colors text-sm"
              aria-label="WhatsApp"
            >
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3C9.37258 3 4 8.37258 4 15C4 17.3852 4.8038 19.6266 6.22222 21.4444L4 29L11.1111 26.7778C12.929 28.1962 15.1705 29 17.5556 29C24.183 29 29.5556 23.6274 29.5556 17C29.5556 10.3726 24.183 5 17.5556 5C17.5556 5 16 3 16 3Z" fill="white"/>
                <path d="M16 5C22.6274 5 28 10.3726 28 17C28 23.6274 22.6274 29 16 29C13.6148 29 11.3734 28.1962 9.55556 26.7778L4 29L6.22222 21.4444C4.8038 19.6266 4 17.3852 4 15C4 8.37258 9.37258 3 16 3V5Z" fill="#25D366"/>
                <path d="M16 7C11.0294 7 7 11.0294 7 16C7 17.3852 7.8038 19.6266 9.22222 21.4444L7 29L14.1111 26.7778C15.929 28.1962 18.1705 29 20.5556 29C25.5262 29 29.5556 24.9706 29.5556 20C29.5556 15.0294 25.5262 11 20.5556 11C20.5556 11 16 7 16 7Z" fill="#25D366"/>
                <path d="M16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23C12.134 23 9 19.866 9 16C9 12.134 12.134 9 16 9Z" fill="white"/>
                <path d="M21.7071 19.2929C21.3166 19.6834 20.6834 19.6834 20.2929 19.2929L16 15L11.7071 19.2929C11.3166 19.6834 10.6834 19.6834 10.2929 19.2929C9.90237 18.9024 9.90237 18.2692 10.2929 17.8787L15.2929 12.8787C15.6834 12.4882 16.3166 12.4882 16.7071 12.8787L21.7071 17.8787C22.0976 18.2692 22.0976 18.9024 21.7071 19.2929Z" fill="white"/>
              </svg>
              WhatsApp
            </a>
          </nav>
            <Button variant="outline" size="icon" asChild aria-label="Buscar">
              <Link href="/busca">
                <Search className="h-5 w-5" />
                <span className="sr-only">Buscar</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
