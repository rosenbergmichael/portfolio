import './style.css';

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
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
        <div className="logos">
        <img src={`${process.env.PUBLIC_URL}/Medium-logo.png`} alt="Medium-icon" />
        </div>
    </div>
  )
}

export default Skills 
