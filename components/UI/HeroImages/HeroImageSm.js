import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function HeroImageSm({ image, title }) {
  return (
      <Div>
          <Image 
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
          />
      </Div>
  );
}

const Div = styled.div`
    width: 100%;
    position: relative;
    height: 175px;
    overflow: hidden;
`;