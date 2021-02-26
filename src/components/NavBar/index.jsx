import { useState } from 'react';
import { Link } from  'react-router-dom'; 
import './style.css'

const NavBar = () => {
  const [open, setOpen] = useState(false);
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
          <Link to="/">Home</Link>
        </li>  
        <li>
          <Link to="/about">About</Link>
        </li> 
        <li>
          <Link to="/skills">Skills</Link>
        </li> 
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li> 
        <li>
          <Link to="/contact">Contact</Link>
        </li> 
      </ul>  

    </div>  
  </nav>
}

export default NavBar
