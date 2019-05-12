import React from "react";

import SEO from "./seo";

const PageHead = props => (
  <SEO {...props}>
    <meta charset="utf-8" />
    <title>Home | Atelier Delska</title>
    <meta property="og:type" content="article" />
    <meta
      property="og:title"
      content="Atelier Delska, Historical and Vintage Creations"
    />
    <meta
      property="og:url"
      content="https://kaybow.github.io/atelier-delska/"
    />
    <meta name="handheldfriendly" content="true" />
    <meta name="mobileoptimized" content="240" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </SEO>
);

export default PageHead;
