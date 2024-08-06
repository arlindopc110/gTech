import styled from "styled-components";

export const StyledProductCard = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&display=swap');

    width: 292px;
    height: 439px;
    margin-bottom: 120px;
    transition-duration: 300ms;
    outline: 2px solid transparent;
    &:hover{
        transform: scale(1.023);
        outline: 2px solid #C92071;
        outline-offset: 6px;
        border-radius: 4px;
    }
    & a{
        text-decoration: none;
    }
    & #image-container{
        position: relative;
    }
    & #discount-label{
        background-color: #E7FF86;
        border-radius: 29px;
        padding: 5px 15px;
        font-size: 14px;
        font-weight: 700;
        color: #474747;
        position: absolute;
        top: 20px;
        left: 20px;
    }
    & img{
        background-color: white;
        margin-bottom: 18px;
        width: 292px;
        height: 321px;
    }
    & #category{
        font-size: 12px;
        color: #8F8F8F;
    }
    & #name{
        font-size: 24px;
        color: #474747;
        font-weight: 400;
    }
    & #values{
        font-family: "Inter", sans-serif;
        height: 38px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
    }
    & #price{
        font-weight: 400;
        color: #1F1F1F;
    }
    & #priceDiscount{
        font-weight: 700;
        color: #1F1F1F;
    }
    & #values p.discount{
        text-decoration: line-through;
        color: #8F8F8F;
    }
`