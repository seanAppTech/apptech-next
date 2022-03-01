import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import dateConversion from '../../lib/date';
import NewsSticker from './NewsSticker';

export default function NewsCard({ img, title, excerpt, date, link }) {
    let newsImage;
    
    //date formatting
    let postDate = new Date(date);

    if(img) {
        newsImage = <div className='imgWrapper'>
                        <Image 
                            src={img}
                            alt={title}
                            layout="fill"
                            objectFit='cover'
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
                <date>{dateConversion(postDate)}</date>
            </div>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 15%);
    border: 0 solid #818a91;
    border-radius: 3px;
    overflow: hidden;
    padding-bottom: 35px;
    position: relative;
    color: ${props => props.theme.colors.dark};

    .imgWrapper {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 250px;
        
    }
    
    .postInfo, .date {
        padding: 30px;
    }

    .postInfo {
        margin-bottom: 20px;
    }

    h3 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 30px;
    }

    p {
        font-size: 14px;
        margin-bottom: 30px;
    }

    .date {
        border-top: 1px solid ${props => props.theme.colors.grey};
        width: 100%;
        height: 35px;
        position: absolute;
        bottom: 0;
        opacity: 0.7;
        display: flex;
        align-items: center;

        date {
            font-size: 12px;
            color: ${props => props.theme.colors.grey};
        }
    }
`;
