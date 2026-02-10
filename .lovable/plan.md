

# Otimizacao dos Microdados para Melhor Performance no Google

## Analise Atual

O site ja possui uma boa base de dados estruturados (JSON-LD) com `MedicalBusiness`, `Person`, `FAQPage` e `BreadcrumbList`. Porem, ha melhorias importantes que podem ser feitas para maximizar a visibilidade nos resultados de busca.

## Melhorias Planejadas

### 1. Corrigir e Enriquecer o Schema MedicalBusiness

**Problemas atuais:**
- Tipo `["MedicalBusiness", "Physician"]` deve usar `@type` unico com propriedades especificas
- Falta `areaServed` para SEO local
- Falta `hasCredential` para credenciais medicas (CRM)
- Falta `aggregateRating` (se aplicavel)
- Os servicos adicionais (Ginecologia Integral, Metodos Contraceptivos, Adolescentes) nao estao listados

**Alteracoes:**
- Separar em dois schemas: um `MedicalBusiness` e manter o `Physician` no schema Person
- Adicionar `areaServed` com Curitiba e regiao metropolitana
- Adicionar todos os 6 servicos disponiveis no site
- Adicionar `paymentAccepted` e `currenciesAccepted`

### 2. Melhorar o Schema Person para Physician

**Alteracoes:**
- Mudar `@type` de `Person` para `Physician`
- Adicionar `medicalSpecialty` com valores padronizados do Schema.org
- Adicionar `hasCredential` para CRM
- Adicionar `availableService` vinculado aos servicos

### 3. Adicionar Schema de Review/Testimonials

O site possui 5 depoimentos reais que podem ser estruturados como `Review` dentro de um `AggregateRating`, aumentando a chance de aparecer estrelas nos resultados de busca.

**Novo schema:**
- `AggregateRating` vinculado ao `MedicalBusiness`

### 4. Adicionar Schema WebSite com SearchAction

Permite que o Google entenda melhor a estrutura do site e potencialmente exiba sitelinks.

### 5. Adicionar Schema MedicalWebPage

Indica ao Google que o conteudo e de natureza medica, melhorando a classificacao em buscas de saude.

### 6. Melhorar o Sitemap

- Atualizar `lastmod` para data atual (2026-02-10)
- Remover URLs com fragmentos (#) pois o Google nao indexa ancoras como paginas separadas
- Manter apenas a URL principal

### 7. Adicionar Atributos Semanticos no HTML

- Adicionar atributos `itemscope`, `itemtype` e `itemprop` nas secoes do HTML para reforcar os microdados inline junto com o JSON-LD
- Melhorar tags alt das imagens com palavras-chave relevantes

---

## Detalhes Tecnicos

### Arquivo: `src/components/StructuredData.tsx`

Sera reescrito com os seguintes schemas:

1. **MedicalBusiness** - Dados do consultorio com todos os servicos, area de atendimento e informacoes de contato
2. **Physician** (substituindo Person) - Perfil profissional com credenciais, especialidades e formacao
3. **FAQPage** - Manter as 7 perguntas existentes (ja esta bom)
4. **WebSite** - Novo schema para o site como um todo
5. **MedicalWebPage** - Novo schema indicando conteudo medico
6. **BreadcrumbList** - Manter (ja esta bom)

### Arquivo: `public/sitemap.xml`

- Remover URLs com fragmentos de ancora
- Atualizar data de modificacao
- Adicionar secao de depoimentos

### Arquivo: `src/components/ModernAbout.tsx`

- Adicionar microdata inline (itemscope/itemprop) na secao sobre

### Arquivo: `src/components/ModernServices.tsx`

- Adicionar microdata inline nos cards de servico

### Arquivo: `src/components/ModernTestimonials.tsx`

- Adicionar microdata inline nos depoimentos

### Arquivo: `src/components/ModernHero.tsx`

- Melhorar alt text da imagem principal para SEO

---

## Resumo

| Arquivo | Acao |
|---------|------|
| StructuredData.tsx | Reescrever com schemas otimizados |
| sitemap.xml | Simplificar e atualizar datas |
| ModernAbout.tsx | Adicionar microdata inline |
| ModernServices.tsx | Adicionar microdata inline |
| ModernTestimonials.tsx | Adicionar microdata inline |
| ModernHero.tsx | Melhorar alt text |

## Beneficios Esperados

- **Rich Snippets** mais completos (estrelas, FAQ, informacoes medicas)
- **Knowledge Panel** do Google com dados da Dra. Coni
- **SEO Local** reforçado com area de atendimento estruturada
- **Credibilidade medica** sinalizada ao Google (E-E-A-T)
- **Melhor indexacao** com sitemap corrigido

