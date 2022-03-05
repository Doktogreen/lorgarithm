import React from 'react';

export default function NavBar(){
    return(
        // <!-- Navbar & Carousel Start -->
    <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" className="navbar-brand p-0">
                <h1 className="logo-cover">
                    <b style={{color: "#6223fd"}}>{"<"}</b>
                    <b style={{color: "#cc3366"}}>{"/"}</b>
                    <b style={{color: "orange"}} >{" >"}</b>
                    <h1>Lorgarithm</h1>
                </h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" className="nav-item nav-link">Services</a>
                    <div className="nav-item dropdown">
                        <a href="..." className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                        <div className="dropdown-menu m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="detail.html" className="dropdown-item">Blog Detail</a>
                        </div>
                    </div>
                    <a href="service.html" className="nav-item nav-link">Jobs</a>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton>
                <a href="..." className="btn btn-primary py-2 px-4 ms-3">Login</a>
                <a href="..." className="btn btn-primary py-2 px-4 ms-3">Signup</a>
            </div>
        </nav>
    </div>
    )
}