import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="AK" /></span>
        <h1>Arthur Kusumadjaja</h1>
        <p>Software Engineer at <a href="https://www.agl.com.au/"> AGL Energy</a><br/>
        Melbourne, Australia.</p>
    </header>
)

export default Header
