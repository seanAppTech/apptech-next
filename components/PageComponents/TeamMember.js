import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function TeamMember({ image, name, title, linkedIn }) {
  return (
    <Div>
        <div className='image'>
            <Image 
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <h5>{name}</h5>
        <p>{title}</p>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="linkedin">
            <Image 
                src="/images/linkedinDark.png"
                alt="LinkedIn"
                width={20}
                height={20}
            />
        </a>
    </Div>
  );
}

//styles
const Div = styled.div`
    width: 240px;
    height: 350px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    div.image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
    }

    p {
        color: ${props => props.theme.colors.grey};
        font-weight: 300;
        margin-top: 10px;
    }

    a.linkedin {
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity ${props => props.theme.animationTimings.fast};

        &:hover {
            opacity: 0.7;
        }
    }
`;