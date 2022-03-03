import styled from "styled-components";
import Image from "next/image";

export default function TransferAgent({ serviceProviders }) {
    const {
        image,
        providers
    } = serviceProviders;

    const displayProviders = providers.map(provider => (
        <div className="providerInfo" key={provider.id}>      
            <h3>{provider.name}</h3>
            <div className="providerLinks">
                <a href={provider.website} rel="noopener noreferrer" target="blank">{provider.website}</a>
            </div>
        </div>
    ));

    return (
        <Div>
            <div className="irImgWrapper">
                <Image 
                    src={image}
                    alt="Service Providers"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div id="providersWrapper">
                <h2>Service Providers</h2>
                {displayProviders}
            </div>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 10px;

    .irImgWrapper {
        width: 60px;
        height: 60px;
        position: relative;
    }

    #providersWrapper {
        width: 100%;
        max-width: 400px;

        h2 {
            font-size: 2.1rem;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }
    }

    .providerInfo {
        margin-bottom: 15px;
        h3 {
            font-size: 1.3rem;
            font-weight: 400;
            margin-bottom: 10px;
        }

        .providerLinks {
            a {
                display: block;
            }
        }
    }
`;