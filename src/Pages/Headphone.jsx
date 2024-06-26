import React from 'react'
import './headphone.css'
import { RiRedPacketLine } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";






const Headphone = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-3 mt-2 justify-content-center d-flex">
                <div className="main-box">
                    <p className='packing'><RiRedPacketLine /></p>
                    <h5>Product Packing</h5>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-2 justify-content-center d-flex">
                <div className="main-box">
                    <p className='packing'><FaHeadphones /></p>
                    <h5>24X7 Support</h5>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-2 justify-content-center d-flex">
                <div className="main-box">
                    <p className='packing'><FaTruck /></p>
                    <h5>Product Packing</h5>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-2 justify-content-center d-flex">
                <div className="main-box">
                    <p className='packing'><BsCurrencyDollar /></p>
                    <h5>Product Packing</h5>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Headphone
