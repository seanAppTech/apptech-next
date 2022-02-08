import React from 'react';
import styled from 'styled-components';

export default function Grid({ children }) {
  return (
    <Div>
        {children}
    </Div>
  );
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 100px;
    width: 100%;
    max-width: ${props => props.theme.breakpoint.laptop};
    margin: auto;
    justify-content: center;
    align-content: flex-start;
`;
