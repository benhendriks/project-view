import React from "react";
import { Helmet } from "react-helmet";

class Head extends React.Component {
  render() {
    return (
      <Helmet>
        <title>Benjamin Steidl</title>
        <meta name="description" content="Portfolio Benjamin Steidl"/>
      </Helmet>
    );
  }
}

export default Head;
