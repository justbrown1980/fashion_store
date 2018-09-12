import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.png'
import mastercardIcon from '../images/mastercard-icon.png'
import paypalIcon from '../images/paypal-icon.png'
import visaIcon from '../images/visa-icon.png'

const Footer = () => (
    <footer>
        <ul class="l-list-four-columns">
            <li>
                <Link to="#">
                    <img src={ logo } alt="" className="logo"/>
                </Link>
                <ul className="payment-list">
                    <li><img src={mastercardIcon} alt="Mastercard Logo" /></li>
                    <li><img src={paypalIcon} alt="Paypal Logo" /></li>
                    <li><img src={visaIcon} alt="Visa Logo" /></li>
                </ul>
            </li>
            <li>
                <h5>customer service</h5>
                <ul className="nav-list">
                    <li><Link to="#">about us</Link></li>
                    <li><Link to="#">f.a.q</Link></li>
                    <li><Link to="#">my account</Link></li>
                    <li><Link to="#">contact us</Link></li>
                </ul>
            </li>

            <li>
                <h5>social</h5>
                <ul className="nav-list">
                    <li><Link to="#">instagram</Link></li>
                    <li><Link to="#">twitter</Link></li>
                    <li><Link to="#">facebook</Link></li>
                    <li><Link to="#">pinterest</Link></li>
                </ul>
            </li>

            <li>
                <h5>contact us</h5>
                <ul className="nav-list">
                    <li>Patricia C. Amedee 4401</li>
                    <li><Link to="#">+61 9000 0000</Link></li>
                    <li><Link to="#">info@yourdomain.com</Link></li>
                </ul>
            </li>
        </ul>
        <p>&copy; 2018 Made by Elephant. All rights reserved.</p>
    </footer>
)

export default Footer