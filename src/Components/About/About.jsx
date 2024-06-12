import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import Typewriter from "typewriter-effect";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
        <span className="about__name">
          <Typewriter
          options={{
          strings: ["Hello, I am Biswajit Ghosh"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
          </span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/biswajit150803"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:biswajitghosh150803@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/biswajitghosh150803/"
            aria-label="geeksforgeeks"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href="tel:+918902247490"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://linkedin.com/in/biswajit-ghosh-2b0111219"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://leetcode.com/u/biswajit150803/"
            aria-label="leetcode"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://twitter.com/Biswaji02598810"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          
        </div>

        {/* <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1O7O6dgBNriadNFoYRj8kHr6-dyPyoG4n/view?usp=sharing"
            );
          }}
        >
          Resume
        </button> */}
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
