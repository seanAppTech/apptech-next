import react from "react";
import styled from "styled-components";

export function ArrowLeft() {
    return (
        <Div>
            <i className="arrow left" />
        </Div>
    );
}

export function ArrowRight() {
    return (
        <Div>
            <i className="arrow right" />
        </Div>
    );
}

const Div = styled.div`
    .arrow {
        border: solid ${props => props.theme.colors.hover};
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 10px;
        cursor: pointer;
        &:hover {
            border-color: #fff;
        }
    }

    .right {
        position: absolute;
        top: 50%;
        bottom: 50%;
        right: -50px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
        
    .left {
        position: absolute;
        top: 50%;
        bottom: 50%;
        left: -50px;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }
`;