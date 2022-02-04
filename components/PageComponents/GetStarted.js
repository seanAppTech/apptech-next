import React from 'react';
import styled from 'styled-components';
import LinkButton from '../UI/Buttons/LinkButton';

export default function GetStarted() {
  return (
      <Div>
          <h4>Ready to get started? Let's chat.</h4>
          <div className='wrapper'>
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

    h4 {
        color: #fff;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 25px 0 0;
    }
`;
