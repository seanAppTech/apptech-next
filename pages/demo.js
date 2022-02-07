import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import GetStarted from '../components/PageComponents/GetStarted';
import TeamMember from '../components/PageComponents/TeamMember';
import HeroImageSm from '../components/UI/HeroImages/HeroImageSm';
import Grid from '../components/UI/Grid/Grid';


export default function Demo({ data }) {
    const {overview, about, team} = data.data;
    console.log(team);

    for (const person in team) {
        console.log(person.title);
    }

  return (
    <div>
      <Head>
        <title>AppTech Payments Corp. | Demo</title>
        <meta name="description" content="Innovative payment technology and digital banking solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroImageSm 
          image="/images/Patents_Blue.jpg" 
          title="Patents" 
        />
        <div className='innerContent'>
          <button className='btn'>Button</button>
          <button className='btn btnLarge'>Button Large</button>
          <a className='btn'>Link</a>
          <a className='btn btnLarge'>Link Large</a>
          <button className='btn btnDark'>Button Dark</button>
          <button className='btn btnLarge btnDark'>Button Large Dark</button>
          <a className='btn btnDark'>Link Dark</a>
          <a className='btn btnLarge btnDark'>Link Large Dark</a>
          <Grid>
            <TeamMember 
                image={team.luke.image}
                name={team.luke.name}
                title={team.luke.title}
                linkedIn={team.luke.linkedIn}
                key={team.luke.name}
            />
            
          </Grid>
        </div>
        <GetStarted>Ready to get started? Let's chat.</GetStarted>
      </main>
    </div>
  )
}

export async function getStaticProps() {
    const data = await import('./api/pages/company.json');
    

    return {
        props: {
            data: data.default
        }
    }
}