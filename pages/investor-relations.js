import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import HeroImageSM from '../components/UI/HeroImages/HeroImageSm';
import TransferAgent from '../components/PageComponents/InvestorRelations/TransferAgent';
import ServiceProviders from '../components/PageComponents/InvestorRelations/ServiceProviders';
import TeamGrid from '../components/UI/Grid/TeamGrid';
import TeamMember from '../components/PageComponents/TeamMember';
import CorporateDocuments from '../components/PageComponents/InvestorRelations/CorporateDocuments';


export default function InvestorRelations({ data, tradingViewWidget }) {
    const {
        image,
        name,
        contact,
        transferAgent,
        serviceProviders,
        disclaimer,
        boardOfDirectors,
        corporateDocs
    } = data;

    return (
        <>
            <Head>
                <title>AppTech Payments Corp. | Digital Banking</title>
                <meta name="description" content="Innovative payment technology and digital banking solutions." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <Main>
                <section id="irHeroImage">
                    <HeroImageSM 
                        image={image}
                        title={name}
                    />
                </section>

                <section id="irContact" className='innerContent'>
                    <h1 className='sectionHeader'>{name}</h1>
                    <p>{contact.subheader}</p>
                    <div id='irContactLinks'>
                        <a href={contact.phoneLink}>{contact.phone}</a>
                        <a href={contact.emailLink}>{contact.email}</a>
                    </div>
                </section>

                {/* <section id="tradingViewWidget">
                    <div
                        className='tradingWidget'
                        dangerouslySetInnerHTML={{ __html: tradingViewWidget }}
                    />
                </section> */}

                <section id="transferAgentAndServiceProviders" >
                    <TransferAgent agent={transferAgent} />
                    <ServiceProviders serviceProviders={serviceProviders} />
                </section>

                <section id="irDisclaimer" className='innerContent'>
                    <h2>Disclaimer</h2>
                    <p>{disclaimer.main}</p>
                    <p>For more information please visit <a href={disclaimer.link}>{disclaimer.link}</a> or contact Investor Relations at <a href={contact.emailLink}>{contact.email}</a>.</p>
                </section>
                
                <section id="board-of-directors">
                    <h2 className='sectionHeader'>Board of Directors</h2>
                    <TeamGrid>
                        {
                        boardOfDirectors.map(person => (
                            <TeamMember 
                                image={person.image}
                                name={person.name}
                                title={person.title}
                                linkedIn={person.linkedIn}
                                key={person.id}
                            />
                            ))
                        }
                    </TeamGrid>
                </section>

                <section id="corporateDocs">
                    <h2 className='sectionHeader'>Corporate Documents</h2>
                    <CorporateDocuments docs={corporateDocs} />
                </section>
            </Main>
        </>
    );
}

export async function getStaticProps() {
    const data = await import('./api/pages/investor-relations.json');
  
    return {
        props: {
            data: data.default
        }
    }
  }

const Main = styled.main`
  #irContact {
      padding: 0 15px;

      h1 {
          font-size: 2.2rem;
      }

      p {
          text-align: center;
          color: ${props => props.theme.colors.grey};
          font-weight: 300;
          max-width: 300px;
          margin: 0 auto 20px;
      }

      #irContactLinks {
        max-width: 300px;
        margin: auto;
        text-align: center;

        a {
            display: block;
        }
      }
  }

  #tradingViewWidget {
      max-width: 350px;
      margin: 50px auto;
  }

  #transferAgentAndServiceProviders {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      max-width: 1000px;
      margin: 100px auto 50px;
      justify-content: space-between;
  }

  #irDisclaimer {
      h2 {
          font-weight: 500;
          font-size: 2.2rem;
          margin-bottom: 20px;
      }

      p {
          color: ${props => props.theme.colors.grey};
          font-weight: 300;
          margin-bottom: 15px;
      }
  }
`;