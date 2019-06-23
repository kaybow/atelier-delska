import React from "react";

const DesignGridPairs = props => (
  <div class="unit xs-1 s-1 m-1 l-1-3">
    <div class="grid">{props.children}</div>
  </div>
);

export default DesignGridPairs;
