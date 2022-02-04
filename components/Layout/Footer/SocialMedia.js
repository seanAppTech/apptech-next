import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function SocialMedia() {
  return (
      <Div>
          <a>
            <Image 
              src="/images/facebook-logo.png"
              alt="Facebook"
              className='socialIcon'
              width={25}
              height={25}
            />
          </a>
          <a>
            <Image 
              src="/images/twitter-logo.png"
              alt="Twitter"
              className='socialIcon'
              width={25}
              height={25}
            />
          </a>
          <a>
            <Image 
              src="/images/linkedin-logo.png"
              alt="LinkedIn"
              className='socialIcon'
              width={25}
              height={25}
            />
          </a>
      </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 125px;
  margin: 25px 10px;

  .socialIcon {
    opacity: 1;
    transition: opacity ${props => props.theme.animationTimings.fast};
  }

  .socialIcon:hover {
    opacity: 0.8;
  }
`;