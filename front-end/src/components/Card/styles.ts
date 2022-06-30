import styled, { css } from "styled-components";

export const Container = styled.li`
    flex-shrink: 0;
    width: 100%;
    height: 260px;
    box-shadow: 0px 3px 6px ${props => props.theme.colors.gray[300]};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.gray[100]};

    .title {
        font-size: 0.625rem;//10px
        color: ${props => props.theme.colors.gray[500]};
    }

    .svg {
        width: 1.125rem; //18px
        display: inline-block;
        margin-right: 5px;
        color: ${props => props.theme.colors.gray[800]};
    }
`;

export const Content = styled.div`
    padding: 10px 10px 0 10px;

    .wrapper-box {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        
        &.flex-column {
            flex-wrap: wrap;
        }
    }

    h3 {
        font-size: 0.875rem; // 14px
        font-weight: 600;
        text-transform: uppercase;
        color: ${props => props.theme.colors.gray[800]};
    }
    
    .name{
        border: 1px solid ${props => props.theme.colors.gray[500]};
        padding: 3px;
        font-weight: bold;
        font-size: 0.75rem; //12px
        border-radius: 3px;
        color: ${props => props.theme.colors.gray[500]};
    }

    .description {
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.75rem;
        color: ${props => props.theme.colors.gray[700]};

        &:hover + .bublle{
            display: block;
            top: 30px;
            right: 0;
            width: 80%;
            text-align: center;
            white-space: normal;
        }
    }

    .code{
        font-size: 12px;
        font-weight: 600;
        color: ${props => props.theme.colors.gray[800]};
    }

    .date-box {
        display: flex;
        flex-direction: column;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${props => props.theme.colors.gray[800]};

            p {
                font-size: 14px;
            }          
        }
    }
`;

type StatusProps= {
    status: string
}

export const ContentTimer = styled.div<StatusProps>`
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    .w-flex-50 {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 0 10px;
    }

    .title-box-top {
        position: relative;
        flex-shrink: 0;
        width: 100%;
        height: 30px;
        padding-left: 10px;
        
        .title-timer{
            position: absolute;
            height: 100%;
            top: 50%;
            left: 20px;
            transform:  translate(0, -50%);
            z-index: 1;
            display: block;
            padding: 0 3px;
            background-color: white;
            
            p{
                color: ${props => props.theme.colors.gray[700]};
                font-size: 12px;
                font-weight: 400;
                line-height: 30px;
            }
        }
        
        .line{
            position: absolute;
            display: block;
            top: 50%;
            left: 50%;
            transform:  translate(-50%, -50%);
            width: 100%;
            height: 2px;
            background-color: ${props => props.theme.colors.gray[300]};
            z-index: 0;
        }
    }

    .timer-box {
        display: flex;
        flex-direction: column;

        .title {
            margin-left: 24px;
        }

        .timer-icon-box{
            display: flex;
            align-items: center;
            justify-content: flex-start;

            span {
                font-size: 12px;
                color: ${props => props.theme.colors.gray[800]};
                padding: 2px 4px;
            }

            .saldo {
                font-weight: bold;

                border: 1px solid ${ p => 
                    (p.status === 'A' && p.theme.colors.green[300]) || 
                    (p.status === 'B' && p.theme.colors.yellow[500]) || 
                    (p.status === 'C' && p.theme.colors.red[500])
                };

                color: ${ p => 
                    (p.status === 'A' && p.theme.colors.green[300]) || 
                    (p.status === 'B' && p.theme.colors.gray[800]) || 
                    (p.status === 'C' && p.theme.colors.red[500])
                };;

                background-color: ${ p => 
                    (p.status === 'A' && p.theme.colors.gray[100]) || 
                    (p.status === 'B' && p.theme.colors.yellow[500]) || 
                    (p.status === 'C' && p.theme.colors.gray[100])
                };
            }
        }
    }

    .team-box {
        align-items: flex-end;

        button {
            flex-shrink: 0;
            border: 0;
            outline: none;
            padding: 5px 14px;
            border-radius: 3px;
            color: ${props => props.theme.colors.gray[100]};
            font-weight: bold;
            font-size: 12px;

           color: ${ p => 
                (p.status === 'A' && '#fff') || 
                (p.status === 'B' && p.theme.colors.gray[800]) || 
                (p.status === 'C' && '#fff')
            };

            background-color: ${ p => 
                (p.status === 'A' && p.theme.colors.green[300]) || 
                (p.status === 'B' && p.theme.colors.yellow[500]) || 
                (p.status === 'C' && p.theme.colors.red[500])
            };
        }

        ul {
            display: flex;
            gap: 5px;

            li {
                position: relative;

                &:hover > .bublle{
                    display: block;
                }

                .bublle {                   
                    top: -40px;
                    right: 50%;
                }

                .name {
                    display: block;
                    width: 1.25rem;
                    height: 1.25rem;
                    background-color: blueviolet;
                    border-radius: 50%;
                    font-size: 10px;
                    text-align: center;
                    line-height: 1.25rem;
                    background-color: ${props => props.theme.colors.gray[500]};
                    color: ${props => props.theme.colors.gray[100]};
                    
                }
            }
        }
    }
`;