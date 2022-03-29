import React from 'react';


export default function AppearingSlider(){
    return(
            <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
            {/* <!--Slides--> */}
            <div className="carousel-inner w-100" role="listbox">
                {/* <!--First slide--> */}
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://res.cloudinary.com/skiltime/image/upload/v1648283562/smile1-removebg-preview_d1ubvr.png"
                    alt="First slide" />
                </div>
                {/* <!--/First slide--> */}
                {/* <!--Second slide--> */}
                <div className="carousel-item">
                <img className="d-block w-100" src="https://res.cloudinary.com/skiltime/image/upload/v1648284229/CFA_AlphaSummit_2021_HP-ForegroundImage-removebg-preview_tzeliy.png"
                    alt="Second slide" />
                </div>
                {/* <!--/Second slide--> */}
                {/* <!--Third slide--> */}
                <div className="carousel-item">
                <img className="d-block w-100" src="https://res.cloudinary.com/skiltime/image/upload/v1648283727/smile6-removebg-preview_wnnlav.png"
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