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
                Hi Everyone, My name is{" "}
                <span className="different">Biswajit Ghosh</span> and I am currently pursuing B.Tech in Computer Science & Engineering from{" "}
                {/* <span className="different">
                  {" "}
                  Kolkata,West Bengal (India)
                </span>
                . I am pursuing B.Tech in Computer science And Engineering 
                from{" "} */}
                <span className="different">
                <a href="https://www.heritageit.edu/">
                Heritage Institute Of Technology,Kolkata
                </a>
                  
                </span>
                . I am currently a Full stack Web Developer{" "}
                and exploring Blockchain Development.
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
