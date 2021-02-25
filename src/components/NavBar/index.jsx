import { Link } from  'react-router-dom'; 

const NavBar = () => {
  return <nav className="navbar">
    <div className="nav-wrapper">
      <div className="logo">
        <Link to="/">
          <img 
            src={`${process.env.PUBLIC_URL}/coding-icon.png`}
            alt="brand"
          />
        </Link>
      </div>
    </div>
    <div className="list-wrapper">
      <img
        src={`${process.env.PUBLIC_URL}/menu-bars-logo.png`}
        alt="Menu bars"
      />
      {/* <img
        src={`${process.env.PUBLIC_URL}/mr-logo.png`}
        alt="Menu cross"
      /> */}

      <ul>
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
