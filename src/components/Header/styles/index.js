import styled from "styled-components";

export const StyledHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    background-color: white;
    box-shadow: 0px 0.5px 10px #0000001a;
    &{
        width: 100vw;
        min-height: 192px;
        padding: 34px 0 29px 0;
        font-family: "Inter", sans-serif;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & #main-container{
            width: 1240px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        & #logo-container{
            margin-right: 27px;
            display: grid;
            place-items: center;
        }
        & #search-container{
            flex-grow: 1;
            margin-right: 48px;
            & button{
                background-color: transparent;
                border: none;
            }
            & div{
                display: flex;
                align-items: center;
                width: 100%;
            }
        }
        & #redirect-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 70px;
        }
        & #links{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 30px;
        }
        & #minicart{
            display: grid;
            place-items: right;
        }
        & a{
            white-space: nowrap;
            color: #474747;
            &:hover{
                color: #666666;
            }
        }
        & #button{
            border: none;
            display: grid;
            place-content: center;
            text-decoration:  none;
            background-color: #C92071;
            border-radius: 10px;
            color: white;
            font-weight: bold;
            font-family: inherit;
            font-size: 14px;
            width: 114px;
            height: 40px;
        }
        & #search{
            letter-spacing: 0.75px;
            width: 100%;
            text-indent: 24px;
            height: 60px;
            border: none;
            border-radius: 8px;
            background-color: rgba(102, 102, 102, 0.04);
            color: #666666;
            font-weight: 400;
            outline: 2px solid white;
            transition: 200ms;
            &:hover, &:focus{
                outline: 2px solid #C92071;
            }
        }
        & #searchIcon{
            position: absolute;
            top: 18px;
            right: 18px;
            cursor: pointer;
        }
        & #minicart-counter::after{
            content: '2';
            position: absolute;
            top: -10px;
            right: -15px;
            background-color: #C92071;
            color: white;
            font-weight: bold;
            border-radius: 50%;
            padding: 10px;
            height: 0.5px;
            width: 0.5px;
            font-size: 10px;
            display: grid;
            place-content: center;
        }
        & nav{
            display: block;
            width: 1240px;
            margin: auto;
        }
        & ul{
            display: flex;
            list-style: none;
            gap: 32px;
            & li a{
                transition-duration: 200ms;
                height: 27px;
                border-bottom: 2px solid white;
                text-decoration: none;
                &.active, &:hover{
                    border-bottom: 2px solid #C92071;
                    color: #C92071;
                }
            }
        }
    }

`