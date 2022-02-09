import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import {useRouter} from 'next/router';

import PostsGrid from '../../components/UI/Grid/PostsGrid';
import NewsCard from '../../components/PageComponents/NewsCard';

import { getAllNewsPosts } from "../../lib/api";


export default function News({ posts, paths }) {

  const router = useRouter();
  

//   if (router.isFallback) {
//     return <div>loading...</div>
//  }

  return (
    <div>
      <Head>
        <title>AppTech Payments Corp. | News</title>
        <meta name="description" content="The latest news on AppTech Payments Corp." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>News</h1>
        <PostsGrid>
          {
            posts.map(post => (
              <NewsCard  
                img={post.node.featuredImage}
                title={post.node.title} 
                excerpt={post.node.excerpt} 
                date={post.node.date} 
                link={"/news/" + posts.slug}
              />
            ))
          }
        </PostsGrid>
      </main>
    </div>
  )
}

export async function getStaticProps() {
    const res = await getAllNewsPosts();
    const posts = await res.edges;
  
    return {
      props: {
        posts
      },
      revalidate: 10, // In seconds
    }
  }

  // export async function getStaticPaths() {
  //   const res = await getAllNewsPosts();
  //   const posts = await res.edges;
  
  //   // Get the paths we want to pre-render based on posts
  //   const paths = posts.map((post) => ({
  //     params: { slug: post.slug },
  //   }))
  
  //   // We'll pre-render only these paths at build time.
  //   // { fallback: blocking } will server-render pages
  //   // on-demand if the path doesn't exist.
  //   return { paths, fallback: 'blocking' }
  // }