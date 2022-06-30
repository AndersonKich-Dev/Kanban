import styled from "styled-components";


export const Container = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 50px;
    border: 2px solid ${props => props.theme.colors.green[100]};


    .title { 
        display: flex;
        position: relative;
        align-items: center;
        padding: 0 20px;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 10px;
            height: 100%;
            background-color: ${props => props.theme.colors.green[100]};
        }

        h1 {
            font-size: 18px;
            font-weight: 500;
            color: ${props => props.theme.colors.green[400]};
        }
    } 

    .search-container {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: flex-end;
        padding: 0 10px;
        color: ${props => props.theme.colors.green[400]};

        svg {
            width: 1.25rem;
        }

        .search {
            width: 550px;
            border-radius: 5px;
            box-shadow: 0px 3px 6px ${props => props.theme.colors.gray[300]};
            display: flex;
            transition: all .2s ease-in-out;

            &:hover {
                background-color: ${props => props.theme.colors.gray[150]};
            }

            &:hover > input {
                &::placeholder {
                    color: ${props => props.theme.colors.gray[500]};
                }
            }

            svg {
                margin: 0 10px;
                cursor: pointer;
            }
            
            input {
                padding: 10px;
                flex: 1;
                outline: none;
                border: none;
                background-color: transparent;
                cursor: pointer;
                
                &::placeholder {
                    font-family: 'Rubik', sans-serif;
                    font-weight: 600;
                    color: ${props => props.theme.colors.gray[400]};
                    transition: color .2s ease-in-out;
                }
            }
        }

        .filter {
            display: flex;
            width: 8.125rem; //130px
            height: 2rem; //36px
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 14px;
            background-color: ${props => props.theme.colors.green[100]};
            border-radius: 8px;
            box-shadow: 0px 3px 6px ${props => props.theme.colors.gray[300]};
        }

        .bell-icon {
            position: relative;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            text-align: center;
            transition: all .5s ease-in-out;
            cursor: pointer;

            .count {
                position: absolute;
                top: 50%;
                left: 50%;
                z-index: 5;
                width: 0.875rem;
                height: 0.875rem;
                border-radius: 50%;
                background-color: ${props => props.theme.colors.red[500]};
                color: ${props => props.theme.colors.gray[100]};
                font-size: 10px;
            }

            svg {
                width: 1.7rem ;
            }

            &:hover {
                background-color: ${props => props.theme.colors.green[100]};
            }
        }
    }
`;

