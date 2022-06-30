import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .login {
        width: 500px;
        box-shadow: 0px 2px 12px ${props => props.theme.colors.gray[300]};
        border-radius: 8px;
        padding: 20px;
        text-align: center;

        h1 {
            color: ${props => props.theme.colors.gray[500]};
        }

        .input-box {
            width: 100%;
            text-align: start;
            margin-top: 20px;

            span {
                display: block;
                margin-bottom: 5px;
                font-size: 0.75rem;//12px
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

            .button-box {
                display: flex;
                justify-content: space-between;

                .button  {
                    flex: 1;
                    margin-top: 20px;
    
                    input[type="submit"]{
                        width: 100%;
                        height: 40px;
                        background: ${props => props.theme.colors.green[150]};
                        border-radius: 8px;
                        border: 0;
                        outline: none;
                        cursor: pointer;
                        color: ${props => props.theme.colors.gray[100]};
                        font-weight: bold;
                        font-size: 0.875rem;//14px
                        transition: filter .3s ease-in-out;
        
                        &.exit {
                            background-color: ${props => props.theme.colors.red[600]};
                        }
        
                        &:hover {
                            filter: brightness(80%);
                        }
                    }
                }

                .check {
                    display: flex;
                    width: 50%;
                    padding: 10px;
                    margin-top: 20px;

                    label {
                        cursor: pointer;
                    }

                    span {
                        margin-left: 10px;
                        color: ${props => props.theme.colors.gray[500]};
                        font-size: 0.875rem;
                    }
                }
            }

            .select-link {
                display: flex;
                margin-top: 20px;
                justify-content: flex-start;
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
                color: ${props => props.theme.colors.gray[700]};
                
                &:hover {
                    color: blue;
                }
            }
    }

`;