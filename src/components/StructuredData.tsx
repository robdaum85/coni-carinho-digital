import { Helmet } from "react-helmet";

const StructuredData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physician"],
    "name": "Dra. Coni Waldow - Obstetrícia Humanizada",
    "image": "https://www.draconiwaldow.com.br/lovable-uploads/394e917b-f476-43e0-9cb7-2a712c1e6c49.png",
    "url": "https://www.draconiwaldow.com.br",
    "telephone": "+55-41-99894-3285",
    "email": "contato@draconiwaldow.com.br",
    "description": "A Dra. Coni Waldow oferece acompanhamento obstétrico humanizado e de alto risco em Curitiba. Especialista em parto humanizado, pré-natal e ginecologia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284,
      "longitude": -49.2733
    },
    "priceRange": "$$",
    "medicalSpecialty": [
      "Obstetrics",
      "Gynecology"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Parto Humanizado",
        "description": "Parto que respeita as escolhas da mulher com mínimo de intervenções desnecessárias"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pré-natal de Alto Risco",
        "description": "Acompanhamento especializado para gestações que necessitam de cuidados especiais"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pré-natal Humanizado",
        "description": "Acompanhamento personalizado durante toda a gestação"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Ginecologia Geral",
        "description": "Atendimento ginecológico completo e humanizado"
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

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dra. Coni Waldow",
    "jobTitle": "Médica Obstetra e Ginecologista",
    "description": "Especialista em Obstetrícia Humanizada e Alto Risco, formada pela UFPR com especialização pela UNIFESP",
    "image": "https://www.draconiwaldow.com.br/lovable-uploads/2516b20b-786c-48c8-a7c3-6e5a8a0d9363.png",
    "url": "https://www.draconiwaldow.com.br",
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
      "Pré-natal",
      "Ginecologia"
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
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
