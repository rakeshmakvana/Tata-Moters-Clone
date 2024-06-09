import "./Banner.css"
import Banner1 from "./banner-1.webp"
import Banner2 from "./banner-2.webp"
import Banner3 from "./banner-3.webp"

function Banner() {

    return (
        <section className="banner position-relative">
            <div id="carouselExampleFade" className="carousel slide carousel-fade overflow-hidden">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="banner-img">
                            <img src={Banner1} alt="banner-1" />
                        </div>
                        <div className="banner-ct banner-img-overlay">
                            <div className="banner-box p-5">
                                <h3 className="banner-box-h3">
                                    Nexon #DARK
                                </h3>
                                <p className="banner-box-p">
                                    #Dark Rules
                                </p>
                                <button className="banner-box-sp d-flex align-items-center">
                                    Learn more<span className="material-symbols-outlined banner-box-sp ps-1">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner-img">
                            <img src={Banner2} alt="banner-2" />
                        </div>
                        <div className="banner-ct banner-img-overlay">
                            <div className="banner-box p-5">
                                <h3 className="banner-box-h3">
                                    Harrier #DARK
                                </h3>
                                <p className="banner-box-p">
                                    #Dark Rules
                                </p>
                                <button className="banner-box-sp d-flex align-items-center">
                                    Learn more<span className="material-symbols-outlined banner-box-sp ps-1">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner-img">
                            <img src={Banner3} alt="banner-3" />
                        </div>
                        <div className="banner-ct banner-img-overlay">
                            <div className="banner-box p-5">
                                <h3 className="banner-box-h3">
                                    Safari #DARK
                                </h3>
                                <p className="banner-box-p">
                                    #Dark Rules
                                </p>
                                <button className="banner-box-sp d-flex align-items-center">
                                    Learn more<span className="material-symbols-outlined banner-box-sp ps-1">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="material-symbols-outlined banner-cursor-arr" aria-hidden="true">arrow_back</span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="material-symbols-outlined banner-cursor-arr" aria-hidden="true">arrow_forward</span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )

}

export default Banner

