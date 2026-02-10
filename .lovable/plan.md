

# Integrar Palavras-Chave nos Microdados e SEO

## Palavras-chave a trabalhar

Baseado nas imagens enviadas, as seguintes palavras-chave serao incorporadas:

- humanizacao do parto / humanizacao no parto / humanizacao parto
- parto humanizado artigo / definicao de parto humanizado
- parto aquatico
- parto humanitario
- parto humanizado preco / preco parto humanizado
- parto assistido
- parto naturalizado
- parto cocoras
- parto doula
- obstetra humanizado
- riscos no parto

---

## Alteracoes Planejadas

### 1. StructuredData.tsx - Enriquecer microdados com palavras-chave

**MedicalBusiness (description):** Incluir termos como "humanizacao do parto", "parto assistido", "parto naturalizado", "obstetra humanizado".

**Physician (knowsAbout):** Expandir de 5 para ~15 itens incluindo: "Humanizacao do Parto", "Parto Assistido", "Parto Naturalizado", "Parto Aquatico", "Parto de Cocoras", "Parto com Doula", "Riscos no Parto", "Parto Humanitario".

**availableService:** Adicionar novos servicos/procedimentos cobrindo os termos:
- Parto Assistido
- Parto Aquatico
- Parto de Cocoras
- Acompanhamento com Doula

**FAQPage:** Adicionar 3-4 novas perguntas cobrindo termos ainda nao trabalhados:
- "Qual o preco do parto humanizado?" (parto humanizado preco / preco parto humanizado)
- "O que e parto aquatico e quais os beneficios?" (parto aquatico)
- "Posso ter parto de cocoras?" (parto cocoras)
- "Qual o papel da doula no parto?" (parto doula)

**MedicalWebPage (about):** Adicionar mais MedicalCondition/MedicalProcedure cobrindo os termos.

**WebSite (description):** Enriquecer com palavras-chave adicionais.

### 2. ModernSEO.tsx - Expandir meta keywords e descricoes

**meta keywords:** Adicionar todas as novas palavras-chave:
- humanizacao do parto, humanizacao no parto, parto aquatico, parto assistido, parto naturalizado, parto cocoras, parto doula, obstetra humanizado, riscos no parto, preco parto humanizado, parto humanitario, definicao de parto humanizado

**meta description:** Incorporar termos-chave naturalmente.

**og:description e twitter:description:** Atualizar com termos relevantes.

### 3. ModernFAQ.tsx - Adicionar novas perguntas

Incluir as mesmas 3-4 perguntas novas no componente visual para que o conteudo corresponda ao schema FAQPage:

- "Qual o preco do parto humanizado?" - Resposta sobre consulta particular, valores discutidos em consulta
- "O que e parto aquatico?" - Explicacao sobre parto na agua e beneficios
- "Posso ter parto de cocoras?" - Explicacao sobre posicoes verticais no parto
- "Qual o papel da doula no parto humanizado?" - Explicacao sobre suporte da doula

### 4. ModernServices.tsx - Termos nas descricoes

Incorporar naturalmente palavras-chave nas descricoes dos servicos existentes:
- "Parto humanizado": adicionar mencoes a parto assistido, parto naturalizado, humanizacao do parto
- "Pre-natal": mencionar riscos no parto e acompanhamento

---

## Resumo de Arquivos

| Arquivo | Alteracao |
|---------|-----------|
| StructuredData.tsx | Expandir knowsAbout, availableService, FAQ, descricoes |
| ModernSEO.tsx | Expandir keywords, descricoes |
| ModernFAQ.tsx | Adicionar 3-4 novas perguntas |
| ModernServices.tsx | Enriquecer descricoes com palavras-chave |

**Nenhum arquivo novo sera criado. 4 arquivos serao modificados.**

---

## Secao Tecnica

### Novos itens em knowsAbout (Physician schema)
```text
Existentes:                    Novos:
- Parto Humanizado             - Humanizacao do Parto
- Obstetricia de Alto Risco    - Parto Assistido
- Pre-natal Personalizado      - Parto Naturalizado
- Ginecologia                  - Parto Aquatico
- Metodos Contraceptivos       - Parto de Cocoras
                               - Acompanhamento com Doula
                               - Riscos no Parto
                               - Obstetra Humanizado
                               - Parto Humanitario
```

### Novos availableService
```text
- Parto Assistido: "Acompanhamento medico personalizado..."
- Parto Aquatico: "Modalidade de parto na agua..."
- Parto de Cocoras: "Parto em posicao vertical..."
- Acompanhamento com Doula: "Integracao com doula..."
```

### Novas FAQs (schema + componente visual)
```text
Q: "Qual o preco do parto humanizado em Curitiba?"
A: Valores discutidos em consulta, atendimento particular personalizado...

Q: "O que e parto aquatico e posso ter um?"
A: Parto na agua com beneficios de relaxamento...

Q: "Posso ter parto de cocoras ou em outras posicoes?"
A: Posicoes verticais como cocoras facilitam...

Q: "Qual o papel da doula no parto humanizado?"
A: A doula oferece suporte emocional e fisico...
```

