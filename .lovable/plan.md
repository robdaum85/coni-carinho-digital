# Adicionar link para avaliações no Google

Adicionar um botão secundário "Ver todas as avaliações no Google" na seção de depoimentos, abrindo o perfil da Dra. Coni no Google em nova aba.

## Alteração

**Arquivo:** `src/components/ModernTestimonials.tsx`

No bloco do CTA final (onde já existe o botão "Agendar consulta"), incluir um segundo botão ao lado, com estilo secundário (outline rosé + ícone do Google), apontando para o link enviado:

```
https://www.google.com/search?q=Dra.+Coni+Waldow&stick=H4sIAAAAAAAA_-NgU1I1qDAzNzFJMUmyNExNMzUySrO0MqiwMEq2NDY1MjYxSzY1TjIwXMQq4FKUqKfgnJ-XqRCemJOSXw4AlcfPjDwAAAA&hl=pt-BR
```

Comportamento:
- `target="_blank"` + `rel="noopener noreferrer"`
- Ícone "G" do Google (mesmo SVG inline já usado no selo dos cards)
- Layout: em desktop os dois botões ficam lado a lado; em mobile, empilham com gap.

## Resumo

| Arquivo | Mudança |
|---------|---------|
| `src/components/ModernTestimonials.tsx` | Adicionar botão "Ver todas no Google" no CTA |

Apenas 1 arquivo modificado. Nenhum arquivo novo.
