import Image from 'next/image';
import styled from 'styled-components';
import ContactItem from './ContactItem';

export default function ContactInfo({items}) {
    const contactItems = items.map(item => (
      <ContactItem item={item} key={item.id} />
    ))
    
  return (
    <Div>
      {contactItems}
    </Div>
  )
}

const Div = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-content: center;
  width: 100%;
  max-width: ${props => props.theme.breakpoint.laptop};
  margin: 50px auto 100px;
  padding: 10px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
  }
`;
