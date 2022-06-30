import styled from "styled-components";

type PropsTest = {
    color: string
    countColor: string
}

export const Container = styled.div<PropsTest>`
    display: flex;
    height: 30px;
    margin-left: 40px;
    align-items: center;
    
    p {
        line-height: 30px;
        font-weight: 600;
        font-size: 14px;
        color: ${props => props.color};
    }

    span {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        margin-left: 10px;
        line-height: 1.25rem;
        font-size: 12px;
        text-align: center;
        background-color: ${props => props.color};
        color: ${props => props.countColor};
    }

    svg {
        width: 1.375rem;
        color: black;
        flex-shrink: 0;
        margin-right: 5px;
        color: ${props => props.color};
    }

`;