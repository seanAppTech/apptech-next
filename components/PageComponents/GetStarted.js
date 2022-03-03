import React from 'react';
import styled from 'styled-components';
import LinkButton from '../UI/Buttons/LinkButton';

export default function GetStarted({ children }) {
  return (
      <Div>
          <h4>{children}</h4>
          <div className='getStartedButtons'>
            <LinkButton large={true} dark={true} text="Request Demo" />
            <LinkButton large={true} dark={false} text="Connect to Sales" />
          </div>
      </Div>
  );
}

const Div = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.darkMidnight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 65px;
    margin: 0;

    h4 {
        color: #fff;
        text-align: center;
    }
`;
