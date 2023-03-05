import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">
              @2023 All Rights Reserved{" "}
              By Biswajit Ghosh
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};
