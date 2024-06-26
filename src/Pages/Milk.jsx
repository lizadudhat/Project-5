import React from 'react'
import './milk.css'

const Milk = () => {
  return (
    <>
      <div className="container">
        <div className="row milk">

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="box">
                        <h5>milk & Milk</h5>
                        <p>(65 items    )</p>
                    </div>
                    <div className="box">
                        <h5>Fresh Meat</h5>
                        <p>(30 items)</p>
                    </div>
                    <div className="box">
                        <h5>Vegetables</h5>
                        <p>(25 items)</p>
                    </div>
                    <div className="box">
                        <h5>Apple & Mango</h5>
                        <p>(45 items)</p>
                    </div>
                    <div className="box">
                        <h5>Strawberry</h5>
                        <p>(68 items)</p>
                    </div>
                    <div className="box">
                        <h5>View More</h5>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="offer">
                        <h3>50% off</h3>
                        <h5>milk</h5>
                        <button className='btn'>Shop Now</button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="offer now">
                        <h3>50% off</h3>
                        <h5>Milk</h5>
                        <button className='btn'>Shop Now</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Milk
