import styled from "styled-components";
import Image from "next/image";

export default function TransferAgent({ agent }) {
    const {
        image,
        name,
        address,
        contact
    } = agent;

    return (
        <Div>
            <div className="irImgWrapper">
                <Image 
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <div id="transferAgentWrapper">
                <div id="transferInfo">
                    <h2>Transfer Agent</h2>
                    <h3>{name}</h3>
                    <p>{address}</p>
                    <div className="transferAgentLinks">
                        <a href={contact.phoneLink} rel="noopener noreferrer" target="blank">{contact.phone}</a>
                        <a href={contact.website} rel="noopener noreferrer" target="blank">{contact.website}</a>
                        <a href={contact.emailLink} rel="noopener noreferrer" target="blank">{contact.email}</a>
                    </div>
                </div>
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

    #transferInfo {
        width: 100%;
        width: 400px;
        h2 {
            font-size: 2.1rem;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }

        h3 {
            font-size: 1.3rem;
            font-weight: 400;
            margin-bottom: 10px;
        }

        p {
            max-width: 200px;
            color: ${props => props.theme.colors.grey};
            font-weight: 300;
            margin-bottom: 10px;
        }

        .transferAgentLinks {
            a {
                display: block;
            }
        }
    }
`;