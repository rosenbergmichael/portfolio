import './style.css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Projects</h1>
        <p>Calorease</p>
        <p>Calorie counter app</p>
        <p>
          -Rails API + React/Redux Frontend
          -Assembled multiple class and functional components for rendering user data to the DOM
          -Implemented async actions and redux-thunk middleware to send and receive data from server
          -Utilized Redux action creators and reducer to update React components’ state and the UI
        </p>
        <br/>
        <p>Best in Sports</p>
        <p>Posts/ratings of the best moments in sports</p>
        <p>
          -SPA, Rails API + JS Frontend
          -Enabled client-server communication via AJAX calls (fetch), using JSON as communication format
          -Utilized OOJS (Object Oriented JavaScript) classes to encapsulate related data and functionality
          -DOM manipulation via selecting nodes and adding appropriate event listeners
        </p>
        <br/>
        <p>VinoVault</p>
        <p>App for keeping track of favorite wines</p>
        <p>
          -Ruby on Rails + HTML/CSS
          -Implemented MVC framework to structure UI, utilized ActiveRecord for validations/storing user info
          -Built forms for CRUD functionality of user input/database, added nested routes (RESTful)
          -Engineered authentication system for user login, with OAuth feature for Google login
        </p>
    </div>
  )
}

export default Portfolio
