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
    "description": "Consultório especializado em obstetrícia humanizada, parto humanizado, pré-natal de alto risco e ginecologia em Curitiba-PR. Atendimento personalizado com a Dra. Coni Waldow.",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Curitiba",
        "sameAs": "https://pt.wikipedia.org/wiki/Curitiba"
      },
      {
        "@type": "City",
        "name": "São José dos Pinhais"
      },
      {
        "@type": "City",
        "name": "Araucária"
      },
      {
        "@type": "City",
        "name": "Ponta Grossa"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Região Metropolitana de Curitiba"
      }
    ],
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
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "5",
      "reviewCount": "5"
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
          "name": "Mariana C."
        },
        "reviewBody": "A Dra. Coni foi uma luz no momento mais importante da minha vida. Cuidou de mim e do meu bebê com tanto amor que nunca vou esquecer. Me senti segura e acolhida em cada consulta."
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
          "name": "Juliane P."
        },
        "reviewBody": "Descobrir minha trombofilia foi assustador, mas a Dra. Coni me tranquilizou desde o primeiro momento. Graças ao cuidado dela, vivi um parto humanizado e seguro."
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
          "name": "Larissa M."
        },
        "reviewBody": "Foi como ter uma amiga médica me acompanhando. Ela respeitou todas as minhas escolhas e me deu força quando eu mais precisava. Recomendo de coração!"
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
          "name": "Ana Paula S."
        },
        "reviewBody": "Minha gestação de alto risco não foi fácil, mas ter a Dra. Coni ao meu lado fez toda a diferença. Ela me deu confiança e cuidado em cada momento."
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
          "name": "Carolina R."
        },
        "reviewBody": "Profissional excepcional e ser humano incrível! Me acompanhou com tanto carinho que transformou minha experiência de maternidade. Gratidão eterna!"
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
      "Métodos Contraceptivos"
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
      }
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dra. Coni Waldow - Obstetrícia Humanizada em Curitiba",
    "url": "https://www.draconiwaldow.com.br",
    "description": "Site oficial da Dra. Coni Waldow, médica obstetra especialista em parto humanizado e gestação de alto risco em Curitiba-PR.",
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
    "description": "Informações sobre parto humanizado, pré-natal de alto risco e ginecologia com a Dra. Coni Waldow em Curitiba-PR.",
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
