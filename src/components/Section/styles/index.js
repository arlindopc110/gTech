import styled from "styled-components";

export const StyledSection = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    & #container{
        font-family: "Inter", sans-serif;
        position: relative;
        margin: auto;
        width: 1240px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        & a{
            text-decoration: none;
            color: #C92071;
            transition-duration: 200ms;
            &:hover{
                filter: brightness(1.2);
            }
        }
        & img{
            margin-left: 10px;
        }
    }
    & p{
        font-size: 24px;
        font-family: "Inter", sans-serif;
        color: #474747;
        font-weight: 700;
    }
    
`