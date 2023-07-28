import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/img043 (1).jpg";
import { pro } from "../../assets/index.js";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              {/* <img src="https://media.licdn.com/dms/image/D4D03AQGBLqQjCqTcLw/profile-displayphoto-shrink_800_800/0/1677220942468?e=1686182400&v=beta&t=Ynz73v7biCfNUb_Ge3fAIpHwYd9CFVS-8n1YYJdOhgQ" alt="Images" /> */}
              <img src={pro} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                {/* Hi Everyone, My name is{" "}
                <span className="different">Biswajit Ghosh</span> and I am currently pursuing B.Tech in Computer Science & Engineering from{" "}
                <span className="different">
                <a href="https://www.heritageit.edu/">
                Heritage Institute Of Technology,Kolkata
                </a>
                  
                </span>
                . I am currently a Full stack Web Developer{" "}
                and exploring Blockchain Development. */}
                I am a motivated Full Stack Developer with experience in MERN
                stack development, Web3, Solidity, and Next.js. As an intern at
                IQApex Labs, I contributed to the development of web
                applications, collaborating with cross-functional teams to
                implement features and optimize performance. I also explored the
                exciting realms of Web3 and Solidity for blockchain development.
                <br />
                I am currently seeking internship opportunities as a blockchain
                or MERN stack developer. With a passion for technology and a
                strong foundation in frontend and backend development, I am
                eager to apply my skills and contribute to innovative projects.
                My proficiency in MERN stack, Web3, Solidity, and Next.js,
                combined with my dedication to continuous learning, positions me
                well to make a positive impact.
              </h4>
              <h4>Things I love apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Books{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Exploring new places{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
