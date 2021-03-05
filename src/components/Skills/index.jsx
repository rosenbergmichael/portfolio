import './style.css';

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="logos">
        <img src={`${process.env.PUBLIC_URL}/rubylogo.png`} alt="Ruby-icon" />
        <img src={`${process.env.PUBLIC_URL}/railslogo.png`} alt="Rails-icon" />
        <img src={`${process.env.PUBLIC_URL}/jslogo.png`} alt="JavaScript-icon" />
        <img src={`${process.env.PUBLIC_URL}/reactlogo.png`} alt="React-icon" />
        <img src={`${process.env.PUBLIC_URL}/reduxlogo.png`} alt="Redux-icon" />
        <img src={`${process.env.PUBLIC_URL}/htmllogo.png`} alt="HTML-icon" />
        <img src={`${process.env.PUBLIC_URL}/csslogo.png`} alt="CSS-icon" />
        </div>
        <br/>
        <div className="content">
          <div>
            <strong>Languages:</strong>
            <li>Ruby on Rails</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
          </div>
          <div>
            <strong>Libraries:</strong>
            <li>React</li>
            <li>Redux</li>
            <li>JQuery</li>
          </div>
          <div>
            <strong>Other:</strong>
            <li>Node.js</li>
            <li>Github</li>
            <li>VS Code</li>
          </div>
        </div>
        {/* <div className="logos">
        <img src={`${process.env.PUBLIC_URL}/rubylogo.png`} alt="Ruby-icon" />
        <img src={`${process.env.PUBLIC_URL}/railslogo.png`} alt="Rails-icon" />
        <img src={`${process.env.PUBLIC_URL}/jslogo.png`} alt="JavaScript-icon" />
        <img src={`${process.env.PUBLIC_URL}/reactlogo.png`} alt="React-icon" />
        <img src={`${process.env.PUBLIC_URL}/reduxlogo.png`} alt="Redux-icon" />
        <img src={`${process.env.PUBLIC_URL}/htmllogo.png`} alt="HTML-icon" />
        <img src={`${process.env.PUBLIC_URL}/csslogo.png`} alt="CSS-icon" />
        </div> */}
    </div>
  )
}

export default Skills 
