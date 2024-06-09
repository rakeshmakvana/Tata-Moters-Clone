import "./Header.css"
import logoWhite from "./logo-white.png"
import logoBlack from "./logo-black.png"
import Offcanvas from "../Offcanvas/Offcanvas"
import { useState, useEffect } from "react"

function Header() {

    const [header2, setHeader2] = useState("container-fluid header-bg");
    const [logo2, setLogo2] = useState(logoWhite);
    const [icon2, setIcon2] = useState("col-6 header-icon text-end pe-4");

    const setHeader = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setHeader2("container-fluid header-bg-2")
            setLogo2(logoBlack)
            setIcon2("col-6 header-icon-2 text-end pe-4")
        } else {
            setHeader2(header2)
            setLogo2(logo2)
            setIcon2(icon2)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', setHeader)
    }, [])

    return (
        <header className="header position-relative">
            <div className={header2}>
                <div className="row flex-wrap py-4 align-items-center">
                    <div className="col-6 ps-4 header-img">
                        <img src={logo2} alt="logo-white" />
                    </div>
                    <div className={icon2}>
                        <button className="material-symbols-outlined" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">menu</button>
                        <Offcanvas />
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header
