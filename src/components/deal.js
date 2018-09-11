import React from 'react'

import dealImg from '../images/deal-img.jpg'

const Deal = () => (
    <div className="deal-container">
        <span>sale</span>
        <h4>Deal of the Day 30% off Dresses</h4>
        <p>Pretty Thing Floral Skater Dress</p>
        <p className="price">$28.00</p>

        <ul className="countdown">
            <li><span>2</span><br />hours</li>
            <li><span>23</span><br />minutes</li>
            <li><span>55</span><br />seconds</li>

            <button>add to cart</button>
        </ul>

        <img src={dealImg} alt="" title="" />
    </div>
)

export default Deal