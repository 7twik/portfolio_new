import React from "react";
import "./Projects.css";
import {chemcon, fruits, golocal, mern_estate} from "../../assets/index.js"
import { bita,stop,terminal } from "../../assets/index.js";
import { youtube } from "../../assets/index.js";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiSolidity,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">

        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={golocal} alt="47BitaPods" />
                </div>
              </div>
              <div className="project_information">
                <h2>GoLocal</h2>
                <p>
                  GoLocal is an ecommerce website for hawkers(vendors) and customers to sell and buy things with decentralized payment integration.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiSolidity />
                </div>
                <div>
                  <a
                    href="https://evendorl-1wnf.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/eVendor3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={fruits}
                    alt="SastaBazar"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Fruit Selling Website</h2>
                <p>
                  This project is built using Next Js and Sanity CLI where users can shop for fruits and add to cart and also payment integration is done using Stripe
                </p>
                <div>
                  <FaReact />
                  <SiMaterialui />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://ecommerce-stripe-six.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/ecommerce_stripe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={youtube}
                    alt="yOutube-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Youtube Clone</h2>
                <p>
                  A youtube clone made using React JS and Rapid API where users can play videos without ads.It is fully mobile responsive.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://biswa-youtube-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/youtube_clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={bita} alt="47BitaPods" />
                </div>
              </div>
              <div className="project_information">
                <h2>47BitaPods</h2>
                <p>
                  47BitaPods is a real estate company website where users can book their coworking spaces from list of available places and time slots.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://47bitapods.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/47BitaPodsv2.0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

           <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={terminal} alt="terminal" />
                </div>
              </div>
              <div className="project_information">
                <h2>Terminal Portfolio</h2>
                <p>
                  A portfolio made using HTML,CSS and Javascript which can be interacted through the terminal by the help of commands listed in the terminal.
                </p>
                <div>
                  <IoLogoJavascript />
                  <DiCss3 />
                  <SiHtml5 />
                </div>
                <div>
                  <a
                    href="https://terminalbiswajitportfolio.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/terminal_protfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={mern_estate} alt="Mern Estate" />
                </div>
              </div>
              <div className="project_information">
                <h2>BiswaEstate</h2>
                <p>
                  BiswaEstate is a real estate company with Google authentication  where users can book esate properties from list of available properties.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://mern-estate-9p6s.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/mern_estate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={chemcon} alt="Mern Estate" />
                </div>
              </div>
              <div className="project_information">
                <h2>Chemcon</h2>
                <p>
                  Chemcon is an official event of Indian Institute Of Chemical Engineers.Here users needed to sign in with their email and get the digital pass for the event.This project was an official project of my college.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiTailwindcss />
                </div>
                <div>
                  <a
                    href="https://chemcon.co.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/chemcon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
          
      
    </>
  );
};
