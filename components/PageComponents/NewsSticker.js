import React from 'react'
import styled from 'styled-components';

export default function NewsSticker() {
  return (
    <Span>
        News
    </Span>
  );
}

const Span = styled.span`
    background: ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 60px;
    height: 25px;
    font-size: 14px;
`;
