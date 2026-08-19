// src/components/Hero.tsx

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="live-dot" />
          LEARNING, BUT USEFUL.
        </div>

        <h1>
          Your skills.
          <br />
          <span className="gradient-text">Your path.</span>
        </h1>

        <p className="hero-description">
          Practical courses for people who want to build real skills, make
          things, and keep moving.
        </p>

        <a href="#courses" className="hero-button">
          Start learning
          <span>↗</span>
        </a>
      </div>

      <div className="hero-art">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />

        <div className="hero-feature">
          <div className="feature-top">
            <span className="spark">✦</span>
            <span>LEARN TO EARN</span>
          </div>

          <div className="feature-content">
            <div className="feature-label">BUILD DIGITAL ASSETS</div>

            <h2>Make something worth showing.</h2>
          </div>

          <div className="feature-bottom">
            <span>Skillpath</span>

            <span className="feature-arrow">↗</span>
          </div>
        </div>

        <div className="floating-chip chip-one">
          <span />
          Practical
        </div>

        <div className="floating-chip chip-two">✦ Learn</div>
      </div>
    </section>
  );
}
