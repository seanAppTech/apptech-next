import styled from "styled-components";

export default function CorporateDocuments({ docs }) {
  return (
    <Div>
        {
            docs.map(doc => (
                <a 
                    className="corporateDocsButton"
                    key={doc.id}
                    href={doc.link}
                    rel="noopener noreferrer" 
                    target="blank"
                >
                    {doc.name}
                </a>
            ))
        }
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .corporateDocsButton {
        background: ${props => props.theme.colors.primary};
        color: #fff;
        width: 200px;
        height: 35px;
        border-radius: 3px 3px;
        border: 1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        transition: all 0.2s ease;

        &:hover {
            background: #fff;
            color: ${props => props.theme.colors.primary};
            border: 1px solid ${props => props.theme.colors.primary};
        }
    }
`;