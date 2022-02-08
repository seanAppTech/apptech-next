import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function HeroImageLg({ image, title, children }) {
  return (
      <Div>
          <Image 
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className='content'>
              {children}
          </div>
      </Div>
  );
}

const Div = styled.div`
    width: 100%;
    position: relative;
    height: 500px;
    overflow: hidden;

    @media screen and (min-width: ${props => props.theme.breakpoint.laptop}) {
        height: 700px;
    }

    div.content {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;