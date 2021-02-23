 import './style.css';

const Footer = () => {
  return <footer>
      <a 
        href="https://www.linkedin.com/in/michael-j-rosenberg/" 
        target="_blank"
      >
      <img 
        src={`${process.env.PUBLIC_URL}/linkedin-logo.png`}
        alt="LinkedIn-icon"
      />
      </a>

      <a 
        href="https://github.com/rosenbergmichael" 
        target="_blank"
      >
      <img 
        src={`${process.env.PUBLIC_URL}/github-logo-4.png`}
        alt="GitHub-icon"
      />
      </a>

      <a 
        href="https://michaeljrosenberg.medium.com/" 
        target="_blank"
      >
      <img 
        src={`${process.env.PUBLIC_URL}/Medium-logo.png`}
        alt="Medium-icon"
      />
      </a>

  </footer>
  
}

export default Footer
