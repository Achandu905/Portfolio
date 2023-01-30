import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is chandu</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/chandu-ajmeera-39b737238"> <LinkedInIcon /> </a>
          <a href="ajmeerachandu2001@gmail.com"> <EmailIcon /> </a>
          <a href="https://github.com/Achandu905"> <GithubIcon /> </a>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM,
               BootStrap, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              MySQL,SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;