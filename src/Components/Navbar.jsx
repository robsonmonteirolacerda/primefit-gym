import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <Link to="main" smooth={true} duration={600} className="navbar__logo">
          <img src={logo} alt="PrimeFit Gym" />
        </Link>

        <div className={`navbar__nav ${open ? "navbar__nav--open" : ""}`}>
          <Link
            to="main"
            smooth
            duration={1000}
            className="btn-nav"
            activeClass="active"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="features"
            smooth
            duration={600}
            className="btn-nav"
            activeClass="active"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>

          <Link
            to="offer"
            smooth
            duration={600}
            className="btn-nav"
            activeClass="active"
            onClick={() => setOpen(false)}
          >
            Offer
          </Link>

          <Link
            to="about"
            smooth
            duration={600}
            className="btn-nav"
            activeClass="active"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            to="contact"
            smooth
            duration={600}
            className="btn-nav"
            activeClass="active"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div
          className={`hamburger ${open ? "hamburger--open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
