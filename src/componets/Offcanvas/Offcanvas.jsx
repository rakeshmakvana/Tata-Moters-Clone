import logoBlack from "./logo-black.png"
import Car1 from "./car-1.png"
import Car2 from "./car-2.png"
import Car3 from "./car-3.png"
import Car4 from "./car-4.png"
import Car5 from "./car-5.png"
import Car6 from "./car-6.png"
import Car7 from "./car-7.png"
import Car8 from "./car-8.png"
import Car9 from "./car-9.png"
import Car10 from "./car-10.png"
import Car11 from "./car-11.png"
import './Offcanvas.css'

const Offcanvas = () => {

    return (
        <div className="offcanvas offcanvas-end w-100 d-flex flex-wrap" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="sidebar p-4 text-start">
                <div className="header-img p-2">
                    <img src={logoBlack} alt="logo-black" />
                </div>
                <div className="sidebar-list p-4">
                    <ul>
                        <a href="#" className="d-flex flex-wrap align-items-center">
                            Sign In<span className="material-symbols-outlined ps-2" aria-hidden="true">arrow_forward</span>
                        </a>
                        <li>
                            Digital Showroom
                        </li>
                        <li>
                            Test Drive
                        </li>
                        <li>
                            Accessories
                        </li>
                        <li className="d-flex flex-wrap align-items-center">
                            Service<span className="material-symbols-outlined ms-5 ps-5" aria-hidden="true">arrow_forward_ios</span>
                        </li>
                        <li>
                            Exchange Car
                        </li>
                        <li>
                            Rewards
                        </li>
                        <li>
                            Account
                        </li>
                        <li>
                            Dealer Locator
                        </li>
                        <li>
                            Sitemap
                        </li>
                        <li className="d-flex flex-wrap align-items-center">
                            About Us<span className="material-symbols-outlined w-50 text-end" aria-hidden="true">arrow_forward_ios</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="contentaria p-4">
                <div className="contant-icon">
                    <button type="button" className="material-symbols-outlined" data-bs-dismiss="offcanvas" aria-label="Close">close</button>
                </div>
                <div className="contant-ct my-5 py-4">
                    <div className="contant-h4 text-center">
                        <h4>Our Models</h4>
                    </div>
                    <div className="contant-p text-center">
                        <p>Drive NEW FOREVER. A whole new range of cars <br /> from Tata Motors.</p>
                    </div>
                    <div className="w-100 d-flex flex-wrap">
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car1} alt="car1" />
                                <h4>Tiago</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car2} alt="car2" />
                                <h4>Tiago.ev</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car3} alt="car3" />
                                <h4>Altroz</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car4} alt="car4" />
                                <h4>Tigor</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car5} alt="car5" />
                                <h4>Tigor.ev</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car6} alt="car6" />
                                <h4>Punch</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car7} alt="car7" />
                                <h4>Punch.ev</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car8} alt="car8" />
                                <h4>Nexon</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car9} alt="car9" />
                                <h4>Nexon.ev</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car10} alt="car10" />
                                <h4>Herrier</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                        <div className="col-4 py-4">
                            <button className="cars-btn">
                                <img src={Car11} alt="car11" />
                                <h4>Safari</h4>
                                <a href="#" className="d-flex flex-wrap align-items-center justify-content-center">
                                    Learn More <span className="material-symbols-outlined ps-1" aria-hidden="true">arrow_forward</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Offcanvas
