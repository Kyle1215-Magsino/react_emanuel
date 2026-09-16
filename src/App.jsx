import "./App.css";

function App() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">MyWebsite</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="subtitle">WELCOME TO MY WEBSITE</p>

            <h1>
              Build Something
              <br />
              <span>Great.</span>
            </h1>

            <p className="description">
              A simple and modern homepage built with React and Vite.
            </p>

            <button className="hero-button">
              Get Started
            </button>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            This section contains information about your website or project.
          </p>
        </section>

        <section id="services" className="section">
          <h2>Services</h2>
          <p>
            Add your services, features, or other information here.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Add your contact information here.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;