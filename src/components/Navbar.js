import React from 'react'
import { Link } from 'gatsby'
import scrollToElement from 'scroll-to-element';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: 'top-nav-links',
    }
  }

  _handleLinkClick = (e, target) => {
    // NODE-SAFE CODE
    // Gatsby uses Node to generate our pages. 
    // Node doesn't know what a window is. 
    // Be sure to wrap any of your browser interactions
    // in some sort of node-safe if statement like this:
    
    if (typeof window !== undefined) {
      
      // First, are we on the home page?
      // If so, let's scroll to the desired block,
      // which was passed in as an onClick prop on our Link.
      // An event was also passed, we'll preventDefault()
      const anchor = e.nativeEvent.target.href.split('/#')[1];
      if (anchor) {
        scrollToElement(document.getElementById(anchor), {
          offset: -100,
          duration: 1000,
        })
      }
    }
    this.toggleHamburger();
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'top-nav-links top-nav-links__active',
            })
          : this.setState({
              navBarActiveClass: 'top-nav-links',
            })
      }
    )
  }

  render() {
    return (
      <>
      <div className={this.state.navBarActiveClass}>
        <div>
          <Link to="/#work" className="top-nav--link" onClick={this._handleLinkClick}>
            Obra
          </Link>
          <Link to="/#about" className="top-nav--link" onClick={this._handleLinkClick}>
            Sobre mi
          </Link>
          <Link to="/#cv" className="top-nav--link" onClick={this._handleLinkClick}>
            Curriculum
          </Link>
          <Link to="/contact" className="top-nav--link" onClick={this._handleLinkClick}>
            Contacto
          </Link>
        </div>
      </div>
      <nav className="top-nav">
        <div className="top-nav--social top-nav--section">
          <a title="instagram" href="https://www.instagram.com/zaidaescobart/" target="_blank" rel="noopener noreferrer">
            <svg
              className="top-nav--icon" 
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram icon</title>
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
            </svg>
          </a>
          <a title="instagram" href="https://www.facebook.com/zaida.escobar.morales.77/" target="_blank" rel="noopener noreferrer">
          <svg
            className="top-nav--icon" 
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Facebook icon</title>
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg>
          </a>
        </div>
        <div className="top-nav--section">
          <Link to="/#work" title="Logo" className="logo">
            ZE
          </Link>
        </div>
        <div className="top-nav--section">
          <button className="top-nav--button" onClick={this.toggleHamburger}>
            MENU
          </button>
        </div>
      </nav>
    </>
    );
  }
}

export default Navbar
