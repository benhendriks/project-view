import React from "react";

import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <title>Benjamin Steidl</title>
      <meta charset="utf-8" />
      <meta name="description" content="Portfolio Benjamin Steidl" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
};

export default Head;
