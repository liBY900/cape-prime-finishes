function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg"></div>

      <div className="hero-content container">

        <p className="hero-tag">
          Cape Town's Trusted Finishing Experts
        </p>

        <h1>
          Flawless Finishes for Homes, Businesses & Vehicles
        </h1>

        <p className="hero-lead">
          Professional painting, panel beating and vehicle body
          repairs. We deliver quality workmanship and reliable
          service across Cape Town.
        </p>

        <div className="hero-actions">

          <a href="#contact" className="btn btn-primary">
            Request a Free Quote
          </a>

          <a href="tel:+27672992747" className="btn btn-outline">
            Call Now
          </a>

        </div>

        <div className="hero-stats">

          <div className="stat">
            <span className="stat-value">500+</span>
            <span className="stat-label">
              Projects Completed
            </span>
          </div>

          <div className="stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">
              Client Satisfaction
            </span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero