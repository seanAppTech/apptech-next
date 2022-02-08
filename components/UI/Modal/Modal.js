import React from 'react';
import styled from 'styled-components';

export default function Modal({onClick}) {
  return (
      <Div onClick={onClick} />
  );
}

const Div = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #222;
    opacity: 0.7;
    z-index: 100;
`;
