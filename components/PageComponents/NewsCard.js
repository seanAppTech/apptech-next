import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard({ img, title, excerpt, date, link }) {
    let newsImage;
    if(img) {
        newsImage = <div className='imgWrapper'>
                        <Image 
                            src={img}
                            alt={title}
                            layout="contain"
                        />
                    </div>
    } else {
        newsImage = null;
    }
    return (
        <Div>
            {newsImage}
            <div className='postInfo'>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{__html: excerpt}} />
                <Link href={link}><a>Read More</a></Link>
            </div>
            <div className='date'>
                <date>{date}</date>
            </div>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 15%);
    border: 0 solid #818a91;
`;
