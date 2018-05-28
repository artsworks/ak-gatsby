import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import picArthur from '../assets/images/arthur.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  _calcYearLapsed = () => {
    return new Date().getFullYear() - 2009;
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>Arthur Kusumadjaja is a professional software engineer who is always up for a challenge!</p>
                <p>Obtained his engineering degree in 2009 and master of IT in 2013, he has been exposed to various industries across Jakarta, Indonesia and Melbourne, Australia.</p>
                <p>Currently working at AGL in Melbourne, Australia as a software developer with the expertise of Angular Framework in front-end technology.</p>
                <p>Besides his passion in coding, Arthur loves photography and cinematography, capturing heart touching moments, also the beauty of people through lens.</p>
                <p>He also loves going to a mouth-watering culinary trips, from brunches or simply just trying out new places around the block.</p>
                {/* <ul className="actions">
                  <li><Link to="/about" className="button">Learn More</Link></li>
                </ul> */}
              </div>
              <span className="image"><img src={picArthur} alt="arthur" /></span>
            </div>
          </section>

          <section id="experience" className="main special">
            <header className="major">
              <h2>Experience</h2>
              <p>Arthur's journey to the <strike>west</strike> coding world:</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-globe"></span>
                <strong>2</strong> Countries
              </li>
              <li className="style2">
                <span className="icon fa-industry"></span>
                <strong>3</strong> Industries
              </li>
              <li className="style3">
                <span className="icon fa-building"></span>
                <strong>5</strong> Companies
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>{this._calcYearLapsed()}</strong> Years
              </li>
              <li className="style5">
                <span className="icon fa-code-fork"></span>
                <strong>1,444</strong> Contributions
              </li>
            </ul>
            <p className="content">Started as software engineer at Jakarta, Indonesia (2009), migrated to Australia and resides at Melbourne, Australia embarking further journey in coding, software, and photography.</p>
            <p className="content">Has been in 5 companies, which varies across Australia's creative and gaming industries. Currently exploring and learning energy industry with AGL. Made GitHub contributions 1,444 on last year.</p>
            {/* <footer className="major">
              <ul className="actions">
                <li><Link to="/experience" className="button">Learn More</Link></li>
              </ul>
            </footer> */}
          </section>

          <section id="finesse" className="main special">
            <header className="major">
              <h2>Finesse</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Code</h3>
                <p>Strong technical experience, fast learner and always up for a challenge!</p>
              </li>
              <li>
                <span className="icon major style3 fa-paint-brush"></span>
                <h3>Creative</h3>
                <p>Creative eye to think outside the box, and use unique camera angles to spot an opportunity.</p>
              </li>
              <li>
                <span className="icon major style5 fa-briefcase"></span>
                <h3>Corporate</h3>
                <p>Strong business fundamentals to deliver long-term success and stability feature for the customers.</p>
              </li>
            </ul>
            {/* <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer> */}
          </section>


          <section id="projects" className="main special">
            <header className="major">
              <h2>Personal Projects</h2>
              <p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.”<br />
— Aaron Siskind</p>
              <p>“To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them.”<br />
— Elliott Erwitt</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><a href="http://portraiture.arthurku.com/" className="button">Portraiture</a></li>
                <li><a href="https://theknot.arthurku.com/" className="button">Couple & Wedding</a></li>
              </ul>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
