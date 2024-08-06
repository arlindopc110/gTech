import { ProductCard } from "../ProductCard"
import { StyledProductListing } from "./styles"

export const ProductListing = ({ products }) => {
    return(
        <StyledProductListing>
            {products.map((product, index) => (
                <ProductCard 
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                    key={index}
                />
            ))}
        </StyledProductListing>
    )
}