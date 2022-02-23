import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import HeroImageSm from '../components/UI/HeroImages/HeroImageSm';
import ContactInfo from '../components/PageComponents/Contact/ContactInfo';
import ContactForm from '../components/PageComponents/Contact/ContactForm';
import Map from '../components/PageComponents/Contact/Map';


export default function Contact({ contactInformation, banner }) {
  return (
    <>
      <Head>
        <title>AppTech Payments Corp. | Contact</title>
        <meta name="description" content="Contact us for any inquiries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroImageSm 
          image={banner}
          title="Contact Banner" 
        />
        <h1 className="srOnly">Contact</h1>
        <ContactInfo items={contactInformation} />
        <ContactForm />
        <Map />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const data = await import('./api/pages/contact.json');
  return {
      props: {
          contactInformation: data.contactInformation,
          banner: data.banner
      }
  }
}