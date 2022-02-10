import React from 'react';
import styled from 'styled-components';

export default function PostsGrid({ children }) {
  return (
    <Div>
        {children}
    </Div>
  );
}

const Div = styled.div`
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    max-width: ${props => props.theme.breakpoint.laptop};
    margin: auto;
    padding: 10px;
`;
