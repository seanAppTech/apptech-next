import React from 'react';
import styled from 'styled-components';

export default function TeamGrid({ children }) {
  return (
    <Div className='innerContent'>
        {children}
    </Div>
  );
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 100px;
    justify-content: center;
    align-content: flex-start;
`;
