import next from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { getPrivacyPolicy } from '../lib/api';

export default function PrivacyPolicy({ privacyPolicy }) {
    return (
        <>
            <Head>
                <title>AppTech Payments Corp. | Privacy Policy</title>
                <meta name="description" content="The latest news on AppTech Payments Corp." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <section id="privacy-policy" className='innerContent'>
                    <div
                        dangerouslySetInnerHTML={{ __html: privacyPolicy }}
                    />
                </section>
            </Main>
        </>
    );
}

export async function getStaticProps() {
    const data = await getPrivacyPolicy();
    const privacyPolicy = data.pages.edges[0].node.content;

    return {
        props: {
          privacyPolicy
        }
      }
}

const Main = styled.main`
    padding: 100px 10px;

    h2 {
        margin-bottom: 20px;
    }

    hr {
        width: 150px;
        margin: auto;
    }

    h3 {
        font-size: 1.8rem;
        margin-bottom: 20px;
    }

    p {
        color: ${props => props.theme.colors.grey};
        margin: 20px 0;

        strong {
            color: #000;
        }
    }
`;