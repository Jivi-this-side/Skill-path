// src/components/Footer.tsx

import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer>
      <BrandLogo footer />

      <div className="footer-links">
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#courses">Contact</a>
      </div>

      <div className="copyright">© 2026 Skillpath</div>
    </footer>
  );
}
