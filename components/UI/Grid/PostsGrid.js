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
    gap: 1rem;

    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;
`;
