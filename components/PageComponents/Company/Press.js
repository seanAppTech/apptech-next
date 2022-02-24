import { useState, useEffect } from "react";
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import PressItem from "./PressItem";
import { ArrowLeft, ArrowRight } from "../../UI/Arrows";

export default function Press({items}) {
  // const [ showSlides, setShowSlides ] = useState(1);

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     if (window.innerWidth < 500) {
  //       setShowSlides(1);
  //     } else if (window.innerWidth > 500 && window.innerWidth < 700 ) {
  //       setShowSlides(2);
  //     } else if (window.innerWidth > 700) {
  //       setShowSlides(3);
  //     }
  //   })
  // }, []);
    const pressItems = items.map(item => (
          <PressItem item={item} key={item.id} />
    ));

  return (
    <Div>
      <AliceCarousel
        className="carousel"
        mouseTracking
        items={pressItems}
        autoPlay
        autoPlayInterval={2000}
        animationDuration={1000}
        infinite
        disableDotsControls
        renderPrevButton={ArrowLeft}
        renderNextButton={ArrowRight}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1024: {
            items: 3
          }
        }}
      />
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  max-width: ${props => props.theme.breakpoint.laptop};
  margin: auto;
`;
