import React from 'react'
import { Link } from 'gatsby'


const topHeader = () => (
    <ul className="top-header">
        <li><Link to="#">+61 9000 0000</Link></li>
        <li><Link to="mailto:info@domain.com">info@domain.com</Link></li>

    </ul>
)

export default topHeader