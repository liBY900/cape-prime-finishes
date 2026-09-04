import car from '../../assets/images/car.jpg'

function Services() {
  const services = [
    {
      title: 'Interior & Exterior Painting',
      description:
        'Transform your home or business with professional interior and exterior painting.',
    },
    {
      title: 'Residential Painting',
      description:
        'Affordable and reliable house painting services for homes of all sizes.',
    },
    {
      title: 'Commercial Painting',
      description:
        'Professional painting services for offices, shops and commercial buildings.',
    },
    {
      title: 'Painting Contractors',
      description:
        'Complete painting solutions from surface preparation to final finishing.',
    },
    {
      title: 'Panel Beating & Spray Painting',
      description:
        'Professional panel beating and spray painting to restore damaged vehicles.',
    },
    {
      title: 'Vehicle Body Repair',
      description:
        'Quality vehicle body repairs, refinishing and restoration services.',
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

          {services.map((service, index) => (

            <article
              className={`service-card ${
                index === 0 ? 'featured' : ''
              }`}
              key={service.title}
              style={
                index === 0
                  ? {
                      backgroundImage: `linear-gradient(rgba(8,43,61,.85), rgba(18,63,90,.9)), url(${car})`,
                    }
                  : {}
              }
            >

              <div className="service-icon">
                ✦
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services