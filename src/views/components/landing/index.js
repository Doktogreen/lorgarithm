import React, { Fragment, useState } from "react";
import carouselImgOne from '../../../assets/img/carousel-1.jpg';
// import carouselImgTwo from '../../../assets/img/carousel-2.jpg';
import EncomEarthGlobe from "./encomglobe";
import Type from "./typewriter";
import './index.scss'
import AppearingSlider from "./floating_talent_slider/appearingSlider";

export function LandingButtons(){
    const [pageX, setPageX] = useState(2);
    const [pageY, setPageY] = useState(3);
    const [pageZ, setPageZ] = useState(4);
    return(
        <Fragment>
            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Hire Tech Talents</a>
            {/* <a href="..." className="btn btn-outline-brown py-md-3 px-md-5 animated slideInRight">Find Tech Solutions</a> */}
            <a href="quote.html" className="btn btn-orange py-md-3 px-md-5 me-3 animated slideInLeft">Get Employed</a>
        </Fragment>
    )
}
export default function Landing(){
    return(
        <div id="header-carousel" className="" data-bs-ride="">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={carouselImgOne} alt="carousel-one-one" />
                    <div className="w-100 carousel-caption d-flex flex-row align-items-center justify-content-between">
                        <div className="p-5" style={{ textAlign: "left", width: "100%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", position: "absolute"}}>
                            <div>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Hire Competent</h1>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn"><Type /></h1>
                            <LandingButtons />
                            </div>
                            <AppearingSlider />
                        </div>
                        <div className="globe">
                            <EncomEarthGlobe />
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    // {/* <!-- Navbar & Carousel End --> */}
    )
}