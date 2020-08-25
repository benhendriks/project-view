import React from 'react';

import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <title>Benjamin Steidl</title>
        <meta name="description" content="Project overview" />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
    </Helmet>
  );
}

export default Head;
