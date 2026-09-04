function Services() {
  const services = [
    {
      title: 'Interior & Exterior Painting',
      description:
        'Transform your home or business with professional interior and exterior painting.',
      image: '/src/assets/images/interior-painting.jpg',
    },
    {
      title: 'Residential Painting',
      description:
        'Affordable and reliable house painting services for homes of all sizes.',
      image: '/src/assets/images/residential-painting.jpg',
    },
    {
      title: 'Commercial Painting',
      description:
        'Professional painting services for offices, shops and commercial buildings.',
      image: '/src/assets/images/commercial-painting.jpg',
    },
    {
      title: 'Painting Contractors',
      description:
        'Complete painting solutions from surface preparation to final finishing.',
      image: '/src/assets/images/painting-contractors.jpg',
    },
    {
      title: 'Panel Beating & Spray Painting',
      description:
        'Professional panel beating and spray painting to restore damaged vehicles.',
      image: '/src/assets/images/car.jpg',
    },
    {
      title: 'Vehicle Body Repair',
      description:
        'Quality vehicle body repairs, refinishing and restoration services.',
      image: '/src/assets/images/vehicle-repair.jpg',
    },
  ]

  return (
    <section className="services" id="services">
      <div className="container">

        <header className="section-header">
          <span className="section-label">
            What We Do
          </span>

          <h2>
            Our Services
          </h2>

          <p>
            Comprehensive painting and automotive finishing
            solutions across Cape Town.
          </p>
        </header>

        <div className="services-grid">

          {services.map((service) => (
            <article
              className="service-card"
              key={service.title}
              style={{
                '--service-image': `url(${service.image})`,
              }}
            >

              <div className="service-content">

                <div className="service-icon">
                  ✦
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services