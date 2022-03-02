import styled from "styled-components";

export default function ProductsServicesIntro(props) {
    const { id, name, excerpt, backgroundImg } = props.product;
    return (
        <Div background={backgroundImg}>
                <div className="productsIntroWrapper">
                    <div className="productsIntroInner">
                        <h3>{name}</h3>
                        <p>{excerpt}</p>
                        <a href={`#${id}`}>Learn More</a>
                    </div>
                </div>
        </Div>
    );
}

const Div = styled.div`
    background: url(${props => props.background}) no-repeat center;
    background-size: cover;
    min-height: 380px;
    max-height: 420px;
    width: 100%;
    max-width: 600px;
    position: relative; 

    .productsIntroWrapper {
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .productsIntroInner {
        text-align: center;
        color: #fff;
        width: 100%;
        max-width: 350px;
        
        h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        p {
            font-size: 0.9rem;
            margin-bottom: 20px;
        }

        a {
            color: #fff;
        }
        a:hover {
            color: ${props => props.theme.colors.primary}
        }

        @media (min-width: ${props => props.theme.breakpoint.tablet}) {
            p {
                height: 0;
                margin-bottom: 0;
                overflow: hidden;
                transition: all 0.5s ease;
            }

            &:hover {
                p {
                    height: 85px;
                    margin-bottom: 10px;
                }
            }
        }
    }
`;