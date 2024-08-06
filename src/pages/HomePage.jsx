import { Layout } from '../layout'
import { Section } from '../components/Section'
import collection1 from '../assets/products-images/collection-1.png'
import collection2 from '../assets/products-images/collection-2.png'
import collection3 from '../assets/products-images/collection-3.png'
import tshirt from '../assets/icons/tshirt.svg'
import pants from '../assets/icons/pants.svg'
import cap from '../assets/icons/cap.svg'
import headphone from '../assets/icons/headphone.svg'
import sneakers from '../assets/icons/sneakers.svg'
import airJordan from '../assets/products-images/air-jordan.svg'
import styled from 'styled-components'
import { useState } from 'react'
import { ProductListing } from '../components/ProductListing'
import { Gallery } from '../components/Gallery'
import galleryImage from '../assets/slide/home-slide.svg'

export const HomePage = () => {
    return(
        <Layout>
            <Gallery
                width="100vw"
                images={[
                    {
                        src: galleryImage
                    },
                    {
                        src: galleryImage
                    },
                    {
                        src: galleryImage
                    },
                    {
                        src: galleryImage
                    },
                ]}
            >
                <StyledGalleryTextContent>
                    <div id='first-container'>
                        <p>Melhores ofertas personalizadas</p>
                        <h2>Queima de stoque Nike 🔥</h2>
                    </div>
                    <div id='second-container'>
                        <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <button>Ver Ofertas</button>
                    </div>
                </StyledGalleryTextContent>
            </Gallery>
            <CollectionSectionOne>
                <Section
                    title={'Coleções em destaque'}
                >
                    <div id="collection-container">
                        <ImageContainer src={collection1} discount={'30'} />
                        <ImageContainer src={collection2} discount={'30'} />
                        <ImageContainer src={collection3} discount={'30'} />
                    </div>
                </Section>
            </CollectionSectionOne>
            <CollectionSectionTwo>
                <Section
                    title={'Coleções em destaque'}
                    titlePosition={'center'}
                >
                    <div id="categoryIconsContainer">
                        <CollectionComponent source={tshirt} collectionCategory="Camisetas" />
                        <CollectionComponent source={pants} collectionCategory="Calças" />
                        <CollectionComponent source={cap} collectionCategory="Bonés" />
                        <CollectionComponent source={headphone} collectionCategory="Headphones" />
                        <CollectionComponent source={sneakers} collectionCategory="Tênis" />
                    </div>
                </Section>
            </CollectionSectionTwo>
            <Section
                title={'Produtos em alta'}
                titlePosition={'left'}
                link={'Ver todos'}
            >
                <ProductListing products={[
                    {
                        image: '',
                        name: 'K-Swiss V8 - Masculino',
                        price: '200',
                        priceDiscount: '45'
                    },
                    {
                        image: '',
                        name: 'K-Swiss V8 - Masculino',
                        price: '200',
                        priceDiscount: '30'
                    },
                    {
                        image: '',
                        name: 'K-Swiss V8 - Masculino',
                        price: '200',
                        priceDiscount: '30'
                    },
                    {
                        image: '',
                        name: 'K-Swiss V8 - Masculino',
                        price: '200',
                        priceDiscount: '30'
                    },
                    {
                        image: '',
                        name: 'K-Swiss V8 - Masculino',
                        price: '200',
                        priceDiscount: '30'
                    },
                    {
                        image: '',
                        name: 'K-Swiss V8 - Masculino',
                        price: '200',
                        priceDiscount: '30'
                    },
                    {
                        image: '',
                        name: 'K-Swiss V8 - Masculino',
                        price: '200',
                        priceDiscount: '90'
                    },
                    {
                        image: '',
                        name: 'K-Swiss V8 - Masculino',
                        price: '200',
                        priceDiscount: '60'
                    },
                    
                ]}/>
            </Section>
            <Section>
                <StyledSpecialOffer>
                    <div id="main-container">
                        <div id="img-aux-container">
                            <div id="img-container">
                                <img src={airJordan} alt="Air Jordan" />
                            </div>
                        </div>
                        <div id="content">
                            <p>Oferta especial</p>
                            <div id="middle-container">
                                <h2>Air Jordan edição de 
                                colecionador</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            </div>
                            <a href="#"><button>Ver Oferta</button></a>
                        </div>
                    </div>
                </StyledSpecialOffer>
            </Section>
        </Layout>
    )
}

