import { Helmet } from "react-helmet";

const StructuredData = () => {
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Consultório Dra. Coni Waldow - Obstetrícia Humanizada",
    "image": "https://www.draconiwaldow.com.br/lovable-uploads/394e917b-f476-43e0-9cb7-2a712c1e6c49.png",
    "url": "https://www.draconiwaldow.com.br",
    "telephone": "+55-41-99894-3285",
    "email": "contato@draconiwaldow.com.br",
    "description": "Consultório especializado em obstetrícia humanizada, parto humanizado, parto assistido, parto naturalizado e pré-natal de alto risco em Curitiba-PR. Obstetra humanizado com foco na humanização do parto, incluindo parto aquático, parto de cócoras e acompanhamento com doula. Atendimento personalizado com a Dra. Coni Waldow.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284,
      "longitude": -49.2733
    },
    "areaServed": {
      "@type": "City",
      "name": "Curitiba",
      "sameAs": "https://pt.wikipedia.org/wiki/Curitiba"
    },
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX",
    "medicalSpecialty": [
      "Obstetrics",
      "Gynecology"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Pré-natal Personalizado",
        "description": "Acompanhamento personalizado durante toda a gestação, respeitando suas necessidades e criando um vínculo de confiança."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Parto Humanizado",
        "description": "Parto que respeita as escolhas da mulher com mínimo de intervenções desnecessárias, garantindo segurança e acolhimento."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Obstetrícia de Alto Risco",
        "description": "Acompanhamento especializado para gestações que necessitam de cuidados especiais, com suporte técnico e emocional."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Ginecologia Integral",
        "description": "Atendimento ginecológico completo e humanizado para todas as fases da vida da mulher."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Métodos Contraceptivos",
        "description": "Orientação e acompanhamento sobre métodos contraceptivos adequados para cada mulher."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Atendimento a Adolescentes",
        "description": "Cuidado ginecológico especializado e acolhedor para adolescentes."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Parto Assistido",
        "description": "Acompanhamento médico personalizado durante todo o trabalho de parto, garantindo segurança e respeito às escolhas da gestante com assistência obstétrica humanizada."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Parto Aquático",
        "description": "Modalidade de parto na água que promove relaxamento, alívio natural da dor e maior conforto para a gestante durante o trabalho de parto."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Parto de Cócoras",
        "description": "Parto em posição vertical que utiliza a gravidade a favor, facilitando a descida do bebê e proporcionando maior autonomia à gestante."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Acompanhamento com Doula",
        "description": "Integração com doula para suporte emocional, físico e informacional durante a gestação, trabalho de parto e pós-parto."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "8",
      "reviewCount": "8"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Bruna Mendes Paiva"
        },
        "reviewBody": "Não existem palavras suficientes para agradecer tudo o que a Dra. Coni representou na minha jornada até o nascimento do Thomas. A calma, a presença e a confiança que ela transmite foram essenciais para que eu conseguisse viver o parto normal com que sempre sonhei. A Dra. Coni é uma profissional excepcional, mas acima de tudo, é uma pessoa humana, sensível e acolhedora."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Izadora Silveira"
        },
        "reviewBody": "Dra. Coni é uma médica excepcional! Muito cuidadosa, gentil e atenciosa. Nossos filhos não poderiam ter nascido com melhor médica!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Gabriel Couto"
        },
        "reviewBody": "Excelente profissional. Sempre muito solícita, paciente, muito correta."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mariana Couto"
        },
        "reviewBody": "Médica excelente! Humana! Tornou nossa experiência de parto normal possível e incrível!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Rachel Lobato"
        },
        "reviewBody": "Meu parto foi excelente, tranquila e humanizada!"
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Sibele Alberti" },
        "reviewBody": "Profissional extremamente atenciosa, empática e competente. Durante todo o acompanhamento, senti-me acolhida e bem cuidada."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Jassilane Granemann" },
        "reviewBody": "Profissional com atendimento humanizado, equilibrado e técnico."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Psicóloga Renata Dallegrave" },
        "reviewBody": "Não é só uma médica, é alguém com um olhar atento às necessidades e emoções."
      }
    ],
    "sameAs": [
      "https://instagram.com/draconiwaldow"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dra. Coni Waldow",
    "jobTitle": "Médica Obstetra e Ginecologista",
    "description": "Médica especialista em Obstetrícia Humanizada e Alto Risco, formada pela UFPR com especialização pela UNIFESP. Atende em Curitiba-PR.",
    "image": "https://www.draconiwaldow.com.br/lovable-uploads/2516b20b-786c-48c8-a7c3-6e5a8a0d9363.png",
    "url": "https://www.draconiwaldow.com.br",
    "telephone": "+55-41-99894-3285",
    "medicalSpecialty": [
      {
        "@type": "MedicalSpecialty",
        "name": "Obstetrics"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Gynecology"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Medical License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Conselho Regional de Medicina do Paraná (CRM-PR)"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Board Certification",
        "name": "Título de Especialista em Ginecologia e Obstetrícia",
        "recognizedBy": {
          "@type": "Organization",
          "name": "FEBRASGO"
        }
      }
    ],
    "sameAs": [
      "https://instagram.com/draconiwaldow"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Universidade Federal do Paraná (UFPR)"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Universidade Federal de São Paulo (UNIFESP)"
      }
    ],
    "knowsAbout": [
      "Parto Humanizado",
      "Obstetrícia de Alto Risco",
      "Pré-natal Personalizado",
      "Ginecologia",
      "Métodos Contraceptivos",
      "Humanização do Parto",
      "Parto Assistido",
      "Parto Naturalizado",
      "Parto Aquático",
      "Parto de Cócoras",
      "Acompanhamento com Doula",
      "Riscos no Parto",
      "Obstetra Humanizado",
      "Parto Humanitário"
    ],
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Consultório Dra. Coni Waldow"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o parto humanizado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É um tipo de parto que respeita as escolhas da mulher, valoriza o protagonismo da gestante e busca o mínimo de intervenções médicas desnecessárias, priorizando o bem-estar físico e emocional da mãe e do bebê."
        }
      },
      {
        "@type": "Question",
        "name": "O parto humanizado é sempre normal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não necessariamente. Parto humanizado pode ser vaginal ou cesárea — o importante é que seja baseado em informações, respeito e na decisão compartilhada entre a gestante e a equipe médica."
        }
      },
      {
        "@type": "Question",
        "name": "Posso ter parto humanizado em hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com certeza. Com a equipe certa ao seu lado, além da segurança em situações nem sempre previsíveis na obstetrícia, você estará em um ambiente acolhedor, com respeito, onde a protagonista do seu parto será você."
        }
      },
      {
        "@type": "Question",
        "name": "Quem pode me acompanhar no parto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você tem o direito de escolher quem estará ao seu lado. Você pode levar seu parceiro(a), ou algum familiar ou amigo. Além do seu acompanhante, também pode levar a sua equipe: médico obstetra, enfermeira obstetriz, doula, pediatra."
        }
      },
      {
        "@type": "Question",
        "name": "Quais os benefícios do parto humanizado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Menor risco de intervenções desnecessárias, recuperação mais rápida, vínculo fortalecido com o bebê e maior satisfação com a experiência do parto."
        }
      },
      {
        "@type": "Question",
        "name": "Minha gestação é de risco. Posso ter parto normal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, a maioria das gestantes tem condições em ter um parto normal. Ter fatores de risco não determinam na maioria das vezes a via de parto."
        }
      },
      {
        "@type": "Question",
        "name": "O que é Plano de parto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É um documento que será redigido por você e seu acompanhante, após ter recebido todas as orientações, que permite você colocar seus desejos e anseios de forma individualizada em busca de atendimento mais respeitoso e personalizado."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o preço do parto humanizado em Curitiba?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O valor do parto humanizado varia conforme cada caso e é discutido de forma transparente durante a consulta. O atendimento da Dra. Coni Waldow é particular, garantindo acompanhamento personalizado e dedicado do pré-natal ao pós-parto."
        }
      },
      {
        "@type": "Question",
        "name": "O que é parto aquático e quais os benefícios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O parto aquático é realizado em uma banheira com água morna, proporcionando relaxamento muscular, alívio natural da dor e maior conforto durante o trabalho de parto. A água aquecida ajuda a reduzir a tensão e facilita a movimentação da gestante."
        }
      },
      {
        "@type": "Question",
        "name": "Posso ter parto de cócoras ou em outras posições?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Posições verticais como cócoras, de joelhos ou semi-sentada utilizam a gravidade a favor, facilitando a descida do bebê e proporcionando maior autonomia. A Dra. Coni respeita a liberdade de posição durante o trabalho de parto."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o papel da doula no parto humanizado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A doula oferece suporte emocional, físico e informacional contínuo durante a gestação, trabalho de parto e pós-parto. Ela complementa o trabalho da equipe médica, proporcionando conforto, técnicas de alívio da dor e apoio emocional à gestante e sua família."
        }
      }
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dra. Coni Waldow - Obstetrícia Humanizada em Curitiba",
    "url": "https://www.draconiwaldow.com.br",
    "description": "Site oficial da Dra. Coni Waldow, obstetra humanizado especialista em parto humanizado, parto assistido, parto naturalizado, parto aquático, parto de cócoras, humanização do parto e gestação de alto risco em Curitiba-PR.",
    "inLanguage": "pt-BR",
    "publisher": {
      "@type": "Physician",
      "name": "Dra. Coni Waldow"
    }
  };

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Dra. Coni Waldow - Obstetrícia Humanizada e Parto Humanizado em Curitiba",
    "url": "https://www.draconiwaldow.com.br",
    "description": "Informações sobre parto humanizado, parto assistido, parto aquático, parto de cócoras, humanização do parto, pré-natal de alto risco e ginecologia com a Dra. Coni Waldow em Curitiba-PR.",
    "lastReviewed": "2026-02-10",
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient",
      "geographicArea": {
        "@type": "AdministrativeArea",
        "name": "Curitiba, Paraná, Brasil"
      }
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Obstetrics"
    },
    "about": [
      {
        "@type": "MedicalCondition",
        "name": "Gravidez"
      },
      {
        "@type": "MedicalCondition",
        "name": "Gravidez de Alto Risco"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Parto Humanizado"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Parto Assistido"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Parto Aquático"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Parto de Cócoras"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Humanização do Parto"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.draconiwaldow.com.br"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(medicalBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(physicianSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(medicalWebPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
