import React from 'react'
import './vage.css'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Vegetable = () => {
  return (
    <>
      <section className='d-none d-sm-none d-md-none d-lg-block'>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 col-lg-6">
              <div className="good d-flex">
                <div className="col-sm-12 col-md-6 col-lg-4 me-3">
                  <div className="card mx-auto" style={{ width: '12rem' }}>
                    <img src="public/2.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body" style={{margin:"10px"}}>
                      <h6 className="card-title">Fruits</h6>
                      <div className="d-flex opp">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                      </div>
                      <p className="card-text">Fresh organic apple 1kg simla
                        marming</p>
                      <a href="#"style={{color:"green"}}>$120.25</a>

                    </div>
                  </div>

                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 me-3">
                  <div className="card mx-auto" style={{ width: '12rem' }}>
                    <img src="public/1.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6 className="card-title"> Vegetables</h6>
                      <div className="d-flex opp">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                      </div>
                      <p className="card-text">Fresh organic villa farm lomon
                        500gm pack</p>
                      <a href="#"style={{color:"green"}}>$120.25</a>

                    </div>
                  </div>

                </div>
                <div className="col-12 col-md-6  col-lg-4 me-3 ">
                  <div className="card mx-auto" style={{ width: '12rem' }}>
                    <img src="public/11.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6 className="card-title"> Snacks</h6>
                      <div className="d-flex opp">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                      </div>
                      <p className="card-text">Sweet crunchy nut mix 250gm
                        pack</p>
                      <a href="#"style={{color:"green"}}>$120.25</a>

                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div className="col-sm-12 col-lg-6 d-sm-none d-lg-block">
              <div className="organic-img d-flex justify-content-center">
                <div className="organic-content">
                  <h5>Organic & Healthy
                    <br></br>
                    Vegetables</h5>
                  <p>25% off</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Vegetable
