import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1><b><i>Hey there,</i></b></h1>
           <h2>I am</h2>
           <Typed className="typed-text" strings={["Software Developer", "Web Application Developer", "Android Application Developer", "Competitive Coder", "Inquisitive Learner", "CS Engineer"]}
           typeSpeed={40}
           backSpeed={60}
           loop>
           </Typed>
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link>
      </div>
    </div>
  )
}

export default Header;
