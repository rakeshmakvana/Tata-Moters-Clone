import Herrier2 from "./herrier2.jpg"
import Herrier3 from "./herrier3.jpg"
import HerrierYellow from "./herrier-yellow.png"
import HerrierRed from "./herrier-red.png"
import HerrierGrey from "./herrier-grey.png"
import HerrierWhite from "./herrier-white.png"
import { useState } from "react"

const Herrier = () => {

    const [color, setColor] = useState('col-5 p-4 position-relative car-yellow-bg');
    const [image, setImage] = useState(HerrierYellow);
    const [icon1, setIcon1] = useState(<span className="material-symbols-outlined">done</span>);
    const [icon2, setIcon2] = useState();
    const [icon3, setIcon3] = useState();
    const [icon4, setIcon4] = useState();

    const changeyellow = () => {
        setColor('col-5 p-4 position-relative car-yellow-bg');
        setImage(HerrierYellow);
        setIcon1(<span className="material-symbols-outlined">done</span>);
        setIcon2();
        setIcon3();
        setIcon4();
    }

    const changered = () => {
        setColor('col-5 p-4 position-relative car-red-bg');
        setImage(HerrierRed);
        setIcon2(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon3();
        setIcon4();
    }

    const changegrey = () => {
        setColor('col-5 p-4 position-relative car-grey-bg');
        setImage(HerrierGrey);
        setIcon3(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon4();
    }

    const changewhite = () => {
        setColor('col-5 p-4 position-relative car-white-bg');
        setImage(HerrierWhite);
        setIcon4(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
    }

    return (
        <section className="pb-5">
            <div className="container">
                <div className="row flex-wrap">
                    <div className='d-flex flex-wrap'>
                        <div className="col-7 car-ct-bg p-5 d-flex flex-wrap align-items-center justify-content-center">
                            <div>
                                <div className='car-h3 mb-3'>
                                    <h3>Harrier</h3>
                                </div>
                                <div className='car-h6 mb-2'>
                                    <h6>We are Warriors, We are Harriers</h6>
                                </div>
                                <div className='car-p'>
                                    <p>The New Harrier symbolizes the unwavering<br/> spirit of young achievers in its latest avatar </p>
                                </div>
                                <div className='car-btn d-flex flex-wrap'>
                                    <button className='d-flex flex-wrap align-items-center'>
                                        Learn More<span className="material-symbols-outlined ps-1">arrow_forward</span>
                                    </button>
                                    <button className='d-flex flex-wrap align-items-center ps-4'>
                                        Book Now<span className="material-symbols-outlined ps-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={color}>
                            <div className='showicon text-end'>
                                <span class="material-symbols-outlined p-2">
                                    swipe_left
                                </span>
                            </div>
                            <div className='showimg2 py-4'>
                                <img src={image} alt="img" />
                            </div>
                            <div className='showbtn pt-3 d-flex flex-wrap justify-content-center'>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <button className='me-3 yellowbtn' onClick={changeyellow}>{icon1}</button>
                                    <button className='me-3 redbtn' onClick={changered}>{icon2}</button>
                                    <button className='me-3 greybtn' onClick={changegrey}>{icon3}</button>
                                    <button className='me-3 whitebtn' onClick={changewhite}>{icon4}</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <img src={Herrier2} alt="herrier2" className='w-100 h-100' />
                        </div>
                        <div className="col-5">
                            <img src={Herrier3} alt="herrier3" className='w-100 h-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Herrier