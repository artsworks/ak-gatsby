import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Arthur Kusumadjaja</h2>
            <p>A professional software engineer who love cutting-edge technologies and always up for a challenge!</p>
            {/* <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul> */}
        </section>
        <section>
            <h2>Contact me</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Melbourne &bull; Australia</dd>
                <dt>Email</dt>
                <dd><a href="#">hello@arthurku.com</a></dd>
            </dl>
            <ul className="icons">
                {/* <li><a href="https://twitter.com/arts_works" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li> */}
                {/* <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li> */}
                <li><a href="https://www.instagram.com/arthurk__/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/artsworks" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/arthurku/" className="icon fa-linkedin alt"><span className="label">Linkedin</span></a></li>
                {/* <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li> */}
            </ul>
        </section>
        <p className="copyright">&copy; Arthur Kusumadjaja. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
