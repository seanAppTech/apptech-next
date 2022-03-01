import React from 'react';
import styled from 'styled-components';

export default function ContentGrid(props) {
  return (
    <Div className={`${props.className} innerContent`} >
        {props.children}
    </Div>
  );
}

const Div = styled.div`
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    max-width: ${props => props.theme.breakpoint.laptop};
    justify-content: center;
    margin: auto;
    padding: 10px;

    @media (max-width: 760px) {
      .gridItemReverse1 {
        order: 1;
      }

      .gridItemReverse2 {
        order: 0;
      }
    }
    
`;

// const Div = styled.div`
//     display: flex;
//     flex-wrap: ${props => props.reverse ? 'wrap-reverse' : 'wrap'};
//     justify-content: center;
//     align-items: center;
//     gap: 0.8rem;
//     max-width: ${props => props.theme.breakpoint.laptop};
//     margin: auto;
//     padding: 10px;
// `;