const ImageContainer = ({ src, discount }) =>{
    return (
        <div id="collection-card">
            <img src={src} />
            <p>{discount}& OFF</p>
            <a href="/product-view-page"><button>Comprar</button></a>
        </div>
    )
}
const CollectionComponent = ({source, collectionCategory}) => {
    const [fill, setFill] = useState(false)
    const filledSource = source.toString().replace('icons/', 'icons/filled/')

    function setSelected(e){
        if(e.nativeEvent.path[2].children.length > 2){
            const containerChildren = Array.from(e.nativeEvent.path[2].children)
            for(let element of containerChildren){
                element.children[0].classList.remove('selected')
                const img = element.children[0].children[0]
                img.src = `src${img.src.split('/src')[1].replace('/filled', '')}`
            }
            e.target.classList.add('selected')
            e.target.children[0].src = filledSource
        }else{
            const containerChildren = Array.from(e.nativeEvent.path[3].children)
            for(let element of containerChildren){
                element.children[0].classList.remove('selected')
                const img = element.children[0].children[0]
                img.src = `src${img.src.split('/src')[1].replace('/filled', '')}`
            }
            e.nativeEvent.path[1].classList.add('selected')
            e.target.src = filledSource
        }
    }

    function unfill(e){
        const targetClassList = e.target.classList.toString()
        if(e.target.id == 'svg-container' && targetClassList.includes('selected')){
            return
        }
        setFill(false)
    }

    return (
        <StyledCollectionComponent>
            <div 
                id="svg-container"
                onClick={setSelected} 
                onMouseOver={() => {
                    setFill(false)
                }} 
                onMouseOut={unfill} 
            >
                <img src={fill ? filledSource : source}/>
            </div>
            <p>{collectionCategory}</p>
        </StyledCollectionComponent>

    )
}
const CollectionSectionOne = styled.div`
    & #collection-container{
        margin: auto;
        margin-bottom: 100px;
        width: 1240px;
        display: flex;
        justify-content: space-between;
        gap: 12px;
        & #collection-card{
            position: relative;
            transition-duration: 400ms;
            transition-delay: 40ms;
            &:hover{
                transform: scale(1.01, 1.01);
            }
            & img{
                transition-duration: 400ms;
                transition-delay: 50ms;
                border-radius: 8px;
                outline: 2px solid rgba(0, 0, 0, 0);
                &:hover{
                    box-shadow: 4px 4px 4px #0000003a;
                    outline: 2px solid #C92071;
                }
            }
            & p{
                background-image: linear-gradient(to bottom, hsla(72, 100%, 76%, 1), hsla(76, 100%, 76%, 1));
                padding: 6px 15px;
                font-size: 14px;
                font-weight: 700;
                color: hsla(0, 0%, 28%, 1);
                border-radius: 29px;
                position: absolute;
                top: 18px;
                left: 30px;
            }
            & button{
                position: absolute;
                top: 168px;
                left: 30px;
                border: none;
                font-size: 16px;
                font-weight: 700;
                width: 153px;
                height: 48px;
                border-radius: 8px;
                background: hsla(0, 0%, 96%, 1);
                color: #C92071;
                cursor: pointer;
                outline: 2px solid transparent;
                transition: 300ms;
                &:hover{
                    outline: 2px solid #C92071;
                }
            }
        }
    }
`
const CollectionSectionTwo = styled.div`
    margin: auto;
    margin-bottom: 123px;
    width: 1240px;
    & #categoryIconsContainer{
        margin: auto;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        width: 712px;
        & div{
            & #svg-container{
                position: relative;
                width: 104px;
                height: 104px;
                border-radius: 50%;
                padding: 20px;
                background-color: white;
                & img{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            & p{
                font-weight: 700px;
                margin-top: 12px;
                text-align: center;
                font-size: 14px;
                color: #474747;
            }
        }
    }
`
const StyledCollectionComponent = styled.div`
    & #svg-container{
        box-shadow: 0px 0px 3px #0000003a;
        margin-bottom: 12px;
        transition: 375ms;
        transition-timing-function: cubic-bezier(1, 0.9, 0.1, 0.8);
        outline: 2px solid transparent;
        &:hover, &:focus{
            cursor: pointer;
            outline-color: #C92071;
            transform: rotate(360deg);
        }
        &.selected{
            outline-color: #C92071;
            box-shadow: 0px 0px 10px #0000003a;
            transform: rotate(-360deg);
        }
    }
`
const StyledSpecialOffer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    background-color: white;
    height: 553px;
    padding: 0 159px 0 52px;
    & #main-container{
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding: 106px 0;
        align-items: center;
        gap: 67px;
    }
    & #img-aux-container{
        display: grid;
        place-content: center;
        width: 573px;
        transition: 375ms;
        transition-timing-function: cubic-bezier(1, 0.9, 0.1, 0.8);
        &:hover{
            transform: scale(1.02);
        }
    }
    & #img-container{
        display: grid;
        place-content: center;
        background-image: linear-gradient(to bottom, rgba(66, 0, 255, 0.25), rgba(255, 255, 255, 0) 75%);
        width: 466px;
        height: 466px;
        border-radius: 50%;
    }
    & img{
        width: 573px;
    }
    & #content{
        & p{
            font-size: 14px;
            font-weight: 700;
            color: #C92071;
        }
        & #middle-container{
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 17px;
            margin-bottom: 30px;
            h2{
                font-family: "Inter", sans-serif;
                color: #474747;
                font-size: 48px;
                font-weight: 700;
                width: 514px;
            }
            p{
                font-size: 16px;
                font-weight: 400;
                color: #474747;
                line-height: 28px;
                width: 489px;
            }
        }
        & button{
            font-family: "Inter", sans-serif;
            border-radius: 10px;
            border: 0;
            width: 200px;
            height: 40px;
            background-color: #C92071;
            cursor: pointer;
            font-size: 14px;
            color: white;
            font-weight: 700;
        }
    }
`
const StyledGalleryTextContent = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    font-family: "Inter", sans-serif;
    width: 510px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    position: absolute;
    top: 124px;
    left: 100px;
    z-index: 3;
    & #first-container{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 20px;
        & p{
            font-size: 16px;
            color:#F6AA1C;
            font-weight: 700;
            letter-spacing: 0.75px;
        }
        & h2{
            width: 510px;
            font-size: 64px;
            letter-spacing: 1px;
            white-space: pre-wrap;
        }
    }
    & #second-container{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 40px;
        & p{
            font-size: 18px;
            font-weight: 400;
            color: #474747;
            width: 495px;
            white-space: pre-wrap;
            line-height: 34px;
        }
        & button{
            font-family: "Inter", sans-serif;
            border-radius: 10px;
            border: 0;
            width: 220px;
            height: 48px;
            background-color: #C92071;
            cursor: pointer;
            font-size: 16px;
            color: white;
            font-weight: 700;
            transition: 200ms;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
`