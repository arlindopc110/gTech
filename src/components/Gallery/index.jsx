import { StyledGallery } from "./styles"
import leftArrow from "../../assets/arrow-left.svg"
import rightArrow from "../../assets/arrow-right.svg"
import { useEffect, useState } from "react"
import styled from "styled-components"

let displayedImage = 0
let lastClick = 'right'
let timeout

export const Gallery = ({width, height, images, radius, children, showThumbs}) => {
    const [currentImage, setCurrentImage] = useState(0)
    const gallerySizeSettings = { width, height, borderRadius: radius}
    const mappedImages = images.map(
        (image, index) => <img src={image.src} style={{marginLeft: index == 0 ? `${currentImage}%` : null}} className="slide-image" id={`image-${index}`} key={index}/>
    )

    function moveSlide(direction){
        if(direction == 'left' && (currentImage / -100) > 0){
            setCurrentImage(prev => prev += 100)
            lastClick = 'left'
        }else if(direction == 'right' && (currentImage / -100) < images.length - 1 ){
            setCurrentImage(prev => prev -= 100)
            lastClick = 'right'
        }
    }
    useEffect(() => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            const direction = lastClick
            moveSlide(direction)
        }, 5000)
    },[currentImage])
    return(
        <>
            <StyledGallery style={gallerySizeSettings}>
                <div id="controlls" >
                    <img src={leftArrow} alt="Left arrow" onClick={() => moveSlide('left')} />
                    <img src={rightArrow} alt="Right arrow" onClick={() => moveSlide('right')} />
                </div>
                <div>
                    {mappedImages}
                </div>
                <div id="radio-icons">
                    {images.map((image, index) => {
                        return <p key={index} className={index == (currentImage / -100) ? 'marked' : ''}></p>
                    })}
                </div>
                {children}
            </StyledGallery>
            {showThumbs && <StyledThumbs style={{width}} id="thumbs">
                {images.map((image, index) => {
                    return <img key={index} style={{borderRadius: radius}} src={image.src} />
                })}
            </StyledThumbs>}
        </>
    )
}

const StyledThumbs = styled.div`
    margin-top: 20px;
    height: 96px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 28px;
    & img{
        height: 100%;
    }

`