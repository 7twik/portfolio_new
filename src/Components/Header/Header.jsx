import React, { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";
import { pro } from "../../assets/index.js";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  let screenWidth = window.screen.width;
  useEffect(()=>{
    console.log(screenWidth)
  },[])
  return (
    <>
      <header className={"header center " + themename}>
        <h3 style={{width:"12vw",height:"8vh"}}>
           <a href="#home" className="link" > 
              <img src={pro} alt="Images" style={{height:"15vh", width:`${screenWidth}>800 ? "9vw" : ""`,borderRadius:"50%"}} />            
          </a> 
        </h3>
        <Navbar />
      </header>
    </>
  );
};
