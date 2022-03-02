import Image from "next/image";
import styled from "styled-components";

export default function Testimonial({ testimonial }) {
  return (
    <Div>
        <blockquote>{testimonial.quote}</blockquote>
        <div id="blockquoteImg">
            <Image 
                src={testimonial.image}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <figcaption>
            <h5>{testimonial.name}</h5>
            <p>{testimonial.career}</p>
        </figcaption>
    </Div>
  )
}

const Div = styled.div`
    text-align: center;
    max-width: 900px;
    margin: auto;

    blockquote {
        display: block;
        font-size: 1.9rem;
        font-weight: 300;
    }

    #blockquoteImg {
        height: 90px;
        width: 90px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        margin: 30px auto 15px;
    }

    figcaption {
        h5 {
            font-size: 1rem;
            font-weight: 700;
        }

        p {
            font-size: 0.9rem;
        }
    }
`;