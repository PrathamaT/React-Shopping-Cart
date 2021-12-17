import React from "react"
import "./ProductsWrapper.css"
import ProductCard from "../ProductCard/ProductCard"

const ProductsWrapper = (props) => {
    return (
        <div className='products__wrapper'>
            {props.products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsWrapper
