import Image from 'next/image';
import styled from 'styled-components';

export default function ContactItem({item}) {
  const border = item.id === 2 ? 'border' : '';
  return (
    <Div>
      <div className={`wrapper ${border}`}>
        <div className='imageWrapper'>
            <Image src={item.icon} layout='fill' objectFit='contain' />
        </div>
        <p>{item.linkName}</p>
        <a href={item.link} target="_blank">{item.linkText}</a>
      </div>
    </Div>
  )
}

const Div = styled.div`
    .wrapper {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 50px;
      

      @media screen and (max-width: 1200px) {
        padding: 25px 0;
      }
    }

    .border {
      border-left: 1px solid rgba(153, 153, 153, 0.2);
      border-right: 1px solid rgba(153, 153, 153, 0.2);

      @media screen and (max-width: 1200px) {
        border-top: 1px solid rgba(153, 153, 153, 0.2);
        border-bottom: 1px solid rgba(153, 153, 153, 0.2);
        border-left: none;
        border-right: none;
      }
    }

    .imageWrapper {
        position: relative;
        height: 60px;
        width: 100px;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
    p {
       margin-bottom: 10px;
    }
`;
