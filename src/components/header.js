import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.png'
import userIcon from '../images/user.png'
import searchIcon from '../images/search.png'
import shoppingIcon from '../images/shopping-bag.png'

const Header = ({ siteTitle }) => (

  <header>
    <Link to="#">
      <img src={ logo } alt="Fashion Boutique Logo" title={siteTitle} />
    </Link>

    <ul>
      <li><Link to="#">home</Link></li>
      <li><Link to="#">shop</Link></li>
      <li><Link to="#">blog</Link></li>
      <li><Link to="#">about us</Link></li>
      <li><Link to="#">contact us</Link></li>
    </ul>

    <ul>
      <li><Link to="#"><img src={ userIcon } alt="" /></Link></li>
      <li><Link to="#"><img src={ searchIcon } alt="" /></Link></li>
      <li><Link to="#"><img src={ shoppingIcon } alt="" /></Link></li>
    </ul>
  </header>
)

export default Header
