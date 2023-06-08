import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiTypescript
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
// import {TbBrandCpp} from "react-icons/tb"

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5><a href="https://react.dev/">React</a></h5>
          </div>
          <div>
            <FaNodeJs />
            <h5><a href="https://nodejs.org/en">Nodejs</a></h5>
          </div>
          <div>
            <DiMongodb />
            <h5><a href="https://www.mongodb.com/MongoDb">MongoDb</a></h5>
          </div>

          <div>
            <SiExpress />
            <h5><a href="https://expressjs.com/">Express</a></h5>
          </div>

          <div>
            <SiTypescript />
            <h5><a href="https://www.typescriptlang.org/">TypeScript</a></h5>
          </div>
          <div>
            <BsBootstrap />
            <h5><a href="https://getbootstrap.com/">Bootstrap</a></h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5><a href="https://tailwindcss.com/">Tailwind CSS</a></h5>
          </div>
          {/* <div>
            <TbBrandCpp />
            <h5>C++</h5>
          </div> */}
          <div>
            <VscGithub />
            <h5><a href="https://git-scm.com/Git">Git</a></h5>
          </div>
        </div>
      </div>
    </>
  );
};
