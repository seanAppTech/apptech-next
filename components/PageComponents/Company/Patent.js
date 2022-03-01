import React from 'react';
import styled from 'styled-components';

export default function Patent(props) {
    const { patent } = props;
    const patentLinks = patent.patentLinks.map(patentLink => (
        <p><a href={patentLink.link} target='blank' rel='noopener nofollow'>View Patent {patentLink.number}</a> | <a href={patentLink.assignment} target='blank' rel='noopener nofollow'>View Assignment for Patent {patentLink.number}</a></p>
    ));
  return (
    <Div className={props.className}>
        <h3>{patent.title}</h3>
        <div className='patentLinks'>
            {patentLinks}
        </div>
        <p>{patent.description}</p>
    </Div>
  )
}

const Div = styled.div`
    margin-bottom: 15px;

    h3 {
        font-size: 1.6rem;
        font-weight: 600;
        padding-bottom: 15px;
    }

    .patentLinks {
        padding-bottom: 15px;
    }

    p {
        color: ${props => props.theme.colors.grey};
        font-weight: 300;
    }
`;
