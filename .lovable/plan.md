
# Plano de Correção do Telefone e Otimização SEO

## Parte 1: Correção do Número de Telefone

O número atual está incorreto. Precisa mudar de:
- Link WhatsApp: `554198943285` para `5541998943285`
- Exibição: `(41) 98943-285` para `(41) 99894-3285`

### Arquivos a serem alterados (9 arquivos, 15 ocorrências):

| Arquivo | Tipo de Alteração |
|---------|-------------------|
| ModernHeader.tsx | 2 links WhatsApp |
| ModernHero.tsx | 1 link WhatsApp |
| ModernFooter.tsx | 2 links WhatsApp + 1 número exibido |
| ModernFAQ.tsx | 1 link WhatsApp |
| ModernContact.tsx | 1 link WhatsApp + 2 números exibidos |
| WhatsAppButton.tsx | 1 link WhatsApp |
| ContactForm.tsx | 1 link WhatsApp + 1 placeholder |
| Header.tsx | 2 links WhatsApp |
| Footer.tsx | 2 links WhatsApp + 1 número exibido |

---

## Parte 2: Otimização SEO e Microdados

### 2.1 Adicionar Schema.org (JSON-LD) - Dados Estruturados

Criar componente com microdados para que o Google entenda melhor o site:

```text
+----------------------------------+
|  Dados Estruturados JSON-LD      |
+----------------------------------+
| - LocalBusiness (Consultório)    |
| - MedicalBusiness                |
| - Person (Dra. Coni Waldow)      |
| - Physician                      |
| - FAQPage (Perguntas frequentes) |
| - BreadcrumbList                 |
+----------------------------------+
```

**Informações incluídas:**
- Nome do negócio e profissional
- Especialidades médicas
- Telefone e WhatsApp corretos
- Endereço em Curitiba
- Horário de funcionamento
- Redes sociais
- Avaliações (se disponíveis)

### 2.2 Melhorias no index.html

- Adicionar favicon personalizado (se disponível)
- Adicionar meta tags adicionais de SEO
- Adicionar geo-localização para buscas locais
- Atualizar og:image para uma imagem real do site

### 2.3 Criar sitemap.xml

Arquivo para facilitar indexação pelos buscadores:
- Página principal
- Seções do site (sobre, serviços, contato, etc.)

### 2.4 Atualizar robots.txt

- Adicionar referência ao sitemap.xml
- Manter permissões para crawlers

### 2.5 Atualizar ModernSEO.tsx

- Adicionar mais palavras-chave relevantes
- Incluir meta tags de geo-localização
- Melhorar descrições para SEO local

---

## Resumo das Alterações

| Categoria | Arquivos Novos | Arquivos Modificados |
|-----------|----------------|---------------------|
| Telefone | 0 | 9 |
| SEO/Microdados | 2 (StructuredData.tsx, sitemap.xml) | 3 (index.html, robots.txt, ModernSEO.tsx) |
| **Total** | **2** | **12** |

---

## Detalhes Técnicos

### Novo Componente: StructuredData.tsx

Componente React que injeta JSON-LD no head da página com:

1. **LocalBusiness/MedicalBusiness:**
   - Tipo: Physician, Obstetrician-Gynecologist
   - Nome: Dra. Coni Waldow
   - Telefone: +55 41 99894-3285
   - Área de atuação: Curitiba, PR
   - Especialidades: Obstetrícia Humanizada, Alto Risco, Ginecologia

2. **FAQPage:**
   - Perguntas e respostas do FAQ existente
   - Melhora exibição nos resultados de busca

3. **BreadcrumbList:**
   - Navegação estruturada para o Google

### Sitemap.xml

```text
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="...">
  <url>
    <loc>https://www.draconiwaldow.com.br/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Meta Tags de Geo-localização

```text
<meta name="geo.region" content="BR-PR" />
<meta name="geo.placename" content="Curitiba" />
```

---

## Benefícios Esperados

1. **Telefone correto** - Clientes conseguirão entrar em contato
2. **Rich Snippets** - Resultados de busca mais completos no Google
3. **SEO Local** - Melhor posicionamento para buscas em Curitiba
4. **FAQ nos resultados** - Perguntas frequentes podem aparecer diretamente no Google
5. **Indexação melhorada** - Sitemap facilita o trabalho dos crawlers
