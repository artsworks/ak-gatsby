import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

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
                <p>Arthur Kusumadjaja is a professional software engineer who love cutting-edge technologies and always up for a challenge!</p>
                <p>He obtained his undergraduate degree as an engineer in 2009 and master degree in IT on 2013. He is currently working as a software developer at AGL in Melbourne, Australia. Several of technical skills that Arthur has acquired during during the employments are networking and .NET (2010); web technologies, PHP / JS / JQuery (2013); Ember Framework (2014); and Angular Framework (2015-current).</p>
                <p>Besides his enthusiast in software and technology, Arthur loves photography and cinematography. He enjoys capturing heart touching moments on weddings, also unique beauty of people through portraiture photography. He also loves going to a mouth-watering culinary trips, from brunches or simply just trying out new places around the block.</p>
                {/* <ul className="actions">
                  <li><Link to="/about" className="button">Learn More</Link></li>
                </ul> */}
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="experience" className="main special">
            <header className="major">
              <h2>Experience</h2>
              <p>Arthur Kusumadjaja's coding journey up until present:</p>
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
                <strong>9</strong> Years
              </li>
              <li className="style5">
                <span className="icon fa-code-fork"></span>
                <strong>1,444</strong> Contributions
              </li>
            </ul>
            <p className="content">Started as software engineer in Indonesia nine years ago, migrated to Australia and reside in Melbourne to embark on further journey on coding.<br />
                Various exposure on Australia's creative and gaming industries. Currently exploring and learning energy industry. Last year's GitHub contributions 1,444.
            </p>
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
                <li><Link to="http://portraiture.arthurku.com/" className="button">Portraiture</Link></li>
                <li><Link to="https://theknot.arthurku.com/" className="button">Couple & Wedding</Link></li>
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
