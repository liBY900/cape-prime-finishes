function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-inner">

        <div className="footer-brand">

          <div className="logo">
            <span className="logo-text">
              Cape Prime Finishes
            </span>
          </div>

          <p>
            Professional painters, panel beaters and vehicle
            body repair specialists serving Cape Town.
          </p>

        </div>

        <div className="footer-links">

          <h4>Services</h4>

          <ul>
            <li>
              <a href="#services">
                House Painting
              </a>
            </li>

            <li>
              <a href="#services">
                Commercial Painting
              </a>
            </li>

            <li>
              <a href="#services">
                Panel Beating
              </a>
            </li>

            <li>
              <a href="#services">
                Vehicle Repair
              </a>
            </li>
          </ul>

        </div>

        <div className="footer-links">

          <h4>Company</h4>

          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>

            <li>
              <a href="#why-us">Why Choose Us</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom container">

        <p>
          © 2026 Cape Prime Finishes. All rights reserved.
        </p>

        <p>
          Cape Town, South Africa
        </p>

      </div>

    </footer>
  )
}

export default Footer