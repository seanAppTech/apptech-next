import Image from "next/image";
import styled from "styled-components";

export default function ProductsServicesBullets({ productFeatures }) {
    //Get length for height calculation to pass into the flex Ul container.
    const flexHeight = (productFeatures.length * 75) / 2;

    const productBullets = productFeatures.map(feature => (
        <li key={feature.id}>
            <div className="productIconWrapper">
                <Image 
                    src={feature.icon}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <p>{feature.name}</p>
        </li>
    ));

    return (
        <Ul maxHeight={flexHeight} className="innerContent">
            {productBullets}
        </Ul>
  );
}

const Ul = styled.ul`
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    height: ${props => props.maxHeight}px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    row-gap: 10px;

    @media (max-width: ${props => props.theme.breakpoint.tablet}) {
        height: auto;
    }

    li {
        min-height: 50px;
        max-width: 500px;
        display: flex;
        align-items: center;
        column-gap: 15px;
    }

    .productIconWrapper {
        position: relative;
        width: 50px;
        height: 40px;
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
    }
`;
