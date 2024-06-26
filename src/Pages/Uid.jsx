import React from 'react'
import './uid.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";


const Uid = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="usersid col-12">
            <h2>Great Words From People</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div> 

          <div className="main-usersid mt-5 row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="starbox">
                <img src="public/31.jpeg" alt="" className="img-fluid" />
                <div className="starbox-content">
                  <span>Co Founder</span>
                  <h6>Stephen Smith</h6>
                  <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                  <div className="d-flex starsss"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="starbox">
                <img src="public/32.jpeg" alt="" className="img-fluid" />
                <div className="starbox-content">
                  <span>Manager</span>
                  <h6>Lorem Robinson</h6>
                  <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                  <div className="d-flex starsss"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="starbox">
                <img src="public/33.jpeg" alt="" className="img-fluid" />
                <div className="starbox-content">
                  <span>Team Leader</span>
                  <h6>Sadaika Alard</h6>
                  <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                  <div className="d-flex starsss"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Uid
