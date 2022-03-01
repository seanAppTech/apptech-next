import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import HeroImageLg from '../components/UI/HeroImages/HeroImageLg';
import TeamMember from '../components/PageComponents/TeamMember';
import TeamGrid from '../components/UI/Grid/TeamGrid';
import Press from '../components/PageComponents/Company/Press';
import ContentGrid from '../components/UI/Grid/ContentGrid';
import Patent from '../components/PageComponents/Company/Patent';
import NewsCard from '../components/PageComponents/NewsCard';
import PostsGrid from '../components/UI/Grid/PostsGrid';
import Spinner from '../components/UI/Spinner';

import { getRecentThreePosts } from '../lib/api';


export default function Company({ data, posts }) {
  const { overview, about, team, press, patents } = data;

  let displayRecentNewsPosts = <Spinner />;

  if(posts) {
    displayRecentNewsPosts = posts.map(post => {
      if(post.node.featuredImage) {
        return (
          <NewsCard  
            img={post.node.featuredImage.node.mediaItemUrl}
            title={post.node.title} 
            excerpt={post.node.excerpt} 
            date={post.node.date} 
            link={`news/${post.node.slug}`}
            key={post.node.id}
          />
        );
      } else {
        return (
          <NewsCard  
            title={post.node.title} 
            excerpt={post.node.excerpt} 
            date={post.node.date} 
            link={`news/${post.node.slug}`}
            key={post.node.id}
          />
        );
      }
    }
    )
  }

  return (
    <div>
      <Head>
        <title>AppTech Payments Corp. | Company</title>
        <meta name="description" content="Innovative payment technology and digital banking solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <section id="company-overview">
        <HeroImageLg
          image={overview.image}
          title={overview.title}
          objectPosition="0 0"
        >
          <div className='innerContent quoteWrapper'>
            <div className='wrapper'>
              <h1>{overview.title}</h1>
              <p>{overview.quote.text}</p>
              <div className='signature'>
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
        </section>

        <section id="about">
          <h2>{about.title}</h2>
          <ContentGrid>
            <p>{about.summary}</p>
            <p>{about.developing}</p>
          </ContentGrid>
        </section>

        <section id="intellectual-property">
          <h2>Intellectual Property</h2>
          <ContentGrid className="blockSpacing">
            <Patent patent={patents[0]} className='gridItemReverse1' />
            <Image
              src={patents[0].image}
              height={366}
              width={550}
              layout="responsive"
              className="gridItemReverse2"
            />
          </ContentGrid>
          <ContentGrid className="blockSpacing">
            <Image
              src={patents[1].image}
              height={366}
              width={550}
              layout="responsive"
            />
            <Patent patent={patents[1]} />
          </ContentGrid>
          <ContentGrid className="blockSpacing">
            <Patent patent={patents[2]} className='gridItemReverse1' />
            <Image
              src={patents[2].image}
              height={366}
              width={550}
              layout="responsive"
              className="gridItemReverse2"
            />
          </ContentGrid>
        </section>

        <section id="meet-the-team">
          <h2>Meet The Team</h2>
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
        </section>

        <section id="recent-news">
          <h2>News</h2>
          <PostsGrid>
            {displayRecentNewsPosts}
          </PostsGrid>
        </section>

        <section id="press-section" className='pressSection'>
          <div className='triangleDown' />
          <Press items={press} />
        </section>
      </Main>
    </div>
  )
}

export async function getStaticProps() {
    const data = await import('./api/pages/company.json');
    const res = await getRecentThreePosts();
    let posts;
    if(res) {
      posts = await res.edges;
    } else {
      posts = null;
    }

    return {
        props: {
            data: data.default,
            posts
        }
    }
}

const Main = styled.main`
  h2 {
    text-align: center;
    margin: 50px auto 25px;
  }

  .quoteWrapper {
    height: 100%;
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
  
  .signature {
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
    margin: 0;

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