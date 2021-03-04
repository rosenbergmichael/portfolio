import { useState, useEffect } from 'react';
import { Link, useLocation } from  'react-router-dom'; 
import './style.css'

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return <nav className="navbar">
    <div className="nav-wrapper">
      <div className="logo">
        <Link to="/">
          <img 
            src={`${process.env.PUBLIC_URL}/coding-icon-2.png`}
            alt="brand"
          />
        </Link>
      </div>
    </div>
    <div className="list-wrapper">
      <img
        src={`${process.env.PUBLIC_URL}/menu-bars-logo.png`}
        alt="Menu bars"
        style={{ opacity: !open ? 1 : 0 }}
        onClick={() => {
          setOpen(!open);
          }
        }
      />
      <img
        src={`${process.env.PUBLIC_URL}/black-x.png`}
        alt="Menu cross"
        style={{ opacity: open ? 1 : 0 }}
        onClick={() => {
          setOpen(!open);
          }
        }
      />

      <ul style={{ left: open ? "0" : "-100vw" }}>
        <li>
          <Link
          style={{ color: location.pathname === "/" && "#4071f4" }}
          to="/"
          >
          Home
          </Link>
        </li>  
        <li>
          <Link 
          style={{ color: location.pathname === "/about" && "#4071f4" }}
          to="/about"
          >
          About
          </Link>
        </li> 
        <li>
          <Link 
          style={{ color: location.pathname === "/skills" && "#4071f4" }}
          to="/skills"
          >
          Skills
          </Link>
        </li> 
        <li>
          <Link 
          style={{ color: location.pathname === "/portfolio" && "#4071f4" }}
          to="/portfolio"
          >
          Portfolio
          </Link>
        </li> 
        <li>
          <Link 
          style={{ color: location.pathname === "/contact" && "#4071f4" }}
          to="/contact"
          >
          Contact
          </Link>
        </li> 
      </ul>  

    </div>  
  </nav>
}

export default NavBar
