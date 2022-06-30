import styled from "styled-components";

export const Container = styled.div`
    flex-shrink: 0;
    width: 334px;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0px 8px 8px ${props => props.theme.colors.gray[300]};
    background-color: ${props => props.theme.colors.gray[250]};
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.green[100]};
    border-radius: 8px 0px 8px 0px;
    align-items: center;
    padding: 10px;

    h2 {
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme.colors.gray[100]};
    }
`;

export const ListCard = styled.ul`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    height: calc(100% - 50px);
    gap: 10px;
    overflow-y: scroll;
    overflow-x: unset;
    padding: 20px 5px 0px 5px;  

    ::-webkit-scrollbar{
        width: 0;
    }
`;