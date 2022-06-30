import styled from "styled-components";

export const Container = styled.div`
    width: calc(100vw - 240px);
    height: 100%;
    padding: 10px;
    display: flex;
    gap: 30px;

    overflow-x: scroll;
    overflow-y: scroll;

    /* ::-webkit-scrollbar{
        width: 0;
    } */
`;