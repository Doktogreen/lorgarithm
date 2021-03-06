import React from "react";
import carouselImgOne from '../../../../assets/img/carousel-1.jpg';
import carouselImgTwo from '../../../../assets/img/carousel-2.jpg';

export default function CarouselSection(){
    return(
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={carouselImgOne} alt="carousel-one-one" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "1100px"}}>
                            {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Lorgarithm</h5> */}
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">World Leading Tech Talents & IT Solutions Provider.</h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Start Hiring</a>
                            <a href="..." className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Request A Quote</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={carouselImgTwo} alt="carousel-two" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "1100px"}}>
                            {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">See Our Talents Or Contact Us For Project Support.</h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Talent Pool</a>
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