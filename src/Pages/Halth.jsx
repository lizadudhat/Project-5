import React from 'react'
import './halth.css'

const Halth = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-4 mt-2">
                <div className="fresh-img">
                    <img src="public/23.jpeg" alt="" />
                    <div className="fresh-content">
                        <h5>
                        Fresh & healthy 
                        <br></br>
                        Organic Fruits
                        </h5>
                        <p><span>35%</span>
                        <span className='first'>on first order</span>
                        </p>
                        <button className='btn btn-success mb-5'style={{width:"100px",height:"30px"}}>Shop now</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-2">
                <div className="fresh-img">
                    <img src="public/22.jpeg" alt="" />
                    <div className="fresh-content">
                        <h5>
                        Fresh  
                        <br></br>
                        Snacks & Sweets
                        </h5>
                        <p><span>20%</span>
                        <span className='first'>on first order</span>
                        </p>
                        <button className='btn btn-success m-0'style={{width:"100px",height:"30px"}}>Shop now</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-2">
                <div className="fresh-img">
                    <img src="public/21.jpeg" alt="" />
                    <div className="fresh-content">
                        <h5>
                        Healthy  
                        <br></br>
                        Bakery Products
                        </h5>
                        <p><span>30%</span>
                        <span className='first'>on first order</span>
                        </p>
                        <button className='btn btn-success m-0'style={{width:"100px",height:"30px"}}>Shop now</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Halth
