import React from 'react';


export default function AppearingSlider(){
    return(
            <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
            {/* <!--Slides--> */}
            <div className="carousel-inner w-100" role="listbox">
                {/* <!--First slide--> */}
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                    alt="First slide" />
                </div>
                {/* <!--/First slide--> */}
                {/* <!--Second slide--> */}
                <div className="carousel-item">
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                    alt="Second slide" />
                </div>
                {/* <!--/Second slide--> */}
                {/* <!--Third slide--> */}
                <div className="carousel-item">
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                    alt="Third slide" />
                </div>
                {/* <!--/Third slide--> */}
            </div>
            {/* <!--/.Slides--> */}
            {/* <!--Controls--> */}
            {/* <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a> */}
            {/* <!--/.Controls--> */}
            </div>
    )
}