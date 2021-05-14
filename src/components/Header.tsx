import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <Helmet>
      <head>
        <meta charset="utf-8" />
        <title>flipsite</title>
        <meta name="description" content="A flippin' personal website!" />

        <meta itemProp="name" content="flipsite" />
        <meta itemProp="description" content="A flippin' personal website!" />
        <meta
          itemProp="image"
          content="https://flipsite.netlify.app/preview.png"
        />
        <link rel="icon" href="https://flipsite.netlify.app/flip.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A flippin' personal website!" />
        <link
          rel="apple touch icon"
          href="https://flipsite.netlify.app/preview.png"
        />

        <meta property="og:url" content="https://flipsite.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="flipsite" />
        <meta
          property="og:description"
          content="A flippin' personal website!"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://flipsite.netlify.app/preview.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="flipsite" />
        <meta
          name="twitter:description"
          content="A flippin' personal website!"
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://flipsite.netlify.app/preview.png"
        />
      </head>
    </Helmet>
  );
};

export default Header;
