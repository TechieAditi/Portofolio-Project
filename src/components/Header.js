import React from 'react';
import Typed from "react-typed";

function Header() {
    return (
       <div className="header-wraper">
       <div className="main-info">
           <h1>hello</h1>
           <Typed className="typed-text" strings={["Software Developer", "Web Application Developer", "Android Application Developer", "Competitive Coder", "Inquisitive Learner", "CS Engineer"]}
           typeSpeed={40}
           backSpeed={60}
           loop>
           </Typed>
           <a href="#" className="btn-main-offer">
               Contact me
           </a>
       </div>
       </div>

    )
}

export default Header
