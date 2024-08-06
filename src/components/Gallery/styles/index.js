import styled from "styled-components";

export const StyledGallery = styled.div`
    position: relative;
    background: #F5F5F5;
    white-space: nowrap;
    overflow-x: hidden;
    margin-bottom: 38px;

    & #radio-icons{
        position: absolute;
        bottom: 53px;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: center;
        gap: 10px;
        & p{
            border-radius: 50%;
            width: 12px;
            height: 12px;
            background-color: #CCCCCC;
            transition: 175ms;
            &.marked{
                background-color: #C92071;
            }
        }
    }
    

    & #controlls{
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% - 33px);
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-between;
        & img{
            cursor: pointer;
            transition: 150ms;
            &:hover{
                transform: scale(1.5);
            }
        }
    }

    & img.slide-image{
        width: 100%;
        overflow-y: hidden;
        transition: 1.5s;
    }

    
`