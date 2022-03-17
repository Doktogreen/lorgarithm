import React, { Fragment } from "react";
import About from "./about";
import Blog from "./blog";
import CarouselSection from "./carousel-section";
import Facts from "./facts-section";
import Features from "./features";
import FullScreenSearch from "./full-scree-search-modal";
// import Globe from "./globe-section";
import Pricing from "./pricing";
import Quotes from "./quotes";
import Services from "./services";
import Team from "./team";
import Testimonial from "./testimonial";
import Vendor from "./vendor";

export default function Home(){
    return(
        <Fragment>
            <CarouselSection />
            <FullScreenSearch />
            <Facts />
            <About />
            <Features />
            <Services />
            <Testimonial />
            <Team />
            <Blog />
            <Vendor />
            
        </Fragment>
    )
}