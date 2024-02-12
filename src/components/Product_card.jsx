import React from 'react'

const Product_card = ({ imgsrc, name, description, cost, productID }) => {
    return (
        <div className='product_card' key={productID}>
            <div className="product_card_img_continer">
                <img src={imgsrc} className='product_card_img' />
            </div>
            <div className="product_card_details_wrapp">
                <div className="product_card_name">{name}</div>
                <div className="product_card_description">{description}</div>
                <div className="product_card_price">{cost}</div>
            </div>
            <div className="product_card_actions">
                <button className='addToCart_btn'>Add To Cart</button>
                <button className='card_view_btn'>View</button>
            </div>
        </div>
    )
}

export default Product_card
