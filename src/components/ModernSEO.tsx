
import { Helmet } from "react-helmet";

const ModernSEO = () => {
  return (
    <Helmet>
      <title>Dra. Coni Waldow – Obstetrícia Humanizada em Curitiba</title>
      <meta
        name="description"
        content="A Dra. Coni Waldow oferece acompanhamento obstétrico humanizado e de alto risco em Curitiba. Agende pré-natal, parto humanizado e ginecologia geral."
      />
      <meta
        name="keywords"
        content="parto humanizado, obstetrícia, alto risco, pré-natal, ginecologia, Curitiba, Dra. Coni Waldow, UFPR, UNIFESP"
      />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dra. Coni Waldow – Obstetrícia Humanizada" />
      <meta
        property="og:description"
        content="Parto humanizado e obstetrícia de alto risco com atenção integral em Curitiba."
      />
      <meta property="og:url" content="https://www.draconiwaldow.com.br" />
      <meta property="og:image" content="https://www.draconiwaldow.com.br/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dra. Coni Waldow – Obstetrícia Humanizada" />
      <meta
        name="twitter:description"
        content="Parto humanizado e obstetrícia de alto risco com atenção integral em Curitiba."
      />
      <meta name="twitter:image" content="https://www.draconiwaldow.com.br/og-image.jpg" />
      
      {/* Canonical */}
      <link rel="canonical" href="https://www.draconiwaldow.com.br" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Author */}
      <meta name="author" content="Dra. Coni Waldow" />
    </Helmet>
  );
};

export default ModernSEO;
