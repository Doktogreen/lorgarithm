import React, { Fragment, useState } from "react";
import carouselImgOne from '../../../assets/img/carousel-1.jpg';
// import carouselImgTwo from '../../../assets/img/carousel-2.jpg';
import EncomEarthGlobe from "./encomglobe";
import FloatingTalent from "./floating_talent_slider";
import Type from "./typewriter";
import './index.css'

export function LandingButtons(){
    const [pageX, setPageX] = useState(2);
    const [pageY, setPageY] = useState(3);
    const [pageZ, setPageZ] = useState(4);
    return(
        <Fragment>
            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Hire Tech Talents</a>
            <a href="..." className="btn btn-outline-brown py-md-3 px-md-5 animated slideInRight">Find Tech Solutions</a>
            <a href="quote.html" className="btn btn-orange py-md-3 px-md-5 me-3 animated slideInLeft">Get Employed</a>
        </Fragment>
    )
}
export default function Landing(){
    return(
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={carouselImgOne} alt="carousel-one-one" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "1100px", position: "absolute"}}>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Hire Competent</h1>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn"><Type /></h1>
                            <LandingButtons />
                        </div>
                        <EncomEarthGlobe />
                    </div>
                </div>
                {/* <div className="carousel-item">
                    <img className="w-100" src={carouselImgTwo} alt="carousel-two" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "1100px"}}>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">"Well done, is better than well said."</h1>
                            <LandingButtons />
                        </div>
                    </div>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span> */}
                <FloatingTalent />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span> */}
                <FloatingTalent />
            </button>
        </div>
    // {/* <!-- Navbar & Carousel End --> */}
    )
}