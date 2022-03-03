import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import HeroImageLg from '../components/UI/HeroImages/HeroImageLg';
import LinkButton from '../components/UI/Buttons/LinkButton';
import ContentGrid from '../components/UI/Grid/ContentGrid';
import ProductsServicesBullets from '../components/PageComponents/ProductsServicesBullets';
import GetStarted from '../components/PageComponents/GetStarted';

export default function DigitalBanking({ data }) {
    const {
        name,
        image,
        description,
        bulletsHeader,
        features,
        bullets
    } = data;

    //Features section
  //There are 2 different versions of the ContentGrid here for
  //which direction the content flows(image left or right).
  const displayFeatures = features.map(feature => {
    if(feature.id % 2) {
      return (
        <ContentGrid className="blockSpacingLg" key={feature.id}>
        <div className={`${!feature.id % 2 ? '' : 'gridItemReverse1'} featureContent`}>
          <h3>{feature.header}</h3>
          <h4>{feature.subheader}</h4>
          <p>{feature.description}</p>
          <Link href="/contact"><a className='btn btnSm'>Learn More</a></Link>
        </div>    
        <Image
          src={feature.image}
          height={366}
          width={550}
          layout="responsive"
          className={`${!feature.id % 2 ? '' : 'gridItemReverse2'} featureContent`}
        />
      </ContentGrid>
      );
    } else {
      return (
        <ContentGrid className="blockSpacingLg" key={feature.id}>  
        <Image
          src={feature.image}
          height={366}
          width={550}
          layout="responsive"
          className={`${!feature.id % 2 ? '' : 'gridItemReverse2'} featureContent`}
        />
        <div className={`${!feature.id % 2 ? '' : 'gridItemReverse1'} featureContent`}>
            <h3>{feature.header}</h3>
          <h4>{feature.subheader}</h4>
          <p>{feature.description}</p>
          <Link href="/contact"><a className='btn btnSm'>Learn More</a></Link>
        </div>  
      </ContentGrid>
      );
    }
  });

    return (
        <>
            <Head>
                <title>AppTech Payments Corp. | Digital Banking</title>
                <meta name="description" content="Innovative payment technology and digital banking solutions." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <Main>
                <section id="digitalBankingHero">
                <HeroImageLg 
                    image={image}
                    title={name}
                >
                    <div className="innerBanner">
                    <div className='bannerWrapper'>
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <div className='getStartedButtons'>
                            <LinkButton large={true} dark={true} text="Get Started" />
                            <LinkButton large={true} dark={false} text="Connect to Sales" />
                        </div>
                        
                    </div>
                    </div>
                </HeroImageLg>
                </section>

                <section id="digitalBankingBullets">
                    <h2>{bulletsHeader}</h2>
                    <ProductsServicesBullets productFeatures={bullets} />
                </section>

                <section id="digitalBankingFeatures">
                    {displayFeatures}
                </section>

                <GetStarted>We can't wait to get you started. Let's talk.</GetStarted>
            </Main>
        </>
    );
}

export async function getStaticProps() {
    const data = await import('./api/pages/digital-banking.json');
    
  
    return {
        props: {
            data: data.default
        }
    }
  }


  const Main = styled.main`
  .innerBanner {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  .bannerWrapper {
      width: 100%;
      max-width: 800px;
      text-align: center;
      color: #fff;
      
      h1 {
          margin-bottom: 20px;
      }

      p {
          font-weight: 300;
          margin-bottom: 50px;
      }
  }

  h2 {
      text-align: center;
      font-size: 1.8rem;
      margin-bottom: 30px;
  }

  .featureContent {
    h3 {
      margin-bottom: 10px;
    }

    h4 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 30px;
    }

    p {
      color: ${props => props.theme.colors.grey};
      font-weight: 300;
      margin-bottom: 40px;
    }
  }
`;