import { useState } from 'react'
import logo from '../../assets/images/logo.jpg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className="nav container">

        <a href="#" className="logo">
          <img
            src={logo}
            alt="Cape Prime Finishes Logo"
            className="logo-mark"
          />

          <span className="logo-text">
            Cape Prime Finishes
          </span>
        </a>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#why-us">Why Us</a>
          </li>

          <li>
            <a href="#contact" className="nav-cta">
              Get a Quote
            </a>
          </li>

        </ul>

      </nav>
    </header>
  )
}

export default Header