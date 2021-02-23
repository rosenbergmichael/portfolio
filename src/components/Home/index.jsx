import { Link } from "react-router-dom";
import './style.css';

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Michael Rosenberg</p>
          <p>Software Engineer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
        src={`${process.env.PUBLIC_URL}/mr-logo.png`}
        alt="person picture"
        /> 
      </div>
    </div> 
  );
};

export default Home
