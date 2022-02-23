import styled from "styled-components";
import PressItem from "./PressItem";

export default function Press({items}) {
    const pressItems = items.map(item => (
        <PressItem item={item} key={item.id} />
    ));

  return (
    <Div>
        {pressItems}
    </Div>
  )
}

const Div = styled.div`

`;
