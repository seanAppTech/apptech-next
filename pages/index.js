import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import HeroImageLg from '../components/UI/HeroImages/HeroImageLg';
import Partners from '../components/PageComponents/Home/Partners';
import ContentGrid from '../components/UI/Grid/ContentGrid';
import ProductsServicesIntro from '../components/PageComponents/Home/ProductsServicesIntro';
import ProductsServicesBullets from '../components/PageComponents/ProductsServicesBullets';
import Testimonial from '../components/PageComponents/Home/Testimonial';


export default function Home({ data }) {
  const { hero, partners, features, productsAndServices, testimonial } = data;
  const [heroImage, setHeroImage] = useState(hero.imageLg);

  //Check window resize to dynamically render the correct version
  //of the hero image.
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 800) {
        setHeroImage(hero.imageSm);
      } else {
        setHeroImage(hero.imageLg);
      }
    });
  }, []);

  //Features section
  //There are 2 different versions of the ContentGrid here for
  //which direction the content flows(image left or right).
  const displayFeatures = features.map(feature => {
    if(feature.id % 2) {
      return (
        <ContentGrid className="blockSpacingLg" key={feature.id}>
        <div className={`${!feature.id % 2 ? '' : 'gridItemReverse1'} featureContent`}>
          <h3>{feature.title}</h3>
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
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <Link href="/contact"><a className='btn btnSm'>Learn More</a></Link>
        </div>  
      </ContentGrid>
      );
    }
  });

  //ProductsIntro
  const productsIntro = productsAndServices.map(product => (<ProductsServicesIntro product={product} key={product.id} />));

  return (
    <>
      <Head>
        <title>AppTech Payments Corp. | Home</title>
        <meta name="description" content="Innovative payment technology and digital banking solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <section id="homePageHero">
          <HeroImageLg 
            image={heroImage}
            title={hero.header}
          >
            <div className="innerContent" id="homePageBannerInner">
              <div className='wrapper'>
                <h1>{hero.header}</h1>
                <p>{hero.description}</p>
                <Link href="/contact"><a className='btn btnLg'>Learn More</a></Link>
              </div>
            </div>
          </HeroImageLg>
        </section>

        <section id="partners">
          <Partners className="innerContent" partners={partners} />
        </section>

        <section id="features">
          {displayFeatures}
        </section>

        <section id="products-and-services">
          <h2 className='sectionHeader'>Products & Services</h2>
          <ContentGrid className="blockSpacing">
            {productsIntro}
            
          </ContentGrid>
        </section>
        {
          productsAndServices.map(product => (
            <section id={product.id} key={product.id} className='innerContent productsContent'>
              <h2 className='sectionHeader'>{product.name}</h2>
              <p className='productDescription'>{product.description}</p>
              <ProductsServicesBullets productFeatures={product.features} />
              <div className='productImgWrapper'>
                <Image 
                  src={product.image}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <Link href={`/${product.id}`}><a className='btn btnDark btnLarge productButton'>Learn More</a></Link>
            </section>
          ))
        }

        <section id="testimonial" className='innerContent'>
          <h2 className='sectionHeader'>Testimonial</h2>
          <Testimonial testimonial={testimonial} />
        </section>
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const data = await import('./api/pages/home.json');
  

  return {
      props: {
          data: data.default
      }
  }
}

const Main = styled.main`
  #homePageHero {
    margin-bottom: 0;
  }

  #homePageBannerInner {
    color: #fff;
    height: 100%;

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
          font-size: 40px;
        }
      }
  
      p {
        margin-bottom: 20px;
      }
    }
  }

  #partners {
    width: 100%;
    min-height: 200px;
    background: ${props => props.theme.colors.lightGrey};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
  }

  .productDescription {
    max-width: ${props => props.theme.breakpoint.laptop};
    margin: auto;
    text-align: center;
    margin-bottom: 25px;
    color: ${props => props.theme.colors.grey};
  }

  .productImgWrapper {
    width: 100%;
    max-width: ${props => props.theme.breakpoint.laptop};
    min-height: 300px;
    max-height: 700px;
    margin: auto;
    position: relative;
  }

  .productButton {
    margin: 50px auto 100px;
  }

  #testimonial {
    margin-bottom: 100px;
  }

  .featureContent {
    h3 {
      margin-bottom: 40px;
    }

    p {
      color: ${props => props.theme.colors.grey};
      font-weight: 300;
      margin-bottom: 40px;
    }
  }

`;