import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import Button from "../components/Button/Button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* LOGO */}
        <Link to="main" smooth duration={600} className="navbar__logo">
          <img src={logo} alt="PrimeFit Gym" />
        </Link>

        {/* MENU */}
        <nav className="navbar__nav">
          <Link to="main" smooth duration={600}>
            <Button variant="ghost" size="sm">
              Home
            </Button>
          </Link>

          <Link to="features" smooth duration={600}>
            <Button variant="ghost" size="sm">
              Features
            </Button>
          </Link>

          <Link to="presentaion" smooth duration={600}>
            <Button variant="ghost" size="sm">
              Offer
            </Button>
          </Link>

          <Link to="about" smooth duration={600}>
            <Button variant="ghost" size="sm">
              About
            </Button>
          </Link>

          <Link to="contact" smooth duration={600}>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
