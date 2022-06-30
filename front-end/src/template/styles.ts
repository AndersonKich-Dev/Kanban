import styled from "styled-components";

export const TemplateContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export const ContentBox = styled.div`
    flex: 1;
    display: flex;

    .tab {
        width: 60px;
        height: 100%;
        background-color: ${props => props.theme.colors.gray[100]};
        box-shadow: 0px 3px 6px ${props => props.theme.colors.gray[300]};
        
        .action-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3px;
            margin-top: 20px;

            svg {
                width: 1.375rem;
                color: ${props => props.theme.colors.green[400]};
            }

            .arrow-icon {
                width: 1.5rem;
                transition: all .3s ease-in-out;
                cursor: pointer;

                &:hover {
                    transform: scale(1.3);
                    color: ${props => props.theme.colors.pink[500]};
                }
            }

            .icon-count {
                display: block;
                width: 1.375rem;
                height: 1.375rem;
                border-radius: 50%;
                border: 1px solid black;
                text-align: center;
                line-height: 1.375rem;
                background-color: ${props => props.theme.colors.green[400]};
                color: ${props => props.theme.colors.gray[100]};
                font-size: 14px;
            }
        }
    }

    .content-center {
        width: calc(100% - 180px);
        height: 100vh;
        background-color: transparent;
        display: flex;
        flex-direction: column;

        .content {
            flex: 1; 
            height: calc(100vh - 50px);          
        }
    }
`;