import { Meta } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Pages/LandingPage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
};

export default meta;

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h1>Welcome to Our Ski Resort!</h1>
        <p>Experience the thrill of skiing in the beautiful mountains.</p>
        <a href="#tickets">Book Now</a>
      </section>
      <section id="tickets">
        <h2>Tickets and season passes</h2>
        <div>
          <h3>Hourly Pass</h3>
          <p>Price: $100</p>
          <button>Buy now</button>
        </div>
        <div>
          <h3>Half Day Pass</h3>
          <p>Price: $200</p>
          <button>Buy now</button>
        </div>
        <div>
          <h3>Full Day Pass</h3>
          <p>Price: $300</p>
          <button>Buy now</button>
        </div>
      </section>
      <section>
        <h2>Download our app!</h2>
        <p>Download our app for the best experience!</p>
        <button>Download now</button>
      </section>
      <footer className="footer">
        <p>Contact us: info@skresort.com | Follow us on social media!</p>
      </footer>
    </div>
  );
};
