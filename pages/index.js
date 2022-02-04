import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import GetStarted from '../components/PageComponents/GetStarted';
import HeroImageSm from '../components/UI/HeroImages/HeroImageSm';


export default function Home() {
  return (
    <div>
      <Head>
        <title>AppTech Payments Corp. | Home</title>
        <meta name="description" content="Innovative payment technology and digital banking solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroImageSm image="/images/Patents_Blue.jpg" title="Patents" />
        <div className='innerContent'>
          <button className='btn'>Button</button>
          <button className='btn btnLarge'>Button Large</button>
          <a className='btn'>Link</a>
          <a className='btn btnLarge'>Link Large</a>
          <button className='btn btnDark'>Button Dark</button>
          <button className='btn btnLarge btnDark'>Button Large Dark</button>
          <a className='btn btnDark'>Link Dark</a>
          <a className='btn btnLarge btnDark'>Link Large Dark</a>
        </div>
        <GetStarted>Ready to get started? Let's chat.</GetStarted>
      </main>
    </div>
  )
}