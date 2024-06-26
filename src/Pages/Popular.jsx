import React from 'react'
import './popular.css'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
const Popular = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="p-2 product">
            <h2>Popular Products</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src="public/1.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title"> Vegetables</h6>
                <div className="d-flex opp"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />


                </div>
                <p className="card-text">Fresh organic villa farm lomon
                  500gm pack</p>
                <a href="#"style={{fontSize:"15px"}}>$120.25</a>

              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card  mx-auto" style={{ width: '18rem' }}>
              <img src="public/9.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">Snacks</h6>
                <div className="d-flex opp"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>
                <p className="card-text">Best snakes with hazel nut pack 200gm</p>
                <a href="#"style={{fontSize:"15px"}}>$145.25</a>

              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src="public/2.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">Fruits</h6>
                <div className="d-flex opp"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />


                </div>
                <p className="card-text">Fresh organic apple 1kg simla
                  marming</p>
                <a href="#"style={{fontSize:"15px"}}>$120.25</a>

              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src="public/17.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title"> Bakery</h6>
                <div className="d-flex opp"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />


                </div>
                <p className="card-text">Delicious white baked fresh bread
                  and toast</p>
                <a href="#"style={{fontSize:"15px"}}>$20.25</a>

              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src="public/11.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">Fruits</h6>
                <div className="d-flex opp"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />


                </div>
                <p className="card-text">Fresh organic apple 1kg simla
                  marming</p>
                <a href="#"style={{fontSize:"15px"}}>$120.25</a>

              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src="public/36.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">Fruits</h6>
                <div className="d-flex opp"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />


                </div>
                <p className="card-text">Fresh organic apple 1kg simla
                  marming</p>
                <a href="#"style={{fontSize:"15px"}}>$120.25</a>

              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src="public/10.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">Fruits</h6>
                <div className="d-flex opp"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />


                </div>
                <p className="card-text">Fresh organic apple 1kg simla
                  marming</p>
                <a href="#"style={{fontSize:"15px"}}>$120.25</a>

              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src="public/17.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">Fruits</h6>
                <div className="d-flex opp"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />


                </div>
                <p className="card-text">Fresh organic apple 1kg simla
                  marming</p>
                <a href="#"style={{fontSize:"15px"}}>$120.25</a>

              </div>
            </div>

          </div>



         
         
          
        </div>
      </div>
    </>
  )
}

export default Popular
