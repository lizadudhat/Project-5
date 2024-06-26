import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import './footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <div>
            <div className="container">
                <div className="row mt-5 d-flex align-items-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                            <div className="image">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" />
                            </div>
                            <div className="contents">
                                <p>Carrot is the biggest market of grocery products. Get <br /> your daily needs from our store.</p>
                                <h2>
                                     51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                                </h2>
                                <h3>
                                     example@email.com
                                </h3>
                                <h4>
                                    +91 123 4567890
                                </h4>
                            </div>
                        </div>
                        <div className="Company col-lg-2 col-md-3 col-sm-12 mt-3">
                            <h3>Company</h3>
                            <h2>About Us</h2>
                            <h2>Delivery Information</h2>
                            <h2>Privacy Policy</h2>
                            <h2>Terms & Conditions</h2>
                            <h2>contact Us</h2>
                            <h2>Support Center</h2>
                        </div>
                        <div className="Company col-lg-2 col-md-3 col-sm-12 mt-3">
                            <h3>Category</h3>
                            <h2>Dairy & Bakery</h2>
                            <h2>Fruits & Vegetable</h2>
                            <h2>Snack & Spice</h2>
                            <h2>Juice & Drinks</h2>
                            <h2>Chicken & Meat</h2>
                            <h2>Fast Food</h2>
                        </div>
                        <div className="Subscribe col-lg-4 col-sm-12 mt-3">
                            <h3>Subscribe Our Newsletter</h3>
                            <input type="text" className='form-control' placeholder='search here...' />
                            <div className="image d-flex">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/2.jpg" alt="" />
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/3.jpg" alt="" />
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/5.jpg" alt="" />
                            </div>

                        </div>

                </div>
            </div>
        </div>
    )
}

export default Footer