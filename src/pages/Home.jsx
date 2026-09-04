import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <section className="why-us" id="why-us">

  <div className="container">

    <header className="section-header">

      <span className="section-label">
        Why Choose Us
      </span>

      <h2>
        The Cape Prime Finishes Difference
      </h2>

    </header>

    <div className="features-grid">

      <div className="feature">
        <span className="feature-num">01</span>
        <h3>Professional Painters</h3>
        <p>
          Skilled professionals who take pride in every project.
        </p>
      </div>

      <div className="feature">
        <span className="feature-num">02</span>
        <h3>Affordable Rates</h3>
        <p>
          Competitive pricing without compromising quality.
        </p>
      </div>

      <div className="feature">
        <span className="feature-num">03</span>
        <h3>Quality Materials</h3>
        <p>
          We use quality materials for durable finishes.
        </p>
      </div>

      <div className="feature">
        <span className="feature-num">04</span>
        <h3>Reliable Service</h3>
        <p>
          We respect your time and aim to complete projects
          efficiently.
        </p>
      </div>

    </div>

  </div>

</section>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home