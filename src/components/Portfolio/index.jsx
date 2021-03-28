import './style.css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Projects</h1>

        <h3>Calorease (Calorie counter app)</h3>
        <br/>
        <a 
        href="https://www.github.com/rosenbergmichael/calorease-client" 
        target="_blank"
        >GitHub</a>|
        <a 
        href="https://www.youtube.com/watch?v=MIcjdtJyul8" 
        target="_blank"
        >Video Demo</a>
        <p>Rails API + React/Redux Frontend</p>
        <p>
          <li>Assembled multiple class and functional components for rendering user data to the DOM</li>
          <li>Implemented async actions and redux-thunk middleware to send and receive data from server</li>
          <li>Utilized Redux action creators and reducer to update React components’ state and the UI</li>
        </p>
        <br/>
        <h3>Best in Sports (Posts/ratings of the best moments in sports)</h3>
        <br/>
        <a 
        href="https://github.com/rosenbergmichael/best_in_sports" 
        target="_blank"
        >GitHub</a>|
        <a 
        href="https://www.youtube.com/watch?v=zuNIaw0_vXk&feature=youtu.be" 
        target="_blank"
        >Video Demo</a>
        <p>SPA, Rails API + JS Frontend</p>
        <p>
          <li>Enabled client-server communication via AJAX calls (fetch), using JSON as communication format</li>
          <li>Utilized OOJS (Object Oriented JavaScript) classes to encapsulate related data and functionality</li>
          <li>DOM manipulation via selecting nodes and adding appropriate event listeners</li>
        </p>
        <br/>
        <h3>VinoVault (App for keeping track of favorite wines)</h3>
        <br/>
        <a 
        href="https://github.com/rosenbergmichael/VinoVault" 
        target="_blank"
        >GitHub</a>| 
        <a 
        href="https://www.youtube.com/watch?v=Y2aeQL3zP6c&feature=youtu.be" 
        target="_blank"
        >Video Demo</a>
        <p>Ruby on Rails + HTML/CSS</p>
        <p>
          <li>Implemented MVC framework to structure UI, utilized ActiveRecord for validations/storing user info</li>
          <li>Built forms for CRUD functionality of user input/database, added nested routes (RESTful)</li>
          <li>Engineered authentication system for user login, with OAuth feature for Google login</li>
        </p>
    </div>
  )
}

export default Portfolio
