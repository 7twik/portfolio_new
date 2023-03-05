import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./../../assets/biswajit-logo.png";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link" style={{cursor:"pointer"}}>
            <span>
              <img src="https://www.shutterstock.com/image-vector/bg-letter-logo-nice-white-260nw-1785134069.jpg" alt="logo" />
            </span>
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
