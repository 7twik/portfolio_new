import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3 style={{width:"12vw",height:"8vh"}}>
          {/* <a href="#home" className="link" style={{cursor:"pointer",width:"12vw",height:"8vh"}}> */}
            
              {/* <img
              //  src="https://www.shutterstock.com/image-vector/bg-letter-logo-nice-white-260nw-1785134069.jpg" 
              src="https://media.licdn.com/dms/image/D4D03AQGBLqQjCqTcLw/profile-displayphoto-shrink_800_800/0/1677220942468?e=1686182400&v=beta&t=Ynz73v7biCfNUb_Ge3fAIpHwYd9CFVS-8n1YYJdOhgQ"
               alt="logo" className="linki" /> */}
               <img src="../../assets/pro.jpg" alt="Images" />
            
          {/* </a> */}
        </h3>
        <Navbar />
      </header>
    </>
  );
};
