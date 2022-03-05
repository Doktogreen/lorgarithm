import React, { Fragment } from "react";
import Team from "../home/team";
import Vendor from "../home/vendor";

export default function TeamComponent(){
    return(
        <Fragment>
            {/* <!-- Full Screen Search Start --> */}
            <div class="container-fluid bg-primary py-5 bg-header" style={{marginBottom: "90px"}}>
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Team</h1>
                        <a href="" class="h5 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="" class="h5 text-white">Team</a>
                    </div>
                </div>
            </div>
            
            {/* <!-- Full Screen Search End --> */}
            <Team />
            <Vendor />
        </Fragment>
    )
}