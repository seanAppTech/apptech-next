import styled from "styled-components";
import Image from "next/image";

export default function Partners({ className, partners}) {
    const partnerLogos = partners.map(partner => (
        <div className="partnerImgWrap" key={partner.id} >
            <Image
                src={partner.image}
                alt={partner.name}
                layout="fill"
                objectFit="cover"
            />
        </div>
    ))
  return (
    <Div className={className}>
        {partnerLogos}
    </Div>
  )
}

const Div = styled.div`
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: ${props => props.theme.breakpoint.laptop};
    justify-content: center;
    margin: auto;

    .partnerImgWrap {
        position: relative;
        max-width: 300px;
        height: 100px;
    }
`;
