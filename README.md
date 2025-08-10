# Laugab Imobiliária

Site institucional da Laugab Imobiliária desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

### Páginas Principais
- **Home**: Página inicial com destaque para imóveis em destaque
- **Imóveis à Venda**: Listagem completa de imóveis disponíveis para compra
- **Imóveis para Aluguel**: Listagem de imóveis disponíveis para locação
- **Financiamento**: Informações sobre financiamento imobiliário
- **Blog**: Artigos e notícias do setor imobiliário
- **Sobre Nós**: Informações sobre a empresa

### Páginas de Imóveis Individuais
- **URLs dinâmicas**: `/imoveis/venda/[id]` para cada imóvel
- **Galeria de imagens**: Visualizador interativo com modal
- **Mapa interativo**: Localização do imóvel com Leaflet
- **Informações detalhadas**: Características, diferenciais e dados técnicos
- **Compartilhamento social**: Integração com redes sociais
- **Imóveis similares**: Sugestões de outros imóveis do mesmo tipo

## 🛠️ Tecnologias

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização utilitária
- **Lucide React**: Ícones
- **Leaflet**: Mapas interativos
- **React Leaflet**: Integração React com Leaflet

## 📱 Performance e SEO

### Otimizações Implementadas
- **Geração estática**: Páginas pré-renderizadas para melhor performance
- **Imagens otimizadas**: Next.js Image com lazy loading
- **Metadados dinâmicos**: SEO otimizado para cada imóvel
- **Schema.org**: Estrutura de dados para motores de busca
- **Sitemap dinâmico**: Mapa do site atualizado automaticamente
- **Robots.txt**: Configuração para crawlers

### Acessibilidade
- **ARIA labels**: Navegação por leitores de tela
- **Contraste adequado**: Cores seguindo padrões WCAG
- **Navegação por teclado**: Suporte completo
- **Semântica HTML**: Estrutura semântica correta

### Componentes Criados
- `PropertyGallery`: Galeria de imagens com modal
- `PropertyMap`: Mapa interativo com coordenadas dinâmicas
- `Breadcrumb`: Navegação hierárquica
- `PropertySchema`: Schema.org para SEO
- `SocialShare`: Compartilhamento social
- `Skeleton`: Estados de loading

## 🏗️ Estrutura do Projeto

```
laugab-imoveis/
├── app/
│   ├── imoveis/
│   │   └── venda/
│   │       ├── [id]/
│   │       │   ├── page.tsx          # Página dinâmica do imóvel
│   │       │   ├── loading.tsx       # Estado de loading
│   │       │   ├── error.tsx         # Página de erro
│   │       │   ├── not-found.tsx     # Página 404
│   │       │   └── PropertyMap.tsx   # Componente do mapa
│   │       └── page.tsx              # Listagem de imóveis
│   ├── sitemap.ts                    # Sitemap dinâmico
│   └── robots.ts                     # Robots.txt
├── components/
│   ├── ui/                           # Componentes base
│   ├── property-gallery.tsx          # Galeria de imagens
│   ├── breadcrumb.tsx                # Navegação
│   ├── property-schema.tsx           # Schema.org
│   └── social-share.tsx              # Compartilhamento
└── public/
    └── assets/
        └── imoveis/                  # Imagens dos imóveis
```

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Build para produção**:
   ```bash
   npm run build
   ```

4. **Executar em produção**:
   ```bash
   npm start
   ```

## 📊 Dados dos Imóveis

Os dados dos imóveis estão estruturados com as seguintes informações:

```typescript
interface Property {
  id: string;
  title: string;
  price: number;
  type: "venda" | "aluguel";
  kind: string;
  address: string;
  fullAddress: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  images: string[];
  featured: boolean;
  description: string;
  features: string[];
  coordinates: [number, number];
  yearBuilt: number;
  parkingSpaces: number;
  condominiumFee: number;
  iptu: number;
}
```

## 🎯 URLs dos Imóveis

Cada imóvel possui uma URL única seguindo o padrão:
- `/imoveis/venda/1` - Casa com piscina
- `/imoveis/venda/2` - Apartamento no centro
- `/imoveis/venda/3` - Cobertura com vista
- E assim por diante...

## 🔧 Configurações

### Variáveis de Ambiente
Crie um arquivo `.env.local` com:
```env
NEXT_PUBLIC_SITE_URL=https://laugabimobiliaria.vercel.app
```

### Personalização
- **Cores**: Edite `tailwind.config.js`
- **Componentes**: Modifique arquivos em `components/ui/`
- **Dados**: Atualize o array `properties` nas páginas

## 📈 Próximas Melhorias

- [ ] Integração com API real
- [ ] Sistema de busca avançada
- [ ] Filtros dinâmicos
- [ ] Sistema de favoritos
- [ ] Chat em tempo real
- [ ] Área do cliente
- [ ] Sistema de agendamento de visitas

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: contato@laugabimobiliaria.com.br
- **Telefone**: (11) 9999-9999
- **Site**: https://laugabimobiliaria.vercel.app
