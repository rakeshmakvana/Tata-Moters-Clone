import "./Footer.css"
import FooterLogo from "./footer-logo.png"
import Fcb from "./fb.png"
import Twt from "./tw.png"
import Ins from "./in.png"
import Ytu from "./yt.png"

const Footer = () => {

    return (
        <footer className="footer footer-bg p-5">
            <div className="container">
                <div className="row flex-wrap">
                    <div className="col-6">
                        <div className="footer-img mb-3">
                            <img src={FooterLogo} alt="footerlogo" className="img-fluid" />
                        </div>
                        <div className="footer-span">
                            <span className="d-flex flex-wrap align-items-center">TATA <span className="material-symbols-outlined ps-1">arrow_forward</span></span>
                        </div>
                        <div className="footer-p d-flex flex-wrap align-items-end h-75">
                            <p>Copyright © 2024 TATA Motors. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-p2">
                            <p>Quick Links</p>
                        </div>
                        <div className="footer-nav">
                            <ul className="p-0">
                                <li><a href="#" className="d-flex flex-wrap align-items-center">Contact Us <span className="material-symbols-outlined ps-1">arrow_forward</span></a></li>
                                <li><a href="#" className="d-flex flex-wrap align-items-center">Privacy Policy <span className="material-symbols-outlined ps-1">arrow_forward</span></a></li>
                                <li><a href="#" className="d-flex flex-wrap align-items-center">Terms & Condition <span className="material-symbols-outlined ps-1">arrow_forward</span></a></li>
                                <li><a href="#" className="d-flex flex-wrap align-items-center">TATA.ev <span className="material-symbols-outlined ps-1">arrow_forward</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="footer-p2">
                            <p>Social</p>
                        </div>
                        <div className="footer-nav">
                            <ul className="p-0">
                                <li><a href="#" className="d-flex flex-wrap align-items-center"><img src={Fcb} alt="fc-img" className="img-fluid me-2" style={{ width: 18 }} /> Facebook</a></li>
                                <li><a href="#" className="d-flex flex-wrap align-items-center"><img src={Twt} alt="tw-img" className="img-fluid me-2" style={{ width: 18 }} /> Twitter</a></li>
                                <li><a href="#" className="d-flex flex-wrap align-items-center"><img src={Ins} alt="in-img" className="img-fluid me-2" style={{ width: 18 }} /> Intagram</a></li>
                                <li><a href="#" className="d-flex flex-wrap align-items-center"><img src={Ytu} alt="yt-img" className="img-fluid me-2" style={{ width: 18 }} /> Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer
