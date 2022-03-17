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
                    
                <li className="dropdown-toggle menu-item-has-children">
                    <a href="#.">About<i className="ion ion-ios-arrow-down"></i></a>
                    <div className="menu-subs menu-mega menu-column-4">
                        <div className="list-item text-center">
                            <a href="...">
                                <img src="./assets/product-01.jpg" loading="lazy" alt="Product Imag" />
                                <h4 className="title">Product One</h4>
                            </a>
                        </div>
                        <div className="list-item text-center">
                            <a href="...">
                                <img src="./assets/product-02.jpg" loading="lazy" alt="Product Imag" />
                                <h4 className="title">Product Two</h4>
                            </a>
                        </div>
                        <div className="list-item text-center">
                            <a href="...">
                                <img src="./assets/product-03.jpg" loading="lazy" alt="Product Imag" />
                                <h4 className="title">Product Three</h4>
                            </a>
                        </div>
                        <div className="list-item text-center">
                            <a href="...">
                                <img src="./assets/product-04.jpg" loading="lazy" alt="Product Imag" />
                                <h4 className="title">Product Four</h4>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="dropdown-toggle menu-item-has-children">
                    <a href="#.">For Enterprise<i className="ion ion-ios-arrow-down"></i></a>
                    <div className="menu-subs menu-mega menu-column-4">
                        <div className="list-item">
                            <h4 className="title">Coorporate Training</h4>
                            {/* <h6>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book.
                            </h6> */}
                            <h4 className="title">Kid's Fashion</h4>
                            <ul>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                            </ul>
                        </div>
                        <div className="list-item">
                            <h4 className="title">Women's Fashion</h4>
                            <ul>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                            </ul>
                            <h4 className="title">Health & Beauty</h4>
                            <ul>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                            </ul>
                        </div>
                        <div className="list-item">
                            <h4 className="title">Home & Lifestyle</h4>
                            <ul>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                                <li><a href="...">Product List</a></li>
                            </ul>
                        </div>
                        <div className="list-item">
                            <img src="./assets/product-05.jpg" loading="lazy" alt="Product Imag" />
                        </div>
                    </div>
                </li>
                    {/* <div className="nav-item dropdown">
                        <a href="..." className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                        <div className="dropdown-menu m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="detail.html" className="dropdown-item">Blog Detail</a>
                        </div>
                    </div> */}
                    
                    <a href="service.html" className="nav-item nav-link">For Employers</a>
                    <a href="index.html" className="nav-item nav-link">For Tech Talents</a>
                    <li className="dropdown-toggle menu-item-has-children">
                    <a href="#.">Schools <i className="ion ion-ios-arrow-down"></i></a>
                    <div className="menu-subs menu-mega menu-column-4">
                        <div className="list-item text-center">
                            <a href="...">
                                <img src="./assets/product-01.jpg" loading="lazy" alt="Product Imag" />
                                <h4 className="title">Product One</h4>
                            </a>
                        </div>
                        <div className="list-item text-center">
                            <a href="...">
                                <img src="./assets/product-02.jpg" loading="lazy" alt="Product Imag" />
                                <h4 className="title">Product Two</h4>
                            </a>
                        </div>
                        <div className="list-item text-center">
                            <a href="...">
                                <img src="./assets/product-03.jpg" loading="lazy" alt="Product Imag" />
                                <h4 className="title">Product Three</h4>
                            </a>
                        </div>
                        <div className="list-item text-center">
                            <a href="...">
                                <img src="./assets/product-04.jpg" loading="lazy" alt="Product Imag" />
                                <h4 className="title">Product Four</h4>
                            </a>
                        </div>
                    </div>
                </li>
                </div>
                <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton>
                <a href="..." className="btn btn-primary py-2 px-4 ms-3">Login</a>
                <a href="..." className="btn btn-primary py-2 px-4 ms-3">Signup</a>
            </div>
        </nav>
    </div>
    )
}