import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product_item">
      <img className="product__img" src={props.product.image} alt="" />
      <div className="product__old_price">{props.product.oldPrice}</div>
      <div className="product__new_price">{props.product.newPrice}</div>
      <div className="product__title">{props.product.title}</div>
      <div className="product__rating">Rating : {props.product.rating}</div>
      <div className="product__shipping">
        Delivery Time : {props.product.shippingTime}
      </div>
    </div>
  );
};

export default ProductCard;
