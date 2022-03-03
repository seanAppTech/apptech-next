import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import {useRouter} from 'next/router';

import PostsGrid from '../../components/UI/Grid/PostsGrid';
import NewsCard from '../../components/PageComponents/NewsCard';

import { getAllNewsPosts } from "../../lib/api";


export default function News({ posts }) {

  let displayPosts;
  let nextPage;

  if (!posts) {
    displayPosts = <div className='error'>There was an error loading posts.</div>;
 } else {
    nextPage = <Link href="news/page/2">Next</Link>;
    displayPosts = posts.map(post => {
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
    <>
      <Head>
        <title>AppTech Payments Corp. | News</title>
        <meta name="description" content="The latest news on AppTech Payments Corp." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>News</h1>
        <PostsGrid>
          {displayPosts}
        </PostsGrid>
        <div className='postsNav'>
          <span className='nextLink'>
            {nextPage}
          </span>
        </div>
      </Main>
    </>
  )
}

export async function getStaticProps() {
    const res = await getAllNewsPosts();
    let posts;
    if(res) {
      posts = await res.edges;
    } else {
      posts = null;
    }
  
    return {
      props: {
        posts
      },
      revalidate: 10, // In seconds
    }
  }

  //styles 
  const Main = styled.main`
    max-width: ${props => props.theme.breakpoint.laptop};
    padding: 10px;
    margin: auto;

    h1 {
      font-weight: 500;
      margin: 50px 0;
    }

    .error {
      font-size: 20px;
    }
  `;