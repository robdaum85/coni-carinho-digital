import { Helmet } from "react-helmet";

const ModernSEO = () => {
  return (
    <Helmet>
      <title>Dra. Coni Waldow – Obstetrícia Humanizada em Curitiba | Parto Humanizado e Alto Risco</title>
      <meta
        name="description"
        content="A Dra. Coni Waldow é obstetra humanizado especialista em parto humanizado, parto assistido, parto aquático e humanização do parto em Curitiba. Pré-natal personalizado com acompanhamento acolhedor. UFPR e UNIFESP."
      />
      <meta
        name="keywords"
        content="parto humanizado Curitiba, obstetrícia alto risco, pré-natal humanizado, ginecologia Curitiba, Dra Coni Waldow, obstetra Curitiba, parto normal, cesárea humanizada, gestação alto risco, UFPR, UNIFESP, plano de parto, humanização do parto, humanização no parto, parto aquático, parto assistido, parto naturalizado, parto de cócoras, parto doula, obstetra humanizado, riscos no parto, preço parto humanizado, parto humanitário, definição de parto humanizado"
      />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dra. Coni Waldow – Obstetrícia Humanizada em Curitiba" />
      <meta
        property="og:description"
        content="Especialista em parto humanizado e obstetrícia de alto risco. Acompanhamento pré-natal personalizado e acolhedor em Curitiba."
      />
      <meta property="og:url" content="https://www.draconiwaldow.com.br" />
      <meta property="og:image" content="https://www.draconiwaldow.com.br/lovable-uploads/2516b20b-786c-48c8-a7c3-6e5a8a0d9363.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Dra. Coni Waldow" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dra. Coni Waldow – Obstetrícia Humanizada em Curitiba" />
      <meta
        name="twitter:description"
        content="Especialista em parto humanizado e obstetrícia de alto risco. Acompanhamento pré-natal personalizado em Curitiba."
      />
      <meta name="twitter:image" content="https://www.draconiwaldow.com.br/lovable-uploads/2516b20b-786c-48c8-a7c3-6e5a8a0d9363.png" />
      
      {/* Canonical */}
      <link rel="canonical" href="https://www.draconiwaldow.com.br" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Author */}
      <meta name="author" content="Dra. Coni Waldow" />
      
      {/* Geo-location for local SEO */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4284;-49.2733" />
      <meta name="ICBM" content="-25.4284, -49.2733" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="pt-BR" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#C49E85" />
      
      {/* Additional SEO */}
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
    </Helmet>
  );
};

export default ModernSEO;
