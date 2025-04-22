
import { Helmet } from "react-helmet";

const SEOTags = () => {
  return (
    <Helmet>
      <title>Dra. Coni Waldow | Parto Humanizado e Alto Risco</title>
      <meta
        name="description"
        content="Parto Humanizado e Obstetrícia de Alto Risco com atenção integral. Acompanhamento pré-natal personalizado e seguro em Curitiba e região."
      />
      <meta
        name="keywords"
        content="parto humanizado, obstetrícia, alto risco, pré-natal, ginecologia, Curitiba"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dra. Coni Waldow | Parto Humanizado e Alto Risco" />
      <meta
        property="og:description"
        content="Parto Humanizado e Obstetrícia de Alto Risco com atenção integral. Acompanhamento pré-natal personalizado em Curitiba."
      />
      <meta property="og:url" content="https://draconiwaldow.com.br" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dra. Coni Waldow | Parto Humanizado e Alto Risco" />
      <meta
        name="twitter:description"
        content="Parto Humanizado e Obstetrícia de Alto Risco com atenção integral. Acompanhamento pré-natal personalizado em Curitiba."
      />
    </Helmet>
  );
};

export default SEOTags;
