import styled from "styled-components";

export const StyledFooter = styled.footer`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    &{
        height: 454px;
        background-color: #1F1F1F;
        font-family: "Inter", sans-serif;
        padding-top: 72px;

        & #main-container{
            margin: auto;
            width: 1240px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        & #left-container, #right-container{
            display: flex;
            justify-content: space-between;
            gap: 168px;
            color: white;
            & a, p, h3{
                color: white;
                text-decoration: none;
            }
            & .info-component{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 28px;
                & h3{
                    font-size: 18px;
                    font-weight: 600;
                }
                & ul{
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 19px;
                }
            }
            & #left-side{
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 102px;
            }
            & #right-side{
                width: 233px;
                padding-right: 11px;
            }
        }

        & #left-container{
            max-width: 307px;
            display: flex;
            flex-direction: column;
            gap: 35px;
            & p{
                margin-bottom: 5px;
            }
            & ul{
                list-style: none;
            }
        }

        & #right-container{
            max-width: 734px;
        }
        
        & p{
            color: white;
            width: 307px;
            height: 78px;
            line-height: 26px;
            font-weight: 400;
        }

        & #social{
            display: flex;
            gap: 35px;
        }

        & hr{
            opacity: 30%;
            width: 1240px;
            margin: 34px auto 0 auto;
        }

        & #license{
            width: 1240px;
            text-align: center;
            padding-top: 23px;
            margin: auto;
            font-size: 13px;
        }
    }

`