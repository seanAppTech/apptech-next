import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import HeroImageLg from '../components/UI/HeroImages/HeroImageLg';
import TeamMember from '../components/PageComponents/TeamMember';
import TeamGrid from '../components/UI/Grid/TeamGrid';
import Press from '../components/PageComponents/Company/Press';


export default function Company({ data }) {
  const { team, press, overview } = data;

  return (
    <div>
      <Head>
        <title>AppTech Payments Corp. | Company</title>
        <meta name="description" content="Innovative payment technology and digital banking solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <HeroImageLg
          image={overview.image}
          title={overview.title}
          objectPosition="0 0"
        >
          <div className='quoteWrapper'>
            <div className='wrapper'>
              <h1>{overview.title}</h1>
              <p>{overview.quote.text}</p>
              <div className='imgWrapper'>
                <Image 
                  src={overview.quote.signature}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className='name'>{overview.quote.name}</span>
              <span className='position'>{overview.quote.position}</span>
            </div>
          </div>
        </HeroImageLg>
        <div className='innerContent'>
          <TeamGrid>
            {
              team.map(person => (
                <TeamMember 
                  image={person.image}
                  name={person.name}
                  title={person.title}
                  linkedIn={person.linkedIn}
                  key={person.id}
              />
              ))
            }
          </TeamGrid>
        </div>
        <div className='pressSection'>
          <div className='triangleDown' />
          <Press items={press} />
        </div>
      </Main>
    </div>
  )
}

export async function getStaticProps() {
    const data = await import('./api/pages/company.json');
    

    return {
        props: {
            data: data.default
        }
    }
}

const Main = styled.main`
  .quoteWrapper {
    width: 100%;
    max-width: ${props => props.theme.breakpoint.laptop};
    height: 100%;
    margin: auto;
    padding: 15px;
  }
  

  .wrapper {
    width: 100%;
    max-width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin-bottom: 20px;
      @media (max-width: ${props => props.theme.breakpoint.tablet}) {
        font-size: 35px;
      }
    }

    p {
      margin-bottom: 20px;
    }
  }
  
  .imgWrapper {
    width: 150px;
    height: 60px;
    position: relative;
    margin-bottom: 10px;
  }

  span.name {
    font-weight: 700;
  }
  span.position {
    color: ${props => props.theme.colors.grey}
  }

  .pressSection {
    position: relative;
    width: 100%;
    height: 425px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.quaternary};

    .triangleDown {
      position: absolute;
      top: 0;
      margin: 0 auto;
      width: 0;
      height: 0;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-top: 40px solid #fff;
    }
  }
`;