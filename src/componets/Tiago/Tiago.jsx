import './CarsSection.css'
import TiagoBlue from "./tiago-blue.png"
import TiagoRed from "./tiago-red.png"
import TiagoGrey from "./tiago-grey.png"
import TiagoWhite from "./tiago-white.png"
import Tiago2 from "./tiago2.jpg"
import Tiago3 from "./tiago3.jpg"
import { useState } from 'react'

const Tiago = () => {

    const [color, setColor] = useState('col-5 p-4 position-relative car-blue-bg');
    const [image, setImage] = useState(TiagoBlue);
    const [icon1, setIcon1] = useState(<span className="material-symbols-outlined">done</span>);
    const [icon2, setIcon2] = useState();
    const [icon3, setIcon3] = useState();
    const [icon4, setIcon4] = useState();

    const changeblue = () => {
        setColor('col-5 p-4 position-relative car-blue-bg');
        setImage(TiagoBlue);
        setIcon1(<span className="material-symbols-outlined">done</span>);
        setIcon2();
        setIcon3();
        setIcon4();
    }

    const changered = () => {
        setColor('col-5 p-4 position-relative car-red-bg');
        setImage(TiagoRed);
        setIcon2(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon3();
        setIcon4();
    }

    const changegrey = () => {
        setColor('col-5 p-4 position-relative car-grey-bg');
        setImage(TiagoGrey);
        setIcon3(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon4();
    }

    const changewhite = () => {
        setColor('col-5 p-4 position-relative car-white-bg');
        setImage(TiagoWhite);
        setIcon4(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
    }

    return (
        <section className="py-5">
            <div className="container">
                <div className="row flex-wrap">
                    <div className='d-flex flex-wrap'>
                        <div className={color}>
                            <div className='showicon text-start'>
                                <span class="material-symbols-outlined p-2">
                                    swipe_left
                                </span>
                            </div>
                            <div className='showimg1 py-2'>
                                <img src={image} alt="img" />
                            </div>
                            <div className='showbtn pt-3 d-flex flex-wrap justify-content-center'>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <button className='me-3 bluebtn' onClick={changeblue}>{icon1}</button>
                                    <button className='me-3 redbtn' onClick={changered}>{icon2}</button>
                                    <button className='me-3 greybtn' onClick={changegrey}>{icon3}</button>
                                    <button className='me-3 whitebtn' onClick={changewhite}>{icon4}</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 car-ct-bg p-5 d-flex flex-wrap align-items-center justify-content-center">
                            <div>
                                <div className='car-h3 mb-3'>
                                    <h3>Tiago</h3>
                                </div>
                                <div className='car-h6 mb-2'>
                                    <h6>It's Seriously Fun</h6>
                                </div>
                                <div className='car-p'>
                                    <p>Younger than ever. Bolder than ever.<br /> Inspired by the spirited youth, the All-new<br /> Tiago is hard to ignore. Drive around the city<br /> and watch heads turn towards you.</p>
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
                        <div className="col-5">
                            <img src={Tiago2} alt="tiago2" className='w-100 h-100' />
                        </div>
                        <div className="col-7">
                            <img src={Tiago3} alt="tiago3" className='w-100 h-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Tiago
