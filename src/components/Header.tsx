import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <Helmet>
      <title>flipsite</title>
      <meta name="description" content="A flippin' personal website!" />

      <meta itemProp="name" content="flipsite" />
      <meta itemProp="description" content="A flippin' personal website!" />
      <meta
        itemProp="image"
        content="https://flipsite.netlify.app/preview.png"
      />

      <meta property="og:url" content="https://flipsite.netlify.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="flipsite" />
      <meta property="og:description" content="A flippin' personal website!" />
      <meta
        property="og:image"
        content="https://flipsite.netlify.app/preview.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="flipsite" />
      <meta name="twitter:description" content="A flippin' personal website!" />
      <meta
        name="twitter:image"
        content="https://flipsite.netlify.app/preview.png"
      />
    </Helmet>
  );
};

export default Header;
