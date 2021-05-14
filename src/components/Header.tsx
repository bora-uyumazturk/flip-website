import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <Helmet>
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://flipsite.netlify.app" />
      <meta property="twitter:creator" content="notsleepingturk" />
      <meta property="twitter:title" content="flipsite" />
      <meta
        property="twitter:description"
        content="A flippin' personal website!"
      />
      <meta
        property="twitter:image"
        content="https://flipsite.netlify.app/preview.png"
      />
    </Helmet>
  );
};

export default Header;
