import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';


export default function Home() {
  return (
    <div>
      <Head>
        <title>AppTech Payments Corp. | Home</title>
        <meta name="description" content="Innovative payment technology and digital banking solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/demo">Demo</Link>
      </main>
    </div>
  )
}