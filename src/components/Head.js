import React from "react";
import { Helmet } from "react-helmet";

class Head extends React.Component {
  render() {
    return (
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="static/favicon.png" />
        <title>Benjamin Steidl</title>
        <meta name="description" content="Portfolio Benjamin Steidl"/>
      </Helmet>
    );
  }
}

export default Head;