import styled from "styled-components";

type CardProps = {
    display: boolean
}

export const container = styled.div<CardProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: ${props => props.display ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    z-index: 99;
    background-color: rgba(0,0,0,0.8);
`;

export const Modal = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.gray[150]};
    width: 600px;
    border-radius: 8px;
    border: 1px solid black;
    padding: 20px;

    .exit-box {
        float: right;

        svg{
            width: 1.5rem;
            color: black;
        }
    }

    .clear{
        clear: both;
    }

    .form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 10px;

        .create-team-box {
            width: 100%;
            display: flex;
            margin-top: 10px;
            justify-content: space-evenly;

            p {
                font-weight: bold;
                color: ${props => props.theme.colors.gray[500]};
            }

            div {
                cursor: pointer;
                svg{
                    width: 1.5rem;
                }
            }

            
        }

        .select-box {
            width: 100%;

            &.w-50 {
                width: 50%;
                margin-top: 20px;
            }

            select {
                width: 100%;
                height: 40px;
                border-radius: 8px;
                background-color: transparent;
                border: 1px solid ${props => props.theme.colors.gray[400]};
                color: ${props => props.theme.colors.gray[500]};
                padding: 0 10px;

                &:focus, &:hover {
                    outline: none;
                    border: 1px solid ${props => props.theme.colors.green[150]};
                }
            }
        }

        .w-flex-wrapper {
            width: 100%;
            display: flex;
            padding: 10px 0;
            gap: 20px;

            .input-box {
                width: 50%;
                span {
                    display: block;
                    margin-bottom: 5px;
                    font-size: 12px;
                }

                input {
                    width: 100%;
                    height: 40px;
                    border: 0;
                    background-color: transparent;
                    border: 1px solid ${props => props.theme.colors.gray[400]};
                    color: ${props => props.theme.colors.gray[500]};
                    border-radius: 8px;
                    padding: 0 10px;

                    &:focus, &:hover{
                        border: 0;
                        border: 1px solid ${props => props.theme.colors.green[150]};
                        outline: none;
                    }                  
                }
            }
        }

        .button-box {
            flex-shrink: 0;
            width: 100%;
            display: flex;
            gap: 20px;
            margin-top: 10px;

            .button {
                width: 100%;
                height: 40px;
                background: ${props => props.theme.colors.green[150]};
                border-radius: 8px;
                border: 0;
                outline: none;
                cursor: pointer;
                color: ${props => props.theme.colors.gray[100]};
                font-weight: bold;
                font-size: 14px;
                transition: filter .3s ease-in-out;

                &.exit {
                    background-color: ${props => props.theme.colors.red[600]};
                }

                &:hover {
                    filter: brightness(80%);
                }
            }
        }

    }


    ul {
        .icon{
            padding: 5px;
            background-color: red;
            cursor: pointer;
        }

        svg{
            width: 2rem;
        }
    }

    .team-container {
        position: absolute;
        top: 50%;
        left: -200px;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 400px;
        z-index: 99;
        display: flex;       
    }
`;

type TeamProps = {
    select: boolean
}

export const TeamBox = styled.div<TeamProps>`
    position: absolute;
    width: 100%;
    height: 600px;
    top: 50%;
    left: 50%;
    display: ${props => props.select ? 'flex' : 'none'};
    background-color: white;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
    overflow: auto;
    transform: translate(-50%, -50%);
    
    h2{
        color: ${props => props.theme.colors.gray[700]};
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin-top: 20px;
        border-bottom: 1px solid ${props => props.theme.colors.gray[500]};

        span {
            white-space: nowrap;
            width: 80%;
            margin-left: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: ${props => props.theme.colors.gray[700]};
        }

        svg {
            width: 1.5rem;
            cursor: pointer;
        }
    }

        
    .team-button {
        width: 200px;
        padding: 10px 0;
        border-radius: 8px;
        border: none;
        background-color: ${props => props.theme.colors.red[600]};
        color: ${props => props.theme.colors.gray[100]};
        font-weight: bold;
    }
    
`;