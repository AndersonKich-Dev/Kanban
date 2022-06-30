import styled from "styled-components";

type ContainerProps = {
    isActive: boolean
} 

export const Container = styled.div<ContainerProps>`
    width: 13.75rem; //200px
    position: absolute;
    top: 50px;
    right: 20px;
    z-index: 99;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0px 3px 6px ${props => props.theme.colors.gray[300]};
    display: ${props => props.isActive ? 'block' : 'none'};
    background-color: ${props => props.theme.colors.gray[100]};
    text-align: center;
    color: ${props => props.theme.colors.gray[800]};

    h1 {
        font-weight: 600;
        font-size: 1rem; //16px
        padding: 7px 0;
        text-transform: uppercase;
        border-bottom: 1px solid ${props => props.theme.colors.gray[300]};
    }

    ul {
        display: flex;
        flex-direction: column;

        li {
            font-size: 0.875rem; // 14px
            padding: 5px;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            border-bottom: 1px solid ${props => props.theme.colors.gray[300]};
        }
    }

    button {
        padding: 10px;
        border: none;
        background-color: transparent;
        color: ${props => props.theme.colors.gray[800]};
        font-weight: bold;
    }
`;