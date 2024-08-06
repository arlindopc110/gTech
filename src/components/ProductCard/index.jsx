import { StyledProductCard } from "./styles"
import productImage from '../../assets/products-images/product-image-6.svg'

export const ProductCard = ({ image, name, price, priceDiscount}) => {
    return(
        <StyledProductCard>
            <a href="/product-view-page">
                <div id="image-container">
                    <img src={image || productImage} />
                    <p id="discount-label">{priceDiscount && `${Math.trunc((price - priceDiscount) / price * 100)}% OFF`}</p>
                </div>
                <div id="info">
                    <p id="category">Tênis</p>
                    <p>{name}</p>
                    <div id="values">
                        <p id="price" className={priceDiscount && "discount"}>${price}</p>
                        <p id="priceDiscount">{priceDiscount && `$${priceDiscount}`}</p>
                    </div>
                </div>
            </a>
        </StyledProductCard>
    )
}