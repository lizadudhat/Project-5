import React from 'react';
import './foodish.css';
import { FaArrowRight } from "react-icons/fa";

function Foodish() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="plat col-lg-12 mt-5 mb-3 text-center">
            <h2>Latest News</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore lacus vel facilisis.</p>
          </div>
        </div>
    
        <div className="row justify-content-center d-flex">
            <div className="col-sm-12 col-md-6 col-lg-4">
   <div className="card mainjs" style={{width: '25rem'}}>
   
            <div className="menu-contain ms-3">
             
              <h2>Urna pretium elit mauris cursus at elit Vestibulum.</h2>
              <a href="#"style={{fontSize:"15px"}}>Read More</a>
            </div>
            <div className="menu-img">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg" alt="" />
            </div>
</div>

            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
   <div className="card mainjs" style={{width: '25rem'}}>
 
            <div className="menu-contain ms-3">
             
              <h2>Best guide to Shopping for organic ingredients.</h2>
              <a href="#"style={{fontSize:"15px"}}>Read More </a>
            </div>
            <div className="menu-img">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/1.jpg" alt="" />
            </div>
</div>

            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
   <div className="card mainjs" style={{width: '25rem'}}>x
            <div className="menu-contain ms-3">
              <h2>Cursus at elit vestibulum urna pretium elit mauris.</h2>
              <a href="#"style={{fontSize:"15px"}}>Read More</a>
            </div>
            <div className="menu-img">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg" alt="" />
            </div>  
</div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Foodish;
