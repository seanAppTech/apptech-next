import Head from 'next/head';
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
        <button className='btn'>Button</button>
        <button className='btn btnLarge'>Button Large</button>
        <a className='btn'>Link</a>
        <a className='btn btnLarge'>Link Large</a>
        <button className='btn btnDark'>Button Dark</button>
        <button className='btn btnLarge btnDark'>Button Large Dark</button>
        <a className='btn btnDark'>Link Dark</a>
        <a className='btn btnLarge btnDark'>Link Large Dark</a>
      </main>
    </div>
  )
}