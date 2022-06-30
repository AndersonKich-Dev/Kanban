import styled, {css} from "styled-components";

export const Container = styled.div`
    width: 60px;
    height: 100%;
    background-color: ${props => props.theme.colors.green[100]};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Logo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    img{
        max-width: 100%;
    }
`;

export const Hamburger = styled.div`
    width: 2rem;
    margin: 10px auto;
    cursor: pointer;
    text-align: center;

    svg {
        width: 1.5rem;
        color: ${props => props.theme.colors.green[400]};
    }

`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const MenuItem = styled.li`
    position: relative;
    flex-shrink: 0;
    width: 100%;
    text-align: center;
    cursor: pointer;

    svg {
        width: 1.5rem;
        transition: color .2s ease-in-out;
        color: ${props => props.theme.colors.green[400]};
        margin: 0;
        line-height: 30px;
    }

    &.active {
        &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 5px;
                height: 100%;
                background-color: ${props => props.theme.colors.gray[900]};
            }
            
            svg {
            color: ${props => props.theme.colors.gray[900]};
        }

        &:hover > .bublle{
            opacity: 0; 
            display: none;
        }

        &:hover > svg {
            color: ${props => props.theme.colors.gray[900]};
        }
    }

    .bublle{
        top: 30%;
        left: 80%;       
    }

    &:hover > .bublle{
        display: block;
    }

    &:hover > svg {
        color: ${props => props.theme.colors.gray[100]};
    }

`;

export const CreateCard = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    padding: 5px 0;
    
    .icon-create {
        display: inline-block;
        width: 1.375rem;
        height: 1.375rem;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.pink[500]};
        
        svg {
            width: 1.375rem;
            color: white;
        }
    }

    &:hover {
        z-index: 1;

        &::before {
            content: 'CRIAR CARD';
            position: absolute;
            top: 50%;
            left: 10%;
            transform: translate(0, -50%);
            background-color: ${props => props.theme.colors.pink[500]};
            border-radius: 8px;
            height: 30px;
            color: ${props => props.theme.colors.gray[100]};
            text-align: end;
            padding: 0 10px 0 40px;
            font-size: 14px;
            line-height: 30px;
            z-index: -1;
            white-space: nowrap;
            font-weight: 700;
            font-family: 'Montserrat', sans-serif;
        }
    }
`;