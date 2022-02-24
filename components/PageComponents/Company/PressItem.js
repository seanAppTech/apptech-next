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
    margin: 10px;
    padding: 30px 25px 0;
    height: 225px;
    background: #fff;

    p {
      margin-top: 10px;
      color: ${props => props.theme.colors.grey};
      opacity: 0.8;
    }
`;