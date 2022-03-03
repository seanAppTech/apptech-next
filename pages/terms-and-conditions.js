import next from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { getTermsAndConditions } from '../lib/api';

export default function TermsAndConditions({ termsAndConditions }) {
    return (
        <>
            <Head>
                <title>AppTech Payments Corp. | Terms And Conditions</title>
                <meta name="description" content="The latest news on AppTech Payments Corp." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <section id="terms-and-conditions" className='innerContent'>
                    <div
                        dangerouslySetInnerHTML={{ __html: termsAndConditions }}
                    />
                </section>
            </Main>
        </>
    );
}

export async function getStaticProps() {
    const data = await getTermsAndConditions();
    const termsAndConditions = data.pages.edges[0].node.content;
    
    return {
        props: {
          termsAndConditions
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

    ol li {
        margin-bottom: 15px;
    }
`;