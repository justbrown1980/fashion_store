import React from 'react'

import Product1 from '../images/product1.jpg'
import Product2 from '../images/product2.jpg'
import Product4 from '../images/product4.jpg'
import Product5 from '../images/product5.jpg'
import Product6 from '../images/product6.jpg'
import Product7 from '../images/product7.jpg'
import Product8 from '../images/product8.jpg'

const Social = () => (
    <div className="social">
        <h4><span>#</span>fashionshop</h4>
        <p>Tag your photos for a chance to be featured in our instagram</p>

        <ul className="social-list">
            <li><img src={Product1} alt="" /></li>
            <li><img src={Product2} alt="" /></li>
            <li><img src={Product8} alt="" /></li>
            <li><img src={Product4} alt="" /></li>
            <li><img src={Product5} alt="" /></li>
            <li><img src={Product6} alt="" /></li>
            <li><img src={Product7} alt="" /></li>
            <li><img src={Product8} alt="" /></li>
        </ul>
    </div>
)

export default Social