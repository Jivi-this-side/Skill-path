import BrandLogo from "./BrandLogo";

export default function Navbar() {
  return (
    <header className="navbar">
      <BrandLogo />

      <nav className="nav-links">
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#courses" className="nav-button" aria-label="Explore courses">
          ↗
        </a>
      </nav>
    </header>
  );
}
