import React from "react";

import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <title>Benjamin Steidl</title>
      <meta charset="utf-8" />
      <meta name="description" content="Portfolio Benjamin Seidl" />
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/daf8fgekl/image/upload/v1598282248/logo_fyqsyy.svg"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link
        rel="apple-touch-icon"
        href="https://res.cloudinary.com/daf8fgekl/image/upload/v1598282248/logo_fyqsyy.svg"
      />
    </Helmet>
  );
};

export default Head;
