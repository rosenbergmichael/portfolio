import './style.css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Projects</h1>
        <div className="port-content">
          <div className="port-app">
          <h2>Calorease</h2>
          <br/>
          <h4>Calorie counter app</h4>
          <p>Rails API + React/Redux Frontend</p>
          <br/>
          <a 
          href="https://www.github.com/rosenbergmichael/calorease-client" 
          target="_blank"
          >GitHub</a>|
          <a 
          href="https://www.youtube.com/watch?v=MIcjdtJyul8" 
          target="_blank"
          >Video Demo</a>
          <br/>
          <br/>
          <p>
            <li>Assembled multiple class and functional components for rendering user data to the DOM</li>
            <li>Implemented async actions and redux-thunk middleware to send and receive data from server</li>
            <li>Utilized Redux action creators and reducer to update React components’ state and the UI</li>
          </p>
          <br/>
        </div>
        <div className="port-app">
          <h2>Best in Sports</h2>
          <br/>
          <h4>Posts/ratings of the best moments in sports</h4>
          <p>SPA, Rails API + JS Frontend</p>
          <br/>
          <a 
          href="https://github.com/rosenbergmichael/best_in_sports" 
          target="_blank"
          >GitHub</a>|
          <a 
          href="https://www.youtube.com/watch?v=zuNIaw0_vXk&feature=youtu.be" 
          target="_blank"
          >Video Demo</a>
          <br/>
          <br/>
          <p>
            <li>Enabled client-server communication via AJAX calls (fetch), using JSON as communication format</li>
            <li>Utilized OOJS (Object Oriented JavaScript) classes to encapsulate related data and functionality</li>
            <li>DOM manipulation via selecting nodes and adding appropriate event listeners</li>
          </p>
          <br/>
        </div>
        <div className="port-app">
          <h2>VinoVault</h2>
          <br/>
          <h4>App for keeping track of favorite wines</h4>
          <p>Ruby on Rails + HTML/CSS</p>
          <br/>
          <a 
          href="https://github.com/rosenbergmichael/VinoVault" 
          target="_blank"
          >GitHub</a>| 
          <a 
          href="https://www.youtube.com/watch?v=Y2aeQL3zP6c&feature=youtu.be" 
          target="_blank"
          >Video Demo</a>
          <br/>
          <br/>
          <p>
            <li>Implemented MVC framework to structure UI, utilized ActiveRecord for validations/storing user info</li>
            <li>Built forms for CRUD functionality of user input/database, added nested routes (RESTful)</li>
            <li>Engineered authentication system for user login, with OAuth feature for Google login</li>
          </p>
          </div>
        </div>
    </div>
  )
}

export default Portfolio
