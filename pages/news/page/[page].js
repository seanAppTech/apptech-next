import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import PostsGrid from '../../../components/UI/Grid/PostsGrid';
import NewsCard from '../../../components/PageComponents/NewsCard';

import { getNumberOfPosts, getCursorInfo, getNextNewsPosts } from "../../../lib/api";


export default function News({ posts, numberOfPages }) {
  const router = useRouter();
  const page = parseInt(router.query.page);

  // //If current page is 0 or less, or greater than total number
    // //of News pages, push router to 404 page.
    if (page <= 1 || page > numberOfPages + 1) {
      useEffect(() => {
        router.push('/404');
      }, []);
    }

  let previousPage;
  let nextPage;

  //Pagination checks
  if(posts) {
    //If previous page is 1, go to /news
    if(page - 1 === 1) {
      previousPage = <Link className='previousLink' href='/news'>Previous</Link>;
    }
    //If previous page is greater than 1, link to previous page
    else if (page - 1 > 1) {
      previousPage = <Link className='previousLink' href={`/news/page/${page - 1}`}>Previous</Link>;
    } 
    //If next page is less than total number of pages, link to next page.
    if(page + 1 <= numberOfPages + 1) {
      nextPage = <Link className='nextLink' href={`/news/page/${page + 1}`}>Next</Link>;
    }
  }

  //Check if received posts and render content accordingly.
  let displayPosts;


  if (!posts) {
    displayPosts = <div className='error'>There was an error loading posts.</div>;
 } else {
    displayPosts = posts.edges.map(post => {
      if(post.node.featuredImage) {
        return (
          <NewsCard  
            img={post.node.featuredImage.node.mediaItemUrl}
            title={post.node.title} 
            excerpt={post.node.excerpt} 
            date={post.node.date} 
            link={`../${post.node.slug}`}
            key={post.node.id}
          />
        );
      } else {
        return (
          <NewsCard  
            title={post.node.title} 
            excerpt={post.node.excerpt} 
            date={post.node.date} 
            link={`../${post.node.slug}`}
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
          <span className='previousLink'>
            {previousPage}
          </span>
          <span className='nextLink'>
            {nextPage}
          </span>
        </div>
      </Main>
    </div>
  )
}

export async function getStaticProps(context) {
    const count = await getNumberOfPosts();
    const perPage = 12;
    const numberOfPages = count / perPage;
    const page = parseInt(context.params.page);
    const marker = perPage * (page - 1);
    let allPosts = [];
   
    
      allPosts = await getCursorInfo(marker);
 
    
    const cursor = allPosts.pageInfo.endCursor;

    const res = await getNextNewsPosts(cursor);
    let posts;
    if(res) {
      posts = await res;
    } else {
      posts = null;
    }
  
    return {
      props: {
        posts,
        numberOfPages
      },
      revalidate: 10, // In seconds
    }
  }

  export async function getStaticPaths() {
    const count = await getNumberOfPosts();
    const perPage = 12;
    const numberOfPages = count / perPage;

    const pages = [];

    for(let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }
  
    // Get the paths we want to pre-render based on page
    const paths = pages.map((page) => `/news/page/${page}`) || [];
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
  }

  //styles 
  const Main = styled.main`
    max-width: ${props => props.theme.breakpoint.laptop};
    margin: auto;

    h1 {
      font-weight: 500;
      margin: 50px 0;
    }

    .error {
      font-size: 20px;
    }
  `;