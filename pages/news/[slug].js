import next from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import NewsSticker from '../../components/PageComponents/NewsSticker';
import Spinner from '../../components/UI/Spinner';

import { 
  getAllPostsWithSlug, 
  getPost, getPostCursorById, 
  getNextNewsPost,
  getPreviousNewsPost 
} from "../../lib/api";
import dateConversion from '../../lib/date';


export default function Post({ post, previousPost, nextPost, notFound }) {
  const router = useRouter();
  let displayPost;
    //If there's an error, reroute to 404
    if(notFound) {
      useEffect(() => {
        router.push('/404');
      }, []);
    }

    //Render previous button if previousPost
    const previous = previousPost ? <Link href={`/news/${previousPost.slug}`}>{(previousPost.title.substring(0, 35) + '...')}</Link> : null;

    //Render next button if nextPost
    const next = nextPost ? <Link href={`/news/${nextPost.slug}`}>{(nextPost.title.substring(0, 35) + '...')}</Link> : null;

    //display post or loading
    if (!post) {
        displayPost = <Spinner />;
    } else {
      const postDate = new Date(post.date);
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
        <div className='postsNav'>
          <span className='previousLink'>
            {previous}
          </span>
          <span className='nextLink'>
            {next}
          </span>
        </div>
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
  try {
    //Post
    const data = await getPost(params.slug);
    
    //Get Previous and Next posts for navigation
    const postID = data.post.postId;
    const cursorIndex = await getPostCursorById(postID);
    const cursor = cursorIndex.edges[0].cursor;

    const getPreviousPost = await getPreviousNewsPost(cursor);
    let previousPost; 
    getPreviousPost.nodes[0] ? previousPost = getPreviousPost.nodes[0] : previousPost = null;
    

    const getNextPost = await getNextNewsPost(cursor);
    let nextPost;
    getNextPost.nodes[0] ? nextPost = getNextPost.nodes[0] : nextPost = null;
    return {
      props: {
        notFound: false,
        post: data.post,
        previousPost: previousPost,
        nextPost: nextPost
      }
    };
  } catch {
    return { notFound: true }
  }
}

  //styles 
  const Main = styled.main`
    max-width: ${props => props.theme.breakpoint.laptop};
    margin: 0 auto;
    padding: 10px;
    padding-top: 100px;

    h1 {
      font-weight: 400;
      margin: 20px 0;

      @media (max-width: ${props => props.theme.breakpoint.tablet}) {
        font-size: 2rem;
      }
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