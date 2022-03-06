import React from "react";
import carouselImgOne from '../../../../assets/img/carousel-1.jpg';
import carouselImgTwo from '../../../../assets/img/carousel-2.jpg'

export default function CarouselSection(){
    return(
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={carouselImgOne} alt="carousel-one" />
                    <div className="carousel-caption d-flex flex-row align-items-center justify-content-between">
                        <div className="p-0" style={{maxWidth: "650px", marginLeft: "9%", textAlign: "left"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="..." className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                        <div className="p-3" style={{maxWidth: "700px"}}>
                            <h5 className="text-white text-right text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <a href="quote.html" className="btn  py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="..." className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                        <div class="MuiBox-root css-137oubi peekaboo"><canvas width="700" height="657" style={{outline: "none", marginTop: "3rem", width: "700px", height: "657.5px"}}></canvas></div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={carouselImgTwo} alt="carousel-two" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="..." className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    // {/* <!-- Navbar & Carousel End --> */}

    )
}