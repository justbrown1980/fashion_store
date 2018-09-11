import React from 'react'

import reviewStar from '../images/review-star.png'
import Product1 from '../images/product1.jpg'
import Product2 from '../images/product2.jpg'
import Product3 from '../images/product3.jpg'
import Product4 from '../images/product4.jpg'

const SalesProducts = () => (
    <div className="sales-container">
        <h2>On Sale Now!</h2>

        <ul className="product-list">
            <li className="product">
                <img src={Product1} alt="" />

                <div className="review-stars">
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                </div>

                <h3>Embroidered Linen Shirt</h3>

                <p className="price">$30.50</p>

                <button>add to cart</button>
            </li>

            <li className="product">
                <img src={Product2} alt="" />

                <div className="review-stars">
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                </div>

                <h3>Embroidered Linen Shirt</h3>

                <p className="price">$30.50</p>

                <button>add to cart</button>
            </li>

            <li className="product">
                <img src={Product3} alt="" />

                <div className="review-stars">
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                </div>

                <h3>Embroidered Linen Shirt</h3>

                <p className="price">$30.50</p>

                <button>add to cart</button>
            </li>

            <li className="product">
                <img src={Product4} alt="" />

                <div className="review-stars">
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                    <img src={reviewStar} alt="" />
                </div>

                <h3>Embroidered Linen Shirt</h3>

                <p className="price">$30.50</p>

                <button>add to cart</button>
            </li>
        </ul>
    </div>
)

export default SalesProducts