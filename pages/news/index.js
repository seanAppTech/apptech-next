import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

// import {getPosts} from "../../lib/api";


export default function News() {
  return (
    <div>
      <Head>
        <title>AppTech Payments Corp. | News</title>
        <meta name="description" content="The latest news on AppTech Payments Corp." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
      </main>
    </div>
  )
}

// export async function getStaticProps() {
//     const res = await getPosts();
//     const posts = await res.json();
  
//     return {
//       props: {
//         posts,
//       },
//       revalidate: 10, // In seconds
//     }
//   }

//   export async function getStaticPaths() {
//     const res = await getPosts();
//     const posts = await res.json();
  
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//       params: { slug: post.slug },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: blocking } will server-render pages
//     // on-demand if the path doesn't exist.
//     return { paths, fallback: 'blocking' }
//   }