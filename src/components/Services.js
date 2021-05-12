import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop, faCogs, faMobileAlt, faPeopleArrows} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
       <div className="services">
           <h1 className="py-5">My Services</h1>
               <div className="container">
                   <div className="row">
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"> <FontAwesomeIcon className="icon" icon ={faDesktop} size = "2x"></FontAwesomeIcon></div>
                               <h3>Web Development</h3>
                               <p> helloo heello hello hello hello </p>
                           </div>
                       </div>
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"> <FontAwesomeIcon className="icon" icon ={faMobileAlt} size = "2x"></FontAwesomeIcon></div>
                               <h3>Android App development</h3>
                               <p> helloo heello hello hello hello </p>
                           </div>
                       </div>
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"> <FontAwesomeIcon className="icon" icon ={faCogs} size = "2x"></FontAwesomeIcon></div>
                               <h3>Backend Developement</h3>
                               <p> helloo heello hello hello hello </p>
                           </div>
                       </div>
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"> <FontAwesomeIcon className="icon" icon ={faPeopleArrows} size = "2x"></FontAwesomeIcon></div>
                               <h3>Social Work</h3>
                               <p> helloo heello hello hello hello </p>
                           </div>
                       </div>
                   </div>
               </div>
       </div>
    )
}

export default Services
