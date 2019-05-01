import React from "react";

import styled, { css } from "styled-components";

const sharedStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const LoadingOverlay = styled.div`
  ${sharedStyles}
  z-index: 10;
`;

const LoadingContent = styled.div`
  ${sharedStyles}
  background: #000;
  opacity: 0.5;
`;

const Children = styled.div`
  ${sharedStyles};
`;

const Overlay = props => {
  const handleClick = e => {
    e.stopPropagation();
  };

  return (
    <LoadingOverlay onClick={handleClick}>
      <LoadingContent />
      <Children style={{ ...props.style }}>{props.children}</Children>
    </LoadingOverlay>
  );
};

export default Overlay;
