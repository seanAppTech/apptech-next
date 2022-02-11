import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import NewsSticker from '../../components/PageComponents/NewsSticker';

import { getAllPostsWithSlug, getPost } from "../../lib/api";
import dateConversion from '../../lib/date';


export default function Post({ post }) {

  let displayPost;
  let postDate = new Date(post.date);

    if (!post) {
        displayPost = <div className='error'>There was an error loading this post.</div>;
    } else {
        displayPost = (
          <>
            <NewsSticker />
            <h1>{post.title}</h1>
            <p className='date'>{dateConversion(postDate)}</p>
            <article className='post'>
              <div
                className='post-content content'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </>
        );
    }

  return (
    <div>
      <Head>
        <title>AppTech Payments Corp. | News</title>
        <meta name="description" content="The latest news on AppTech Payments Corp." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {displayPost}
        
      </Main>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await getAllPostsWithSlug();
  const data = await res;
  let posts;
  if(data) {
    posts = data.edges;
  } else {
    posts = null;
  }

  return {
    paths: posts.map((post) => `/news/${post.node.slug}`) || [],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug);

  return {
    props: {
      post: data.post
    }
  };
}

  //styles 
  const Main = styled.main`
    max-width: ${props => props.theme.breakpoint.laptop};
    margin: 0 auto;
    padding-top: 100px;

    h1 {
      font-weight: 400;
      margin: 20px 0;
    }

    .date {
      margin-bottom: 75px;
      opacity: 0.8;
      font-weight: 300;
    }

    .error {
      font-size: 20px;
    }

    p {
      margin: 0 auto 25px;
    }
  `;