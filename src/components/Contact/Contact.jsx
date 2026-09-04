import { useState } from 'react'

function Contact() {

  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    setSubmitted(true)

    event.target.reset()

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <section className="contact" id="contact">

      <div className="container contact-grid">

        <div className="contact-info">

          <span className="section-label">
            Contact Us
          </span>

          <h2>
            Let's Discuss Your Project
          </h2>

          <p>
            Contact us today for a free estimate. We serve Cape
            Town and surrounding areas.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div>
                <strong>Phone</strong>
                <a href="tel:+27672992747">
                  +27 67 299 2747
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div>
                <strong>Email</strong>
                <a href="mailto:obvious.bloggs.gums@gmail.com">
                  obvious.bloggs.gums@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div>
                <strong>Location</strong>
                <span>
                  Cape Town, Western Cape, South Africa
                </span>
              </div>
            </div>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-row">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="+27..."
              required
            />
          </div>

          <div className="form-row">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-row">
            <label>Service Required</label>

            <select name="service" required>

              <option value="">
                Select a service
              </option>

              <option value="painting">
                Interior & Exterior Painting
              </option>

              <option value="residential">
                Residential Painting
              </option>

              <option value="commercial">
                Commercial Painting
              </option>

              <option value="panel">
                Panel Beating & Spray Painting
              </option>

              <option value="vehicle">
                Vehicle Body Repair
              </option>

            </select>
          </div>

          <div className="form-row">

            <label>Project Details</label>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
            ></textarea>

          </div>

          <button
            type="submit"
            className="btn btn-primary btn-full"
          >
            Send Enquiry
          </button>

          {submitted && (
            <p className="form-note">
              Thank you! We'll be in touch shortly.
            </p>
          )}

        </form>

      </div>

    </section>
  )
}

export default Contact