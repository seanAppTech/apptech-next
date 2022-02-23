import styled from 'styled-components';

export default function PressItem({ item }) {
  return (
    <Div>
        <a href={item.link} rel="noopener noreferrer nofollow" target="_blank" className="pressTitle">{item.title}</a>
        <p>{`${item.date} - ${item.source}`}</p>
    </Div>
  )
}

const Div = styled.div`

`;