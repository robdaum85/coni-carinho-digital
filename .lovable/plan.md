# Nova seção premium de Depoimentos (estilo Google Reviews)

Substituir a seção atual `ModernTestimonials.tsx` por uma versão premium, com os relatos reais que você enviou já integrados (Opção C — curadoria manual, sem API).

## Estrutura da nova seção

### 1. Header
- Título: "Histórias reais de acolhimento e confiança" (fonte Playfair, tom modern-primary)
- Subtítulo conforme briefing
- Animação `fade-in-up` no scroll (IntersectionObserver)

### 2. Faixa de métricas
Faixa horizontal elegante com 4 itens, ícones lucide + texto curto:
- ⭐ "Avaliações 5 estrelas"
- 🤍 "Atendimento humanizado"
- 👶 "Pré-natal e parto acolhedor"
- 🛡️ "Segurança em toda gestação"

Em mobile vira grid 2x2.

### 3. Grid/Carrossel de depoimentos
Cards no estilo Google Reviews:
- Avatar circular com inicial da paciente sobre fundo rosé/dourado suave
- Nome em negrito
- 5 estrelas douradas (`text-amber-400`)
- Selo discreto "Google Reviews" com mini logo do G colorido (SVG inline, sem dependência externa)
- Aspas decorativas grandes em rosé translúcido no canto
- Texto do depoimento em itálico
- Hover: leve elevação + sombra mais profunda + borda rosé

Layout:
- Desktop: grid 3 colunas
- Tablet: 2 colunas
- Mobile: carrossel swipeable (mantém lógica do componente atual)

Os 8 depoimentos enviados (Bruna, Izadora, Gabriel, Mariana, Rachel, Sibele, Jassilane, Renata) entram como dados estáticos. Para a Bruna, que tem 3 trechos, uno em um único card com quebras suaves entre os trechos.

### 4. Bloco de palavras-chave flutuantes
Acima do CTA, conjunto de "tags" com leve animação flutuante (`animate-pulse` lento ou keyframe custom de translateY infinito):
acolhimento • segurança • parto humanizado • empatia • cuidado • confiança • humanização

Pílulas com fundo bege/rosé translúcido, borda fina dourada, distribuídas de forma orgânica (não alinhadas).

### 5. CTA final
Botão grande "Agendar consulta" → mesmo padrão do `WhatsAppButton` (link `wa.me/5541998943285` com mensagem pré-preenchida). Estilo: gradiente rosé suave, ícone WhatsApp, hover scale.

## Estilo visual (tokens)
- Fundo da seção: `#fdfaf8`
- Acento rosé/dourado já existente no design system
- Bordas: `rounded-2xl`
- Sombras: `shadow-lg` → `shadow-xl` no hover
- Tipografia: Playfair (títulos) + Inter (corpo)

Usarei tokens semânticos do `index.css` / `tailwind.config.ts`. Se faltar algum tom (dourado leve), adiciono ao design system em vez de hardcodar.

## SEO / Microdados
Cada card recebe `itemScope itemType="https://schema.org/Review"` com `author`, `reviewBody`, `reviewRating` (5). No `StructuredData.tsx` atualizo `AggregateRating` para `ratingValue: 5, reviewCount: 8` refletindo os reais.

## Acessibilidade
- `aria-label` no carrossel mobile e no CTA
- Contraste verificado
- Estrelas com `aria-hidden`, nota textual para leitores de tela

## Arquivos afetados
| Arquivo | Mudança |
|---------|---------|
| `src/components/ModernTestimonials.tsx` | Reescrita completa com nova estrutura |
| `src/components/StructuredData.tsx` | `AggregateRating` + 8 reviews reais no schema |
| `src/index.css` ou `tailwind.config.ts` | Possível keyframe `float` para tags + token dourado leve, se necessário |

Nenhum arquivo novo obrigatório (mantenho tudo dentro de `ModernTestimonials.tsx` para simplificar). Se ficar grande demais, extraio subcomponentes `ReviewCard` e `FloatingKeywords` em arquivos separados na mesma pasta.
