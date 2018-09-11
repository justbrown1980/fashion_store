import React from 'react'
import { Link } from 'gatsby'

const Promos = () => (
    <div>
        <ul className="promo-list">

            <li className="promo-item promo-item-alt">
                <p>
                    <span>kemeks</span>
                    <sub>be cool</sub>
                </p>
                <Link to="#">more details</Link>
            </li>

            <li className="promo-item">
                <p><span>40%</span>
                    <sub>off everything</sub>
                </p>
                <Link to="#">shop now</Link>
            </li>

        </ul>
    </div>
)

export default Promos